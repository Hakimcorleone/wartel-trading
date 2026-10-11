import type { MetadataRoute } from "next";

import { pages, routes } from "@/i18n/config";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap((page) =>
    (["ms", "en"] as const).map((locale) => ({
      url: absoluteUrl(routes[page][locale]),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? (locale === "ms" ? 1 : 0.9) : 0.8,
      alternates: {
        languages: {
          "ms-MY": absoluteUrl(routes[page].ms),
          "en-MY": absoluteUrl(routes[page].en),
          "x-default": absoluteUrl(routes[page].ms),
        },
      },
    })),
  );
}
