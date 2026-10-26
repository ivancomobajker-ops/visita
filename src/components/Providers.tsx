"use client";

import { type ReactNode } from "react";
import { LeadFormProvider } from "./LeadFormContext";
import LeadForm from "./LeadForm";
import { I18nProvider } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/uk";

export default function Providers({
  lang,
  dictionary,
  children,
}: {
  lang: Locale;
  dictionary: Dictionary;
  children: ReactNode;
}) {
  return (
    <I18nProvider lang={lang} dictionary={dictionary}>
      <LeadFormProvider>
        {children}
        <LeadForm />
      </LeadFormProvider>
    </I18nProvider>
  );
}
