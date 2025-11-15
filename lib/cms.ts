import { mockCaseStudies, mockPosts, mockProducts, mockServices, mockSettings, mockTestimonials } from '@/content/mockData';
import type { CaseStudy, Post, Product, Service, SiteSettings, Testimonial } from './types';
import { resolveSlug } from './utils';

const DATASET = process.env.SANITY_DATASET;
const PROJECT_ID = process.env.SANITY_PROJECT_ID;
const API_VERSION = process.env.SANITY_API_VERSION || '2024-08-01';
const TOKEN = process.env.SANITY_TOKEN;

async function fetchFromSanity<T>(query: string): Promise<T | null> {
  if (!PROJECT_ID || !DATASET) return null;
  const baseUrl = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  const url = new URL(baseUrl);
  url.searchParams.set('query', query);
  const response = await fetch(url.toString(), {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : undefined,
    cache: 'no-store',
  });
  if (!response.ok) {
    console.warn('Sanity fetch failed', response.statusText);
    return null;
  }
  const data = (await response.json()) as { result: T };
  return data.result;
}

function normalizePosts(data: Post[]): Post[] {
  return data.map((post) => ({
    ...post,
    slug: typeof post.slug === 'string' ? post.slug : (post as any)?.slug?.current || post._id,
  }));
}

function normalizeCaseStudies(data: CaseStudy[]): CaseStudy[] {
  return data.map((study) => ({
    ...study,
    slug: resolveSlug(study.slug, study._id),
  }));
}

export async function getServices(): Promise<Service[]> {
  const result = await fetchFromSanity<Service[]>(`*[_type == "service"] | order(orderRank asc)`);
  return result ?? mockServices;
}

export async function getProducts(): Promise<Product[]> {
  const result = await fetchFromSanity<Product[]>(`*[_type == "product"] | order(orderRank asc)`);
  return result ?? mockProducts;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const result = await fetchFromSanity<CaseStudy[]>(`*[_type == "caseStudy"] | order(publishedAt desc)`);
  return normalizeCaseStudies(result ?? mockCaseStudies);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const result = await fetchFromSanity<CaseStudy>(`*[_type == "caseStudy" && slug.current == "${slug}"][0]`);
  if (result) return { ...result, slug: resolveSlug(result.slug, result._id) };
  const fallback = normalizeCaseStudies(mockCaseStudies).find((study) => {
    const studySlug = resolveSlug(study.slug, study._id).toLowerCase();
    return studySlug === slug.toLowerCase() || study.title.toLowerCase().includes(slug.replace('-', ' '));
  });
  return fallback ?? null;
}

export async function getPosts(): Promise<Post[]> {
  const result = await fetchFromSanity<Post[]>(`*[_type == "post"] | order(publishedAt desc)`);
  return normalizePosts(result ?? mockPosts);
}

export async function getPost(slug: string): Promise<Post | null> {
  const result = await fetchFromSanity<Post>(`*[_type == "post" && slug.current == "${slug}"][0]`);
  if (result) {
    return normalizePosts([result])[0];
  }
  return normalizePosts(mockPosts).find((post) => post.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const result = await fetchFromSanity<Testimonial[]>(`*[_type == "testimonial"]`);
  return result ?? mockTestimonials;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const result = await fetchFromSanity<SiteSettings>(`*[_type == "siteSettings"][0]`);
  return result ?? mockSettings;
}
