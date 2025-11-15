'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LogoMark } from '@/components/icons/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/products', label: 'Products' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-primary-soft border-b border-white/5">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark />
          <div>
            <span className="text-lg font-semibold tracking-wide">EASOPS</span>
            <p className="text-sm text-muted">AI-Native Studio</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-main transition-base">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/contact" className="btn btn-primary">
            Talk to an AI Architect
          </Link>
        </div>
        <button className="md:hidden btn btn-outline" onClick={() => setOpen((prev) => !prev)}>
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <div className="container flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary w-full text-center" onClick={() => setOpen(false)}>
              Book an AI Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
