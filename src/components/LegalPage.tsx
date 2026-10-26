import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getDictionary, type Locale } from "@/i18n";

// Shared layout for text pages: privacy policy, terms of use.
export default function LegalPage({
  lang,
  title,
  updated,
  children,
}: {
  lang: Locale;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const t = getDictionary(lang).legal;

  return (
    <>
      <Header />
      <main className="relative flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[var(--gray-500)]">
            {t.updated} {updated}
          </p>
          {t.translationNote && (
            <p className="mt-4 rounded-xl border border-[var(--gray-100)] bg-[var(--gray-50)] px-4 py-3 text-sm text-[var(--gray-600)]">
              {t.translationNote}
            </p>
          )}
          <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-[var(--gray-600)] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[var(--foreground)] [&_h2]:mb-3 [&_p+p]:mt-3 [&_ul+p]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mt-3 [&_a]:text-[var(--accent-dark)] [&_a:hover]:underline">
            {children}
          </div>
        </article>
      </main>
      <Footer lang={lang} />
    </>
  );
}
