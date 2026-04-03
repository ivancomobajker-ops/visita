export default function Footer() {
  return (
    <footer className="relative bg-[var(--foreground)] overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-24 bg-[var(--accent)]/8 blur-[80px]" />

      {/* Main */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-16 pb-8">
        {/* Top row: big CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 pb-10 border-b border-white/[0.06]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Готові автоматизувати<br />
              <span className="text-[var(--accent)]">свій запис?</span>
            </h3>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-3 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-[var(--foreground)] font-bold text-sm rounded-full transition-all duration-200 shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            Спробувати безкоштовно
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Content row */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left — brand */}
          <div className="max-w-xs">
            <a href="/" className="inline-flex items-center gap-2.5 mb-3 group">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-xs font-extrabold text-[var(--foreground)]">V</span>
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                Visita
              </span>
            </a>
            <p className="text-sm leading-relaxed text-white/30 mb-4">
              Онлайн-запис для б&apos;юті бізнесу.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all duration-200"
                aria-label="Telegram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-16.5 7.5a2.25 2.25 0 00.126 4.303l3.6 1.2 1.5 4.726a1.5 1.5 0 002.526.548l2.124-2.249 3.87 2.934a2.25 2.25 0 003.498-1.27l3.24-15.75a2.25 2.25 0 00-2.962-2.157Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links in a row */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Як це працює", href: "#how-it-works" },
              { label: "Можливості", href: "#features" },
              { label: "Тарифи", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-white/30 hover:text-[var(--accent)] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1.5">
            <a href="mailto:hello@visita.ua" className="text-sm text-white/30 hover:text-[var(--accent)] transition-colors">
              hello@visita.ua
            </a>
            <a href="#" className="text-sm text-white/30 hover:text-[var(--accent)] transition-colors">
              Telegram підтримка
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/20">
            © 2026 Visita. Всі права захищені.
          </p>
          <p className="text-[11px] text-white/20">
            Зроблено з <span className="text-[var(--accent)]">♥</span> в Україні
          </p>
        </div>
      </div>
    </footer>
  );
}
