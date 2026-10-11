import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { reveal } from "@/lib/reveal";
import { getDictionary, type Locale } from "@/i18n";
import { breadcrumbJsonLd, breadcrumbs } from "@/lib/seo";
import { addressLines, site, whatsappLink } from "@/lib/site";

export function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, cards, form } = dict.contact;

  const channels = [
    {
      Icon: WhatsAppIcon,
      title: cards.whatsapp.title,
      lines: [site.phoneDisplay],
      href: whatsappLink(dict.wa.general),
      cta: cards.whatsapp.cta,
      external: true,
    },
    {
      Icon: Mail,
      title: cards.email.title,
      lines: [site.email],
      href: `mailto:${site.email}`,
      cta: cards.email.cta,
      external: false,
    },
    {
      Icon: MapPin,
      title: cards.address.title,
      lines: addressLines,
      href: site.mapsUrl,
      cta: cards.address.cta,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={breadcrumbs(locale, "contact")}
      />

      <section className="container-page grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-4">
          {channels.map(({ Icon, title, lines, href, cta, external }, i) => (
            <a
              key={title}
              {...reveal(i, "left", 120)}
              href={href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className="group flex gap-4 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-700/40 hover:bg-navy-50 hover:shadow-md"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-5 group-hover:animate-wiggle" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-sm font-semibold text-navy-950">{title}</span>
                <span className="text-sm break-words text-muted-foreground">
                  {lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:underline">
                  {cta}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </span>
              </span>
            </a>
          ))}
        </div>

        <Card className="shadow-lg shadow-navy-950/5" data-reveal="right">
          <CardHeader>
            <CardTitle className="text-2xl">
              <h2>{form.title}</h2>
            </CardTitle>
            <CardDescription>{form.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm dict={form} />
          </CardContent>
        </Card>
      </section>

      <JsonLd data={breadcrumbJsonLd(locale, "contact")} />
    </>
  );
}
