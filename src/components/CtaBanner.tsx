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

export default function CtaBanner() {
  const { ref, inView } = useInView();

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[var(--foreground)]" />
          <div className="absolute inset-0 bg-grid opacity-[0.04]" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--accent)]/[0.15] blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/[0.1] blur-[100px]" />

          <div className="relative px-6 sm:px-12 lg:px-16 py-14 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: text */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Готові забути
                  <br />
                  про хаос із{" "}
                  <span className="text-[var(--accent)]">записами?</span>
                </h2>

                <p className="mt-5 text-lg text-white/60 max-w-md leading-relaxed">
                  Приєднуйтесь до 500+ майстрів, які вже автоматизували свій
                  запис і зосередились на головному — на роботі.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2.5 h-13 px-7 text-base font-semibold text-[var(--foreground)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] rounded-full transition-all duration-200 shadow-lg shadow-[var(--accent)]/20"
                  >
                    Почати безкоштовно
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2.5 h-13 px-7 text-base font-semibold text-white/80 hover:text-white rounded-full border border-white/15 hover:border-white/25 transition-all duration-200"
                  >
                    Дивитись демо
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    14 днів безкоштовно
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.75 12L10.58 14.83L16.25 9.17"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Без картки
                  </span>
                </div>
              </div>

              {/* Right: stats grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    value: "500+",
                    label: "б'юті-майстрів",
                    icon: (
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12ZM20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    ),
                  },
                  {
                    value: "50K+",
                    label: "записів проведено",
                    icon: (
                      <path
                        d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    ),
                  },
                  {
                    value: "89%",
                    label: "менше неявок",
                    icon: (
                      <path
                        d="M6.88 18.15V16.08M12 18.15V14.01M17.12 18.15V11.93M17.12 5.85L16.66 6.38C14.11 9.33 10.69 11.35 6.88 12.15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    ),
                  },
                  {
                    value: "5 хв",
                    label: "до першого запису",
                    icon: (
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    ),
                  },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-5 transition-all duration-700 hover:bg-white/[0.06] hover:border-white/[0.12] ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      transitionDelay: inView ? `${400 + i * 100}ms` : "0ms",
                    }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-3">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        {stat.icon}
                      </svg>
                    </div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/40 mt-1">{stat.label}</p>
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
