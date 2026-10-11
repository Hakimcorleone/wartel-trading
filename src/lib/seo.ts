import type { Metadata } from "next";

import { getDictionary, htmlLang, ogLocale, routes, type Locale, type PageKey } from "@/i18n";
import { absoluteUrl, regNoFull, site } from "@/lib/site";

export function ogImagePath(locale: Locale) {
  return `/og/${locale}.png`;
}

export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const dict = getDictionary(locale);
  const { title, description } = dict.meta[page];
  const path = routes[page][locale];
  const socialTitle = page === "home" ? title : `${title} | ${site.name}`;
  const image = {
    url: ogImagePath(locale),
    width: 1200,
    height: 630,
    alt: dict.meta.home.title,
  };

  return {
    title: page === "home" ? { absolute: title } : title,
    description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: path,
      languages: {
        "ms-MY": routes[page].ms,
        "en-MY": routes[page].en,
        "x-default": routes[page].ms,
      },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "ms" ? "en" : "ms"],
      url: path,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

/** Site-wide metadata shared by both locale root layouts. */
export function rootMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.home.title, template: `%s | ${site.name}` },
    description: dict.meta.siteDescription,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "business",
    formatDetection: { telephone: true, email: true, address: true },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
    }),
  };
}

const businessId = `${site.url}/#business`;
const websiteId = `${site.url}/#website`;

export function businessJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": businessId,
        name: site.name,
        legalName: site.legalName,
        url: absoluteUrl(routes.home[locale]),
        logo: absoluteUrl("/logo.png"),
        image: absoluteUrl(ogImagePath(locale)),
        description: dict.meta.siteDescription,
        telephone: site.phone,
        email: site.email,
        foundingDate: site.founded,
        identifier: {
          "@type": "PropertyValue",
          propertyID: "SSM",
          value: regNoFull,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          postalCode: site.address.postcode,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: { "@type": "Country", name: "Malaysia" },
        knowsLanguage: ["ms", "en"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone,
          email: site.email,
          contactType: "customer service",
          areaServed: "MY",
          availableLanguage: ["Malay", "English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.nav.services,
          itemListElement: [
            ...dict.services.list.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.title, description: service.description },
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: absoluteUrl(routes.home[locale]),
        name: site.name,
        description: dict.meta.siteDescription,
        inLanguage: htmlLang[locale],
        publisher: { "@id": businessId },
      },
    ],
  };
}

export function breadcrumbJsonLd(locale: Locale, page: PageKey) {
  const dict = getDictionary(locale);
  const items = [{ name: dict.common.breadcrumbHome, path: routes.home[locale] }];
  if (page !== "home") items.push({ name: dict.nav[page], path: routes[page][locale] });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLang[locale],
    mainEntity: dict.home.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbs(locale: Locale, page: PageKey) {
  const dict = getDictionary(locale);
  return [
    { name: dict.common.breadcrumbHome, href: routes.home[locale] },
    { name: dict.nav[page], href: routes[page][locale] },
  ];
}
