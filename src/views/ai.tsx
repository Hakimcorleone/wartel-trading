import Link from "next/link";
import { Clock, Lock, ShieldCheck, TrendingUp, Zap } from "lucide-react";

import { ContentIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { reveal } from "@/lib/reveal";
import { getDictionary, routes, type Locale } from "@/i18n";
import { breadcrumbJsonLd, breadcrumbs } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

const benefitIcons = [Clock, Zap, ShieldCheck, TrendingUp];

export function AiView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, useCases, how, benefits, trust } = dict.ai;

  return (
    <>
      <PageHero eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} breadcrumbs={breadcrumbs(locale, "ai")}>
        <Button asChild size="lg" variant="whatsapp">
          <a href={whatsappLink(dict.wa.automation)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" />
            {hero.cta}
          </a>
        </Button>
        <Button asChild size="lg" variant="white">
          <a href={whatsappLink(dict.wa.ai)} target="_blank" rel="noopener noreferrer">
            {hero.secondaryCta}
          </a>
        </Button>
      </PageHero>

      {/* Use cases */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading eyebrow={useCases.eyebrow} title={useCases.title} intro={useCases.intro} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.items.map((item, i) => (
            <Card
              key={item.title}
              {...reveal(i % 3)}
              className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <span className="mb-3 flex size-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <ContentIcon name={item.icon} className="size-5" />
                </span>
                <CardTitle className="text-lg leading-snug">
                  <h3>{item.title}</h3>
                </CardTitle>
                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={how.eyebrow} title={how.title} />
          <Steps steps={how.steps} className="mt-12" />
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading eyebrow={benefits.eyebrow} title={benefits.title} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((item, i) => {
            const Icon = benefitIcons[i];
            return (
              <div
                key={item.title}
                {...reveal(i, "zoom")}
                className="group flex flex-col items-center rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-navy-100 text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Data trust banner */}
      <section className="container-page">
        <div data-reveal="" className="flex flex-col items-start justify-between gap-6 rounded-3xl border-2 border-dashed border-navy-700/30 bg-navy-50 p-8 sm:p-10 md:flex-row md:items-center">
          <div className="flex max-w-2xl gap-4">
            <Lock className="mt-1 size-6 shrink-0 text-navy-700" aria-hidden="true" />
            <div>
              <h2 className="text-2xl font-bold text-navy-950">{trust.title}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{trust.description}</p>
            </div>
          </div>
          <Button asChild size="lg">
            <Link href={routes.contact[locale]}>{trust.cta}</Link>
          </Button>
        </div>
      </section>

      <CtaBand dict={dict} locale={locale} />
      <JsonLd data={breadcrumbJsonLd(locale, "ai")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: dict.meta.ai.title,
          description: dict.meta.ai.description,
          serviceType: hero.eyebrow,
          areaServed: { "@type": "Country", name: "Malaysia" },
          provider: { "@id": `${site.url}/#business` },
        }}
      />
    </>
  );
}
