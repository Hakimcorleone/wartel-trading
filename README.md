# Wartel Trading — Laman Web Rasmi

Laman web dwibahasa (BM / English) untuk **Wartel Trading** (SSM 202603058867 (AS0510963-V)): website, automasi perniagaan dan AI agent untuk PKS Malaysia.

Dibina dengan **Next.js 16 (static export)**, **Tailwind CSS v4** dan **shadcn/ui**. Tema: putih + dark blue.

## Halaman

| Halaman         | Bahasa Melayu (default) | English               |
| --------------- | ----------------------- | --------------------- |
| Utama           | `/`                     | `/en/`                |
| Perkhidmatan    | `/perkhidmatan/`        | `/en/services/`       |
| Automasi & AI   | `/automasi-ai/`         | `/en/automation-ai/`  |
| Tentang Kami    | `/tentang/`             | `/en/about/`          |
| Hubungi         | `/hubungi/`             | `/en/contact/`        |

Toggle **BM | EN** di header akan bawa pengguna ke halaman yang sama dalam bahasa lain.

## Jalankan secara lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasilkan laman static dalam folder out/
npm run lint
```

## Di mana nak ubah apa

- **Maklumat perniagaan** (telefon, e-mel, alamat, no. SSM, domain): `src/lib/site.ts`
- **Semua teks laman web**: `src/i18n/dictionaries/ms.ts` (BM) dan `src/i18n/dictionaries/en.ts` (English); kedua-dua fail mesti ada struktur yang sama
- **URL setiap halaman**: `src/i18n/config.ts`
- **Warna tema**: `src/app/globals.css` (pemboleh ubah `--navy-*`)
- **Komponen UI shadcn**: `src/components/ui/`

## SEO

- Title, meta description dan keywords yang unik untuk setiap halaman, dalam kedua-dua bahasa
- `canonical` dan `hreflang` (`ms-MY`, `en-MY`, `x-default`)
- Open Graph dan Twitter Card dengan imej 1200×630 (`/og/ms.png`, `/og/en.png`)
- Data berstruktur JSON-LD: `ProfessionalService`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Service`
- `sitemap.xml` (dengan pautan alternatif bahasa), `robots.txt`, `manifest.webmanifest`, favicon dan apple-touch-icon
- HTML semantik, satu `h1` setiap halaman, pautan "skip to content" dan mesra mudah alih

## Deploy

Laman web ini di-host di **Vercel** dan disambungkan ke domain `warteltrading.my`.

- `vercel.json` menetapkan Framework Preset **Next.js**, jadi setting dalam dashboard Vercel tidak menjejaskan build.
- Setiap push ke `main` akan deploy ke production. Branch lain dapat preview deployment.
- Environment variable (pilihan):
  - `NEXT_PUBLIC_SITE_URL`: hanya perlu jika domain berubah (default `https://warteltrading.my`, tanpa `/` di hujung). Digunakan untuk canonical URL, sitemap dan Open Graph.
  - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: kod pengesahan Google Search Console.
- Selepas live, hantar `https://warteltrading.my/sitemap.xml` di Google Search Console dan cipta Google Business Profile.

Hasil `npm run build` juga ialah folder `out/` yang static sepenuhnya, jadi boleh di-host di Netlify atau Cloudflare Pages (build command `npm run build`, output directory `out`).

> Untuk hosting di sub-path (contohnya GitHub Pages `username.github.io/wartel-trading`), tambah `basePath` dalam `next.config.ts`.

## Borang hubungi

Borang di `/hubungi/` tidak perlukan server: ia menyusun mesej dan membukanya terus di WhatsApp (atau e-mel). Tiada data disimpan di laman web.
