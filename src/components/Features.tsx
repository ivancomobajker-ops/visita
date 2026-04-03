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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.295 13.7H8.305M8.295 16.7H8.305" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Розумний календар",
    description:
      "Клієнти бачать тільки вільні слоти. Ви контролюєте графік, перерви та вихідні в один клік.",
    color: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Нагадування автоматично",
    description:
      "SMS або Telegram за 24 год і за 2 год до візиту. Неявки зменшуються на 89%.",
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.41 22C3.41 18.13 7.26 15 12 15C12.96 15 13.89 15.13 14.76 15.37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.44 18L17.43 18.99L19.56 17.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "База клієнтів",
    description:
      "Історія візитів, уподобання та нотатки — все під рукою. Персональний підхід без зусиль.",
    color: "from-violet-500 to-purple-600",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.88 18.15V16.08M12 18.15V14.01M17.12 18.15V11.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.12 5.85L16.66 6.38C14.11 9.33 10.69 11.35 6.88 12.15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.19 5.85H17.12V8.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Аналітика доходів",
    description:
      "Дашборд з виручкою, кількістю записів і завантаженістю. Бачите тренди — приймаєте рішення.",
    color: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50",
    lightText: "text-amber-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Персональна сторінка",
    description:
      "Гарна сторінка з вашими послугами, портфоліо та відгуками. Готова приймати клієнтів.",
    color: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    lightText: "text-rose-600",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "SMS та Telegram",
    description:
      "Повідомлення клієнтам через зручний канал. Підтвердження, нагадування та акції — автоматично.",
    color: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-50",
    lightText: "text-cyan-600",
  },
];

export default function Features() {
  const { ref, inView } = useInView();

  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20 mb-5 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-sm font-medium text-[var(--accent-dark)]">
              Можливості
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)] transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Все, що потрібно для{" "}
            <span className="number-highlight">зростання</span>
          </h2>

          <p
            className={`mt-4 text-lg text-[var(--gray-600)] max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Від онлайн-запису до аналітики — один інструмент замість десятка
            сервісів.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl bg-white border border-[var(--gray-100)] p-6 sm:p-7 transition-all duration-700 hover:border-[var(--gray-200)] hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-0.5 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${200 + i * 80}ms` : "0ms" }}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl ${feature.lightBg} ${feature.lightText} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[var(--gray-600)]">
                {feature.description}
              </p>

              {/* Hover gradient accent line */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
