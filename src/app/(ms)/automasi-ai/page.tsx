import { AiView } from "@/views/ai";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ms", "ai");

export default function Page() {
  return <AiView locale="ms" />;
}
