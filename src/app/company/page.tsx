import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: `Про компанію — ${COMPANY.brand} | ${COMPANY.shortName}`,
  description: `${COMPANY.brand} — онлайн-платформа для запису на послуги, що належить та управляється ${COMPANY.shortName}. Код ЄДРПОУ ${COMPANY.edrpou}.`,
  alternates: { canonical: "/company" },
};

const details = [
  { term: "Повна назва", value: COMPANY.fullName },
  { term: "Скорочена назва", value: COMPANY.shortName },
  { term: "Назва латиницею", value: COMPANY.latinName },
  { term: "Код ЄДРПОУ", value: COMPANY.edrpou },
  { term: "Юридична адреса", value: COMPANY.address.full },
];

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main className="relative flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Про компанію
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--gray-600)]">
            {COMPANY.brand} — онлайн-платформа для запису на послуги, що належить
            та управляється {COMPANY.shortName}.
          </p>

          <section aria-labelledby="legal-details" className="mt-10">
            <h2 id="legal-details" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Реквізити
            </h2>
            <dl className="mt-4 rounded-2xl border border-[var(--gray-100)] bg-white divide-y divide-[var(--gray-100)]">
              {details.map((item) => (
                <div key={item.term} className="flex flex-col sm:flex-row gap-1 sm:gap-6 p-5">
                  <dt className="sm:w-48 shrink-0 text-sm text-[var(--gray-500)]">{item.term}</dt>
                  <dd className="text-[15px] font-medium text-[var(--foreground)] break-words">{item.value}</dd>
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 p-5">
                <dt className="sm:w-48 shrink-0 text-sm text-[var(--gray-500)]">Електронна пошта</dt>
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
              {COMPANY.brand} та {COMPANY.shortName}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--gray-600)]">
              Платформа {COMPANY.brand} та цей вебсайт належать {COMPANY.shortName}{" "}
              ({COMPANY.latinName}, код ЄДРПОУ {COMPANY.edrpou}). Компанія є власником
              та оператором платформи {COMPANY.brand}.
            </p>
          </section>

          <section aria-labelledby="official-records" className="mt-10">
            <h2 id="official-records" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
              Офіційна інформація про компанію
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--gray-600)]">
              Відомості про {COMPANY.shortName} з Єдиного державного реєстру доступні
              у відкритих джерелах:
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
                    <span className="sr-only"> (відкривається в новій вкладці)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
