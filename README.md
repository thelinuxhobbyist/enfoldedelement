# Enfolded Media

React + Vite + TypeScript + Tailwind CSS site for Enfolded Media.

## Develop locally

Prereqs: Node 20+, npm.

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
```

## Deploy

This repo deploys to Cloudflare Pages. Pushes to `main` trigger a deploy. SPA fallback is configured via `public/_redirects`.

## Blog content

- Markdown posts live in `src/content/blog`.
- Images live in `public/assets/blog-images` and are referenced as `/assets/blog-images/...`.

The build pre-generates `src/content/blog-index.json` for consistent post discovery.
