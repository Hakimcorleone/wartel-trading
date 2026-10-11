import { ContactView } from "@/views/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ms", "contact");

export default function Page() {
  return <ContactView locale="ms" />;
}
