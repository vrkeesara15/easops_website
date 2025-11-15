import { notFound } from 'next/navigation';
import { blogPosts } from '../../../Entities/blogposts.js';
import { MarkdownRenderer } from '../../../Components/MarkdownRenderer.jsx';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section blog-post">
      <span className="tag">{new Date(post.publishedAt).toLocaleDateString()}</span>
      <h1>{post.title}</h1>
      <p className="blog-post__meta">{post.readTime} min read · {post.excerpt}</p>
      <div className="blog-post__content">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}
