import CompanyView, { companyMetadata } from "@/views/CompanyView";

export const metadata = companyMetadata("en");

export default function Page() {
  return <CompanyView lang="en" />;
}
