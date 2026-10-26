import CompanyView, { companyMetadata } from "@/views/CompanyView";

export const metadata = companyMetadata("uk");

export default function Page() {
  return <CompanyView lang="uk" />;
}
