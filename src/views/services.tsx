import { Briefcase, Check, Rocket, Store, Users } from "lucide-react";

import { ContentIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { reveal } from "@/lib/reveal";
import { getDictionary, type Locale } from "@/i18n";
import { breadcrumbJsonLd, breadcrumbs } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const audienceIcons = [Store, Users, Rocket, Briefcase];

export function ServicesView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, list, audience, process, engagement } = dict.services;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={breadcrumbs(locale, "services")}
      >
        <Button asChild size="lg" variant="whatsapp">
          <a href={whatsappLink(dict.wa.website)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="size-5" />
            {hero.cta}
          </a>
        </Button>
      </PageHero>

      {/* Service list */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Card
              key={service.title}
              {...reveal(i % 3)}
              className="group gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <span className="mb-3 flex size-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <ContentIcon name={service.icon} className="size-5" />
                </span>
                <CardTitle className="text-xl leading-snug">
                  <h2>{service.title}</h2>
                </CardTitle>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="flex flex-col gap-2.5 border-t pt-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-navy-700" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audience.items.map((item, i) => {
              const Icon = audienceIcons[i];
              return (
                <div
                  key={item.title}
                  {...reveal(i)}
                  className="group rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="size-6 text-navy-700 group-hover:animate-wiggle" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />
        <Steps steps={process.steps} className="mt-12" />
      </section>

      {/* Engagement models */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={engagement.eyebrow} title={engagement.title} intro={engagement.note} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {engagement.items.map((item, i) => (
              <Card
                key={item.title}
                {...reveal(i, "up", 150)}
                className={cn(
                  "relative transition-shadow duration-300 hover:shadow-2xl",
                  item.featured && "border-navy-900 bg-navy-900 text-white shadow-xl lg:-translate-y-3",
                )}
              >
                <CardHeader>
                  {item.badge && (
                    <Badge variant="glass" className="mb-2">
                      {item.badge}
                    </Badge>
                  )}
                  <CardTitle className="text-xl">
                    <h3>{item.title}</h3>
                  </CardTitle>
                  <CardDescription className={cn("leading-relaxed", item.featured && "text-white/75")}>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm">
                        <Check
                          className={cn("mt-0.5 size-4 shrink-0", item.featured ? "text-blue-300" : "text-navy-700")}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full" variant={item.featured ? "white" : "outline"}>
                    <a
                      href={whatsappLink(`${dict.wa.website} (${item.title})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hero.cta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand dict={dict} locale={locale} />
      <JsonLd data={breadcrumbJsonLd(locale, "services")} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: hero.eyebrow,
          itemListElement: list.map((service, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              serviceType: service.title,
              areaServed: { "@type": "Country", name: "Malaysia" },
              provider: { "@id": `${site.url}/#business` },
            },
          })),
        }}
      />
    </>
  );
}
