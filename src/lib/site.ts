/**
 * Business details from the SSM registration (Borang A / Perakuan Pendaftaran).
 * Only public business information lives here — never the owner's personal details.
 */
export const site = {
  name: "Wartel Trading",
  legalName: "WARTEL TRADING",
  regNo: "202603058867",
  regNoOld: "AS0510963-V",
  businessType: { ms: "Pemilikan Tunggal", en: "Sole Proprietorship" },
  founded: "2026-02-28",
  /** Set NEXT_PUBLIC_SITE_URL to the live domain when deploying (no trailing slash). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://warteltrading.my").replace(/\/$/, ""),
  phone: "+60186959795",
  phoneDisplay: "018-695 9795",
  whatsapp: "60186959795",
  email: "hakimshaisham02@gmail.com",
  address: {
    street: "Melodi Perdana, LBS Alam Perdana",
    locality: "Bandar Puncak Alam",
    postcode: "42300",
    region: "Selangor",
    country: "MY",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=LBS+Alam+Perdana%2C+42300+Bandar+Puncak+Alam%2C+Selangor",
} as const;

export const regNoFull = `${site.regNo} (${site.regNoOld})`;

export const addressLines = [
  site.address.street,
  `${site.address.postcode} ${site.address.locality}`,
  site.address.region,
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}
