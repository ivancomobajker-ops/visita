"use client";

import { useEffect, useRef, useState } from "react";

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

const included = [
  "Маркетплейс",
  "Бізнес-кабінет",
  "Онлайн-запис",
  "Аналітика",
  "Портфоліо",
  "Захист даних",
];

export default function Pricing() {
  const { ref, inView } = useInView(0.1);
  const [priceAnimated, setPriceAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setPriceAnimated(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="pricing" className="relative py-16 sm:py-20 overflow-hidden">
      <div ref={ref} className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20 mb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-sm font-medium text-[var(--accent-dark)] tracking-wide uppercase">
              Тариф
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Одна ціна — все включено
          </h2>
        </div>

        {/* Two-column layout: left = price card, right = comparison */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-6 items-start transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left — Price card (3 cols) */}
          <div className="lg:col-span-3 relative">
            <div className="relative bg-white rounded-3xl border border-[var(--gray-200)] shadow-xl shadow-black/5 overflow-hidden">
              {/* Accent top stripe */}
              <div className="h-1.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-dark)] to-[var(--accent)]" />

              <div className="px-6 sm:px-8 pt-8 pb-7">
                {/* Price */}
                <div className="flex items-end gap-2 mb-1">
                  <span
                    className={`text-6xl sm:text-7xl font-extrabold text-[var(--foreground)] tracking-tighter leading-none transition-all duration-1000 ${
                      priceAnimated ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                  >
                    1299
                  </span>
                  <div className="flex flex-col mb-2">
                    <span className="text-lg font-bold text-[var(--accent-dark)]">грн</span>
                    <span className="text-sm text-[var(--gray-400)] -mt-1">/ міс</span>
                  </div>
                </div>

                {/* Trial badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(34,197,94)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span className="text-xs font-semibold text-emerald-600">14 днів безкоштовно</span>
                  </div>
                  <span className="text-xs text-[var(--gray-400)]">Без картки</span>
                </div>

                {/* Feature chips — wrapped row */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {included.map((name, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)] text-sm text-[var(--foreground)] font-medium"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      {name}
                    </span>
                  ))}
                </div>

                {/* Team add-on */}
                <div className="flex items-center gap-2 mb-6 px-4 py-2.5 rounded-xl bg-[var(--accent-light)]/50 border border-[var(--accent)]/15">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <line x1="19" y1="8" x2="19" y2="14" />
                    <line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                  <span className="text-sm text-[var(--foreground)]">
                    <span className="font-bold">+169 грн</span>
                    <span className="text-[var(--gray-500)]"> / співробітник</span>
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full h-13 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-base tracking-wide transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                  СПРОБУВАТИ БЕЗКОШТОВНО
                </button>
              </div>
            </div>
          </div>

          {/* Right — Comparison stack (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {/* Щоденник */}
            <div className="px-5 py-4 rounded-2xl bg-white border border-[var(--gray-100)] hover:border-[var(--gray-200)] transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    <line x1="8" y1="7" x2="16" y2="7" />
                    <line x1="8" y1="11" x2="13" y2="11" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-[var(--gray-700)]">Щоденник + Excel</span>
                  <span className="block text-xs font-bold text-[var(--gray-400)]">0 ₴</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Загублені записи", "Немає нагадувань", "Нуль аналітики"].map((p, j) => (
                  <span key={j} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-xs text-red-400 font-medium">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Інші CRM */}
            <div className="px-5 py-4 rounded-2xl bg-white border border-[var(--gray-100)] hover:border-[var(--gray-200)] transition-all duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <path d="M6 8h4M6 11h3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-[var(--gray-700)]">Інші CRM</span>
                  <span className="block text-xs font-bold text-[var(--gray-400)]">2 000 – 5 000 ₴</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Зайві функції", "Складне навчання", "Прихована вартість"].map((p, j) => (
                  <span key={j} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-xs text-red-400 font-medium">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Visita highlight */}
            <div className="px-5 py-4 rounded-2xl bg-[var(--accent-light)] border border-[var(--accent)]/25">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center shrink-0 shadow-md shadow-[var(--accent)]/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9,12 11,14 15,10" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-bold text-[var(--foreground)]">Visita</span>
                  <span className="block text-xs font-extrabold text-[var(--accent-dark)]">1 299 ₴</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Все в одному", "Легкий старт", "Підтримка 24/7"].map((p, j) => (
                  <span key={j} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--accent)]/15 text-xs text-[var(--accent-dark)] font-semibold">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
