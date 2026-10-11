"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Dictionary } from "@/i18n";
import { pageFromPath, pages, routes, type Locale, type PageKey } from "@/i18n/config";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type HeaderDict = Pick<Dictionary, "nav" | "common" | "wa">;

function LanguageToggle({ locale, page, label }: { locale: Locale; page: PageKey; label: string }) {
  const options: { locale: Locale; short: string; name: string }[] = [
    { locale: "ms", short: "BM", name: "Bahasa Melayu" },
    { locale: "en", short: "EN", name: "English" },
  ];

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border bg-muted p-0.5 text-xs font-semibold"
    >
      {options.map((option) => {
        const active = option.locale === locale;
        return (
          <Link
            key={option.locale}
            href={routes[page][option.locale]}
            hrefLang={option.locale === "ms" ? "ms-MY" : "en-MY"}
            lang={option.locale}
            aria-current={active ? "true" : undefined}
            title={option.name}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors",
              active
                ? "bg-navy-900 text-white shadow-sm"
                : "text-muted-foreground hover:text-navy-900",
            )}
          >
            {option.short}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteHeader({ dict, locale }: { dict: HeaderDict; locale: Locale }) {
  const pathname = usePathname();
  const current = pageFromPath(pathname) ?? "home";

  const links = pages.map((page) => ({
    page,
    href: routes[page][locale],
    label: dict.nav[page],
  }));

  return (
    <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={routes.home[locale]} aria-label="Wartel Trading" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label={dict.common.menu} className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {links.map((link) => (
              <li key={link.page}>
                <Link
                  href={link.href}
                  aria-current={current === link.page ? "page" : undefined}
                  className={cn(
                    "rounded-md px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:bg-accent hover:text-navy-900 xl:px-3",
                    current === link.page ? "text-navy-900" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle locale={locale} page={current} label={dict.common.language} />
          <Button asChild className="hidden sm:inline-flex">
            <a
              href={whatsappLink(dict.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.common.whatsappCta}
            >
              <WhatsAppIcon className="size-4" />
              <span className="lg:hidden xl:inline">{dict.common.whatsappCta}</span>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label={dict.common.menu}>
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" closeLabel={dict.common.close}>
              <SheetHeader className="border-b">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">{dict.common.menu}</SheetDescription>
              </SheetHeader>
              <nav aria-label={dict.common.menu} className="px-2">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => (
                    <li key={link.page}>
                      <SheetClose asChild>
                        <Link
                          href={link.href}
                          aria-current={current === link.page ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-3 text-base font-medium hover:bg-accent",
                            current === link.page ? "bg-accent text-navy-900" : "text-foreground",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <SheetFooter>
                <Button asChild size="lg" variant="whatsapp">
                  <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-5" />
                    {dict.common.whatsappCta}
                  </a>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
