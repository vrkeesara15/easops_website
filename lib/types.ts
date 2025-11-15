export type Service = {
  _id: string;
  name: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  idealClients: string;
};

export type Product = {
  _id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  cta: string;
};

export type CaseStudy = {
  _id: string;
  slug?: string | { current: string };
  title: string;
  industry: string;
  summary: string;
  tags: string[];
  context: string;
  challenge: string;
  solution: string;
  outcomes: string[];
};

export type Post = {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  category: string;
};

export type Testimonial = {
  _id: string;
  quote: string;
  author: string;
  role: string;
};

export type SiteSettings = {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  process: { title: string; steps: { title: string; description: string }[] };
};
