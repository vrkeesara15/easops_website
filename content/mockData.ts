import { CaseStudy, Post, Product, Service, SiteSettings, Testimonial } from '@/lib/types';

export const mockServices: Service[] = [
  {
    _id: 'service-ai',
    name: 'AI Development & LLM Solutions',
    summary: 'Design and deploy AI copilots, assistants, and applied LLM workflows tuned to your business.',
    outcomes: ['Launch intelligent assistants in weeks', 'Turn documents and knowledge bases into searchable copilots'],
    deliverables: ['Technical discovery', 'Model selection + evaluation', 'LLM application build', 'Safety + governance playbooks'],
    idealClients: 'Teams exploring AI-enabled products or needing to scale beyond prototypes.',
  },
  {
    _id: 'service-product',
    name: 'Product Engineering & MVP Builds',
    summary: 'Ship full-stack web and mobile products with pragmatic architecture, clean UX, and measurable growth loops.',
    outcomes: ['MVP in under 8 weeks', 'Fast release cadence with CI/CD'],
    deliverables: ['Product strategy', 'Design system + frontend', 'API + data layer', 'Observability + analytics'],
    idealClients: 'Founder-led teams that need a senior build partner without hiring a full engineering org.',
  },
  {
    _id: 'service-data',
    name: 'Data Engineering & Cloud Migration',
    summary: 'Modernize infrastructure, centralize data, and activate metrics pipelines ready for AI + growth teams.',
    outcomes: ['Move to modern data stack', 'Unlock realtime dashboards and experimentation'],
    deliverables: ['Warehouse + lakehouse patterns', 'ELT pipelines', 'Cloud architecture', 'Data contracts'],
    idealClients: 'Scaleups migrating from legacy systems or spreadsheets to modern platforms.',
  },
  {
    _id: 'service-automation',
    name: 'AI Enablement & Automation',
    summary: 'Automate workflows with agents, orchestrate internal tooling, and reduce manual busywork.',
    outcomes: ['Automated internal support', 'Ops teams freed from repetitive QA and reporting'],
    deliverables: ['Automation roadmap', 'Agent + workflow builds', 'Playbooks + training'],
    idealClients: 'Operations teams seeking leverage with AI and systems thinking.',
  },
  {
    _id: 'service-growth',
    name: 'Marketing Strategy & Full-Funnel Growth',
    summary: 'Blend brand, content, lifecycle, and performance marketing into one measurable growth engine.',
    outcomes: ['Full-funnel experimentation', 'Smarter CAC + LTV modeling'],
    deliverables: ['Messaging + positioning', 'Acquisition programs', 'Lifecycle automation', 'Revenue dashboards'],
    idealClients: 'Teams ready to scale with clarity on ICP, story, and pipeline.',
  },
];

export const mockProducts: Product[] = [
  {
    _id: 'product-yig',
    name: 'Your Interview Guide',
    tagline: 'Structured interview prep for ambitious job seekers.',
    description: 'A guided platform with adaptive content, AI-driven feedback, and collaborative review rooms that simulate real interview pressure.',
    highlights: ['Curated playbooks for 50+ roles', 'AI mentor that critiques answers', 'Progress scoring + accountability'],
    cta: 'Request early access',
  },
  {
    _id: 'product-timetable',
    name: 'Timetable Pro',
    tagline: 'Constraint-aware scheduling for modern schools.',
    description: 'Timetable Pro ingests teacher availability, classroom constraints, and compliance rules to generate optimal schedules in minutes.',
    highlights: ['Multi-campus support', 'Conflict detection + alerts', 'One-click publishing to LMS'],
    cta: 'Book a Timetable Pro demo',
  },
];

export const mockCaseStudies: CaseStudy[] = [
  {
    _id: 'case-automation',
    title: 'AI Ops Assistant for a Logistics Marketplace',
    industry: 'Logistics',
    summary: 'EASOPS deployed an AI assistant that triaged partner questions, freeing the ops team from 800+ tickets per month.',
    tags: ['AI', 'Automation', 'CX'],
    context: 'A Series B marketplace faced rising support costs while expanding globally.',
    challenge: 'Manual workflows slowed response times and risked churn.',
    solution: 'We built a retrieval-augmented agent with secure data connectors, fine-tuned prompts, and shared analytics dashboards.',
    outcomes: ['83% automated resolutions', '35% faster onboarding', 'Full audit trail for compliance teams'],
  },
  {
    _id: 'case-growth',
    title: 'Full-Funnel GTM for Fintech SaaS',
    industry: 'Fintech',
    summary: 'Unified product launches with lifecycle automation, unlocking a 2.4x lift in pipeline within one quarter.',
    tags: ['Growth', 'Marketing', 'Automation'],
    context: 'A fintech SaaS company needed to reposition around AI insights and drive net new revenue.',
    challenge: 'Fragmented marketing stack and inconsistent messaging slowed adoption.',
    solution: 'EASOPS delivered updated positioning, modular content, and RevOps automation tied to experimentation loops.',
    outcomes: ['2.4x pipeline lift', '7-week rollout', 'Shared reporting hub for GTM + product'],
  },
];

export const mockPosts: Post[] = [
  {
    _id: 'post-ai-playbooks',
    title: 'Operational AI Playbooks for 2025',
    excerpt: 'Practical frameworks for shipping AI copilots that stay secure, measurable, and useful beyond the hype cycle.',
    slug: 'operational-ai-playbooks-2025',
    publishedAt: '2025-05-12',
    category: 'AI & Automation',
  },
  {
    _id: 'post-growth-loop',
    title: 'Turning Product Usage into Growth Loops',
    excerpt: 'Instrumenting your product to drive marketing signals and experimentation without a huge data team.',
    slug: 'product-usage-growth-loop',
    publishedAt: '2025-04-02',
    category: 'Growth',
  },
  {
    _id: 'post-data-foundation',
    title: 'Data Foundations for AI-Ready Teams',
    excerpt: 'Modern data stacks that let you activate AI and automation quickly, safely, and with confidence.',
    slug: 'data-foundations-ai',
    publishedAt: '2025-03-18',
    category: 'Data & Cloud',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    _id: 'test-ops',
    quote: 'EASOPS shipped an AI assistant in six weeks that removed the late-night ticket backlog entirely.',
    author: 'Leah Park',
    role: 'COO, Transitline',
  },
  {
    _id: 'test-product',
    quote: 'They think about product, brand, and GTM as a single system. That alignment changed how we plan launches.',
    author: 'Jon Miles',
    role: 'Founder, Vantage Labs',
  },
];

export const mockSettings: SiteSettings = {
  hero: {
    title: 'AI-native software studio for bold operators',
    subtitle: 'EASOPS designs, builds, and grows modern products—LLM copilots, automation, data platforms, and full-funnel marketing systems that compound.',
    primaryCta: 'Book an AI Strategy Call',
    secondaryCta: 'Explore Our Work',
  },
  process: {
    title: 'From idea to impact, without silos',
    steps: [
      { title: 'Discover', description: 'Align on goals, customer truths, and success metrics.' },
      { title: 'Design', description: 'Wireframes, system architecture, and brand voice in one sprint.' },
      { title: 'Build', description: 'Full-stack development, AI enablement, and automation ops.' },
      { title: 'Launch', description: 'GTM choreography with instrumentation + training.' },
      { title: 'Grow', description: 'Experimentation, optimization, and continuous enablement.' },
    ],
  },
};
