import "../globals.css";

import { RootDocument } from "@/components/root-document";
import { rootMetadata } from "@/lib/seo";

export { viewport } from "@/lib/viewport";

export const metadata = rootMetadata("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
