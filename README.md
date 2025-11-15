# EASOPS Marketing Experience

A futuristic, AI-native marketing site for **EASOPS**—the software studio that designs, builds, and grows modern products for startups and SMBs. The stack combines the Next.js App Router with a headless-friendly CMS layer, custom utility styles that mirror the Tailwind design system, lightweight motion, and production-ready Docker/AWS deployment guidance.

## Architecture

```
app/
  (site)/                 # Route group that powers all public pages
  api/contact/            # POST endpoint used by the contact form (ready for AWS SES wiring)
  sitemap.ts & robots.txt # SEO outputs
components/
  cards/                  # Service, product, case study, and insight cards
  layout/                 # Header and footer
  sections/               # Hero + client-side contact form
content/mockData.ts       # CMS fallback content so the site works out-of-the-box
lib/                      # CMS helpers, metadata utilities, shared types
sanity/                   # Schema blueprints for the Sanity Studio
public/assets             # Brand logos + Open Graph artwork
vendor/                   # Lightweight stand-ins for Framer Motion, React Hook Form, and Zod (swap with official libs easily)
```

### Key technologies

- **Next.js 14 App Router** with React Server Components for fast routing.
- **TypeScript** everywhere for safety (the repo uses the globally available `typescript` runtime in this environment; install locally via `npm install` for your machine).
- **Tailwind-inspired utility system** committed in `app/globals.css`, mirroring the requested brand tokens and spacing scale (precompiled so no PostCSS step is required offline).
- **Custom Framer Motion/react-hook-form/zod shims** that expose the same APIs we use. In a connected environment, replace the files inside `vendor/` with the official packages via `npm install`.
- **Sanity-ready content model** (`sanity/schemas/*`) and GROQ-based fetch helpers. When `SANITY_PROJECT_ID`/`SANITY_DATASET` env vars exist, queries hit your dataset; otherwise the site falls back to the curated mock data.

## Getting started

```bash
npm install            # install dependencies (requires internet)
npm run dev            # start Next.js on http://localhost:3000
```

Because this coding environment blocks npm registry access, the repo commits lightweight vendor replacements. In your own environment you can remove `vendor/*` and install the real packages (`framer-motion`, `react-hook-form`, `zod`) plus Tailwind/PostCSS tooling.

### Environment variables

Create a `.env.local` file if you want to connect Sanity or customize metadata:

```
NEXT_PUBLIC_SITE_URL=https://www.easops.ai
SANITY_PROJECT_ID=<project>
SANITY_DATASET=production
SANITY_API_VERSION=2024-08-01
SANITY_TOKEN=<optional, only for private content>
```

## Content & CMS

- `sanity/schema.ts` aggregates the core document types (`service`, `product`, `caseStudy`, `post`, `testimonial`, `siteSettings`, `page`).
- `lib/cms.ts` handles GROQ fetches. When env vars are missing or a request fails, it automatically falls back to the curated mock data in `content/mockData.ts` so the site always renders.
- Update navigation text or hero copy through `siteSettings` in Sanity, or tweak the mock data file while prototyping.

## Contact form & API

- The client-side form (`components/sections/contact-form.tsx`) uses the React Hook Form + Zod shims to validate fields.
- Submissions hit `POST /api/contact`, which validates the payload again and logs it server-side. Swap the console log with an AWS SES or SNS integration when you are ready.

## Docker & local containers

Build and run the optimized standalone bundle:

```bash
docker build -t easops-web .
docker run --rm -p 3000:3000 easops-web
```

Or develop via Docker Compose:

```bash
docker-compose up --build
```

## Deploying to AWS

### Option A – Amplify Hosting
1. Push the repo to GitHub.
2. In the Amplify console, connect the repo, choose the main branch, and add environment variables (see above).
3. Amplify detects Next.js automatically. Leave the default build command (`npm run build`) and start command (`npm run start`).
4. Set `NEXT_PUBLIC_SITE_URL` to the Amplify domain once deployed for accurate Open Graph URLs.

### Option B – Container on ECS Fargate or App Runner
1. Build and push the Docker image:
   ```bash
   docker build -t <account>.dkr.ecr.<region>.amazonaws.com/easops:latest .
   docker push <account>.dkr.ecr.<region>.amazonaws.com/easops:latest
   ```
2. Create a Fargate service (or App Runner) pointing at the image, exposing port `3000`.
3. Supply the env vars under the service configuration and attach an HTTPS load balancer or App Runner managed domain.

## Testing & QA

- `npm run lint` – ESLint with the Next.js config.
- `npm run build` – Type-checks and compiles the production bundle. (Requires installing TypeScript + other deps locally.)

## Notes on this environment

The coding sandbox blocks npm registry traffic, so the repo includes committed vendor shims for Framer Motion, React Hook Form, and Zod plus a precompiled Tailwind-like stylesheet. When working locally with full internet access you can:

1. Install the real packages.
2. Remove the `vendor/` path mappings inside `tsconfig.json`.
3. Re-enable Tailwind/PostCSS if you prefer generating utilities dynamically.

Until then, everything runs offline with the included utilities so you can explore the site, modify content, and deploy containers without extra tooling.
