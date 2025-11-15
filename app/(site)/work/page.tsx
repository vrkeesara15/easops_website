import { getCaseStudies } from '@/lib/cms';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import Link from 'next/link';
import { resolveSlug } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Work & Case Studies',
  description: 'AI, automation, and growth engagements shipped by EASOPS.',
});

export default async function WorkPage() {
  const studies = await getCaseStudies();
  return (
    <div className="container py-16 space-y-12">
      <header className="space-y-4 max-w-3xl">
        <p className="badge badge-blue w-max">Work</p>
        <h1 className="text-5xl font-semibold">Snapshots from recent AI, data, and growth builds.</h1>
        <p className="text-lg text-muted">
          Names are anonymized when needed, but the outcomes, velocity, and blended team structure remain the same.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {studies.map((study) => {
          const slug = resolveSlug(study.slug, study._id).toLowerCase();
          return (
            <article key={study._id} className="card space-y-4">
              <p className="text-sm text-muted uppercase tracking-wide">{study.industry}</p>
              <h2 className="text-2xl font-semibold">{study.title}</h2>
              <p className="text-muted">{study.summary}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="badge badge-blue">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/work/${slug}`} className="text-accent-green text-sm font-semibold">
                Dive deeper →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
