import { Hero } from '../Components/Hero.jsx';
import { ServicesSection } from '../Components/ServicesSection.jsx';
import { projects } from '../Entities/projects.js';
import { blogPosts } from '../Entities/blogposts.js';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />

      <section className="section">
        <div className="section-header">
          <span className="tag">Selected Projects</span>
          <h2>Outcomes delivered with our partners</h2>
          <p>Each engagement focuses on measurable impact—speed, reliability, and confidence.</p>
        </div>
        <div className="grid grid-3">
          {projects.map((project) => (
            <article className="card" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Impact:</strong> {project.impact}
              </p>
              <p>
                <strong>Stack:</strong> {project.stack.join(', ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="tag">Insights</span>
          <h2>Latest thinking from the EasOps team</h2>
          <p>We share approaches that help teams scale delivery while keeping systems reliable.</p>
        </div>
        <div className="grid grid-3">
          {blogPosts.map((post) => (
            <article className="card" key={post.slug}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <p>
                <small>
                  {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} min read
                </small>
              </p>
              <a className="button" href={`/blog/${post.slug}`} style={{ marginTop: '1rem' }}>
                Read article
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
