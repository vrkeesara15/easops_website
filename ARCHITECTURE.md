# Proposed Project Structure for EASOPS Marketing Site

```
app/
  layout.tsx                 # Global layout with fonts, theme metadata
  page.tsx                   # Home page
  services/page.tsx
  products/page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  about/page.tsx
  contact/page.tsx
  api/contact/route.ts       # Contact form handler
  sitemap.ts                 # Dynamic sitemap entries
  robots.txt/route.ts        # Robots instructions
  (sections)/...             # Reusable section components for CMS driven content
components/
  layout/                    # Header, footer, navigation
  sections/                  # Hero, services grid, products spotlight, etc.
  cards/                     # ServiceCard, CaseStudyCard, ProductCard
  ui/                        # shadcn-inspired primitives (button, badge, card, etc.)
  icons/                     # Custom iconography and logo mark
content/
  mockData.ts                # Local fallback data when CMS is unavailable
lib/
  cms.ts                     # Data fetching helpers w/ caching & fallbacks
  sanity.client.ts           # Sanity client configuration
  queries.ts                 # GROQ queries per content type
  seo.ts                     # Metadata helpers & structured data builders
  utils.ts                   # Shared helpers (cn, formatters, etc.)
sanity/
  config/client.ts           # Studio config scaffold
  schemas/
    service.ts
    product.ts
    caseStudy.ts
    post.ts
    testimonial.ts
    siteSettings.ts
    page.ts
public/
  assets/logo/               # Wordmark + logomark SVGs
  og/                        # Social preview images
  textures/                  # Background gradients/glow assets
styles/
  globals.css                # Tailwind base + brand theming

Dockerfile
docker-compose.yml
README.md                    # Setup, CMS, deployment docs
```

This structure keeps all site pages within the App Router, co-locates reusable UI patterns, and cleanly separates content schemas, mock data, and infrastructure assets for Docker/AWS.
