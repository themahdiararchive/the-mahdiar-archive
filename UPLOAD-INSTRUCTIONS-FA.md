# راهنمای جایگزینی صحیح فایل‌ها در GitHub

این ZIP را Extract کنید. داخل پوشه Extract‌شده باید مستقیماً پوشه‌های `app`، `components`، `content`، `lib` و `public` دیده شوند.

برای جلوگیری از تخت‌شدن ساختار پوشه‌ها، از GitHub Desktop استفاده کنید:

1. مخزن `themahdiararchive/the-mahdiar-archive` را Clone کنید.
2. در GitHub Desktop از مسیر **Repository → Show in Explorer** پوشه محلی مخزن را باز کنید.
3. همه فایل‌ها و پوشه‌های قابل مشاهده داخل مخزن را حذف کنید. پوشه مخفی `.git` را حذف نکنید.
4. تمام محتویات این پروژه Extract‌شده را داخل پوشه مخزن کپی کنید.
5. در GitHub Desktop پیام Commit را `Replace flattened upload with corrected V2 structure` بگذارید.
6. روی **Commit to main** و سپس **Push origin** بزنید.

ساختار صحیح صفحه اصلی مخزن:

- app/
- components/
- content/
- lib/
- public/
- package.json
- next.config.ts
- tsconfig.json
- README.md

تنظیمات Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `out`
- Production branch: `main`
- Root directory: خالی یا `/`
