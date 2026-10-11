import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CircleCheck,
  HeartHandshake,
  ShieldCheck,
  Sheet,
  BellRing,
  Zap,
} from "lucide-react";

import { ContentIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Steps } from "@/components/steps";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDictionary, routes, type Locale, type PageKey } from "@/i18n";
import { faqJsonLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const whyIcons = [HeartHandshake, ShieldCheck, Zap, BadgeCheck];
const flowIcons = [WhatsAppIcon, Bot, Sheet, BellRing];

export function HomeView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, facts, pillars, services, spotlight, why, process, stack, faq } = dict.home;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]" />
        <div className="absolute -top-32 -right-32 -z-10 size-[32rem] rounded-full bg-navy-700/45 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 -z-10 size-[26rem] rounded-full bg-blue-500/15 blur-3xl" />

        <div className="container-page grid items-center gap-14 pt-16 pb-28 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
          <div>
            <Badge variant="glass" className="mb-6">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {hero.eyebrow}
            </Badge>
            <h1 className="text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="block">{hero.titleLine1}</span>
              <span className="block text-blue-300">{hero.titleLine2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/75">{hero.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="whatsapp">
                <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="size-5" />
                  {hero.primaryCta}
                </a>
              </Button>
              <Button asChild size="lg" variant="white">
                <Link href={routes.ai[locale]}>
                  {hero.secondaryCta}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-col gap-2.5 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {hero.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CircleCheck className="size-4 text-blue-300" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: website mock + automation flow */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="ml-3 truncate rounded-md bg-white/10 px-3 py-1 text-[11px] text-white/60">
                  https://{hero.visual.browserUrl}
                </span>
              </div>
              <div className="space-y-3 p-5">
                <div className="h-3 w-2/3 rounded-full bg-white/70" />
                <div className="h-3 w-1/2 rounded-full bg-blue-300/80" />
                <div className="h-2 w-5/6 rounded-full bg-white/20" />
                <div className="h-2 w-4/6 rounded-full bg-white/20" />
                <div className="flex gap-2 pt-1">
                  <div className="h-7 w-24 rounded-md bg-emerald-500/80" />
                  <div className="h-7 w-20 rounded-md bg-white/80" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-14 rounded-lg bg-white/10" />
                  <div className="h-14 rounded-lg bg-white/10" />
                  <div className="h-14 rounded-lg bg-white/10" />
                </div>
              </div>
            </div>

            <div className="relative z-10 -mt-10 ml-6 rounded-2xl bg-white p-5 text-navy-950 shadow-2xl sm:ml-14">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">{hero.visual.flowTitle}</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                  {hero.visual.flowStatus}
                </span>
              </div>
              <ol className="mt-4 flex flex-col gap-2.5">
                {hero.visual.flowSteps.map((step, i) => {
                  const Icon = flowIcons[i];
                  return (
                    <li key={step} className="flex items-center gap-3 text-sm">
                      <span
                        className={cn(
                          "flex size-8 shrink-0 items-center justify-center rounded-lg",
                          i === 0 ? "bg-whatsapp text-white" : "bg-navy-100 text-navy-900",
                        )}
                      >
                        <Icon className="size-4" />
                      </span>
                      <span className="text-navy-900">{step}</span>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="absolute -top-5 right-2 z-20 hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-navy-900 shadow-lg sm:flex">
              <BadgeCheck className="size-4 text-navy-700" />
              {hero.visual.badge}
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section aria-label={hero.eyebrow} className="container-page relative z-10 -mt-14">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border bg-white shadow-xl shadow-navy-950/5 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={cn(
                "flex flex-col gap-1 p-5 sm:p-6",
                i % 2 === 1 && "border-l",
                i > 1 && "border-t lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
            >
              <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{fact.label}</dt>
              <dd className="text-sm font-bold text-navy-950 sm:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Pillars */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} intro={pillars.intro} />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.items.map((item, i) => {
            const dark = i === 1;
            return (
              <article
                key={item.title}
                className={cn(
                  "flex flex-col rounded-3xl border p-8",
                  dark ? "border-navy-900 bg-navy-900 text-white lg:-translate-y-3 lg:shadow-xl" : "bg-navy-50",
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "flex size-14 items-center justify-center rounded-2xl",
                      dark ? "bg-white/10 text-blue-200" : "bg-navy-900 text-white",
                    )}
                  >
                    <ContentIcon name={item.icon} className="size-6" />
                  </span>
                  <span className={cn("text-sm font-semibold", dark ? "text-blue-200" : "text-navy-700")}>
                    {item.tag}
                  </span>
                </div>
                <h3 className={cn("mt-6 text-2xl font-bold", dark ? "text-white" : "text-navy-950")}>{item.title}</h3>
                <p className={cn("mt-3 leading-relaxed", dark ? "text-white/75" : "text-muted-foreground")}>
                  {item.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <CircleCheck
                        className={cn("mt-0.5 size-4 shrink-0", dark ? "text-blue-300" : "text-navy-700")}
                        aria-hidden="true"
                      />
                      <span className={dark ? "text-white/90" : "text-foreground"}>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button asChild variant={dark ? "white" : "default"}>
                    <Link href={routes[item.page as PageKey][locale]}>
                      {item.cta}
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow={services.eyebrow} title={services.title} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.list.map((service) => (
              <Card key={service.title} className="gap-4 transition-shadow hover:shadow-md">
                <CardHeader>
                  <span className="mb-3 flex size-12 items-center justify-center rounded-xl bg-navy-100 text-navy-900">
                    <ContentIcon name={service.icon} className="size-5" />
                  </span>
                  <CardTitle className="text-lg leading-snug">
                    <h3>{service.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href={routes.services[locale]}>
                {services.cta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI agent spotlight */}
      <section className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={spotlight.eyebrow}
            title={spotlight.title}
            intro={spotlight.description}
            align="left"
          />
          <ul className="mt-6 flex flex-col gap-3">
            {spotlight.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-navy-700" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8">
            <Link href={routes.ai[locale]}>
              {spotlight.cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <figure className="overflow-hidden rounded-3xl border bg-navy-50 shadow-xl shadow-navy-950/5">
          <div className="flex items-center gap-3 bg-navy-900 px-5 py-4 text-white">
            <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
              <Bot className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold">{spotlight.chatAgent}</p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                {spotlight.chatOnline}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5 sm:p-6">
            {spotlight.messages.map((message) => (
              <p
                key={message.text}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  message.from === "user"
                    ? "self-end rounded-br-md bg-navy-900 text-white"
                    : "self-start rounded-bl-md border bg-white text-navy-950",
                )}
              >
                {message.text}
              </p>
            ))}
          </div>
          <figcaption className="border-t bg-white px-5 py-3 text-xs text-muted-foreground">
            {spotlight.chatLabel}
          </figcaption>
        </figure>
      </section>

      {/* Why us */}
      <section className="bg-navy-50/60 py-20 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <SectionHeading eyebrow={why.eyebrow} title={why.title} intro={why.intro} align="left" />
          <div className="grid gap-5 sm:grid-cols-2">
            {why.items.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <div key={item.title} className="rounded-2xl border bg-white p-6">
                  <Icon className="size-6 text-navy-700" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow={process.eyebrow} title={process.title} />
        <Steps steps={dict.services.process.steps} className="mt-14" />
      </section>

      {/* Tech stack */}
      <section className="border-y bg-navy-50/60 py-14">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <div>
            <p className="text-sm font-semibold tracking-wide text-navy-700 uppercase">{stack.eyebrow}</p>
            <h2 className="mt-2 text-xl font-bold text-navy-950 sm:text-2xl">{stack.title}</h2>
          </div>
          <ul className="flex max-w-3xl flex-wrap justify-center gap-2.5">
            {stack.items.map((item) => (
              <li key={item} className="rounded-full border bg-white px-4 py-1.5 text-sm font-medium text-navy-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="left" />
        <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
          {faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
              <AccordionContent forceMount className="leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand dict={dict} locale={locale} />
      <JsonLd data={faqJsonLd(locale)} />
    </>
  );
}
