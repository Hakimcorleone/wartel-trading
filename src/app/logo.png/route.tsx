import { squareLogo } from "@/lib/brand-image";

export const dynamic = "force-static";

export function GET() {
  return squareLogo(512);
}
