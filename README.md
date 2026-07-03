# DubaiDeIsKur.com

Static Next.js and Tailwind CSS website for a Turkish UAE market-entry and company formation consultancy.

The site is static-only and has no backend, database, serverless function, or external integration.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Build

```bash
npm run build
```

The site is configured with `output: "export"` in `next.config.mjs`, so static files are generated in `out/`.

## Deploy

Vercel:
- Import this folder as a project.
- Build command: `npm run build`
- Output directory: `out`

Netlify:
- New site from Git.
- Build command: `npm run build`
- Publish directory: `out`

## Contact Details

Update contact values in:

`src/lib/site.ts`

## Images

Placeholder image panels are currently CSS-based for speed. Replace them with real optimized images by placing files in:

`public/images/`

Then update the visual sections in:

`src/app/page.tsx`
