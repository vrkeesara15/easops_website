import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../Entities/blogposts.js';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }
  return {
    title: post.title,
    description: post.excerpt
  };
}

function renderMarkdown(content) {
  return content.split('\n\n').map((block, index) => {
    if (block.startsWith('# ')) {
      return <h1 key={index}>{block.replace('# ', '')}</h1>;
    }
    if (block.startsWith('## ')) {
      return <h2 key={index}>{block.replace('## ', '')}</h2>;
    }
    return <p key={index}>{block}</p>;
  });
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <span className="tag">Blog</span>
      <h1>{post.title}</h1>
      <p>
        <small>
          Published {new Date(post.publishedAt).toLocaleDateString()} · {post.readTime} minute read
        </small>
      </p>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>{renderMarkdown(post.content)}</div>
      <p style={{ marginTop: '3rem' }}>
        <Link href="/blog" style={{ fontWeight: 600, color: '#4f46e5' }}>
          ← Back to blog
        </Link>
      </p>
    </article>
  );
}
