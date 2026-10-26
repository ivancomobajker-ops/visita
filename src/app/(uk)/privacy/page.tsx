import { PrivacyView, privacyMetadata } from "@/views/LegalViews";

export const metadata = privacyMetadata("uk");

export default function Page() {
  return <PrivacyView lang="uk" />;
}
