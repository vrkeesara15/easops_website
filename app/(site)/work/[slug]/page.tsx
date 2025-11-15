import { getCaseStudy } from '@/lib/cms';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = await getCaseStudy(params.slug);
  if (!study) return buildMetadata({ title: 'Case Study' });
  return buildMetadata({ title: `${study.title} · Case Study`, description: study.summary });
}

export default async function CaseStudyPage({ params }: Params) {
  const study = await getCaseStudy(params.slug);
  if (!study) return notFound();
  return (
    <div className="container py-16 space-y-10">
      <header className="space-y-3 max-w-3xl">
        <p className="text-sm text-muted uppercase tracking-wide">{study.industry}</p>
        <h1 className="text-5xl font-semibold">{study.title}</h1>
        <p className="text-lg text-muted">{study.summary}</p>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="badge badge-blue">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="gradient-surface p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Context</h2>
          <p className="text-muted">{study.context}</p>
          <h3 className="text-xl font-semibold">Challenge</h3>
          <p className="text-muted">{study.challenge}</p>
        </div>
        <div className="gradient-surface p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-muted">{study.solution}</p>
          <h3 className="text-xl font-semibold">Outcomes</h3>
          <ul className="text-muted text-sm space-y-2">
            {study.outcomes.map((outcome) => (
              <li key={outcome}>• {outcome}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
