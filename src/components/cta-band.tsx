import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { routes, type Dictionary, type Locale } from "@/i18n";
import { whatsappLink } from "@/lib/site";

export function CtaBand({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="container-page py-16 sm:py-24">
      <div
        data-reveal="zoom"
        className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-800 to-navy-900 bg-[length:200%_200%] px-6 py-14 text-center text-white animate-gradient-x sm:px-12"
      >
        <div className="bg-grid absolute inset-0 -z-10 animate-grid-pan opacity-60" />
        <div className="absolute -right-24 -bottom-24 -z-10 size-72 animate-drift rounded-full bg-navy-700/50 blur-3xl" />
        <div className="absolute -top-24 -left-24 -z-10 size-64 animate-drift-reverse rounded-full bg-blue-500/20 blur-3xl" />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-white/75">{dict.cta.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="whatsapp" className="relative overflow-hidden">
            <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <WhatsAppIcon className="size-5" />
              {dict.cta.primary}
            </a>
          </Button>
          <Button asChild size="lg" variant="white">
            <Link href={routes.contact[locale]}>
              {dict.cta.secondary}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
