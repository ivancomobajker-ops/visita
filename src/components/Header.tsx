"use client";

import { useState, useEffect } from "react";
import { useLeadForm } from "./LeadFormContext";

export default function Header() {
  const { open: openLeadForm } = useLeadForm();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ["how-it-works", "features", "pricing", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Як це працює", href: "#how-it-works", id: "how-it-works" },
    { label: "Можливості", href: "#features", id: "features" },
    { label: "Тарифи", href: "#pricing", id: "pricing" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-sm shadow-black/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-[68px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 rounded-xl bg-[var(--accent)] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-[var(--accent)]/30">
              <span className="text-sm font-extrabold text-[var(--foreground)] leading-none">V</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-[var(--foreground)]">
              Visita
            </span>
          </a>

          {/* Desktop Nav — pill style */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-full bg-[var(--gray-50)]/80 border border-[var(--gray-100)]/60 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-[var(--foreground)] bg-white shadow-sm"
                      : "text-[var(--gray-500)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={openLeadForm}
              className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[var(--foreground)] rounded-full cursor-pointer"
            >
              Спробувати безкоштовно
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors hover:bg-black/[0.04]"
            aria-label="Меню"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block w-5 h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-[var(--foreground)] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 border-t border-black/[0.04] bg-white/80 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-[15px] font-medium rounded-xl transition-colors ${
                  activeSection === link.id
                    ? "text-[var(--foreground)] bg-[var(--accent-light)]"
                    : "text-[var(--gray-600)] hover:text-[var(--foreground)] hover:bg-[var(--gray-50)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4">
            <button
              onClick={() => { setMobileMenuOpen(false); openLeadForm(); }}
              className="btn-primary block w-full text-center px-5 py-2.5 text-[15px] font-semibold text-[var(--foreground)] rounded-full cursor-pointer"
            >
              Спробувати безкоштовно
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
