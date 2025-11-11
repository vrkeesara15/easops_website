# EasOps Website

A marketing website for EasOps, a DevOps and cloud consultancy. The site is built with the Next.js App Router and includes pages for services, solutions, projects, blog posts, and contact enquiries.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

### Using Docker

```bash
docker build -t easops-website .
docker run --rm -p 3000:3000 easops-website
```

The container image runs `next start` against the standalone build output. After running the container you can open `http://localhost:3000` to explore the production bundle.

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
2. Run `npm run start` or use the provided Docker image to serve the site.
3. Deploy the resulting container image to any OCI-compatible runtime (AWS ECS/Fargate, Google Cloud Run, Azure Web Apps for Containers, etc.) or host the `.next/standalone` output on your own Node.js server.
4. Ensure environment variables are supplied if you add integrations (none are required for the static build).

The project currently uses static data sources so it can be deployed as-is without additional services.
