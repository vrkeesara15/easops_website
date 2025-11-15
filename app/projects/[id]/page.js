import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../../../Entities/projects.js';

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.id === params.id);
  if (!project) {
    return {};
  }

  return {
    title: `${project.name} | Projects`,
    description: project.description
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="section project-detail">
      <span className="tag">{project.category}</span>
      <h1>{project.name}</h1>
      <p className="lead">{project.overview}</p>

      <div className="project-detail__hero">
        <Image src={project.thumbnail} alt={`${project.name} illustration`} width={960} height={520} priority />
      </div>

      <div className="project-detail__content">
        <section>
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Impact</h2>
          <p>{project.impact}</p>
        </section>
        <section>
          <h2>Tech Stack</h2>
          <p>{project.stack.join(', ')}</p>
        </section>
      </div>

      <div className="project-detail__metrics">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
