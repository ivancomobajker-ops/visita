"use client";

import { useEffect, useRef, useState } from "react";
import { useLeadForm } from "./LeadFormContext";
import { useI18n } from "@/i18n/I18nProvider";
import type { Dictionary } from "@/i18n/dictionaries/uk";

function useInView(threshold = 0.2) {
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

function getSteps(t: Dictionary["howItWorks"]) {
  return [
  {
    number: "01",
    title: t.steps[0].title,
    description: t.steps[0].description,
    accentColor: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-100",
    textColor: "text-blue-600",
    // Mini-mockup content
    mockup: (
      <div className="p-4">
        {/* Profile setup mockup */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)]/30 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                stroke="var(--accent-dark)"
                strokeWidth="1.5"
              />
              <path
                d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                stroke="var(--accent-dark)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="h-3 w-28 rounded-full bg-[var(--gray-200)]" />
            <div className="h-2.5 w-20 rounded-full bg-[var(--gray-100)] mt-1.5" />
          </div>
        </div>
        {/* Services list */}
        <div className="space-y-2">
          {t.services.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)]/60"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[11px] font-medium text-[var(--gray-700)]">
                  {service.name}
                </span>
              </div>
              <span className="text-[11px] font-bold text-[var(--foreground)]">
                {service.price}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-dashed border-[var(--gray-200)] text-[11px] font-medium text-[var(--gray-400)] hover:border-[var(--accent)] hover:text-[var(--accent-dark)] transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          {t.addService}
        </button>
      </div>
    ),
  },
  {
    number: "02",
    title: t.steps[1].title,
    description: t.steps[1].description,
    accentColor: "bg-violet-500",
    lightColor: "bg-violet-50",
    borderColor: "border-violet-100",
    textColor: "text-violet-600",
    mockup: (
      <div className="p-4">
        {/* Share link mockup */}
        <div className="rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)] p-3 mb-3">
          <p className="text-[10px] text-[var(--gray-400)] font-medium mb-1.5">
            {t.yourLink}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2 rounded-lg bg-white border border-[var(--gray-200)] text-[11px] font-mono text-[var(--gray-600)] truncate">
              visita.ua/anna.beauty
            </div>
            <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Share channels */}
        <p className="text-[10px] text-[var(--gray-400)] font-medium mb-2">
          {t.shareVia}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Instagram", color: "bg-gradient-to-br from-purple-500 to-pink-500", icon: "IG" },
            { name: "Telegram", color: "bg-sky-500", icon: "TG" },
            { name: t.qrCode, color: "bg-[var(--gray-800)]", icon: "QR" },
          ].map((channel) => (
            <div
              key={channel.name}
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-100)]/60 hover:border-[var(--gray-200)] transition-colors cursor-pointer"
            >
              <div
                className={`w-8 h-8 rounded-lg ${channel.color} flex items-center justify-center text-[10px] font-bold text-white`}
              >
                {channel.icon}
              </div>
              <span className="text-[10px] font-medium text-[var(--gray-500)]">
                {channel.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: t.steps[2].title,
    description: t.steps[2].description,
    accentColor: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    textColor: "text-emerald-600",
    mockup: (
      <div className="p-4">
        {/* Notifications mockup */}
        <div className="space-y-2.5">
          {t.notifications.map((n) => ({
            ...n,
            statusColor: n.isNew
              ? "bg-[var(--accent-light)] text-[var(--accent-dark)]"
              : "bg-emerald-100 text-emerald-700",
          })).map((notif, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-[var(--gray-100)] hover:border-[var(--gray-200)] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[var(--gray-100)] flex items-center justify-center text-[10px] font-bold text-[var(--gray-600)] shrink-0 mt-0.5">
                {notif.name.charAt(0)}
                {notif.name.split(" ")[1]?.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] font-bold text-[var(--foreground)] truncate">
                    {notif.name}
                  </p>
                  <span className="text-[9px] text-[var(--gray-400)] shrink-0">
                    {notif.ago}
                  </span>
                </div>
                <p className="text-[10px] text-[var(--gray-500)] mt-0.5">
                  {notif.service} · {notif.time}
                </p>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded-md text-[9px] font-semibold ${notif.statusColor}`}
                >
                  {notif.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  ];
}

export default function HowItWorks() {
  const { ref, inView } = useInView(0.1);
  const { open: openLeadForm } = useLeadForm();
  const { t: dict } = useI18n();
  const t = dict.howItWorks;
  const startFree = dict.common.startFree;
  const steps = getSteps(t);

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-20 sm:py-28 bg-white"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20 mb-5 transition-all duration-700 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-sm font-medium text-[var(--gray-700)]">
              {t.badge}
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.12] tracking-tight text-[var(--foreground)] transition-all duration-700 delay-100 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.titleStart}
            <br />
            <span className="relative inline-block">
              {t.titleHighlight}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8.5C50 2.5 100 2 150 5.5C200 9 250 4 298 7"
                  stroke="var(--accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p
            className={`mt-5 text-lg text-[var(--gray-500)] max-w-lg mx-auto transition-all duration-700 delay-200 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Card */}
                <div className="relative rounded-3xl bg-[var(--background)] border border-[var(--gray-100)] overflow-hidden transition-all duration-300 hover:border-[var(--gray-200)] hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-1 flex flex-col h-full">
                  {/* Step number + title bar */}
                  <div className="flex items-center gap-3 px-5 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-[var(--gray-100)]">
                    <div
                      className={`w-10 h-10 rounded-xl ${step.lightColor} ${step.borderColor} border flex items-center justify-center shrink-0`}
                    >
                      <span
                        className={`text-sm font-extrabold ${step.textColor}`}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Text content — fixed position under title */}
                  <div className="px-5 sm:px-6 pt-5 pb-4">
                    <p className="text-[15px] leading-relaxed text-[var(--gray-500)]">
                      {step.description}
                    </p>
                  </div>

                  {/* Mockup area — fills remaining space */}
                  <div
                    className={`${step.lightColor}/40 border-t border-[var(--gray-100)] flex-1`}
                  >
                    {step.mockup}
                  </div>
                </div>

              {/* Connector arrow between steps (desktop) */}
              {index < 2 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white border border-[var(--gray-100)] flex items-center justify-center shadow-sm">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
                        stroke="var(--gray-400)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 sm:mt-18 text-center transition-all duration-700 delay-[800ms] ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={openLeadForm}
            className="btn-primary inline-flex items-center gap-2.5 h-13 px-8 text-base font-semibold text-[var(--foreground)] rounded-full cursor-pointer"
          >
            {startFree}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="mt-3 text-sm text-[var(--gray-400)]">
            {t.trust}
          </p>
        </div>
      </div>
    </section>
  );
}
