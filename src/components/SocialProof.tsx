"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="number-highlight">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Майстрів та салонів",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6 20C6 17.7909 8.68629 16 12 16C15.3137 16 18 17.7909 18 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: 50,
      suffix: "K+",
      label: "Записів щомісяця",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: 89,
      suffix: "%",
      label: "Менше неявок",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7.75 12L10.58 14.83L16.25 9.17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      value: 4,
      suffix: ".9",
      label: "Середня оцінка",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M13.73 3.51L15.49 7.03C15.73 7.52 16.37 7.99 16.91 8.08L20.1 8.61C22.14 8.95 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02 21.35C5.88 22.62 4.58 21.67 5.14 19.25L5.85 16.18C5.98 15.6 5.75 14.79 5.33 14.37L2.85 11.89C1.39 10.43 1.86 8.95 3.9 8.61L7.09 8.08C7.62 7.99 8.26 7.52 8.5 7.03L10.26 3.51C11.22 1.6 12.78 1.6 13.73 3.51Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-10 sm:py-14">
      <div className="social-proof-line w-full" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[var(--accent-light)] text-[var(--accent-dark)] mb-3 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm sm:text-[15px] text-[var(--gray-500)] font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust logos / badges */}
        <div className="mt-12 pt-10 border-t border-[var(--gray-100)]">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--gray-400)] font-medium mb-6">
            Нам довіряють майстри з усієї України
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "Київ",
              "Львів",
              "Одеса",
              "Харків",
              "Дніпро",
              "Вінниця",
              "Запоріжжя",
            ].map((city) => (
              <span
                key={city}
                className="text-[var(--gray-300)] text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-[var(--gray-500)]"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="social-proof-line w-full" />
    </section>
  );
}
