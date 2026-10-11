import { ogImage } from "@/lib/brand-image";

export const dynamic = "force-static";

export function GET() {
  return ogImage("ms");
}
