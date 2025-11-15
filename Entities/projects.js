export const projects = [
  {
    id: 'ecommerce-automation-platform',
    name: 'E-commerce Automation Platform',
    category: 'AI & Automation',
    description:
      'Designed an end-to-end automation hub that orchestrates product launches, marketing campaigns, and customer outreach for a scaling digital retailer.',
    impact: 'Reduced manual campaign operations by 65% and increased launch velocity across 4 international storefronts.',
    stack: ['React', 'Node.js', 'LangChain', 'Stripe API', 'PostgreSQL'],
    tags: ['Retail', 'Automation', 'AI Workflows'],
    icon: '/icons/feature-lightning.svg',
    thumbnail: '/projects/project-ecommerce.svg',
    overview:
      'Our team combined process mining with LangChain-driven orchestration to automate merchandising workflows, integrate payment events, and surface actionable analytics.',
    highlights: [
      'Unified sales, fulfilment, and marketing data into a real-time command centre',
      'Implemented conversational agents for product onboarding and campaign QA',
      'Integrated revenue and subscription signals to trigger personalised journeys'
    ],
    metrics: [
      { label: 'Manual effort reduced', value: '65%' },
      { label: 'Markets launched in parallel', value: '4' }
    ]
  },
  {
    id: 'supply-chain-analytics-dashboard',
    name: 'Supply Chain Analytics Dashboard',
    category: 'Data Engineering',
    description:
      'Delivered a predictive analytics layer that aggregates telemetry from ERP, logistics partners, and IoT sensors for proactive operations.',
    impact: 'Improved forecast accuracy by 32% and shortened incident response from hours to minutes.',
    stack: ['Python', 'dbt', 'BigQuery', 'Looker Studio', 'LangChain'],
    tags: ['Supply Chain', 'Predictive Analytics'],
    icon: '/icons/feature-precision.svg',
    thumbnail: '/projects/project-supply-chain.svg',
    overview:
      'EasOps implemented streaming pipelines and AI-powered anomaly detection so operators can react to disruptions before they impact fulfillment.',
    highlights: [
      'Built lakehouse architecture with governed semantic layers',
      'Automated demand planning scenarios using probabilistic models',
      'Created a control tower experience with alerting and collaboration hooks'
    ],
    metrics: [
      { label: 'Forecast accuracy lift', value: '32%' },
      { label: 'Response time improvement', value: '4x faster' }
    ]
  },
  {
    id: 'multi-cloud-infrastructure-migration',
    name: 'Multi-Cloud Infrastructure Migration',
    category: 'Cloud & Infrastructure',
    description:
      'Guided a financial services provider through a phased migration to a multi-cloud architecture with automated guardrails.',
    impact: 'Achieved 40% cost optimisation while meeting stringent compliance controls.',
    stack: ['Terraform', 'AWS', 'Azure', 'GCP', 'Kubernetes'],
    tags: ['Financial Services', 'Cloud Migration'],
    icon: '/icons/feature-ai.svg',
    thumbnail: '/projects/project-multi-cloud.svg',
    overview:
      'We developed a blueprint that balanced regional resiliency, policy-as-code, and unified observability for mission-critical workloads.',
    highlights: [
      'Infrastructure as Code landing zones across three hyperscalers',
      'Centralised secrets, identity, and network segmentation policies',
      'Service catalogue to streamline onboarding and compliance reporting'
    ],
    metrics: [
      { label: 'Cost optimisation', value: '40%' },
      { label: 'Regions covered', value: '6' }
    ]
  },
  {
    id: 'real-time-risk-scoring',
    name: 'Real-Time Risk Scoring',
    category: 'AI & Automation',
    description:
      'Implemented a streaming risk engine that evaluates transactions and behavioural telemetry in milliseconds.',
    impact: 'Lowered false positives by 48% while blocking threats within sub-second windows.',
    stack: ['Python', 'Kafka', 'TensorFlow', 'Redis', 'OpenAI'],
    tags: ['Fintech', 'Risk Intelligence'],
    icon: '/icons/feature-lightning.svg',
    thumbnail: '/projects/project-risk-scoring.svg',
    overview:
      'EasOps partnered with fraud analysts to blend rule-based signals with adaptive machine learning, unlocking trusted automation.',
    highlights: [
      'Event-driven pipelines enriched with third-party intelligence',
      'Human-in-the-loop review experience with explanation tracing',
      'Model governance framework covering drift detection and audits'
    ],
    metrics: [
      { label: 'False positive reduction', value: '48%' },
      { label: 'Transactions scored per day', value: '12M+' }
    ]
  },
  {
    id: 'cross-cloud-data-pipeline',
    name: 'Cross-Cloud Data Pipeline',
    category: 'Data Engineering',
    description:
      'Rearchitected data ingestion across marketing, finance, and product teams with cross-cloud replication and governance.',
    impact: 'Enabled self-serve analytics across 15 departments with a single source of truth.',
    stack: ['Snowflake', 'Apache Airflow', 'Fivetran', 'dbt', 'Azure Data Lake'],
    tags: ['Analytics', 'Data Integration'],
    icon: '/icons/feature-precision.svg',
    thumbnail: '/projects/project-data-pipeline.svg',
    overview:
      'We unified fragmented data silos into governed, observable pipelines with dynamic quality checks and reverse ETL activation.',
    highlights: [
      'Automated schema evolution monitoring and alerting',
      'Bi-directional integrations powering marketing and finance systems',
      'Operational playbooks for stewardship and access management'
    ],
    metrics: [
      { label: 'Departments served', value: '15' },
      { label: 'Ingestion latency', value: '<5 minutes' }
    ]
  },
  {
    id: 'ai-fraud-detection-engine',
    name: 'AI Fraud Detection Engine',
    category: 'Custom Development',
    description:
      'Created a bespoke AI platform that detects anomalous behaviours across digital channels using graph and NLP techniques.',
    impact: 'Identified fraud rings 3 weeks earlier on average and saved millions in chargebacks.',
    stack: ['PyTorch', 'Neo4j', 'LangChain', 'Next.js', 'TypeScript'],
    tags: ['Cybersecurity', 'AI Models'],
    icon: '/icons/feature-ai.svg',
    thumbnail: '/projects/project-fraud-detection.svg',
    overview:
      'EasOps combined graph intelligence with language models to surface coordinated attacks, accelerating analyst investigations.',
    highlights: [
      'Entity resolution across millions of customer interactions',
      'Explainable AI dashboards for compliance and audit teams',
      'Continuous training pipeline with automated evaluation suites'
    ],
    metrics: [
      { label: 'Fraud detected earlier', value: '3 weeks' },
      { label: 'Chargeback reduction', value: 'Millions saved' }
    ]
  }
];
