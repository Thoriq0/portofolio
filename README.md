# Portofolio

Personal portfolio website for **Thoriq**, built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis**.

This project is designed as a modern single-page portfolio with a polished SaaS-style presentation, but the content is focused on real fullstack engineering experience across enterprise systems such as ERP, WMS, POS, and HRIS.

## Overview

The site includes:

- a refined hero section with motion and layered background effects
- a personal about section with portrait and engineering-focused introduction
- an experience section for enterprise product work
- an animated tech stack section
- featured project showcases using real live-demo screenshots
- a contact section with a polished form and external profile links
- Open Graph and Twitter image routes for sharing

## Tech Stack

- Next.js 16.2.6
- React 19.2.4
- TypeScript 6
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scroll
- Lucide React
- class-variance-authority
- clsx
- tailwind-merge

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

The dev server is configured to run on:

```text
http://0.0.0.0:3000
```

Open it in your browser through:

```text
http://localhost:3000
```

If you are testing from another device on the same network, use your local IP address.

## Build

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Project Structure

```text
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    opengraph-image.tsx
    page.tsx
    twitter-image.tsx

  components/
    portfolio/
      brand-mark.tsx
      contact-form.tsx
      custom-cursor.tsx
      interactive-card.tsx
      intro-loader.tsx
      magnetic-button.tsx
      portfolio-page.tsx
      project-visual.tsx
      reveal.tsx
      section-heading.tsx
      tech-marquee.tsx
    providers/
      app-providers.tsx
      smooth-scroll-provider.tsx
    ui/
      badge.tsx
      button.tsx
      card.tsx
      input.tsx
      textarea.tsx

  data/
    portfolio.ts

  hooks/
    use-active-section.ts

  lib/
    motion.ts
    utils.ts

  sections/
    about-section.tsx
    contact-section.tsx
    experience-section.tsx
    featured-projects-section.tsx
    footer.tsx
    hero-section.tsx
    navbar.tsx
    other-projects-section.tsx
    tech-stack-section.tsx

  types/
    portfolio.ts

public/
  nagih-digital-featured.png
  thor-portrait.jpg
  thors-light.png
  thorz-digital-featured.png
```

## Content Architecture

- `src/data/portfolio.ts`
  Central source for portfolio copy, featured projects, stack data, contact links, and supporting content.

- `src/sections/*`
  Route-level content sections for the single-page portfolio layout.

- `src/components/portfolio/*`
  Reusable presentation and interaction components such as the loader, spotlight cards, brand mark, and animated visual blocks.

- `src/components/ui/*`
  Lightweight local UI primitives inspired by shadcn-style component structure.

## Assets

This project uses local assets from the `public/` directory for:

- personal portrait
- custom logo
- featured project screenshots
- favicon and static social preview support

## SEO / Social

The project includes:

- `metadata` in `src/app/layout.tsx`
- Open Graph image route in `src/app/opengraph-image.tsx`
- Twitter image route in `src/app/twitter-image.tsx`

If you deploy with a different production domain, update `metadataBase` in:

```text
src/app/layout.tsx
```

## Deployment

This project can be deployed directly to **Vercel**.

Recommended flow:

1. Push this repository to GitHub
2. Import the repo into Vercel
3. Keep the default Next.js build settings
4. Deploy

No required environment variables are currently needed for this version of the portfolio.

## Notes

- `other-projects-section.tsx` is currently kept in the codebase but hidden from the main rendered page
- featured projects use real screenshots from live demo URLs
- the site is dark-mode-first and optimized for a premium presentation style

## License

This repository is currently for personal portfolio use.
