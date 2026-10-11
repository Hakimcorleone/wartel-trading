import type { Locale } from "./config";
import { ms } from "./dictionaries/ms";
import { en } from "./dictionaries/en";

export type Dictionary = typeof ms;

const dictionaries: Record<Locale, Dictionary> = { ms, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from "./config";
