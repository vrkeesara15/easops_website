import type { Metadata } from 'next';
import { companyName } from './utils';

const defaultDescription =
  'EASOPS is an AI-native software studio designing, building, and growing modern products for startups and SMBs.';

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.easops.ai';
  const base: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${companyName} · AI-Native Software & Growth Studio`,
      template: `%s · ${companyName}`,
    },
    description: defaultDescription,
    openGraph: {
      type: 'website',
      url: siteUrl,
      title: `${companyName} · AI-Native Software & Growth Studio`,
      description: defaultDescription,
      images: [{ url: '/og/og-default.svg', width: 1200, height: 630, alt: 'EASOPS' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${companyName} · AI-Native Software & Growth Studio`,
      description: defaultDescription,
      images: ['/og/og-default.svg'],
    },
    other: {
      'theme-color': '#020617',
    },
  };

  return { ...base, ...overrides };
}

export const schemaOrg = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyName,
    url: 'https://www.easops.ai',
    logo: 'https://www.easops.ai/assets/logo/easops-logomark.svg',
    sameAs: ['https://www.linkedin.com/company/easops'],
  },
};
