export default function Footer() {
  return (
    <footer className="relative mt-10 bg-[var(--foreground)] rounded-t-[2rem] overflow-hidden">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-dark)] to-[var(--accent)]" />
      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-14">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left — brand */}
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-xl bg-[var(--accent)] flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-sm font-extrabold text-[var(--foreground)]">V</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Visita
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/40 mb-5">
              Онлайн-запис для б&apos;юті бізнесу.<br />
              Клієнти бронюють самі — ви лише працюєте.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/10 transition-all duration-200"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-16.5 7.5a2.25 2.25 0 00.126 4.303l3.6 1.2 1.5 4.726a1.5 1.5 0 002.526.548l2.124-2.249 3.87 2.934a2.25 2.25 0 003.498-1.27l3.24-15.75a2.25 2.25 0 00-2.962-2.157Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — nav + links */}
          <div className="flex flex-wrap gap-x-16 gap-y-6">
            <div>
              <h4 className="text-xs font-bold text-white/60 mb-3 uppercase tracking-[0.15em]">
                Навігація
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Як це працює", href: "#how-it-works" },
                  { label: "Можливості", href: "#features" },
                  { label: "Тарифи", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/35 hover:text-[var(--accent)] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-white/60 mb-3 uppercase tracking-[0.15em]">
                Контакти
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@visita.ua" className="text-sm text-white/35 hover:text-[var(--accent)] transition-colors">
                    hello@visita.ua
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/35 hover:text-[var(--accent)] transition-colors">
                    Telegram підтримка
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © 2026 Visita. Всі права захищені.
          </p>
          <p className="text-xs text-white/25">
            Зроблено з <span className="text-[var(--accent)]">♥</span> в Україні
          </p>
        </div>
      </div>
    </footer>
  );
}
