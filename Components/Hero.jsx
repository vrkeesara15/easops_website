import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="tag">DevOps Consultancy</span>
        <h1>Operate with confidence, ship with velocity.</h1>
        <p className="lead">
          EasOps partners with fast-moving teams to design secure, observable, and automated platforms. From discovery workshops
          to day-2 operations, we help you release value continuously.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link className="button" href="/contact">
            Book a consultation
          </Link>
          <Link href="/projects" style={{ fontWeight: 600, color: '#4f46e5' }}>
            View case studies →
          </Link>
        </div>
      </div>
      <div className="hero-illustration">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Team collaborating around computers" />
      </div>
    </section>
  );
}
