import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/company";
import { fill, getDictionary, pageMetadata, type Locale } from "@/i18n";

// English readers see the Latin-script name first, with the official Ukrainian name after it.
function companyValues(lang: Locale) {
  return {
    company: lang === "en" ? `${COMPANY.latinName} (${COMPANY.shortName})` : COMPANY.shortName,
    latin: COMPANY.latinName,
    edrpou: COMPANY.edrpou,
  };
}

export function companyMetadata(lang: Locale) {
  const t = getDictionary(lang).company;
  const values = companyValues(lang);
  return pageMetadata(lang, "/company", {
    title: `${t.title} — ${COMPANY.brand} | ${lang === "en" ? COMPANY.latinName : COMPANY.shortName}`,
    description: fill(t.metaDescription, values),
  });
}

export default function CompanyView({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).company;
  const values = companyValues(lang);

  const details = [
    { term: t.fullName, value: COMPANY.fullName },
    { term: t.shortName, value: COMPANY.shortName },
    { term: t.latinName, value: COMPANY.latinName },
    { term: t.edrpou, value: COMPANY.edrpou },
    { term: t.address, value: COMPANY.address.full },
  ];

  return (
    <>
      <Header />
      <main className="relative flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            {t.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--gray-600)]">
            {fill(t.intro, values)}
          </p>

          <section aria-labelledby="legal-details" className="mt-10">
            <h2 id="legal-details" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              {t.details}
            </h2>
            <dl className="mt-4 rounded-2xl border border-[var(--gray-100)] bg-white divide-y divide-[var(--gray-100)]">
              {details.map((item) => (
                <div key={item.term} className="flex flex-col sm:flex-row gap-1 sm:gap-6 p-5">
                  <dt className="sm:w-48 shrink-0 text-sm text-[var(--gray-500)]">{item.term}</dt>
                  <dd className="text-[15px] font-medium text-[var(--foreground)] break-words">{item.value}</dd>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 p-5">
                <dt className="sm:w-48 shrink-0 text-sm text-[var(--gray-500)]">{t.email}</dt>
                <dd className="text-[15px] font-medium">
                  <a href={`mailto:${COMPANY.email}`} className="text-[var(--accent-dark)] hover:underline break-all">
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="relationship" className="mt-10">
            <h2 id="relationship" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              {fill(t.relationshipTitle, values)}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--gray-600)]">
              {fill(t.relationship, values)}
            </p>
          </section>

          <section aria-labelledby="official-records" className="mt-10">
            <h2 id="official-records" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              {t.officialTitle}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--gray-600)]">
              {fill(t.officialIntro, values)}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {COMPANY.registryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--accent-dark)] hover:underline break-all"
                  >
                    {link.label}: {link.href}
                    <span className="sr-only">{t.newTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
