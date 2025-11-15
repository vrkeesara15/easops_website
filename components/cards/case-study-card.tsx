import Link from 'next/link';
import type { CaseStudy } from '@/lib/types';
import { resolveSlug } from '@/lib/utils';

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const slug = resolveSlug(study.slug, study._id).toLowerCase();
  return (
    <article className="card space-y-4">
      <p className="text-sm text-muted">{study.industry}</p>
      <h3 className="text-2xl font-semibold">{study.title}</h3>
      <p className="text-muted">{study.summary}</p>
      <div className="flex flex-wrap gap-2 text-sm text-muted">
        {study.tags.map((tag) => (
          <span key={tag} className="badge badge-blue">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/work/${slug}`} className="text-accent-blue text-sm font-semibold">
        Explore case study →
      </Link>
    </article>
  );
}
