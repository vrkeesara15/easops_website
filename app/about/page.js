export const metadata = {
  title: 'About EasOps'
};

const milestones = [
  {
    year: '2018',
    title: 'EasOps founded',
    description: 'Started as a remote-first DevOps collective helping startups navigate rapid scale.'
  },
  {
    year: '2020',
    title: 'SRE practice launches',
    description: 'Introduced formal SRE engagements, including SLO programmes and on-call readiness.'
  },
  {
    year: '2023',
    title: 'Platform engineering focus',
    description: 'Partnered with enterprises to build reusable internal platforms backed by strong product practices.'
  }
];

export default function AboutPage() {
  return (
    <div className="section">
      <span className="tag">Our story</span>
      <h1>Empowering teams with dependable delivery pipelines</h1>
      <p className="lead">
        EasOps exists to close the gap between ideas and impact. We bring together DevOps, SRE, and platform engineering experts
        who love working side by side with product teams.
      </p>

      <div className="section">
        <h2>Core principles</h2>
        <ul>
          <li>Lead with empathy for developers, operators, and end-users alike.</li>
          <li>Measure everything—outcomes, not just outputs.</li>
          <li>Automate safely and iteratively, never as big bang rewrites.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Milestones</h2>
        <div className="timeline">
          {milestones.map((milestone) => (
            <div className="timeline-item" key={milestone.year}>
              <div className="badge">{milestone.year}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
