'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { SiteSettings } from '@/lib/types';

export function HeroSection({ settings }: { settings: SiteSettings['hero'] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container grid gap-8 md:grid-cols-2 items-center py-16">
        <motion.div initial={{ opacity: 0, transform: 'translateY(24px)' }} animate={{ opacity: 1, transform: 'translateY(0)' }}>
          <p className="badge badge-green w-max">AI-native studio</p>
          <h1 className="text-5xl md:text-6xl font-semibold mt-4">{settings.title}</h1>
          <p className="text-lg text-muted mt-4">{settings.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="btn btn-primary">
              {settings.primaryCta}
            </Link>
            <Link href="/work" className="btn btn-outline">
              {settings.secondaryCta}
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="gradient-surface p-6 space-y-6"
          initial={{ opacity: 0, transform: 'translateY(32px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">Engagements led</p>
              <p className="text-4xl font-bold">120+</p>
            </div>
            <div>
              <p className="text-sm text-muted">Avg. time to MVP</p>
              <p className="text-4xl font-bold">7 wks</p>
            </div>
          </div>
          <div className="border border-white/10 rounded-xl p-4 space-y-3">
            <p className="text-sm text-muted uppercase tracking-wide">Full-stack stack</p>
            <ul className="text-sm text-muted space-y-2">
              <li>LLM copilots + agents</li>
              <li>Product engineering & CX</li>
              <li>Growth ops & experimentation</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
