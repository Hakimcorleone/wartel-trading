import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFab({ label, message }: { label: string; message: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-whatsapp/40 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" aria-hidden="true" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}
