"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLeadForm } from "./LeadFormContext";

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
  const { open: openLeadForm } = useLeadForm();

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
                  <button
                    onClick={openLeadForm}
                    className="inline-flex items-center justify-center gap-2.5 h-13 px-7 text-base font-semibold text-[var(--foreground)] bg-[var(--accent)] hover:bg-[var(--accent-dark)] rounded-full transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 cursor-pointer"
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
                  </button>
                </div>

                <p className="mt-6 text-sm text-white/40">
                  14 днів безкоштовно · без картки
                </p>
              </div>

              {/* Right: photo composition */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <Image
                      src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&q=80"
                      alt="Майстер манікюру за роботою"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 45vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      <Image
                        src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80"
                        alt="Барбершоп"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 45vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    {/* Mini stat card */}
                    <div className="flex-1 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-4 flex flex-col justify-center">
                      <p className="text-3xl font-extrabold text-white leading-none">500+</p>
                      <p className="text-xs text-white/50 mt-1.5">майстрів довіряють</p>
                      <div className="flex -space-x-1.5 mt-3">
                        {["О", "М", "І", "К", "А"].map((l, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-[var(--accent)]/20 border-2 border-[var(--foreground)] flex items-center justify-center text-[8px] font-bold text-[var(--accent)]">
                            {l}
                          </div>
                        ))}
                        <div className="w-6 h-6 rounded-full bg-white/10 border-2 border-[var(--foreground)] flex items-center justify-center text-[8px] font-bold text-white/60">
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
