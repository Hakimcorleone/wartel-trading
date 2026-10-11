export const locales = ["ms", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ms";

export const htmlLang: Record<Locale, string> = { ms: "ms-MY", en: "en-MY" };
export const ogLocale: Record<Locale, string> = { ms: "ms_MY", en: "en_MY" };

export const pages = ["home", "services", "ai", "about", "contact"] as const;
export type PageKey = (typeof pages)[number];

/** Localised URL for every page. BM is the default and lives at the root. */
export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { ms: "/", en: "/en/" },
  services: { ms: "/perkhidmatan/", en: "/en/services/" },
  ai: { ms: "/automasi-ai/", en: "/en/automation-ai/" },
  about: { ms: "/tentang/", en: "/en/about/" },
  contact: { ms: "/hubungi/", en: "/en/contact/" },
};

function normalise(path: string) {
  return path.endsWith("/") ? path : `${path}/`;
}

export function pageFromPath(pathname: string): PageKey | undefined {
  const path = normalise(pathname);
  return pages.find((page) => routes[page].ms === path || routes[page].en === path);
}

export function localeFromPath(pathname: string): Locale {
  return normalise(pathname).startsWith("/en/") ? "en" : "ms";
}
