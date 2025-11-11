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
    default: 'EasOps | DevOps & Cloud Consultancy',
    template: '%s | EasOps'
  },
  description:
    'EasOps is a DevOps and cloud consultancy delivering resilient infrastructure, observability, and automation services for modern teams.'
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
          <div className="container">
            <p>© {new Date().getFullYear()} EasOps. DevOps excellence delivered.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
