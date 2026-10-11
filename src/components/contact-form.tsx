"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/i18n";
import { site, whatsappLink } from "@/lib/site";

type FormDict = Dictionary["contact"]["form"];

export function ContactForm({ dict }: { dict: FormDict }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function compose() {
    return [
      dict.waIntro,
      "",
      `${dict.waName}: ${name.trim()}`,
      phone.trim() ? `${dict.waPhone}: ${phone.trim()}` : null,
      interest ? `${dict.waInterest}: ${interest}` : null,
      "",
      `${dict.waMessage}:`,
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");
  }

  function valid() {
    const ok = name.trim().length > 0 && message.trim().length > 0;
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
    const subject = `${dict.emailSubject}${interest ? ` — ${interest}` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-name">{dict.name}</Label>
          <Input
            id="cf-name"
            name="name"
            autoComplete="name"
            required
            placeholder={dict.namePlaceholder}
            value={name}
            aria-invalid={error && !name.trim() ? true : undefined}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-phone">{dict.phone}</Label>
          <Input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={dict.phonePlaceholder}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cf-interest">{dict.interest}</Label>
        <Select value={interest} onValueChange={setInterest}>
          <SelectTrigger id="cf-interest">
            <SelectValue placeholder={dict.interestPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {dict.interests.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cf-message">{dict.message}</Label>
        <Textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className="min-h-32"
          placeholder={dict.messagePlaceholder}
          value={message}
          aria-invalid={error && !message.trim() ? true : undefined}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

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
