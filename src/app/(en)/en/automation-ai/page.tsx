import { AiView } from "@/views/ai";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "ai");

export default function Page() {
  return <AiView locale="en" />;
}
