import Link from "next/link";
import { ArrowRight, CircleCheck, MessageSquareQuote, Star } from "lucide-react";

import { ReviewsMarquee } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";
import { routes, type Dictionary, type Locale } from "@/i18n";
import { reveal } from "@/lib/reveal";
import { whatsappLink } from "@/lib/site";

/** Home page reviews: a moving strip of real reviews, or an invitation while there are none yet. */
export function ReviewsSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const copy = dict.home.reviews;
  const ratingLabel = dict.reviews.list.ratingLabel;

  if (reviews.length > 0) {
    return (
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow={copy.eyebrow} title={copy.title} />
        </div>
        <div className="mt-12" {...reveal(1)}>
          <ReviewsMarquee reviews={reviews} ratingLabel={ratingLabel} />
        </div>
        <div className="container-page mt-10 flex flex-col justify-center gap-3 sm:flex-row" {...reveal(2)}>
          <Button asChild variant="outline" size="lg">
            <Link href={routes.reviews[locale]}>
              {copy.viewAll}
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link href={`${routes.reviews[locale]}#tulis`}>{copy.cta}</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-20 sm:py-28">
      <div
        className="relative isolate grid items-center gap-10 overflow-hidden rounded-3xl border bg-navy-50 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]"
        {...reveal(0, "zoom")}
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-navy-700 uppercase">{copy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-navy-950 sm:text-4xl">
            {copy.emptyTitle}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-pretty text-muted-foreground">{copy.emptyDescription}</p>
          <ul className="mt-6 flex flex-col gap-2.5">
            {copy.emptyPoints.map((point, i) => (
              <li key={point} className="flex items-center gap-2.5" {...reveal(i + 1, "left")}>
                <CircleCheck className="size-5 shrink-0 text-navy-700" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                {copy.startCta}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white">
              <Link href={routes.reviews[locale]}>
                {copy.cta}
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative: empty review card with twinkling stars */}
        <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
          <div className="absolute -inset-6 -z-10 animate-drift rounded-full bg-blue-300/30 blur-3xl" />
          <div className="animate-float rounded-2xl border bg-white p-6 shadow-xl">
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="size-6 animate-pulse fill-amber-400 text-amber-400"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              ))}
            </div>
            <div className="mt-5 space-y-2.5">
              <div className="h-2.5 w-full rounded-full bg-navy-100" />
              <div className="h-2.5 w-5/6 rounded-full bg-navy-100" />
              <div className="h-2.5 w-2/3 rounded-full bg-navy-100" />
            </div>
            <div className="mt-6 flex items-center gap-3 border-t pt-4">
              <span className="flex size-10 items-center justify-center rounded-full border-2 border-dashed border-navy-700/40 text-navy-700">
                <MessageSquareQuote className="size-4" />
              </span>
              <div className="space-y-1.5">
                <div className="h-2.5 w-24 rounded-full bg-navy-900/80" />
                <div className="h-2 w-16 rounded-full bg-navy-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
