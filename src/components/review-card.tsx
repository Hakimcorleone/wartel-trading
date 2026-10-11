import { Quote, Star } from "lucide-react";

import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

export function Stars({ rating, label, className }: { rating: number; label: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={`${Number(rating.toFixed(1))} ${label}`}>
      {[1, 2, 3, 4, 5].map((n) => {
        // Fraction of this star to fill, so an average like 4.5 shows a half star.
        const fill = Math.min(1, Math.max(0, rating - (n - 1)));
        return (
          <span key={n} className="relative inline-flex size-4" aria-hidden="true">
            <Star className="size-full fill-transparent text-navy-100" />
            <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="size-4 max-w-none fill-amber-400 text-amber-400" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function ReviewCard({ review, ratingLabel, className }: { review: Review; ratingLabel: string; className?: string }) {
  const initials = review.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <figure
      className={cn(
        "relative flex h-full flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <Quote className="absolute top-5 right-5 size-8 text-navy-100" aria-hidden="true" />
      <Stars rating={review.rating} label={ratingLabel} />
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground">“{review.text}”</blockquote>
      <figcaption className="flex items-center gap-3 border-t pt-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
          {initials}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-semibold text-navy-950">{review.name}</span>
          {(review.role || review.service) && (
            <span className="truncate text-xs text-muted-foreground">
              {[review.role, review.service].filter(Boolean).join(" · ")}
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

/** Infinite horizontal scroll of reviews; pauses on hover. */
export function ReviewsMarquee({ reviews, ratingLabel }: { reviews: Review[]; ratingLabel: string }) {
  // Repeat short lists so the strip is always wider than the viewport, then double it for a seamless loop.
  const base = Array.from({ length: Math.max(1, Math.ceil(6 / reviews.length)) }, () => reviews).flat();
  const loop = [...base, ...base];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul
        className="flex w-max animate-marquee gap-5 py-2 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${base.length * 8}s` } as React.CSSProperties}
      >
        {loop.map((review, i) => (
          <li key={i} className="w-[20rem] shrink-0 sm:w-[24rem]" aria-hidden={i >= base.length ? true : undefined}>
            <ReviewCard review={review} ratingLabel={ratingLabel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
