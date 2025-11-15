import Link from 'next/link';
import { getPost } from '@/lib/cms';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return buildMetadata({ title: 'Insight' });
  return buildMetadata({ title: `${post.title} · Insights`, description: post.excerpt });
}

export default async function InsightPage({ params }: Params) {
  const post = await getPost(params.slug);
  if (!post) return notFound();
  return (
    <div className="container py-16 space-y-6 max-w-3xl">
      <p className="text-sm text-muted">
        {new Date(post.publishedAt).toLocaleDateString()} · {post.category}
      </p>
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <p className="text-lg text-muted">{post.excerpt}</p>
      <div className="space-y-4 text-muted">
        <p>
          We keep our long-form insights lightweight inside the repo. Plug this slug into Sanity and the content will render here. Until then, this placeholder reminds you that every article should include a strong POV, practical checklists, and prompts for teams to take the next step.
        </p>
        <p>
          Need help turning this idea into action?{' '}
          <Link href="/contact" className="text-accent-green">
            Talk to the studio
          </Link>{' '}
          and we’ll co-build playbooks, instrumentation, and campaigns.
        </p>
      </div>
    </div>
  );
}
