import { Plus_Jakarta_Sans } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { getDictionary, htmlLang, type Locale } from "@/i18n";
import { businessJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <html lang={htmlLang[locale]} className={jakarta.variable}>
      <body className="flex min-h-svh flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-md bg-navy-900 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {dict.common.skipToContent}
        </a>
        <SiteHeader dict={{ nav: dict.nav, common: dict.common, wa: dict.wa }} locale={locale} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter dict={dict} locale={locale} />
        <WhatsAppFab label={dict.common.chatOnWhatsapp} message={dict.wa.general} />
        <JsonLd data={businessJsonLd(locale)} />
      </body>
    </html>
  );
}
