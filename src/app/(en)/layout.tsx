import type { ReactNode } from "react";
import RootDocument, { rootMetadata } from "@/components/RootDocument";

export const metadata = rootMetadata("en");

export default function EnLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
