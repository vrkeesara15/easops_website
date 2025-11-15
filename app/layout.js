import './globals.css';
import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export const metadata = {
  title: {
    default: 'EasOps | AI Solutions & Intelligent Automation',
    template: '%s | EasOps'
  },
  description:
    'EasOps delivers AI solutions, automation workflows, and modern data platforms that transform marketing, analytics, and operations for ambitious teams.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="container navbar-inner">
            <Link href="/" className="logo">
              EasOps
            </Link>
            <nav className="nav-links">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container footer-inner">
            <p>© {new Date().getFullYear()} EasOps. AI solutions for smarter operations.</p>
            <nav>
              <Link href="/contact">Get in touch</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
