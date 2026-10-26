import Image from "next/image";
import Link from "next/link";
import CtaButton from "./CtaButton";
import { COMPANY } from "@/lib/company";
import { getDictionary, localePath, type Locale } from "@/i18n";

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const t = dict.footer;
  const nav = dict.nav;
  const home = localePath(lang, "/");
  return (
    <footer className="relative bg-[var(--foreground)] overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-24 bg-[var(--accent)]/8 blur-[80px]" />

      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-16 pb-8">
        {/* Top row: big CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 pb-10 border-b border-white/[0.06]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {t.ctaLine1}<br />
              <span className="text-[var(--accent)]">{t.ctaLine2}</span>
            </h3>
          </div>
          <CtaButton
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-sm rounded-full transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 shrink-0 cursor-pointer"
          >
            {dict.common.tryFree}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CtaButton>
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left — brand */}
          <div className="max-w-xs">
            <Link href={home} className="inline-flex items-center gap-3 mb-3 group">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden bg-[var(--accent)] flex items-center justify-center">
                <Image src="/appIcon.png" alt={dict.common.logoAlt} fill sizes="40px" className="object-cover" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Visita
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/30 mb-4">
              {t.tagline}
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/visita.com.ua/"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            
            </div>
          </div>

          {/* Nav links in a row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: nav.howItWorks, href: `${home}#how-it-works` },
              { label: nav.features, href: `${home}#features` },
              { label: nav.pricing, href: `${home}#pricing` },
              { label: nav.faq, href: `${home}#faq` },
              { label: nav.company, href: localePath(lang, "/company") },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/30 hover:text-[var(--accent)] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <a href="mailto:office@visita.com.ua" className="text-sm text-white/30 hover:text-[var(--accent)] transition-colors">
              office@visita.com.ua
            </a>
      
          </div>
        </div>

        {/* Company identification */}
        <div className="mt-10 pt-8 border-t border-white/[0.06]">
          <p className="text-sm font-semibold text-white/70 mb-2">
            {t.platform}
          </p>
          <div className="flex flex-col gap-1 text-[13px] leading-relaxed text-white/50">
            <p>
              {t.owner}{" "}
              <span className="text-white/70">
                {COMPANY.shortName}
                {lang === "en" && ` (${COMPANY.latinName})`}
              </span>
            </p>
            <p>
              {t.edrpou} <span className="text-white/70">{COMPANY.edrpou}</span>
            </p>
            <p>
              {t.email}{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-[var(--accent)] transition-colors break-all">
                {COMPANY.email}
              </a>
            </p>
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              {[
                { label: t.companyInfo, href: localePath(lang, "/company") },
                { label: t.privacy, href: localePath(lang, "/privacy") },
                { label: t.terms, href: localePath(lang, "/terms") },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-white/70 underline underline-offset-2 decoration-white/20 hover:text-[var(--accent)] hover:decoration-[var(--accent)] transition-colors">
                  {link.label}
                </Link>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20">
            © 2026 Visita · {COMPANY.shortName}. {t.rights}
          </p>
          <p className="text-[11px] text-white/20">
            {t.madeWith} <span className="text-[var(--accent)]">♥</span> {t.inUkraine}
          </p>
        </div>
      </div>
    </footer>
  );
}
