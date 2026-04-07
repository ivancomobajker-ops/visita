"use client";

import { type ReactNode } from "react";
import { LeadFormProvider } from "./LeadFormContext";
import LeadForm from "./LeadForm";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LeadFormProvider>
      {children}
      <LeadForm />
    </LeadFormProvider>
  );
}
