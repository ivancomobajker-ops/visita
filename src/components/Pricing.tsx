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

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    text: "Онлайн-запис та контроль розкладу",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    text: "Повний доступ до маркетплейсу",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    text: "Персональний бізнес-кабінет",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    text: "Аналітичні звіти вашого бізнесу",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <circle cx="12" cy="15" r="2" />
        <path d="M12 13v-2" />
      </svg>
    ),
    text: "Публічний профіль із портфоліо",
  },
];

const comparisons = [
  { label: "Щоденник + Excel", price: "0₴", issues: "Хаос, помилки, забуті записи" },
  { label: "Інші CRM-системи", price: "2000–5000₴", issues: "Складно, зайві функції" },
  { label: "Visita", price: "1299₴", issues: "Все, що потрібно — і нічого зайвого", highlighted: true },
];

export default function Pricing() {
  const { ref, inView } = useInView();
  const [hoveredComparison, setHoveredComparison] = useState<number | null>(null);

  return (
    <section id="pricing" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 hero-mesh opacity-40" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[var(--accent)]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/6 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20 mb-5 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-sm font-medium text-[var(--accent-dark)] tracking-wide uppercase">
              Єдиний тариф
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Одна ціна —{" "}
            <span className="number-highlight">всі можливості</span>
          </h2>

          <p
            className={`mt-4 text-lg text-[var(--gray-600)] max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Жодних рівнів, прихованих платежів чи обмежень. Ви отримуєте все.
          </p>
        </div>

        {/* Main pricing layout — two columns */}
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Left: Price card */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-white rounded-3xl border border-[var(--gray-100)] shadow-xl shadow-black/[0.04] overflow-hidden">
              {/* Accent top stripe */}
              <div className="h-1.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-dark)] to-[var(--accent)]" />

              <div className="p-8 sm:p-10">
                {/* Price block */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-8">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl sm:text-7xl font-extrabold text-[var(--foreground)] tracking-tight">
                        1299
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xl font-bold text-[var(--gray-700)]">грн</span>
                        <span className="text-sm text-[var(--gray-500)]">/ місяць</span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(16,185,129)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span className="text-sm font-medium text-emerald-700">14 днів безкоштовно</span>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent-dark)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
                        {feature.icon}
                      </div>
                      <span className="text-sm sm:text-[15px] font-medium text-[var(--gray-700)]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent mb-6" />

                {/* Extra team member note */}
                <div className="flex items-center gap-3 mb-8 px-4 py-3 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <span className="text-sm text-[var(--gray-600)]">
                    <span className="font-semibold text-[var(--foreground)]">+169 грн</span> за кожного додаткового співробітника
                  </span>
                </div>

                {/* CTA button */}
                <button className="w-full h-14 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-base tracking-wide transition-all duration-200 shadow-lg shadow-[var(--accent)]/25 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                  СПРОБУВАТИ БЕЗКОШТОВНО
                </button>

                <p className="text-center text-xs text-[var(--gray-400)] mt-3">
                  Без прив&apos;язки картки · Скасувати можна будь-коли
                </p>
              </div>
            </div>
          </div>

          {/* Right: Why it's worth it */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Comparison table */}
            <div className="bg-white rounded-3xl border border-[var(--gray-100)] shadow-lg shadow-black/[0.03] p-6 sm:p-7 mb-6">
              <h3 className="text-base font-bold text-[var(--foreground)] mb-5">
                Порівняйте самі
              </h3>

              <div className="space-y-3">
                {comparisons.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredComparison(i)}
                    onMouseLeave={() => setHoveredComparison(null)}
                    className={`relative rounded-xl px-4 py-3.5 transition-all duration-300 cursor-default ${
                      item.highlighted
                        ? "bg-[var(--foreground)] text-white"
                        : hoveredComparison === i
                        ? "bg-[var(--gray-50)]"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-sm font-semibold ${item.highlighted ? "text-white" : "text-[var(--foreground)]"}`}>
                        {item.label}
                      </span>
                      <span className={`text-sm font-bold ${item.highlighted ? "text-[var(--accent)]" : "text-[var(--gray-700)]"}`}>
                        {item.price}
                      </span>
                    </div>
                    <p className={`text-xs ${item.highlighted ? "text-gray-300" : "text-[var(--gray-500)]"}`}>
                      {item.issues}
                    </p>
                    {item.highlighted && (
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-6 rounded-l-full bg-[var(--accent)]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="bg-white rounded-3xl border border-[var(--gray-100)] shadow-lg shadow-black/[0.03] p-6 sm:p-7">
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(16,185,129)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    ),
                    title: "Дані в безпеці",
                    desc: "Шифрування та захист 24/7",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                    ),
                    title: "Підтримка за 5 хвилин",
                    desc: "Реальні люди, не боти",
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(99,102,241)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 6l-9.5 9.5-5-5L1 18" />
                        <polyline points="17,6 23,6 23,12" />
                      </svg>
                    ),
                    title: "Оновлення щомісяця",
                    desc: "Нові функції без доплат",
                  },
                ].map((badge, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[var(--gray-50)] flex items-center justify-center">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">{badge.title}</p>
                      <p className="text-xs text-[var(--gray-500)]">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
