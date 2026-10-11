import { ServicesView } from "@/views/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "services");

export default function Page() {
  return <ServicesView locale="en" />;
}
