---
type: PostLayout
title: Disaggregated Inference on Apple Silicon: NPU prefill and GPU decode
colors: colors-b
date: '2024-08-25'
excerpt: >-
  How I built an efficient LLM inference engine for Apple Silicon by combining the Neural Engine and GPU, plus all the undocumented challenges I discovered along the way.
featuredImage:
  type: ImageBlock
  url: /images/featured-Image6.jpg
  altText: Post thumbnail image
media:
  type: ImageBlock
  url: /images/post-1.jpg
  altText: altText of the image
  caption: Caption of the image
  elementId: ''
bottomSections:
  - elementId: ''
    type: RecentPostsSection
    colors: colors-f
    variant: variant-d
    subtitle: Recent posts
    showDate: true
    showAuthor: false
    showExcerpt: true
    recentCount: 2
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-56
          - pr-4
          - pl-4
        textAlign: left
    showFeaturedImage: true
    showReadMoreLink: true
  - type: ContactSection
    backgroundSize: full
    title: 'Stay up-to-date with my words ✍️'
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: updatesConsent
          label: Sign me up to recieve my words
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---

# Disaggregated Inference on Apple Silicon: NPU prefill and GPU decode

Running large language models on personal devices is becoming more important as we want better privacy and offline capabilities. Apple Silicon is actually a pretty solid platform for this—it has a unified CPU, GPU, and Neural Engine (ANE) architecture that can handle LLMs pretty well.

But here's the thing: while you can use standard frameworks like PyTorch, you're not really getting the most out of Apple's hardware unless you dive into specialized tools like MLX and Core ML.

## The MLX vs Core ML Trade-off

MLX is great—it's flexible, developer-friendly, and feels a lot like PyTorch. It has this unified memory model that works really well with Apple Silicon, letting you run operations on CPU or GPU without worrying about data transfers. But there's a catch: MLX doesn't support the Apple Neural Engine (ANE).

To actually use the ANE—which is super power-efficient and has high throughput—you need Core ML. But Core ML is way less flexible. It requires models with fixed input shapes, which is a pain. That's where multifunction models come in handy—they let you combine separate fixed-shape functions (like one for prefill, another for decode) into a single package that shares weights, keeping the file size reasonable.

iOS 18 and macOS 15 introduced stateful models, which are a game-changer for managing the key-value (KV) cache. They let the model maintain persistent, updatable buffers during runtime, which is way more efficient.

## The Hidden Challenges Nobody Talks About

So I spent a lot of time trying to get LLMs running smoothly on the ANE, and let me tell you—there are a ton of undocumented gotchas that will drive you crazy. Here's what I learned the hard way:

### Too Many States Will Kill You!

Even though Core ML's state feature makes KV cache handling easier, using it with the ANE is trickier than it sounds. If your model has too many states, it'll just fail to compile for the ANE.

The solution? You need to implement custom Hugging Face cache interfaces (`Cache` and `CacheLayerMixin`) to manage key/value caches internally for all layers as a single concatenated tensor. For Qwen3-0.6B, this custom cache interface results in only two states (key_cache and value_cache) instead of 56 states when each layer-wise cache was treated separately.

Apple's official blog post has an example, but it's outdated and designed for GPU, not ANE. Plus, it conflicts with recent changes in Hugging Face's per-layer cache interface, so you'll need to adjust it for advanced caching mechanisms like sliding window attention.

### Make State Dimension Sizes Powers of Two

Here's another fun one: if any of your states has a dimension (except the first one) that's not a power of 2, you'll get a runtime error. I ran into this with EXAONE-3.5-2.4B-Instruct, which had a state shape of (20, 8, 512, 80)—and 80 is not a power of two.

The fix? Pad the states to (20, 8, 512, 128). To prevent this in the future, your cache interface should internally pad non-first dimensions to the nearest powers of two and only use the unpadded parts.

### Update States with Care

