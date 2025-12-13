---
type: PageLayout
title: About
colors: colors-b
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    text: >+
      # Gautam Dudeja

      I'm a Senior Software/Data Engineer at Apple, specializing in building
      scalable data platforms, AI systems, and machine learning infrastructure.

      With over 13 years of experience, I've worked on petabyte-scale data systems,
      real-time ML pipelines, and distributed AI platforms. I'm passionate about
      leveraging cutting-edge technologies like Ray, MLX, and LangChain to build
      intelligent systems that process massive datasets and enable autonomous agents.

    media:
      type: ImageBlock
      url: /images/about.jpg
      altText: Hero image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-16
          - pb-12
          - pl-4
          - pr-4
        textAlign: left
    type: HeroSection
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: MediaGallerySection
    colors: colors-f
    subtitle: 'I worked with these folks:'
    images:
      - type: ImageBlock
        url: /images/logo1.svg
        altText: Logo one
        caption: Logo one
      - type: ImageBlock
        url: /images/logo2.svg
        altText: Logo two
        caption: Logo two
      - type: ImageBlock
        url: /images/logo3.svg
        altText: Logo three
        caption: Logo three
      - type: ImageBlock
        url: /images/logo4.svg
        altText: Logo four
        caption: Logo four
      - type: ImageBlock
        url: /images/logo5.svg
        altText: Logo five
        caption: Logo five
    spacing: 3
    columns: 5
    aspectRatio: auto
    showCaption: false
    enableHover: false
    styles:
      self:
        width: wide
        height: auto
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    subtitle: 'You can find me here:'
    colors: colors-f
    items:
      - type: FeaturedItem
        actions:
          - type: Link
            label: GitHub
            url: 'https://github.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Twitter
            url: 'https://twitter.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: LinkedIn
            url: 'https://www.linkedin.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: CodePen
            url: 'https://codepen.io/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Discord
            url: 'https://discord.com/'
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        actions:
          - type: Link
            label: Instagram
            url: 'https://www.instagram.com/'
        styles:
          self:
            textAlign: left
    columns: 3
    spacingX: 120
    spacingY: 16
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: LabelsSection
    colors: colors-f
    subtitle: 'Skills:'
    items:
      - type: Label
        label: Python
      - type: Label
        label: Java
      - type: Label
        label: Scala
      - type: Label
        label: SQL
      - type: Label
        label: R
      - type: Label
        label: Apache Spark
      - type: Label
        label: Apache Flink
      - type: Label
        label: Apache Kafka
      - type: Label
        label: Ray
      - type: Label
        label: Apache Iceberg
      - type: Label
        label: PyTorch
      - type: Label
        label: MLX
      - type: Label
        label: LangChain
      - type: Label
        label: XGBoost
      - type: Label
        label: scikit-learn
      - type: Label
        label: AWS
      - type: Label
        label: GCP
      - type: Label
        label: Kubernetes
      - type: Label
        label: Docker
      - type: Label
        label: Airflow
      - type: Label
        label: DataHub
      - type: Label
        label: Elasticsearch
      - type: Label
        label: Presto
      - type: Label
        label: Druid
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    variant: variant-a
    subtitle: 'Contact:'
    colors: colors-f
    text: |
      [dudejagautam.@gmail.com](mailto:dudejagautam.@gmail.com)
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: FeaturedItemsSection
    colors: colors-f
    items:
      - type: FeaturedItem
        subtitle: 'Experience:'
        text: |-
          **Aug 2021 – Present**

          * Senior Software/Data Engineer @ Apple, San Francisco, CA

          Built a self-serve data ingestion and analytics platform using Apache Spark, Flink, and Iceberg on Kubernetes, processing petabyte-scale streaming and batch datasets for Apple Media and Apple Pay fraud systems. Developed end-to-end RTC reporting pipelines for Apple TV, Apple Music, and FaceTime; implemented Flink-based aggregation and sessionization to compute latency, reliability, and QoE metrics supporting ML-driven performance monitoring, RCA, and anomaly detection. Designed real-time ML pipelines for Apple Pay Fraud, enabling low-latency feature engineering, online inference, and anomaly detection over high-throughput transactional streams. Implemented unified observability, analytics, and metadata governance by building custom Flink/Spark connectors for Splunk, Solr, and Druid; integrated DataHub with Kafka, Hive, S3, and Elasticsearch for lineage, discovery, and automated data quality checks. Architected a large-scale hyper-knowledge graph integrating structured and unstructured data from codebases, documentation, logs, and metrics using distributed Spark and Ray ETL workflows. Engineered multi-agent AI systems using LangChain, LangGraph, and Google ADK; deployed distributed inference through Ray Serve on multi-node Apple Silicon clusters leveraging MLX and PyTorch. Implemented distributed reinforcement learning pipelines (PPO/GRPO) in Ray RLlib and custom trainers to train Agent R1-style reasoning agents; fine-tuned Qwen/GPT-OSS models with LoRA/QLoRA for domain-specific tasks. Developed fully sharded training and inference workflows using FSDP, MLX-Sharding, and Ray to parallelize large-model training on Apple Silicon clusters; optimized prefill/decoder throughput for high-volume data labeling and generation workloads. Built internal MCP-compatible agents and autonomous data tools enabling SQL querying, vector search, analytics generation, and task orchestration for enterprise AI assistants.

          **Sep 2019 – Aug 2021**

          * Senior Software Engineer - Data Platform @ PayPal, San Francisco, CA

          Designed and implemented data transfer pipelines to ingest event streams from PayPal systems into the central data lake using Google Cloud Dataflow, processing billions of events daily with fault tolerance and exactly-once semantics. Built schema discovery and management platform for data sources across PayPal business units, establishing standardized data models and governance processes for the enterprise data lake. Created analytics environment on Docker and AWS with standardized Python and R dependencies; developed core libraries used by data science and analytics teams for data processing and analysis. Developed recommendation system infrastructure supporting both offline model training and online serving; implemented data pipelines that power content discovery across PayPal applications. Designed MOLAP cubes using BigQuery and star schema for analytical workloads; created Looker dashboards for business intelligence and operational monitoring. Optimized MDX queries and implemented performance tuning for large-scale reporting systems, reducing query latency and improving dashboard responsiveness.

          **Jan 2014 – Sep 2019**

          * Data Engineer @ Nielsen, Chicago, IL

          Designed distributed, fault-tolerant data ingestion platform for batch and stream processing following lambda architecture principles, onboarding billions of historical events and handling real-time data streams for Nielsen's customer data platform. Implemented data hygiene, standardization, and validation pipelines processing large-scale customer data from multiple sources, ensuring data quality and consistency across the platform. Developed deduplication and identity resolution system using Spark GraphFrames and TF-IDF algorithms to create unified customer profiles from disparate data sources, generating 360-degree customer views. Built event stream and audience stream pipelines using Apache Nifi, Kafka, and Spark Streaming to enable real-time data processing and audience targeting for campaign execution across SMS, email, and direct mail channels. Designed Elasticsearch indexes and search infrastructure enabling clients to create targeted audience queries with sub-second latency; optimized index design and query patterns for high-throughput workloads. Implemented statistical profiling for outlier detection and data imputation to address missing attributes in customer datasets, improving overall data completeness and quality. Established ML-Ops infrastructure to support machine learning pipelines, enabling deployment of model artifacts to production with automated testing and monitoring. Generated identity graphs from standardized customer data for cross-source identity resolution, utilizing HBase and Cassandra for distributed storage and retrieval at scale.
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        subtitle: 'Education:'
        text: |-
          **Jan 2020 – May 2023**

          * Master of Science in Data Science
          * GPA: 3.9
          * Georgia Institute of Technology, Atlanta, GA

          **Aug 2012 – July 2014**

          * Master of Science in Computer Science and Computer Engineering
          * GPA: 4.00
          * Georgia Institute of Technology, Atlanta, GA

          **Aug 2008 – May 2012**

          * Bachelor of Science in Electrical and Computer Engineering
          * GPA: 3.70
          * Auburn University, Auburn, AL
        styles:
          self:
            textAlign: left
    columns: 2
    spacingX: 60
    spacingY: 60
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-8
          - pb-8
          - pl-4
          - pr-4
        textAlign: left
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: TextSection
    variant: variant-a
    subtitle: 'Publications:'
    colors: colors-f
    text: |
      **Statistical Guarantees for Consensus Clustering**

      International Conference on Learning Representations (ICLR), 2023

      Z. Zhou, G. Dudeja, A. A. Amini

      ---

      **Towards Thermal-Aware Hadoop Clusters**

      Future Generation Computer Systems, Vol. 88, pp. 40-54, 2018

      Y. Zhou, S. Taneja, G. Dudeja, X. Qin, J. Zhang, M. Jiang, M. I. Alghamdi

      ---

      **Towards Thermal-Efficient Hadoop Clusters through Scheduling**

      IEEE International Conference on Internet of Things (iThings), GreenCom, CPSCom, and SmartData, 2017

      Y. Zhou, M. Alghamdi, G. Dudeja, S. Taneja, X. Qin
  - type: DividerSection
    styles:
      self:
        width: wide
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        borderWidth: 1
        borderStyle: solid
  - type: ContactSection
    backgroundSize: full
    title: "Let’s talk... \U0001F4AC"
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
        - name: message
          label: Message
          hideLabel: true
          placeholder: Tell me about your project
          isRequired: true
          width: full
          type: TextareaFormControl
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
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
