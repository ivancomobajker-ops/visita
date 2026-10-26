"use client";

import { useEffect, useRef, useState } from "react";
import { useLeadForm } from "./LeadFormContext";
import { useI18n } from "@/i18n/I18nProvider";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// Last row is "hidden fees": Visita has none, others do (shown as a red cross).
const competitorMarks = [
  { us: true, them: true },
  { us: true, them: false },
  { us: true, them: false },
  { us: true, them: false },
  { us: true, them: false },
  { us: false, them: true, negative: true },
];

export default function Pricing() {
  const { ref, inView } = useInView(0.1);
  const { open: openLeadForm } = useLeadForm();
  const { t: dict } = useI18n();
  const t = dict.pricing;
  const competitorRows = competitorMarks.map((m, i) => ({ ...m, feature: t.rows[i] }));
  const [priceAnimated, setPriceAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setPriceAnimated(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="pricing" className="relative py-16 sm:py-24 overflow-hidden">
      <div ref={ref} className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.title}
          </h2>
          <p
            className={`mt-3 text-lg text-[var(--gray-500)] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-start transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left — competitor comparison (gray, subdued) */}
          <div className="rounded-3xl bg-[var(--gray-50)] border border-[var(--gray-100)] p-6 sm:p-8">
            <p className="text-sm font-semibold text-[var(--gray-400)] uppercase tracking-wider mb-6">
              {t.typical}
            </p>

            <div className="space-y-0">
              {competitorRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 border-b border-[var(--gray-100)] last:border-0"
                >
                  <span className="text-sm text-[var(--gray-600)]">{row.feature}</span>
                  <div className="flex items-center gap-6">
                    {/* Them */}
                    <div className="w-16 flex justify-center">
                      {row.them ? (
                        row.negative ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20,6 9,17 4,12" />
                          </svg>
                        )
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-300)" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14" />
                        </svg>
                      )}
                    </div>
                    {/* Us */}
                    <div className="w-16 flex justify-center">
                      {row.us ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M5 12h14" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column labels */}
            <div className="flex items-center justify-end mt-4 gap-6">
              <span className="w-16 text-center text-xs font-medium text-[var(--gray-400)]">{t.others}</span>
              <span className="w-16 text-center text-xs font-bold text-[var(--accent-dark)]">Visita</span>
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--gray-100)] flex items-end justify-between">
              <div>
                <p className="text-xs text-[var(--gray-400)]">{t.typicalCost}</p>
                <p className="text-lg font-bold text-[var(--gray-500)]">{t.typicalPrice}<span className="text-sm font-normal text-[var(--gray-400)]"> {t.perMonth}</span></p>
              </div>
              <p className="text-xs text-[var(--gray-400)]">{t.hiddenFees}</p>
            </div>
          </div>

          {/* Right — Visita price card (highlighted) */}
          <div className="relative rounded-3xl bg-white border-2 border-[var(--accent)] shadow-xl shadow-[var(--accent)]/10 overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-6 bg-[var(--accent)] text-[var(--foreground)] text-xs font-bold px-4 py-1.5 rounded-b-xl">
              {t.bestChoice}
            </div>

            <div className="px-6 sm:px-8 pt-8 pb-7">
              {/* Price */}
              <div className="flex items-end gap-2 mb-1">
                <span
                  className={`text-6xl sm:text-7xl font-extrabold text-[var(--foreground)] tracking-tighter leading-none transition-all duration-1000 ${
                    priceAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  {t.price}
                </span>
                <div className="flex flex-col mb-2">
                  <span className="text-lg font-bold text-[var(--accent-dark)]">{t.currency}</span>
                  <span className="text-sm text-[var(--gray-400)] -mt-1">{t.perMonth}</span>
                </div>
              </div>

              <p className="text-sm text-[var(--gray-500)] mb-6">
                {t.trial}
              </p>

              {/* CTA */}
              <button onClick={openLeadForm} className="w-full h-13 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-base tracking-wide transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mb-6">
                {dict.common.tryFree}
              </button>

              {/* Features list */}
              <ul className="space-y-3">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <circle cx="12" cy="12" r="10" fill="var(--accent-light)" />
                      <path d="M8 12l2.5 2.5L16 9.5" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-[var(--foreground)]">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Team add-on */}
              <div className="mt-6 pt-5 border-t border-[var(--gray-100)] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" y1="8" x2="19" y2="14" />
                  <line x1="22" y1="11" x2="16" y2="11" />
                </svg>
                <span className="text-sm text-[var(--gray-500)]">
                  {t.team} <span className="font-bold text-[var(--foreground)]">{t.teamPrice}</span> {t.perEmployee}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
