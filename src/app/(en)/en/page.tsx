import { HomeView } from "@/views/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return <HomeView locale="en" />;
}
