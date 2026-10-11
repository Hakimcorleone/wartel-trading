import { AboutView } from "@/views/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "about");

export default function Page() {
  return <AboutView locale="en" />;
}
