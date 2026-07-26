# V2.1 Cloudflare Build Fix

This release fixes the Cloudflare Pages build error:

`export const dynamic = "force-static"/export const revalidate not configured on route /sitemap.xml with output: export`

Changes:

- Removed dynamic Next.js metadata routes `app/sitemap.ts` and `app/robots.ts`.
- Added static `public/sitemap.xml`.
- Added static `public/robots.txt`.
- Kept the Cloudflare Pages build output as `out`.

Cloudflare settings remain:

- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`
