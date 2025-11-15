'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

export function BlogLanding({ posts }) {
  const [query, setQuery] = useState('');
  const [featuredPost, ...rest] = posts;

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return rest;
    }

    return rest.filter((post) => {
      const haystack = `${post.title} ${post.excerpt}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query, rest]);

  return (
    <div className="section blog-page">
      <span className="tag">Insights</span>
      <h1>Ideas, frameworks, and field notes</h1>
      <p className="lead">
        Stories from AI, automation, and data transformation programmes designed and delivered by EasOps.
      </p>

      <div className="blog-search">
        <label htmlFor="blog-search-input">Search the blog</label>
        <input
          id="blog-search-input"
          type="search"
          placeholder="Search topics, e.g. automation, data, cloud..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <section className="featured-post">
        <span className="badge">Featured</span>
        <h2>{featuredPost.title}</h2>
        <p>{featuredPost.excerpt}</p>
        <div className="blog-card__meta">
          <span>
            {new Date(featuredPost.publishedAt).toLocaleDateString()} · {featuredPost.readTime} min read
          </span>
          <Link href={`/blog/${featuredPost.slug}`}>Read article →</Link>
        </div>
      </section>

      <section className="latest-posts">
        <h2>Latest posts</h2>
        <div className="blog-grid">
          {filteredPosts.map((post) => (
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
          {filteredPosts.length === 0 && <p>No posts match that topic yet. Try another search.</p>}
        </div>
      </section>
    </div>
  );
}
