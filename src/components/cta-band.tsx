import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { routes, type Dictionary, type Locale } from "@/i18n";
import { whatsappLink } from "@/lib/site";

export function CtaBand({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="container-page py-16 sm:py-24">
      <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12">
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
        <div className="absolute -right-24 -bottom-24 -z-10 size-72 rounded-full bg-navy-700/50 blur-3xl" />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-white/75">{dict.cta.description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="whatsapp">
            <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer">
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
