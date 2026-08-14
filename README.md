# Nitin Foods

Premium frozen food supplier marketing site — React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and Lenis smooth scroll.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This runs `tsc -b && vite build`, then a **prerender step** that boots the built
site in headless Chromium (via Playwright), scrolls through the whole page to
trigger all scroll-based animations, and writes the fully-rendered HTML back
into `dist/index.html`. This is what search engines, social-share bots and the
first paint for real users see — without it, `dist/index.html` would ship an
empty `<div id="root"></div>` since this is a client-rendered SPA.

- First time only: `npx playwright install chromium` (downloads a local
  Chromium build the prerender script drives).
- To build without the prerender step (faster, for local debugging):
  `npm run build:no-prerender`.
- To re-run just the prerender step against an existing `dist/`:
  `npm run prerender`.

## Preview the production build

```bash
npm run preview
```

## SEO notes

- `index.html` carries the canonical URL, Open Graph/Twitter tags, and
  `Organization` JSON-LD — update these (and `public/robots.txt` /
  `public/sitemap.xml`) if the production domain changes from
  `www.nitinfoods.com`.
- `public/og-image.jpg` is the social share image (1200×630).
- Product photography in `src/data/images.ts` is placeholder stock photography
  for layout purposes — swap for real product/facility photos before launch.
