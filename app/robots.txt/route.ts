import { NextResponse } from 'next/server';

export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.easops.ai';
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`;
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
