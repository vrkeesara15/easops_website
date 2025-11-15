const solutions = [
  {
    id: 'ai-automation-workflows',
    title: 'AI & Automation Workflows',
    description:
      'Design adaptive workflows that combine process mining, intelligent document processing, and human-in-the-loop orchestration using Python, TensorFlow, OpenAI, LangChain, and Zapier.',
    items: [
      'Process Mining & Analysis',
      'Intelligent Document Processing',
      'Workflow Automation',
      'Predictive Analytics',
      'Custom AI Models'
    ]
  },
  {
    id: 'data-engineering-integrations',
    title: 'Data Engineering & Integrations',
    description:
      'Modernise data ecosystems with governed pipelines, real-time ingestion, and analytics platforms powered by BigQuery, Snowflake, Apache Airflow, and dbt.',
    items: [
      'Data Lakes & Warehouses',
      'Real-Time Data Pipelines',
      'API & ETL Integrations',
      'Data Quality & Governance'
    ]
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    description:
      'Optimise and secure multi-cloud estates with automation, IaC, and resilience practices across AWS, Azure, GCP, Terraform, and Kubernetes.',
    items: [
      'Cloud Migration & Optimization',
      'Multi-Cloud Strategy',
      'Security & Compliance',
      'Infrastructure as Code'
    ]
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description:
      'Ship bespoke AI products, portals, and digital experiences using Next.js, React, and Node.js to unlock new customer value.',
    items: ['Bespoke AI Products', 'Web & Mobile Apps', 'Workflow Portals']
  }
];

export function SolutionsOverview({ heading = 'Solutions designed for intelligent operations', intro }) {
  return (
    <section className="section" id="solutions">
      <div className="section-header">
        <span className="tag">What we deliver</span>
        <h2>{heading}</h2>
        {intro ? (
          <p>{intro}</p>
        ) : (
          <p>
            From discovery workshops to scaled rollouts, EasOps blends AI, automation, and cloud engineering to modernise the way
            teams work.
          </p>
        )}
      </div>
      <div className="solutions-grid">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.id} id={solution.id}>
            <div className="solution-card__header">
              <div className="solution-card__accent" />
              <h3>{solution.title}</h3>
            </div>
            <p>{solution.description}</p>
            <ul>
              {solution.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export const solutionsList = solutions;
