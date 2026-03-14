---
type: PostLayout
title: 'Mastering Tensor Operations: Broadcasting, Vectorization, and Thinking in Tensors'
colors: colors-b
date: '2025-03-01'
excerpt: >-
  From loops to lightning-fast parallel operations — a complete guide to tensor programming covering broadcasting, vectorization, and GPU-accelerated computation.
featuredImage:
  type: ImageBlock
  url: /images/post-2.jpg
  altText: Post thumbnail image
media:
  type: ImageBlock
  url: /images/post-2.jpg
  altText: Tensor Operations Guide
  caption: ''
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
---

**From loops to lightning-fast parallel operations: Everything you need to know about tensor programming**

---

## Table of Contents

1. [Introduction](#introduction)
2. [Why Tensor Thinking Matters](#why-tensor-thinking-matters)
3. [The Fundamentals of Broadcasting](#the-fundamentals-of-broadcasting)
   - [Broadcasting Rules](#broadcasting-rules)
   - [Visual Guide to Broadcasting](#visual-guide-to-broadcasting)
   - [Common Broadcasting Patterns](#common-broadcasting-patterns)
4. [The Tensor Puzzles: A Learning Framework](#the-tensor-puzzles-a-learning-framework)
5. [Puzzle Solutions Deep Dive](#puzzle-solutions-deep-dive)
   - [Basic Operations (Puzzles 1-3)](#basic-operations-puzzles-1-3)
   - [Matrix Construction (Puzzles 4-6)](#matrix-construction-puzzles-4-6)
   - [Cumulative Operations (Puzzles 7-8)](#cumulative-operations-puzzles-7-8)
   - [Array Manipulation (Puzzles 9-13)](#array-manipulation-puzzles-9-13)
   - [Advanced Operations (Puzzles 14-21)](#advanced-operations-puzzles-14-21)
6. [Mental Models for Tensor Operations](#mental-models-for-tensor-operations)
7. [Einstein Summation (einsum)](#einstein-summation-einsum)
8. [Performance Considerations](#performance-considerations)
9. [Real-World Applications](#real-world-applications)
10. [Conclusion](#conclusion)
11. [References](#references)

---

## Introduction

If you've worked with PyTorch, NumPy, TensorFlow, or JAX, you've encountered the challenge of thinking in tensors. The shift from iterative, loop-based programming to vectorized tensor operations is one of the most important mental transitions for machine learning engineers.

This guide synthesizes lessons from Sasha Rush's legendary [Tensor Puzzles](https://github.com/srush/Tensor-Puzzles)—a collection of 21 challenges designed to build your tensor intuition—along with detailed walkthroughs and optimizations. By the end, you'll have internalized the patterns that make tensor programming feel natural.

> **The Core Insight**: Every loop over indices can potentially be replaced by a tensor operation. The key is learning to see the pattern.

---

## Why Tensor Thinking Matters

### The Performance Gap

Consider summing all elements of a 10 million element array:

```python
import numpy as np
import time

arr = np.random.randn(10_000_000)

# Loop approach
start = time.time()
total = 0
for x in arr:
    total += x
loop_time = time.time() - start

# Vectorized approach
start = time.time()
total = np.sum(arr)
vec_time = time.time() - start

print(f"Loop: {loop_time:.4f}s")
print(f"Vectorized: {vec_time:.4f}s")
print(f"Speedup: {loop_time/vec_time:.1f}x")
```

**Typical output:**
```
Loop: 2.1340s
Vectorized: 0.0089s
Speedup: 240x
```

The 240x speedup comes from:
1. **C-level loops**: NumPy operations run in optimized C code
2. **SIMD instructions**: Modern CPUs process multiple values per instruction
3. **Cache efficiency**: Contiguous memory access patterns
4. **Reduced Python overhead**: No interpreter involvement per element

### Beyond Performance

Tensor operations also lead to:
- **Cleaner code**: Express complex operations in single lines
- **Fewer bugs**: No off-by-one errors in index calculations
- **GPU compatibility**: Operations translate directly to CUDA/Metal
- **Automatic differentiation**: Frameworks can compute gradients automatically

---

## The Fundamentals of Broadcasting

Broadcasting is the mechanism that allows operations between arrays of different shapes. Understanding it deeply is essential for tensor mastery.

### Broadcasting Rules

NumPy (and PyTorch, JAX, etc.) compare array shapes element-wise, starting from the **trailing dimensions** (rightmost):

1. **Dimensions are compatible if:**
   - They are equal, OR
   - One of them is 1

2. **Missing dimensions** are treated as size 1

3. **The result shape** is the maximum size along each dimension

### Visual Guide to Broadcasting

```
Scalar and Array:
    A: shape (3,)     →  [a₀, a₁, a₂]
    B: shape ()       →   b
    ─────────────────────────────────
    Result: shape (3) →  [a₀+b, a₁+b, a₂+b]


Column and Row:
    A: shape (3, 1)   →  [[a₀],     B: shape (1, 4)   →  [[b₀, b₁, b₂, b₃]]
                          [a₁],
                          [a₂]]
    ────────────────────────────────────────────────────────────────────
    Result: shape (3, 4) →  [[a₀+b₀, a₀+b₁, a₀+b₂, a₀+b₃],
                             [a₁+b₀, a₁+b₁, a₁+b₂, a₁+b₃],
                             [a₂+b₀, a₂+b₁, a₂+b₂, a₂+b₃]]


3D Broadcasting:
    A: shape (2, 3, 1)
    B: shape (   1, 4)
    ─────────────────────
    Result: shape (2, 3, 4)
```

### The `None` (or `np.newaxis`) Trick

The most powerful broadcasting technique is inserting dimensions using `None`:

```python
import numpy as np

a = np.array([1, 2, 3])  # shape: (3,)

# Insert dimension at position 0: column vector
a[:, None]  # shape: (3, 1)
# Result: [[1],
#          [2],
#          [3]]

# Insert dimension at position 1: row vector (2D)
a[None, :]  # shape: (1, 3)
# Result: [[1, 2, 3]]

# Outer product via broadcasting
a[:, None] * a[None, :]  # shape: (3, 3)
# Result: [[1, 2, 3],
#          [2, 4, 6],
#          [3, 6, 9]]
```

### Common Broadcasting Patterns

| Pattern | Code | Use Case |
|---------|------|----------|
| Scalar broadcast | `arr + 5` | Shift all values |
| Row broadcast | `matrix + row_vec` | Add same value to each row |
| Column broadcast | `matrix + col_vec[:, None]` | Add same value to each column |
| Outer operation | `a[:, None] * b[None, :]` | All pairs of elements |
| Batch operation | `batch[:, None, :] @ weights` | Same operation on multiple inputs |

---

## The Tensor Puzzles: A Learning Framework

[Tensor Puzzles](https://github.com/srush/Tensor-Puzzles) by Sasha Rush provides 21 progressively challenging problems that build tensor intuition. The rules are deliberately restrictive:

### The Rules

1. **Each puzzle must be solved in 1 line** (<80 characters)
2. **Allowed operations:**
   - `@` (matrix multiplication)
   - Arithmetic: `+`, `-`, `*`, `/`, `%`, `//`
   - Comparisons: `>`, `<`, `==`, `<=`, `>=`
   - `.shape` property
   - Any indexing: `a[:j]`, `a[:, None]`, `a[arange(10)]`
   - Previously solved puzzle functions

3. **NOT allowed:**
   - `view`, `sum`, `take`, `squeeze`, `tensor`
   - Any other built-in functions

### The Two Starter Functions

```python
def arange(i: int):
    """Use this function to replace a for-loop."""
    return torch.tensor(range(i))

def where(q, a, b):
    """Use this function to replace an if-statement."""
    return (q * a) + (~q) * b
```

These two primitives, combined with broadcasting, are sufficient to implement all 21 puzzles.

---

## Puzzle Solutions Deep Dive

Let's walk through each puzzle, understanding the naive approach, the optimized solution, and the key insights.

### Basic Operations (Puzzles 1-3)

#### Puzzle 1: `ones` - Create a vector of all ones

**Specification:**
```python
def ones_spec(out):
    for i in range(len(out)):
        out[i] = 1
```

**Naive thinking**: "I need to create an array and fill it with 1s"

**Tensor insight**: `arange(i)` gives us the right shape. Multiplying by 0 and adding 1 converts any values to 1.

**Solutions:**

```python
# Arithmetic approach (Shashank's solution - 20 chars)
def ones(i):
    return arange(i) * 0 + 1

# Logical approach (Sasha's solution - 34 chars)
def ones(i):
    return where(arange(i) > -1, 1, 1)
```

**Key insight**: When you need a specific shape filled with a constant, start with `arange` for the shape, then transform the values.

---

#### Puzzle 2: `sum` - Sum all elements of a vector

**Specification:**
```python
def sum_spec(a, out):
    out[0] = 0
    for i in range(len(a)):
        out[0] += a[i]
```

**Tensor insight**: Dot product with a ones vector is equivalent to summing.

$$\mathbf{a} 