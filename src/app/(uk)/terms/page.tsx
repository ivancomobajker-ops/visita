import { TermsView, termsMetadata } from "@/views/LegalViews";

export const metadata = termsMetadata("uk");

export default function Page() {
  return <TermsView lang="uk" />;
}
