import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../Entities/projects.js';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <div className="section projects-page">
      <span className="tag">Case Studies</span>
      <h1>AI solutions delivered with EasOps</h1>
      <p className="lead">
        Explore how EasOps helps teams launch AI pilots, scale automation, and modernise infrastructure—combining strategy,
        engineering, and enablement for measurable results.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-detail-card" key={project.id}>
            <div className="project-detail-card__media">
              <Image src={project.thumbnail} alt={`${project.name} illustration`} width={420} height={260} />
            </div>
            <div className="project-detail-card__body">
              <div className="project-detail-card__header">
                <div className="project-detail-card__icon">
                  <Image src={project.icon} alt="" width={36} height={36} />
                </div>
                <div>
                  <span className="badge">{project.category}</span>
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="project-detail-card__highlights">
                {project.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
              <div className="project-detail-card__meta">
                <div>
                  <strong>Impact</strong>
                  <p>{project.impact}</p>
                </div>
                <div>
                  <strong>Stack</strong>
                  <p>{project.stack.join(', ')}</p>
                </div>
              </div>
              <div className="project-detail-card__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
              <Link className="project-card__link" href={`/projects/${project.id}`}>
                View project details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
