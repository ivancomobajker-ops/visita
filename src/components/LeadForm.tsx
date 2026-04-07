"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useLeadForm } from "./LeadFormContext";

export default function LeadForm() {
  const { isOpen, close } = useLeadForm();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setPhone("");
        setEmail("");
        setCompany("");
        setStatus("idle");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email, company }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[100] w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--gray-100)]">
            <div>
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                Спробувати безкоштовно
              </h3>
              <p className="text-sm text-[var(--gray-500)] mt-0.5">
                14 днів · без картки · без зобов&apos;язань
              </p>
            </div>
            <button
              onClick={close}
              className="w-9 h-9 rounded-xl bg-[var(--gray-50)] hover:bg-[var(--gray-100)] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Закрити"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">
                  Дякуємо!
                </h4>
                <p className="text-sm text-[var(--gray-500)] max-w-xs">
                  Ми отримали вашу заявку і зв&apos;яжемось з вами найближчим часом.
                </p>
                <button
                  onClick={close}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[var(--gray-50)] hover:bg-[var(--gray-100)] text-sm font-medium text-[var(--foreground)] transition-colors cursor-pointer"
                >
                  Закрити
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Phone */}
                <div>
                  <label htmlFor="lead-phone" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Телефон <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+380 XX XXX XX XX"
                    className="w-full h-12 px-4 rounded-xl border border-[var(--gray-200)] bg-white text-[var(--foreground)] text-sm placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 focus:border-[var(--accent)] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-[var(--gray-200)] bg-white text-[var(--foreground)] text-sm placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 focus:border-[var(--accent)] transition-all"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="lead-company" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    Назва компанії <span className="text-[var(--gray-400)] font-normal">(необов&apos;язково)</span>
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Beauty Studio"
                    className="w-full h-12 px-4 rounded-xl border border-[var(--gray-200)] bg-white text-[var(--foreground)] text-sm placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40 focus:border-[var(--accent)] transition-all"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Щось пішло не так. Спробуйте ще раз або напишіть нам у Telegram.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-13 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-base transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none cursor-pointer flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                      </svg>
                      Відправляємо…
                    </>
                  ) : (
                    "Відправити заявку"
                  )}
                </button>

                <p className="text-xs text-[var(--gray-400)] text-center leading-relaxed">
                  Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
