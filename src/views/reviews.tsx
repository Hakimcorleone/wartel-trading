import { MessageSquareQuote, Star } from "lucide-react";

import { FeedbackForm } from "@/components/feedback-form";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ReviewCard, Stars } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/data/reviews";
import { getDictionary, type Locale } from "@/i18n";
import { reveal } from "@/lib/reveal";
import { breadcrumbJsonLd, breadcrumbs } from "@/lib/seo";

export function ReviewsView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const { hero, list, form } = dict.reviews;
  const sorted = [...reviews].sort((a, b) => b.date.localeCompare(a.date));
  const average = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={breadcrumbs(locale, "reviews")}
      />

      <section className="container-page py-16 sm:py-20">
        {sorted.length > 0 ? (
          <>
            <div className="flex flex-col items-center gap-4 text-center" {...reveal()}>
              <SectionHeading eyebrow={list.eyebrow} title={list.title} />
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-navy-950">{average.toFixed(1)}</span>
                <Stars rating={average} label={list.ratingLabel} className="[&>span]:size-5 [&_svg]:size-5" />
                <span className="text-sm text-muted-foreground">({reviews.length})</span>
              </div>
            </div>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((review, i) => (
                <li key={`${review.name}-${review.date}`} {...reveal(i % 3)}>
                  <ReviewCard review={review} ratingLabel={list.ratingLabel} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div
            className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border-2 border-dashed border-navy-700/25 bg-navy-50 px-6 py-12 text-center"
            {...reveal(0, "zoom")}
          >
            <span className="relative flex size-16 animate-float items-center justify-center rounded-2xl bg-navy-900 text-white">
              <MessageSquareQuote className="size-7" aria-hidden="true" />
              <Star
                className="absolute -top-2 -right-2 size-6 animate-pulse fill-amber-400 text-amber-400"
                aria-hidden="true"
              />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy-950">{list.emptyTitle}</h2>
            <p className="mt-2 text-muted-foreground">{list.emptyDescription}</p>
          </div>
        )}
      </section>

      <section id="tulis" className="scroll-mt-24 bg-navy-50/60 py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <Card className="shadow-lg shadow-navy-950/5" {...reveal()}>
            <CardHeader>
              <CardTitle className="text-2xl">
                <h2>{form.title}</h2>
              </CardTitle>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <FeedbackForm dict={form} />
            </CardContent>
          </Card>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(locale, "reviews")} />
    </>
  );
}
