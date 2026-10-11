import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { pages, routes, type Dictionary, type Locale } from "@/i18n";
import { addressLines, regNoFull, site, whatsappLink } from "@/lib/site";

export function SiteFooter({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const serviceHrefs = [
    routes.services[locale],
    routes.services[locale],
    routes.ai[locale],
    routes.ai[locale],
    routes.services[locale],
  ];

  return (
    <footer className="bg-navy-950 text-white/75">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="flex flex-col gap-4">
          <Link href={routes.home[locale]} aria-label="Wartel Trading" className="w-fit">
            <Logo inverted />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">{dict.footer.tagline}</p>
          <p className="text-xs text-white/50">
            {dict.common.regLabel}: <span className="text-white/80">{regNoFull}</span>
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">{dict.footer.explore}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {pages.map((page) => (
              <li key={page}>
                <Link href={routes[page][locale]} className="hover:text-white">
                  {dict.nav[page]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">{dict.footer.services}</h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {dict.footer.serviceLinks.map((label, i) => (
              <li key={label}>
                <Link href={serviceHrefs[i]} className="hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold text-white">{dict.footer.contact}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink(dict.wa.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 break-all hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="container-page flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName} ({regNoFull}). {dict.footer.rights}
        </p>
        <p>{dict.footer.registered}</p>
      </div>
    </footer>
  );
}
