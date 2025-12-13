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
      
      I'm a software engineer specializing in building exceptional digital
      experiences with a focus on AI, ML, and Data Engineering.
      
      With over 11 years of experience, I've worked on a wide range of projects
      from real-time analytics platforms to machine learning systems, helping
      organizations leverage their data to gain insights and build intelligent
      applications.

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
        label: Apache Spark
      - type: Label
        label: Apache Kafka
      - type: Label
        label: Apache Flink
      - type: Label
        label: Apache Iceberg
      - type: Label
        label: TensorFlow
      - type: Label
        label: PyTorch
      - type: Label
        label: AWS
      - type: Label
        label: Kubernetes
      - type: Label
        label: Docker
      - type: Label
        label: TypeScript
      - type: Label
        label: SQL
      - type: Label
        label: Scala
      - type: Label
        label: Java
      - type: Label
        label: MLflow
      - type: Label
        label: Terraform
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
      [thisismyemail.@myemail.me](mailto:thisismyemail.@myemail.me)
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

          * Senior Software Engineer @ Apple, San Francisco, CA
          
          I joined Apple in August 2021 to build a standardized data ingestion framework using Spark, Flink, Beam, and Iceberg, simplifying data workflows across teams. I developed monitoring with Grafana and Prometheus for clear pipeline metrics and led the implementation of a cross-platform catalog that supports Kafka, Hive, and S3. I also integrated DataHub to establish metadata governance, and optimized ML pipelines (XGBoost, SMOTE) with Spark and SageMaker to streamline analytics workloads.

          **Sep 2019 – Aug 2021**

          * Senior Software Engineer @ PayPal, San Francisco, CA
          
          At PayPal, I created a data pipeline to manage event streams in a GCP-based data lake using DataFlow. I introduced schema discovery and management services to maintain consistent data models across multiple business units. I built a Docker + AWS analytics environment for standardized Python/R libraries, and contributed to PayPal's recommendation system by handling both offline model training and real-time serving.

          **Jan 2017 – Sep 2019**

          * Data Engineer @ Nielsen, Chicago, IL
          
          While at Nielsen, I designed a scalable data ingestion platform with NiFi, Kafka, and Spark following a Lambda architecture for batch and streaming workloads. I focused on deduplication and identity resolution using Spark GraphFrames and TF-IDF, merging multi-source records accurately. This supported real-time audience pipelines and Elasticsearch-based targeting. I also implemented ML-Ops frameworks to support model training and deployment.
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        subtitle: 'Education:'
        text: |-
          **Jan 2021 – May 2023**

          * Master of Science in Analytics
          * Major in Analytics
          * Georgia Institute of Technology

          **Aug 2012 – Jul 2014**

          * Master of Science in Computer Science & Engineering
          * GPA: 4.00
          * Auburn University

          **Aug 2008 – May 2012**

          * Bachelor of Science in Electrical & Computer Engineering
          * GPA: 3.70
          * Auburn University
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
