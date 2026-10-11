import { ReviewsView } from "@/views/reviews";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ms", "reviews");

export default function Page() {
  return <ReviewsView locale="ms" />;
}
