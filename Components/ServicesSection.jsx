const services = [
  {
    name: 'Platform Engineering',
    description:
      'We co-create golden paths, developer platforms, and self-service infrastructure to speed up delivery and reduce toil.',
    outcomes: ['Developer experience audits', 'Internal platform roadmaps', 'Golden path implementation']
  },
  {
    name: 'Cloud Foundations',
    description:
      'Hardened, automated cloud landing zones that prioritise reliability, cost transparency, and compliance from day one.',
    outcomes: ['Landing zone design', 'Infrastructure as Code', 'Cost observability']
  },
  {
    name: 'SRE & Observability',
    description:
      'Define SLOs, implement actionable observability, and embed incident response practices tailored to your organisation.',
    outcomes: ['SLO programme design', 'Telemetry pipelines', 'Incident automation']
  }
];

export function ServicesSection() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="tag">What we do</span>
        <h2>Opinionated services for resilient delivery</h2>
        <p>
          EasOps blends DevOps, SRE, and platform engineering expertise to unlock continuous delivery without compromising
          governance or security.
        </p>
      </div>
      <div className="grid grid-3">
        {services.map((service) => (
          <article className="card" key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
