import type { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card space-y-4">
      <div className="badge badge-green w-max">Studio Product</div>
      <h3 className="text-2xl font-semibold">{product.name}</h3>
      <p className="text-muted">{product.tagline}</p>
      <p className="text-sm text-muted">{product.description}</p>
      <ul className="text-sm text-muted space-y-2">
        {product.highlights.map((highlight) => (
          <li key={highlight}>• {highlight}</li>
        ))}
      </ul>
      <button className="btn btn-outline w-full" type="button">
        {product.cta}
      </button>
    </article>
  );
}
