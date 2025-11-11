import { projects } from '../../Entities/projects.js';

export const metadata = {
  title: 'Projects'
};

export default function ProjectsPage() {
  return (
    <div className="section">
      <span className="tag">Case studies</span>
      <h1>Results delivered with EasOps</h1>
      <p className="lead">
        We collaborate with product teams and operators to design resilient systems. Here are a few highlights from recent
        engagements.
      </p>

      <div className="grid" style={{ marginTop: '2rem', gap: '2rem' }}>
        {projects.map((project) => (
          <article className="card" key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <blockquote>
              <p>{project.impact}</p>
            </blockquote>
            <p>
              <strong>Technologies:</strong> {project.stack.join(', ')}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
