# SVANTOVID.IO

Production bilingual landing page for the SVANTOVID early demonstrator. Built with React, TypeScript and Vite, without analytics, cookies or a backend.

## Run locally

```bash
npm install
npm run dev
```

The development server is available at `http://localhost:5173` by default.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The static output in `dist/` can be deployed to GitHub Pages, Cloudflare Pages or another static host. Do not commit it.

## Assets

Public image URLs are centralized in `src/config/assets.ts`. See `ASSETS_REQUIRED.md` for files that must be uploaded manually. The existing root-level reference images are not used, copied or modified.
