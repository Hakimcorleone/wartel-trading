"use client";

import { useState } from "react";
import { Mail, Star } from "lucide-react";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormDict = Dictionary["reviews"]["form"];

export function FeedbackForm({ dict }: { dict: FormDict }) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [error, setError] = useState(false);

  const shown = hover || rating;

  function compose() {
    return [
      `⭐ ${dict.waIntro}`,
      "",
      `${dict.waName}: ${name.trim()}`,
      business.trim() ? `${dict.waBusiness}: ${business.trim()}` : null,
      `${dict.waRating}: ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`,
      service ? `${dict.waService}: ${service}` : null,
      "",
      `${dict.waMessage}:`,
      message.trim(),
      "",
      `${dict.waConsent}: ${consent ? dict.yes : dict.no}`,
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  function valid() {
    const ok = name.trim().length > 0 && rating > 0 && message.trim().length > 0;
    setError(!ok);
    return ok;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!valid()) return;
    window.open(whatsappLink(compose()), "_blank", "noopener,noreferrer");
  }

  function handleEmail() {
    if (!valid()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(dict.emailSubject)}&body=${encodeURIComponent(compose())}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm font-medium">{dict.rating}</legend>
        <div className="flex items-center gap-3">
          <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <label
                key={n}
                className="cursor-pointer rounded-md p-0.5 transition-transform hover:scale-125 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50"
                onMouseEnter={() => setHover(n)}
              >
                <input
                  type="radio"
                  name="rating"
                  value={n}
                  checked={rating === n}
                  onChange={() => setRating(n)}
                  className="sr-only"
                  aria-label={`${n} — ${dict.ratingNames[n - 1]}`}
                />
                <Star
                  className={cn(
                    "size-8 transition-colors",
                    n <= shown ? "fill-amber-400 text-amber-400" : "fill-transparent text-navy-100",
                    n === rating && "animate-wiggle",
                  )}
                  aria-hidden="true"
                />
              </label>
            ))}
          </div>
          <span className="text-sm text-muted-foreground" aria-live="polite">
            {shown ? dict.ratingNames[shown - 1] : ""}
          </span>
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="fb-name">{dict.name}</Label>
          <Input
            id="fb-name"
            autoComplete="name"
            required
            placeholder={dict.namePlaceholder}
            value={name}
            aria-invalid={error && !name.trim() ? true : undefined}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="fb-business">{dict.business}</Label>
          <Input
            id="fb-business"
            autoComplete="organization-title"
            placeholder={dict.businessPlaceholder}
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="fb-service">{dict.service}</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="fb-service">
            <SelectValue placeholder={dict.servicePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {dict.services.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="fb-message">{dict.message}</Label>
        <Textarea
          id="fb-message"
          required
          rows={5}
          className="min-h-32"
          placeholder={dict.messagePlaceholder}
          value={message}
          aria-invalid={error && !message.trim() ? true : undefined}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 accent-[var(--navy-900)]"
        />
        {dict.consent}
      </label>

      {error && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {dict.required}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" variant="whatsapp">
          <WhatsAppIcon className="size-5" />
          {dict.submit}
        </Button>
        <Button type="button" size="lg" variant="ghost" onClick={handleEmail}>
          <Mail />
          {dict.orEmail}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">{dict.privacy}</p>
    </form>
  );
}
