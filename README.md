# Parag Patil — Portfolio

The source for [mrparag.tech](https://mrparag.tech), Parag Patil's personal software-engineering portfolio. It brings together selected backend and AI/ML work, research publications, hackathon recognition, technical experience, and professional credentials in an editorial, responsive interface.

## Live site

- **Portfolio:** [mrparag.tech](https://mrparag.tech)
- **GitHub:** [github.com/parag005-ai](https://github.com/parag005-ai)
- **LinkedIn:** [linkedin.com/in/1909parag-patil](https://www.linkedin.com/in/1909parag-patil)

## Highlights

- Responsive, accessibility-minded single-page portfolio
- Editorial visual system with custom typography, subtle motion, and reduced-motion support
- Professional portrait with bounded desktop parallax and a static touch-device fallback
- Project case studies spanning backend systems, AI/ML, geospatial agriculture, and full-stack development
- Research, DOI links, Smart India Hackathon recognition, and other national hackathon results
- Interactive experience timeline and technology-stack cards
- GA4 page-view tracking for first loads and client-side navigation
- SEO metadata, canonical URL, Open Graph metadata, and a custom SVG favicon

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16, React 19, Vinext |
| Build tooling | Vite 8, TypeScript |
| Hosting | Cloudflare Workers |
| Styling | CSS, Public Sans, Libertinus Serif Display |
| Icons | Lucide React, React Icons |
| Analytics | Google Analytics 4 |

The deployed application is built as a Cloudflare Worker. The portfolio itself is a public showcase: it does not require a login, database, or user account to browse.

## Run locally

### Prerequisites

- Node.js `22.13.0` or newer
- npm

### Development server

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. To choose a port explicitly:

```bash
npm run dev -- --port 3000
```

### Validate and preview the production build

```bash
npm run typecheck
npm run lint
npm run build
npm run start -- --port 8787
```

`npm run start` serves the generated Cloudflare Worker locally through Wrangler. Run `npm run build` before using it.

## Project structure

```text
app/
  layout.tsx                 Site metadata, fonts, favicon, and analytics
  page.tsx                   Portfolio page composition
  globals.css                Global design tokens and responsive styles
components/
  site-header.tsx            Navigation and brand mark
  portrait/                  Portrait presentation and motion
  experience-motion.tsx      Experience timeline scroll behaviour
  google-analytics.tsx       GA4 loader and page-view tracking
content/
  portfolio.ts               Verified portfolio content and section data
public/
  brand/                     SVG logo assets
  images/portrait.webp       Professional portrait
  projects/                  Project and achievement imagery
  resume-parag-patil.pdf     Downloadable résumé
build/
  sites-worker.ts            Cloudflare Worker entry point
vite.config.ts               Vinext, Vite, and Cloudflare configuration
```

## Updating portfolio content

Most profile data is intentionally centralised in [`content/portfolio.ts`](./content/portfolio.ts). Update this file to add or revise:

- project titles, descriptions, technology stacks, and repository links
- work experience, dates, organisations, and summaries
- research publications, DOI links, hackathon outcomes, and credentials
- skills and their proficiency labels
- contact links and core profile facts

Use the existing image assets as follows:

- Replace the hero portrait at [`public/images/portrait.webp`](./public/images/portrait.webp).
- Add project or achievement images under [`public/projects/`](./public/projects/).
- Replace the downloadable résumé at [`public/resume-parag-patil.pdf`](./public/resume-parag-patil.pdf). This file is public once deployed, so review it before publishing.
- Update the brand mark in [`public/brand/`](./public/brand/) and the favicon at [`public/favicon.svg`](./public/favicon.svg) only when the logo changes.

For a new page section or a structural layout change, start with [`app/page.tsx`](./app/page.tsx) and its corresponding component/styles. Keep content edits separate from layout changes whenever possible.

## Analytics

Google Analytics 4 is implemented in [`components/google-analytics.tsx`](./components/google-analytics.tsx) and mounted from the root layout. It loads `gtag.js` after the page becomes interactive, sends explicit page views, and prevents duplicate events during client-side navigation.

The GA4 measurement ID is public by design; do not put private analytics credentials or API secrets in the repository. Store any future secrets in Cloudflare environment variables rather than committed files.

## Deployment

Production is hosted on Cloudflare and available at [mrparag.tech](https://mrparag.tech). The standard deployable artifact is created with:

```bash
npm run build
```

The build produces a Cloudflare Worker configuration under `dist/server/`. Deployment settings are intentionally kept outside application components. Do not change Cloudflare, Vite, or Vinext configuration for ordinary content or styling updates.

## Quality checklist

Before publishing changes, run:

```bash
npm run typecheck
npm run lint
npm run build
```

Also verify the portfolio at desktop and mobile widths, test navigation and external links, confirm that new images have useful alt text, and check `prefers-reduced-motion` when changing animations.

## Asset and content notice

This is a personal portfolio repository. The writing, résumé, photos, project imagery, logo, and other personal assets belong to Parag Patil. Please ask before reusing them.
