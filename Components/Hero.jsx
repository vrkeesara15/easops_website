import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Launch proofs of concept in weeks, not months, with reusable AI and automation accelerators.',
    icon: '/icons/feature-lightning.svg'
  },
  {
    title: 'Precision Focused',
    description: 'Pair process mining with measurable outcomes so every workflow change improves KPIs that matter.',
    icon: '/icons/feature-precision.svg'
  },
  {
    title: 'AI-Powered',
    description: 'Blend custom models, GPT copilots, and orchestration logic to elevate marketing, analytics, and operations.',
    icon: '/icons/feature-ai.svg'
  }
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="tag">EasOps AI Solutions</span>
        <h1>Smarter Workflows. Smarter Results.</h1>
        <p className="lead">
          EasOps implements AI solutions that transform marketing, analytics, and operations with measurable automation and data
          intelligence.
        </p>
        <div className="hero__actions">
          <Link className="button" href="/contact">
            Let&apos;s Talk
          </Link>
          <Link className="button button--ghost" href="/solutions">
            Explore Solutions
          </Link>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card__icon">
                <Image src={feature.icon} alt="" width={40} height={40} />
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="hero__visual">
        <div className="hero__visual-inner">
          <Image
            src="/hero-illustration.svg"
            alt="Illustration of AI-driven workflow automation"
            width={540}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
