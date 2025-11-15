import { getServices } from '@/lib/cms';
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Services',
  description: 'AI development, product engineering, data, automation, and full-funnel growth services from EASOPS.',
});

export default async function ServicesPage() {
  const services = await getServices();
  return (
    <div className="container py-16 space-y-12">
      <header className="space-y-4 max-w-3xl">
        <p className="badge badge-blue w-max">Services</p>
        <h1 className="text-5xl font-semibold">AI-native delivery, from MVP builds to revenue engines.</h1>
        <p className="text-lg text-muted">
          Each engagement blends strategy, design, engineering, data, and growth so that every release is measurable and automation-ready.
        </p>
      </header>
      <div className="space-y-10">
        {services.map((service) => (
          <article key={service._id} className="gradient-surface p-8 space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold">{service.name}</h2>
              <p className="text-muted text-lg">{service.summary}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted uppercase tracking-wide">Outcomes</p>
                <ul className="text-sm text-muted space-y-2 mt-2">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome}>• {outcome}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-muted uppercase tracking-wide">Deliverables</p>
                <ul className="text-sm text-muted space-y-2 mt-2">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted">Ideal for: {service.idealClients}</p>
          </article>
        ))}
      </div>
      <div className="gradient-surface p-8 flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">Let’s architect your roadmap</h2>
        <p className="text-muted text-lg">
          Share your goals, timeline, and current stack. We’ll respond with a collaborative plan and team shape-up in under 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn btn-primary">
            Talk to an AI Architect
          </Link>
          <Link href="/work" className="btn btn-outline">
            Explore case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
