import type { Service } from '@/lib/types';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card space-y-4">
      <div className="badge badge-blue w-max">Service</div>
      <h3 className="text-2xl font-semibold">{service.name}</h3>
      <p className="text-muted">{service.summary}</p>
      <ul className="text-sm text-muted space-y-2">
        {service.outcomes.slice(0, 3).map((outcome) => (
          <li key={outcome}>• {outcome}</li>
        ))}
      </ul>
      <p className="text-sm text-muted">Ideal for: {service.idealClients}</p>
    </article>
  );
}