Even models that meet the power-of-two constraint can still fail to compile with a super unhelpful error message. It turns out that adding a tiny constant value right before updating value caches can fix this. Theoretically, zero would be ideal, but PyTorch's JIT tracer optimizes it away. So I use `torch.finfo(torch.float32).smallest_normal`, which gets truncated to zero when cast to float16 by Core ML's optimization. This trick is only needed for value cache updating in the prefill graph.

### Double-check The ANE Delegation

After all these adjustments, your model might finally compile for the ANE. But you still need to verify that operations are actually running on the ANE. XCode's performance report is your friend here—it shows operation-wise device delegation status and performance metrics.

For most models, nearly all operations run on the ANE, with a few exceptions like the token embedding layer (gather operation), the LM head (linear operation), and some minor element-wise operations.

### Don't Let The pow In

Even after everything works, you might find your model generating broken text due to numerical instability. This is usually caused by `pow` operations from `torch.Tensor.pow` used in RMSNorm or LayerNorm layers.

Instead of manually fixing Hugging Face's implementations, I created a custom Model Intermediate Language (MIL) graph pass that rewrites `pow(x, 2)` as `mul(x, x)`. I also added another pass that folds the add operation within RMSNorm into the epsilon parameter of the subsequent rsqrt operation. This fixes the numerical instability.

### Break Down SDPA for Long Sequences

Finally, if you try to compile with longer sequence lengths (1024 or 2048), you'll hit another compilation error. The issue is the memory requirement for scaled_dot_product_attention with long sequences.

The solution? Use the `scaled_dot_product_attention_sliced_q` MIL graph pass (with some modifications). It's a hidden gem in Core ML Tools that slices Q into chunks, making it memory-efficient for long sequences.

## MLX vs. Core ML: When to Use Each

After all this work, is it even worth it? The benchmarks show that each has its strengths:

**Prefill-heavy scenarios (448 input tokens, 64 output tokens):**
- Core ML (ANE) significantly reduces Time To First Token (TTFT)
- MLX (GPU) is faster for Time Per Output Token (TPOT)

**Decode-heavy scenarios (64 input tokens, 448 output tokens):**
- MLX (GPU) consistently outperforms in TPOT
- Core ML (ANE) still helps with TTFT but decode is slower

The tokenizer encoding latency also varies between models, which is another factor to consider.

## Yetter Inference Engine: The Best of Both Worlds

Looking at these results, I had an idea: why not use both? That's the core concept behind the Yetter Inference Engine. We disaggregate the inference process, using each piece of hardware for what it does best.

The prefill stage runs on Core ML (ANE) to take advantage of its high-throughput capacity, and then the decode stage runs on MLX (GPU) to leverage its fast decoding speed. This gives us the best of both worlds.

To make this work with various language models, I built a streamlined conversion tool that can transform any Hugging Face language model into a single, multifunction Core ML package. It can package models as either stateful (for pure ANE inference) or stateless (for disaggregated prefill, where KV cache tensors are treated as outputs).

## The Results

I tested this across multiple models—Qwen3-0.6B, Llama-3.2-1B-Instruct, EXAONE-4.0-1.2B, HyperCLOVAX-SEED-Text-Instruct-1.5B, and kanana-1.5-2.1b-instruct-2505.

The Yetter Inference Engine consistently outperforms both MLX and Core ML in prefill-heavy scenarios. In decode-heavy scenarios, it performs similarly to MLX while significantly beating Core ML. The prefill latency is only slightly higher than Core ML's because Yetter uses stateless prefill models, while Core ML can utilize stateful ones. Decode latencies are nearly identical to MLX's.

## What's Next?

This disaggregated inference approach opens up some exciting possibilities. I'm exploring using different numerical precision levels for prefill and decode stages, which could provide even more performance improvements. Another direction is developing a system that dynamically routes workloads between GPU and ANE based on the specific task and device conditions.

I'm also planning to expand support for more model architectures and eventually open-source the engine to get community feedback and collaboration.

Running LLMs efficiently on Apple Silicon is definitely possible, but it requires understanding the quirks of both MLX and Core ML, and being willing to combine them in creative ways. The Yetter Inference Engine is my attempt to make this easier for everyone.

