import "./globals.css";

import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { en } from "@/i18n/dictionaries/en";
import { ms } from "@/i18n/dictionaries/ms";

export const metadata: Metadata = {
  title: `404 — ${ms.notFound.title} | Wartel Trading`,
  description: ms.notFound.description,
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="ms-MY">
      <body className="flex min-h-svh flex-col items-center justify-center bg-navy-50 px-4 text-center font-sans">
        <Link href="/" aria-label="Wartel Trading">
          <Logo />
        </Link>
        <p className="mt-10 text-7xl font-extrabold tracking-tight text-navy-900">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy-950">{ms.notFound.title}</h1>
        <p className="mt-2 max-w-md text-muted-foreground">{ms.notFound.description}</p>
        <p lang="en" className="mt-1 max-w-md text-sm text-muted-foreground">
          {en.notFound.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">{ms.notFound.cta}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/en/" hrefLang="en-MY">
              {en.notFound.cta}
            </Link>
          </Button>
        </div>
      </body>
    </html>
  );
}
