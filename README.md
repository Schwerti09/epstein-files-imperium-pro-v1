# Epstein Files Decoder (MVP) — static export for Vercel + Netlify

This repo is a **static Next.js export** designed to deploy on both **Vercel** and **Netlify** without server functions.

## What you get (MVP)
- Home + Global Search (client-side via Fuse.js)
- People index + Person profile pages
- D3 Connection Graph (zoom/pan)
- Topics, Methodology, Sources, Offers (affiliate disclosure), Support
- German legal pages: Impressum, AGB (template), Datenschutz (template)
- Cookie consent banner (necessary + optional analytics toggle)

## Quickstart (local)
```bash
npm install
npm run dev
```

## Build (static)
```bash
npm run build
# output goes to /out
```

## Deploy on Vercel
1. Push repo to GitHub
2. Import into Vercel
3. Framework: Next.js
4. Build Command: `npm run build`
5. Output directory: auto (static export)

## Deploy on Netlify
1. New site from Git
2. Build command: `npm run build`
3. Publish directory: `out`
4. Netlify will serve the static export.

## Important: Set your production domain
In `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`, replace:
- `https://example.com` with your real domain.

## Analytics (GDPR)
This repo **does not auto-load analytics**. Implement analytics loading **only after consent**.
Recommended: Fathom or Plausible.

## Affiliate redirects (recommended)
The offers page uses link templates like:
`https://YOUR-DOMAIN.tld/go/proton?src=efd`

Implement redirects:
- Netlify: `_redirects` file or `netlify.toml`
- Vercel: `next.config.js` rewrites (note: static export has limitations; prefer Netlify redirects or Cloudflare Workers)

## Data scaling roadmap
For a real "imperium":
- Download + dedup + parse pipeline
- Privacy gate (victim/PII protection)
- Search index (OpenSearch/Elastic)
- Editorial review queue + public changelog
