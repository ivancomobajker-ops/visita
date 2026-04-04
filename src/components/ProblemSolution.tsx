"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
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

/* ---- Data ---- */
const chaosItems = [
  { app: "Telegram", dot: "#2AABEE", msg: "Оля: А можна на завтра о 15?" },
  { app: "Instagram", dot: "#E4405F", msg: "Працюєте в неділю??" },
  { app: "Дзвінок", dot: "#F97316", msg: "+380 67 ••• — під час фарбування" },
  { app: "Viber", dot: "#7360F2", msg: "Хочу перенести на п'ятницю" },
];

const visitaItems = [
  { time: "10:00", name: "Оля М.", srv: "Манікюр", confirmed: true },
  { time: "11:30", name: "Анна К.", srv: "Фарбування", confirmed: true },
  { time: "14:00", name: "Марина Ш.", srv: "Стрижка", isNew: true },
];

export default function ProblemSolution() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 hero-mesh opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className={`text-center max-w-xl mx-auto mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Як виглядає ваш запис <span className="number-highlight">зараз</span>
          </h2>
          <p className="mt-3 text-lg text-[var(--gray-500)]">Порівняйте два підходи до ведення записів</p>
        </div>

        {/* Two-column comparison */}
        <div className={`grid md:grid-cols-2 gap-5 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left — Chaos */}
          <div className="relative bg-[var(--foreground)] rounded-3xl p-7 sm:p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.04]" />
            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-red-500/[0.06] blur-[100px]" />

            {/* Label */}
            <div className="relative flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-red-500/15 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-base font-bold text-white">
                День без Visita
              </span>
            </div>

            {/* Messages */}
            <div className="relative space-y-2.5">
              {chaosItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.06]">
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.dot }} />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-white/40 block mb-0.5">{item.app}</span>
                    <p className="text-sm text-white/60 truncate">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="relative mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-4">
              {[
                { val: "~3 год", label: "на переписки", color: "text-red-400" },
                { val: "23%", label: "неявки", color: "text-orange-400" },
                { val: "5+", label: "каналів", color: "text-amber-400" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className={`text-xl sm:text-2xl font-extrabold ${s.color}`}>{s.val}</p>
                  <p className="text-xs text-white/30 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visita */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-8 overflow-hidden border border-[var(--gray-200)] shadow-xl shadow-black/[0.04]">
            <div className="absolute inset-0 hero-mesh opacity-30" />

            {/* Label */}
            <div className="relative flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-base font-bold text-[var(--foreground)]">
                День з Visita
              </span>
            </div>

            {/* Calendar */}
            <div className="relative rounded-2xl border border-[var(--gray-100)] bg-[var(--background)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--gray-100)]">
                <span className="text-sm font-bold text-[var(--foreground)]">Четвер, 3 квітня</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-emerald-600">Онлайн</span>
                </div>
              </div>

              <div className="divide-y divide-[var(--gray-50)]">
                {visitaItems.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3">
                    <span className="text-sm font-mono text-[var(--gray-400)] w-12 shrink-0 tabular-nums">
                      {s.time}
                    </span>
                    <div className={`flex-1 rounded-xl px-4 py-2.5 ${s.isNew ? "bg-[var(--accent-light)] border border-[var(--accent)]/20" : "bg-emerald-50 border border-emerald-100"}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[var(--foreground)]">{s.name}</span>
                        {s.isNew ? (
                          <span className="text-[10px] font-bold text-[var(--foreground)] bg-[var(--accent)] px-2 py-0.5 rounded-full">НОВИЙ</span>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs text-[var(--gray-500)]">{s.srv}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-reminder */}
            <div className="relative mt-3 flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--accent-light)] border border-[var(--accent)]/15">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="var(--accent-dark)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-sm text-[var(--foreground)]">
                <span className="font-semibold">Нагадування автоматично</span>
                <span className="text-[var(--gray-500)]"> · SMS за 2 год</span>
              </p>
            </div>

            {/* Stats */}
            <div className="relative mt-5 pt-5 border-t border-[var(--gray-100)] grid grid-cols-3 gap-4">
              {[
                { val: "0 хв", label: "ручних записів", color: "text-emerald-500" },
                { val: "−89%", label: "неявок", color: "text-[var(--accent-dark)]" },
                { val: "1 лінк", label: "замість 5 каналів", color: "text-[var(--foreground)]" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className={`text-xl sm:text-2xl font-extrabold ${s.color}`}>{s.val}</p>
                  <p className="text-xs text-[var(--gray-400)] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
