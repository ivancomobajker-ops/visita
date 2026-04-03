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
  { time: "09:12", app: "Telegram", dot: "#2AABEE", msg: "Оля: Привіт! А можна на завтра о 15?" },
  { time: "09:14", app: "Instagram", dot: "#E4405F", msg: "anna_beauty: Працюєте в неділю??" },
  { time: "10:05", app: "Дзвінок", dot: "#F97316", msg: "+380 67 ••• — під час фарбування" },
  { time: "11:30", app: "Viber", dot: "#7360F2", msg: "Марина: Хочу перенести на п'ятницю" },
  { time: "13:45", app: "SMS", dot: "#22C55E", msg: "Не прийду сьогодні, забула((" },
  { time: "14:20", app: "Блокнот", dot: "#EAB308", msg: "Хто записаний на 16:00? Не розібрати…" },
];

const calendarSlots = [
  { time: "10:00", name: "Оля Мельник", srv: "Манікюр · 1 год", confirmed: true },
  { time: "11:30", name: "Анна Коваль", srv: "Фарбування · 2 год", confirmed: true },
  { time: "14:00", name: "Марина Шевч.", srv: "Стрижка · 45 хв", isNew: true },
  { time: "15:00", name: "", free: true },
];

/* ---- Chaos Card ---- */
function ChaosCard() {
  return (
    <div className="relative bg-[var(--foreground)] rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--gray-200)] shadow-xl shadow-black/[0.05]">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-red-500/[0.06] blur-[100px]" />
      <div className="absolute -bottom-32 -left-32 w-60 h-60 rounded-full bg-orange-500/[0.05] blur-[80px]" />

      {/* Label */}
      <div className="relative flex items-center gap-2 mb-5">
        <div className="w-6 h-6 rounded-md bg-red-500/15 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 9V14M11.99 17H12.01" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 21.41H5.94C2.47 21.41 1.02 18.93 2.7 15.9L5.82 10.28L8.76 5C10.54 1.79 13.46 1.79 15.24 5L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-xs font-bold text-red-400 uppercase tracking-widest">
          Типовий день без Visita
        </span>
      </div>

      {/* Messages grid */}
      <div className="relative grid sm:grid-cols-2 gap-2.5">
        {chaosItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.06]">
            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.dot }} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono text-white/25">{item.time}</span>
                <span className="text-[10px] font-semibold text-white/40">{item.app}</span>
              </div>
              <p className="text-[12px] sm:text-[13px] text-white/55 truncate">{item.msg}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="relative mt-5 pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-4">
        {[
          { val: "~3 год", label: "на переписки", color: "text-red-400" },
          { val: "23%", label: "неявки", color: "text-orange-400" },
          { val: "5+", label: "каналів зв'язку", color: "text-amber-400" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <p className={`text-lg sm:text-xl font-extrabold ${s.color}`}>{s.val}</p>
            <p className="text-[11px] text-white/30 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Visita Card ---- */
function VisitaCard() {
  return (
    <div className="relative bg-white rounded-3xl p-6 sm:p-8 overflow-hidden border border-[var(--gray-200)] shadow-xl shadow-black/[0.05]">
      <div className="absolute inset-0 hero-mesh opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[var(--accent)]/[0.08] blur-[100px]" />

      {/* Label */}
      <div className="relative flex items-center gap-2 mb-5">
        <div className="w-6 h-6 rounded-md bg-emerald-100 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
          Той самий день з Visita
        </span>
      </div>

      {/* Calendar mockup */}
      <div className="relative rounded-2xl border border-[var(--gray-100)] bg-[var(--background)] mockup-shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--gray-100)]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[var(--accent)] flex items-center justify-center">
              <span className="text-[9px] font-extrabold text-[var(--foreground)]">V</span>
            </div>
            <span className="text-sm font-bold text-[var(--foreground)]">Четвер, 3 квітня</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-medium text-emerald-600">Онлайн</span>
          </div>
        </div>

        <div className="divide-y divide-[var(--gray-50)]">
          {calendarSlots.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2.5">
              <span className="text-[12px] font-mono text-[var(--gray-400)] w-10 shrink-0 tabular-nums">
                {s.time}
              </span>
              {s.free ? (
                <div className="flex-1 rounded-xl border border-dashed border-[var(--accent)]/30 bg-[var(--accent-light)]/30 py-2 text-center">
                  <span className="text-[11px] font-medium text-[var(--accent-dark)]">
                    + Відкритий для бронювання
                  </span>
                </div>
              ) : (
                <div className={`flex-1 rounded-xl px-3.5 py-2 ${s.isNew ? "bg-[var(--accent-light)] border border-[var(--accent)]/20" : "bg-emerald-50 border border-emerald-100"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-[var(--foreground)]">{s.name}</span>
                    {s.isNew ? (
                      <span className="text-[9px] font-bold text-[var(--foreground)] bg-[var(--accent)] px-2 py-0.5 rounded-full">НОВИЙ</span>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] text-[var(--gray-500)]">{s.srv}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Auto-reminder */}
      <div className="relative mt-3 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--accent-light)] border border-[var(--accent)]/15">
        <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="var(--accent-dark)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-[var(--foreground)]">Нагадування відправлені автоматично</p>
          <p className="text-[10px] text-[var(--gray-500)]">Оля та Анна отримали SMS за 2 год до візиту</p>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mt-4 pt-4 border-t border-[var(--gray-100)] grid grid-cols-3 gap-4">
        {[
          { val: "0 хв", label: "на ручні записи", color: "text-emerald-500" },
          { val: "89%", label: "менше неявок", color: "text-[var(--accent-dark)]" },
          { val: "1 лінк", label: "замість 5 каналів", color: "text-[var(--foreground)]" },
        ].map((s, i) => (
          <div key={i} className="text-center">
            <p className={`text-lg sm:text-xl font-extrabold ${s.color}`}>{s.val}</p>
            <p className="text-[11px] text-[var(--gray-400)] mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- Main Component ---- */
export default function ProblemSolution() {
  const { ref, inView } = useInView();
  const [showVisita, setShowVisita] = useState(false);

  return (
    <section ref={ref} className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 hero-mesh opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className={`text-center max-w-xl mx-auto mb-10 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-sm font-medium text-[var(--accent-dark)]">Знайоме?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Як виглядає ваш запис <span className="number-highlight">зараз</span>
          </h2>
          <p className="mt-3 text-base text-[var(--gray-500)]">Натисніть, щоб побачити різницю</p>
        </div>

        {/* Toggle — SVG icons instead of emojis */}
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="relative inline-flex items-center p-1 rounded-full bg-[var(--gray-100)] border border-[var(--gray-200)]">
            <div
              className={`absolute top-1 bottom-1 rounded-full transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                showVisita
                  ? "left-[calc(50%+2px)] right-1 bg-[var(--foreground)]"
                  : "left-1 right-[calc(50%+2px)] bg-white shadow-sm"
              }`}
            />
            <button
              onClick={() => setShowVisita(false)}
              className={`relative z-10 flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                !showVisita ? "text-[var(--foreground)]" : "text-[var(--gray-400)]"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15.36 14.3L13.06 12L15.36 9.7C15.65 9.41 15.65 8.93 15.36 8.64C15.07 8.35 14.59 8.35 14.3 8.64L12 10.94L9.7 8.64C9.41 8.35 8.93 8.35 8.64 8.64C8.35 8.93 8.35 9.41 8.64 9.7L10.94 12L8.64 14.3C8.35 14.59 8.35 15.07 8.64 15.36C8.79 15.51 8.98 15.58 9.17 15.58C9.36 15.58 9.55 15.51 9.7 15.36L12 13.06L14.3 15.36C14.45 15.51 14.64 15.58 14.83 15.58C15.02 15.58 15.21 15.51 15.36 15.36C15.65 15.07 15.65 14.59 15.36 14.3Z" fill="currentColor" />
              </svg>
              Хаос
            </button>
            <button
              onClick={() => setShowVisita(true)}
              className={`relative z-10 flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                showVisita ? "text-white" : "text-[var(--gray-400)]"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Visita
            </button>
          </div>
        </div>

        {/* Cards — cross-fade (both rendered, one visible at a time) */}
        <div className={`relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              showVisita
                ? "opacity-0 scale-[0.97] pointer-events-none absolute inset-x-0 top-0"
                : "opacity-100 scale-100"
            }`}
          >
            <ChaosCard />
          </div>

          <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              showVisita
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[0.97] pointer-events-none absolute inset-x-0 top-0"
            }`}
          >
            <VisitaCard />
          </div>
        </div>
      </div>
    </section>
  );
}
