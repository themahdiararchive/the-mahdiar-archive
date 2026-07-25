# The Mahdiar Archive V2

Professional bilingual digital-museum frontend built with Next.js, React, TypeScript and Tailwind CSS.

## Included
- English and Persian routes with RTL support
- Search and filters
- Permanent artwork pages and related works
- Collections and timeline
- Structured artwork data
- JSON-LD VisualArtwork metadata
- Sitemap and robots
- Static export for Cloudflare Pages
- Six initial artworks

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The deployable site is created in `out/`.

## GitHub + Cloudflare Pages
1. Create a private GitHub repository named `mahdiyar-archive`.
2. Upload all files in this folder.
3. Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
4. Build command: `npm run build`
5. Output directory: `out`
6. Deploy and connect `mahdiarfarsi.com`.

## Add artwork
1. Add its image to `public/artworks/`.
2. Add a bilingual record to `content/artworks.json`.
3. Use the next permanent ID and never reuse IDs.
4. Push to GitHub. Cloudflare deploys automatically.

## CMS roadmap
The secure production CMS layer should provide authenticated editors, draft/review/publish workflow, roles, audit logs, bulk import, media management and backups. Do not expose an unauthenticated homemade admin panel.

## NFT safety
NFT fields currently record status only. Never store wallet seed phrases, private keys or signing credentials in this repository.
