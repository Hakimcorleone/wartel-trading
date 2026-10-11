import { ServicesView } from "@/views/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ms", "services");

export default function Page() {
  return <ServicesView locale="ms" />;
}
