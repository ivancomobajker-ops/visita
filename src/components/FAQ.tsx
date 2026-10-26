"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

function useInView(threshold = 0.1) {
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


export default function FAQ() {
  const { ref, inView } = useInView();
  const t = useI18n().t.faq;
  const faqs = t.items;
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div
          className={`mb-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            {t.title}
          </h2>
          <p className="mt-2 text-lg text-[var(--gray-500)]">
            {t.notFound}{" "}
            <a
              href="mailto:office@visita.com.ua"
              className="text-[var(--accent-dark)] hover:underline"
            >
              {t.writeUs}
            </a>
          </p>
        </div>

        {/* FAQ grid — 2 columns on desktop */}
        <div className="grid sm:grid-cols-2 gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <div
                key={i}
                className={`transition-all duration-500 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: inView ? `${150 + i * 60}ms` : "0ms",
                }}
              >
                <div
                  className={`h-full rounded-2xl border transition-all duration-250 ${
                    isOpen
                      ? "bg-[var(--foreground)] border-[var(--foreground)] shadow-xl shadow-black/10"
                      : "bg-white border-[var(--gray-100)] hover:border-[var(--gray-200)] hover:shadow-md hover:shadow-black/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : i)}
                    className="w-full flex items-start gap-3.5 p-5 text-left cursor-pointer"
                  >
                    {/* Number badge */}
                    <span
                      className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors duration-250 ${
                        isOpen
                          ? "bg-[var(--accent)] text-[var(--foreground)]"
                          : "bg-[var(--gray-50)] text-[var(--gray-400)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[15px] font-semibold leading-snug pt-0.5 transition-colors duration-250 ${
                        isOpen ? "text-white" : "text-[var(--foreground)]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Arrow */}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`shrink-0 mt-1 transition-transform duration-250 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke={isOpen ? "rgba(255,255,255,0.5)" : "var(--gray-400)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-250 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-white/60">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
