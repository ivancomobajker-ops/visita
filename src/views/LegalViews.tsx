import LegalPage from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";
import { fill, getDictionary, pageMetadata, type Locale } from "@/i18n";
import PrivacyUk from "./legal/PrivacyUk";
import PrivacyEn from "./legal/PrivacyEn";
import TermsUk from "./legal/TermsUk";
import TermsEn from "./legal/TermsEn";

// Date of the current version of both documents.
const UPDATED = "26.10.2026";

export function privacyMetadata(lang: Locale) {
  const t = getDictionary(lang).meta;
  return pageMetadata(lang, "/privacy", {
    title: `${t.privacyTitle} — ${COMPANY.brand}`,
    description: fill(t.privacyDescription, { company: COMPANY.shortName }),
  });
}

export function termsMetadata(lang: Locale) {
  const t = getDictionary(lang).meta;
  return pageMetadata(lang, "/terms", {
    title: `${t.termsTitle} — ${COMPANY.brand}`,
    description: fill(t.termsDescription, { company: COMPANY.shortName }),
  });
}

export function PrivacyView({ lang }: { lang: Locale }) {
  return (
    <LegalPage lang={lang} title={getDictionary(lang).meta.privacyTitle} updated={UPDATED}>
      {lang === "en" ? <PrivacyEn /> : <PrivacyUk />}
    </LegalPage>
  );
}

export function TermsView({ lang }: { lang: Locale }) {
  return (
    <LegalPage lang={lang} title={getDictionary(lang).meta.termsTitle} updated={UPDATED}>
      {lang === "en" ? <TermsEn /> : <TermsUk />}
    </LegalPage>
  );
}
