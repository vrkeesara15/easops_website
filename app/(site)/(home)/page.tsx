import Link from 'next/link';
import { HeroSection } from '@/components/sections/hero';
import { ServiceCard } from '@/components/cards/service-card';
import { ProductCard } from '@/components/cards/product-card';
import { CaseStudyCard } from '@/components/cards/case-study-card';
import { PostCard } from '@/components/cards/post-card';
import { getCaseStudies, getPosts, getProducts, getServices, getSiteSettings, getTestimonials } from '@/lib/cms';

export default async function HomePage() {
  const [services, products, caseStudies, posts, testimonials, settings] = await Promise.all([
    getServices(),
    getProducts(),
    getCaseStudies(),
    getPosts(),
    getTestimonials(),
    getSiteSettings(),
  ]);

  return (
    <div className="space-y-12">
      <HeroSection settings={settings.hero} />

      <section>
        <div className="container flex flex-col gap-6">
          <p className="text-sm text-muted uppercase tracking-wide">Trusted by teams shipping fast</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-muted text-sm">
            {['Stealth AI Fund', 'Transitline', 'Northwind Labs', 'Atlas Bio', 'Future Schools', 'Halo Health'].map(
              (name) => (
                <div key={name} className="border border-white/5 rounded-xl p-4 text-center">
                  {name}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="badge badge-blue w-max">What we do</p>
            <h2 className="text-4xl font-semibold">Strategy, engineering, data, and growth under one AI-native roof.</h2>
            <p className="text-muted text-lg">
              EASOPS pairs senior builders with growth operators so your AI roadmap, product experience, and go-to-market work as a single system.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="gradient-surface p-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Product → Data → Growth Loop',
                copy: 'We map your value chain, connect data exhaust, and build loops that feed AI models and marketing intelligence.',
              },
              {
                title: 'Automation by default',
                copy: 'Agents and internal tooling remove manual busywork so teams focus on customer impact, not spreadsheets.',
              },
              {
                title: 'Measured creativity',
                copy: 'Experimentation frameworks, analytics, and story-driven creative give you signal on every launch.',
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="badge badge-green w-max">Studio products</p>
            <h2 className="text-4xl font-semibold">Internal platforms we ship and iterate on.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="badge badge-blue w-max">Recent outcomes</p>
            <h2 className="text-4xl font-semibold">Built with founders, ops teams, and modern GTM leaders.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study._id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="badge badge-green w-max">Process</p>
            <h2 className="text-4xl font-semibold">{settings.process.title}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {settings.process.steps.map((step, index) => (
              <div key={step.title} className="card">
                <p className="text-sm text-muted">{index + 1}</p>
                <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
                <p className="text-muted text-sm mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="badge badge-blue w-max">Signals</p>
            <h2 className="text-4xl font-semibold">People who have shipped with us.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial._id} className="card space-y-4">
                <p className="text-xl">“{testimonial.quote}”</p>
                <p className="text-muted text-sm">
                  {testimonial.author} · {testimonial.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="badge badge-green w-max">Insights</p>
            <h2 className="text-4xl font-semibold">Playbooks from AI, data, and growth builds.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container gradient-surface p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <p className="badge badge-blue w-max">Ready when you are</p>
            <h2 className="text-4xl font-semibold">Let’s architect your next product, automation, or growth loop.</h2>
            <p className="text-muted text-lg">
              Share your roadmap, audit an idea, or invite us into a sprint. We’ll bring a blended team that cares about measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Link href="/contact" className="btn btn-primary w-full text-center">
              Book an AI Strategy Call
            </Link>
            <Link href="/work" className="btn btn-outline w-full text-center">
              See more client work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
