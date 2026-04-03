"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1800, steps = 50, inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { cur = target; clearInterval(t); }
          setCount(Math.floor(cur));
        }, dur / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const cities = [
  "Київ", "Львів", "Одеса", "Харків", "Дніпро", "Вінниця", "Запоріжжя",
  "Полтава", "Чернівці", "Ужгород", "Рівне", "Тернопіль", "Івано-Франківськ",
];

export default function SocialProof() {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1 — accent highlight */}
          <div
            className={`relative group rounded-3xl bg-[var(--accent)] p-6 sm:p-7 overflow-hidden transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tighter leading-none mb-1">
                <AnimatedNumber target={500} suffix="+" />
              </p>
              <p className="text-sm font-medium text-[var(--foreground)]/70">
                Майстрів та салонів
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`relative group rounded-3xl bg-white border border-[var(--gray-100)] p-6 sm:p-7 overflow-hidden transition-all duration-700 delay-75 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-[var(--accent-light)] rounded-full translate-y-1/3 translate-x-1/3 opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tighter leading-none mb-1">
                <AnimatedNumber target={50} suffix="K+" />
              </p>
              <p className="text-sm font-medium text-[var(--gray-500)]">
                Записів щомісяця
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`relative group rounded-3xl bg-white border border-[var(--gray-100)] p-6 sm:p-7 overflow-hidden transition-all duration-700 delay-150 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-50 rounded-full -translate-y-1/2 -translate-x-1/2 opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <p className="text-4xl sm:text-5xl font-extrabold text-[var(--foreground)] tracking-tighter leading-none mb-1">
                <AnimatedNumber target={89} suffix="%" />
              </p>
              <p className="text-sm font-medium text-[var(--gray-500)]">
                Менше неявок
              </p>
            </div>
          </div>

          {/* Card 4 — dark accent */}
          <div
            className={`relative group rounded-3xl bg-[var(--foreground)] p-6 sm:p-7 overflow-hidden transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[var(--accent)]/15 rounded-full translate-y-1/3 -translate-x-1/3" />
            <div className="relative">
              <div className="flex items-center gap-1 mb-1">
                <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter leading-none">
                  <AnimatedNumber target={4} suffix=".9" />
                </p>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" className="mt-1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-white/60">
                Середня оцінка
              </p>
            </div>
          </div>
        </div>

        {/* Cities — inline */}
        <div
          className={`mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 transition-all duration-700 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.15em] text-[var(--gray-400)] font-medium mr-2">
            Довіряють у
          </span>
          {cities.map((city, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full bg-[var(--gray-50)] border border-[var(--gray-100)] text-xs font-medium text-[var(--gray-500)]"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
