import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About',
  description: 'The story behind EASOPS—an AI-native software studio for founders and modern teams.',
});

const values = [
  { title: 'Outcome-obsessed', copy: 'Shipping meaningful releases and measurable growth beats vanity metrics every time.' },
  { title: 'Systems thinking', copy: 'Product, data, AI, and marketing operate as one connected stack—not separate handoffs.' },
  { title: 'Transparent collaboration', copy: 'We embed with your team, share progress openly, and leave behind playbooks and enablement.' },
];

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-12">
      <header className="space-y-4 max-w-3xl">
        <p className="badge badge-blue w-max">About EASOPS</p>
        <h1 className="text-5xl font-semibold">Built for founders, operators, and marketers who move fast.</h1>
        <p className="text-lg text-muted">
          EASOPS was created to bridge the gap between ambitious roadmaps and the teams required to execute—AI engineers, product designers, data strategists, and growth leaders aligned from day one.
        </p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="card space-y-3">
            <h2 className="text-2xl font-semibold">{value.title}</h2>
            <p className="text-muted">{value.copy}</p>
          </article>
        ))}
      </section>
      <section className="gradient-surface p-8 space-y-4">
        <h2 className="text-3xl font-semibold">Behind the studio</h2>
        <p className="text-muted text-lg">
          Led by builders who have scaled SaaS products, multi-marketplace platforms, and performance marketing programs, we bring both enterprise rigor and startup pace. EASOPS is remote-first with hubs in Austin and London.
        </p>
        <p className="text-muted">
          We’re comfortable taking the first call with a founder, presenting to boards, or collaborating directly with internal engineers and marketers. Whatever it takes to get from idea to impact faster.
        </p>
      </section>
    </div>
  );
}
