import type { ReactNode } from "react";
import RootDocument, { rootMetadata } from "@/components/RootDocument";

export const metadata = rootMetadata("uk");

export default function UkLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="uk">{children}</RootDocument>;
}
