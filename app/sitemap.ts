import { getCaseStudies, getPosts } from '@/lib/cms';
import { resolveSlug } from '@/lib/utils';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.easops.ai';
  const [caseStudies, posts] = await Promise.all([getCaseStudies(), getPosts()]);
  const staticRoutes = ['/', '/services', '/work', '/products', '/insights', '/about', '/contact'];
  const dynamicRoutes = [
    ...caseStudies.map((study) => `/work/${resolveSlug(study.slug, study._id).toLowerCase()}`),
    ...posts.map((post) => `/insights/${post.slug}`),
  ];
  return [...staticRoutes, ...dynamicRoutes].map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
