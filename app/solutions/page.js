export const metadata = {
  title: 'Solutions'
};

const solutions = [
  {
    name: 'Launch Readiness Accelerator',
    description:
      'Short engagement focused on rapid gap analysis, risk mitigation, and automation to prepare teams for critical launches.',
    phases: ['Discovery workshops', 'Operational readiness scorecard', 'Implementation sprints']
  },
  {
    name: 'Observability Maturity Sprint',
    description:
      'Enable cross-functional visibility with actionable dashboards, runbook automation, and alert hygiene improvements.',
    phases: ['Telemetry audit', 'Experience design', 'Automation delivery']
  },
  {
    name: 'Platform Enablement Programme',
    description:
      'Embed platform ways of working, define product metrics, and establish golden paths that teams love to adopt.',
    phases: ['Product vision & strategy', 'Platform roadmap', 'Enablement and adoption']
  }
];

export default function SolutionsPage() {
  return (
    <div className="section">
      <span className="tag">Engagement models</span>
      <h1>Solutions tailored to your stage of growth</h1>
      <p className="lead">
        Whether you are just getting started or scaling globally, our structured solutions give you clarity, measurable outcomes,
        and knowledge transfer.
      </p>

      <div className="grid grid-3" style={{ marginTop: '2rem' }}>
        {solutions.map((solution) => (
          <article className="card" key={solution.name}>
            <h2>{solution.name}</h2>
            <p>{solution.description}</p>
            <h3>What is included</h3>
            <ul>
              {solution.phases.map((phase) => (
                <li key={phase}>{phase}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
