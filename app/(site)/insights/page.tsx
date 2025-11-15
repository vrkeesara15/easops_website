import { getPosts } from '@/lib/cms';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Insights',
  description: 'Research, playbooks, and market POV from the EASOPS team.',
});

export default async function InsightsPage() {
  const posts = await getPosts();
  return (
    <div className="container py-16 space-y-12">
      <header className="space-y-4 max-w-3xl">
        <p className="badge badge-green w-max">Insights</p>
        <h1 className="text-5xl font-semibold">Signals on AI enablement, product, and growth.</h1>
        <p className="text-lg text-muted">
          Pragmatic POVs, frameworks, and templates we use when shipping AI products, automations, and full-funnel GTM.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post._id} className="card space-y-4">
            <p className="text-sm text-muted">
              {new Date(post.publishedAt).toLocaleDateString()} · {post.category}
            </p>
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-muted">{post.excerpt}</p>
            <Link href={`/insights/${post.slug}`} className="text-accent-green text-sm font-semibold">
              Read insight →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
