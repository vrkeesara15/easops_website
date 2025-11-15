import { getProducts } from '@/lib/cms';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Studio Products',
  description: 'Your Interview Guide and Timetable Pro—AI-native platforms from the EASOPS studio.',
});

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="container py-16 space-y-12">
      <header className="space-y-4 max-w-3xl">
        <p className="badge badge-green w-max">Studio</p>
        <h1 className="text-5xl font-semibold">Products built in-house to solve repeatable problems.</h1>
        <p className="text-lg text-muted">
          These platforms stay in active development and showcase how we blend applied AI, thoughtful UX, and GTM orchestration.
        </p>
      </header>
      <div className="space-y-10">
        {products.map((product) => (
          <article key={product._id} className="gradient-surface p-8 space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted uppercase tracking-wide">{product.tagline}</p>
              <h2 className="text-3xl font-semibold">{product.name}</h2>
            </div>
            <p className="text-muted text-lg">{product.description}</p>
            <ul className="text-sm text-muted space-y-2">
              {product.highlights.map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <button className="btn btn-outline w-max">{product.cta}</button>
          </article>
        ))}
      </div>
    </div>
  );
}
