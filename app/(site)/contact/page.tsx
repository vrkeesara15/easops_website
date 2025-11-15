import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ContactForm } from '@/components/sections/contact-form';

export const metadata: Metadata = buildMetadata({
  title: 'Contact',
  description: 'Start a conversation with the EASOPS team about AI development, automation, and growth.',
});

export default function ContactPage() {
  return (
    <div className="container py-16 grid gap-12 md:grid-cols-2">
      <div className="space-y-6">
        <p className="badge badge-blue w-max">Partner with EASOPS</p>
        <h1 className="text-5xl font-semibold">Tell us about your roadmap.</h1>
        <p className="text-lg text-muted">
          Whether you need an AI copilot, a refreshed product experience, or a measurable growth engine, we’ll assemble a blended team and respond within one business day.
        </p>
        <div className="space-y-3 text-sm text-muted">
          <p>Email: team@easops.ai</p>
          <p>Calendly: calendly.com/easops/strategy (placeholder)</p>
          <p>Locations: Remote-first · Austin · London</p>
        </div>
      </div>
      <div className="gradient-surface p-8">
        <ContactForm />
      </div>
    </div>
  );
}
