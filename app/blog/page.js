import Link from 'next/link';
import { blogPosts } from '../../Entities/blogposts.js';

export const metadata = {
  title: 'Blog'
};

export default function BlogPage() {
  return (
    <div className="section">
      <span className="tag">Insights</span>
      <h1>Thinking from the EasOps team</h1>
      <p className="lead">Practical guides, architecture notes, and learnings from our work with high-growth teams.</p>

      <div className="grid" style={{ marginTop: '2rem', gap: '2rem' }}>
        {blogPosts.map((post) => (
          <article className="card" key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <p>
              <small>
                Published {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} minute read
              </small>
            </p>
            <Link className="button" href={`/blog/${post.slug}`}>
              Read article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
