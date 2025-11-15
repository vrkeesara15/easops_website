import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '../Components/Hero.jsx';
import { SolutionsOverview } from '../Components/SolutionsOverview.jsx';
import { projects } from '../Entities/projects.js';
import { blogPosts } from '../Entities/blogposts.js';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <Hero />
      <SolutionsOverview heading="AI solutions tailored to your operating model" />

      <section className="section" id="projects">
        <div className="section-header">
          <span className="tag">Proven impact</span>
          <h2>From pilots to enterprise scale</h2>
          <p>
            EasOps partners with marketing, operations, and engineering leaders to deliver automation, analytics, and AI program
            mes that move the metrics you care about.
          </p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__icon">
                <Image src={project.icon} alt="" width={36} height={36} />
              </div>
              <div className="project-card__header">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-card__footer">
                <div>
                  <strong>Impact</strong>
                  <p>{project.impact}</p>
                </div>
                <div>
                  <strong>Stack</strong>
                  <p>{project.stack.join(', ')}</p>
                </div>
              </div>
              <Link className="project-card__link" href={`/projects/${project.id}`}>
                Explore case study →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="insights">
        <div className="section-header">
          <span className="tag">Insights</span>
          <h2>Latest thinking from the EasOps AI team</h2>
          <p>Practical playbooks and strategies for intelligent automation, data engineering, and AI governance.</p>
        </div>
        <div className="blog-grid">
          {latestPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <div className="blog-card__meta">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} min read
                </span>
                <Link href={`/blog/${post.slug}`}>Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
