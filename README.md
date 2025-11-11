# EasOps Website

A marketing website for EasOps, a DevOps and cloud consultancy. The site is built with the Next.js App Router and includes pages for services, solutions, projects, blog posts, and contact enquiries.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

## Available scripts

- `npm run dev` – start a local development server.
- `npm run build` – compile the application for production.
- `npm run start` – run the production build.
- `npm run lint` – run ESLint using the Next.js configuration.

## Project structure

```
app/                # App Router entry points and page components
Components/         # Reusable UI components
Entities/           # Static content models and sample data
public/             # Static assets (add branding assets here)
```

## Deployment

1. Install dependencies with `npm install` and build the project using `npm run build`.
2. Deploy the output using a Next.js compatible host (Vercel, Netlify, or any Node.js server running `npm run start`).
3. Ensure environment variables are supplied if you add integrations (none are required for the static build).

The project currently uses static data sources so it can be deployed as-is without additional services.
