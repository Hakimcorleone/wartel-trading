import { AboutView } from "@/views/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ms", "about");

export default function Page() {
  return <AboutView locale="ms" />;
}
