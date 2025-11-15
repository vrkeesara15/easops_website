import Link from 'next/link';
import type { Post } from '@/lib/types';

export function PostCard({ post }: { post: Post }) {
  const formatted = new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return (
    <article className="card space-y-4">
      <p className="text-sm text-muted">{formatted} · {post.category}</p>
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-muted">{post.excerpt}</p>
      <Link href={`/insights/${post.slug}`} className="text-accent-green text-sm font-semibold">
        Read insight →
      </Link>
    </article>
  );
}
