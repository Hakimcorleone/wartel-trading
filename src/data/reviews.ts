export type Review = {
  /** Customer's name as they agreed to have it shown, e.g. "Aisyah R." */
  name: string;
  /** Optional role and business, e.g. "Pemilik, Kafe Seri Alam". */
  role?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** The review in the customer's own words (shown as-is on both language versions). */
  text: string;
  /** Optional service they used, e.g. "Website + Automasi". */
  service?: string;
  /** ISO date the review was received, e.g. "2026-11-02". */
  date: string;
};

/**
 * Real customer reviews, added only with the customer's permission.
 * Never add made-up reviews: the reviews section shows an invitation while this list is empty.
 *
 * Example:
 * {
 *   name: "Aisyah R.",
 *   role: "Pemilik, Kafe Seri Alam",
 *   rating: 5,
 *   text: "Website siap cepat dan chatbot WhatsApp betul-betul jimat masa kami.",
 *   service: "Website + AI Agent",
 *   date: "2026-11-02",
 * },
 */
export const reviews: Review[] = [];
