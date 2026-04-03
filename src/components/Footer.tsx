export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--gray-100)]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                <span className="text-sm font-extrabold text-[var(--foreground)]">
                  V
                </span>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-[var(--foreground)]">
                Visita
              </span>
            </a>
            <p className="text-sm leading-relaxed text-[var(--gray-500)] max-w-xs mb-5">
              Онлайн-запис для б&apos;юті бізнесу. Клієнти бронюють самі — ви
              лише працюєте.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center text-[var(--gray-400)] hover:text-[var(--foreground)] hover:border-[var(--gray-200)] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.636 6.364H17.648"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center text-[var(--gray-400)] hover:text-[var(--foreground)] hover:border-[var(--gray-200)] transition-colors"
                aria-label="Telegram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.303l3.6 1.2 1.5 4.726a1.5 1.5 0 0 0 2.526.548l2.124-2.249 3.87 2.934a2.25 2.25 0 0 0 3.498-1.27l3.24-15.75a2.25 2.25 0 0 0-2.962-2.157Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[var(--gray-50)] border border-[var(--gray-100)] flex items-center justify-center text-[var(--gray-400)] hover:text-[var(--foreground)] hover:border-[var(--gray-200)] transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.7H9.3C9.1 14.7 9 14.6 9 14.4V12.5C9 12.3 9.1 12.2 9.3 12.2H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
              Продукт
            </h4>
            <ul className="space-y-2.5">
              {["Можливості", "Тарифи", "Для салонів", "Для майстрів"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--gray-500)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
              Підтримка
            </h4>
            <ul className="space-y-2.5">
              {["Центр допомоги", "FAQ", "Зв'язатися з нами", "Статус системи"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--gray-500)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-[var(--foreground)] mb-4 uppercase tracking-wider">
              Компанія
            </h4>
            <ul className="space-y-2.5">
              {[
                "Про нас",
                "Блог",
                "Політика конфіденційності",
                "Умови використання",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[var(--gray-500)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--gray-100)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[var(--gray-400)]">
            © 2026 Visita. Всі права захищені.
          </p>
          <p className="text-sm text-[var(--gray-400)]">
            Зроблено з{" "}
            <span className="text-[var(--accent)]">♥</span> в Україні
          </p>
        </div>
      </div>
    </footer>
  );
}
