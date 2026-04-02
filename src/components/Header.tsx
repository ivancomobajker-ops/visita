"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-glass ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 sm:h-[72px] items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.8"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.295 13.7H8.305M8.295 16.7H8.305"
                    stroke="#1A1A1A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                VISITA
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Можливості", href: "#features" },
              { label: "Тарифи", href: "#pricing" },
              { label: "Відгуки", href: "#reviews" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-[var(--gray-600)] rounded-lg transition-colors duration-200 hover:text-[var(--foreground)] hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-[15px] font-medium text-[var(--gray-600)] transition-colors duration-200 hover:text-[var(--foreground)]"
            >
              Увійти
            </a>
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-[15px] font-semibold text-[var(--foreground)] rounded-full"
            >
              Спробувати безкоштовно
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M3.333 8h9.334M8.667 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
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
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 pt-2 border-t border-black/[0.04]">
          <nav className="flex flex-col gap-1">
            {[
              { label: "Можливості", href: "#features" },
              { label: "Тарифи", href: "#pricing" },
              { label: "Відгуки", href: "#reviews" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-[15px] font-medium text-[var(--gray-600)] rounded-lg transition-colors hover:text-[var(--foreground)] hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#"
              className="text-center px-4 py-2.5 text-[15px] font-medium text-[var(--gray-600)] rounded-full border border-[var(--gray-200)] transition-colors hover:bg-[var(--gray-50)]"
            >
              Увійти
            </a>
            <a
              href="#"
              className="btn-primary text-center px-5 py-2.5 text-[15px] font-semibold text-[var(--foreground)] rounded-full"
            >
              Спробувати безкоштовно
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
