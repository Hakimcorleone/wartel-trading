import { Eye, Flag, HeartHandshake, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { LogoMark } from "@/components/logo";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { reveal } from "@/lib/reveal";
import { getDictionary, type Locale } from "@/i18n";
import { breadcrumbJsonLd, breadcrumbs } from "@/lib/seo";
import { addressLines, regNoFull, site } from "@/lib/site";

const valueIcons = [ShieldCheck, Sparkles, TrendingUp, HeartHandshake];

export function AboutView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, story, mission, vision, values, info } = dict.about;

  const rows = [
    { label: info.rows.name, value: site.legalName },
    { label: info.rows.regNo, value: regNoFull },
    { label: info.rows.type, value: site.businessType[locale] },
    { label: info.rows.started, value: info.rows.startedValue },
    { label: info.rows.address, value: addressLines.join(", ") },
    { label: info.rows.coverage, value: info.rows.coverageValue },
  ];

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={breadcrumbs(locale, "about")}
      />

      {/* Story + mission/vision */}
      <section className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <SectionHeading eyebrow={story.eyebrow} title={story.title} align="left" />
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            {story.paragraphs.map((p, i) => (
              <p key={p} {...reveal(i + 1)}>
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {[
            { ...mission, Icon: Flag },
            { ...vision, Icon: Eye },
          ].map(({ title, text, Icon }, i) => (
            <div
              key={title}
              {...reveal(i, "right", 150)}
              className={i === 0 ? "rounded-2xl bg-navy-900 p-7 text-white" : "rounded-2xl border bg-navy-50 p-7"}
            >
              <div className="flex items-center gap-3">
                <Icon className={i === 0 ? "size-5 text-blue-300" : "size-5 text-navy-700"} aria-hidden="true" />
                <h2 className={i === 0 ? "text-lg font-semibold" : "text-lg font-semibold text-navy-950"}>
                  {title}
                </h2>
              </div>
              <p className={i === 0 ? "mt-3 leading-relaxed text-white/80" : "mt-3 leading-relaxed text-muted-foreground"}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={values.eyebrow} title={values.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item, i) => {
              const Icon = valueIcons[i];
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

      {/* Business info */}
      <section className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <SectionHeading eyebrow={info.eyebrow} title={info.title} intro={info.description} align="left" />
        <div className="overflow-hidden rounded-2xl border" data-reveal="right">
          <div className="flex items-center gap-3 border-b bg-navy-900 px-6 py-5 text-white">
            <LogoMark className="[&>rect]:fill-white/10" />
            <div>
              <p className="font-bold">{site.legalName}</p>
              <p className="text-xs text-white/70">{regNoFull}</p>
            </div>
          </div>
          <dl className="divide-y">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 px-6 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd className="text-sm font-medium text-navy-950">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand dict={dict} locale={locale} />
      <JsonLd data={breadcrumbJsonLd(locale, "about")} />
    </>
  );
}
