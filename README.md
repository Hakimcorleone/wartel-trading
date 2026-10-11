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

Hasil `npm run build` ialah folder `out/` yang static sepenuhnya, jadi boleh di-host percuma di **Vercel**, **Netlify** atau **Cloudflare Pages**:

1. Sambungkan repo GitHub ini ke salah satu platform di atas.
2. Build command: `npm run build` · Output directory: `out`
3. Tetapkan environment variable:
   - `NEXT_PUBLIC_SITE_URL`: domain sebenar, contoh `https://warteltrading.com.my` (tanpa `/` di hujung). Ini digunakan untuk canonical URL, sitemap dan Open Graph.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (pilihan): kod pengesahan Google Search Console.
4. Selepas live, hantar `https://<domain>/sitemap.xml` di Google Search Console dan cipta Google Business Profile.

> Untuk hosting di sub-path (contohnya GitHub Pages `username.github.io/wartel-trading`), tambah `basePath` dalam `next.config.ts`.

## Borang hubungi

Borang di `/hubungi/` tidak perlukan server: ia menyusun mesej dan membukanya terus di WhatsApp (atau e-mel). Tiada data disimpan di laman web.
