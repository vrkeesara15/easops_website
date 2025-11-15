import Link from 'next/link';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Products', href: '/products' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="container py-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div className="col-span-2 space-y-4">
          <p className="text-muted text-sm uppercase tracking-wide">EASOPS</p>
          <p className="text-lg">
            AI-native software studio helping startups and modern teams build, automate, and grow.
          </p>
          <p className="text-muted text-sm">team@easops.ai</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          {footerLinks.slice(0, 3).map((link) => (
            <Link key={link.href} href={link.href} className="text-muted hover:text-main transition-base">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          {footerLinks.slice(3).map((link) => (
            <Link key={link.href} href={link.href} className="text-muted hover:text-main transition-base">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container py-6 border-t border-white/5 text-sm text-muted flex flex-col md:flex-row justify-between gap-3">
        <span>© {new Date().getFullYear()} EASOPS. Built with AI + craft.</span>
        <span>Deployed on AWS-ready infrastructure.</span>
      </div>
    </footer>
  );
}
