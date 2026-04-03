import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/[0.06] blur-[120px] animate-blob" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-orange-300/[0.05] blur-[100px] animate-blob-delay" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pt-24 sm:pt-28 lg:pt-32 pb-4">
        {/* Two-column: text left, visuals right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: text content */}
          <div className="max-w-xl lg:max-w-none">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-[var(--gray-200)]/60 shadow-sm mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-sm font-medium text-[var(--gray-600)]">
                Вже 500+ майстрів з усієї України
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] tracking-tight text-[var(--foreground)]">
              Клієнти бронюють{" "}
              <span className="relative inline-block">
                <span className="relative z-10">самі, 24/7</span>
                <span
                  className="absolute bottom-0.5 sm:bottom-1 left-0 w-full h-3 sm:h-3.5 bg-[var(--accent)]/40 -z-0 rounded-sm"
                  style={{ transform: "skewX(-6deg)" }}
                />
              </span>
              <br />
              <span className="text-[var(--gray-500)]">
                ви лише працюєте
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up-delay-2 mt-5 text-lg leading-relaxed text-[var(--gray-600)] max-w-lg">
              Одне посилання замінює блокнот, Telegram і дзвінки. Клієнт обирає
              час, отримує нагадування — і приходить.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up-delay-3 mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="btn-primary inline-flex items-center justify-center gap-2.5 h-13 px-7 text-base font-semibold text-[var(--foreground)] rounded-full"
              >
                Спробувати безкоштовно
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <div className="animate-fade-in-up-delay-3 mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--gray-500)]">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                14 днів безкоштовно
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--gray-300)]" />
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Без картки
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--gray-300)]" />
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="var(--accent-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Старт за 5 хвилин
              </span>
            </div>
          </div>

          {/* Right: bento visual composition */}
          <div className="relative lg:pl-4">
            <div className="grid grid-cols-5 gap-3">
              {/* Main photo */}
              <div className="col-span-3 relative group animate-reveal">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80"
                    alt="Сучасний салон краси"
                    fill
                    className="object-cover photo-zoom"
                    priority
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md shadow-lg w-fit">
                      <div className="w-7 h-7 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-[var(--foreground)]">12 записів</p>
                        <p className="text-[9px] text-[var(--gray-500)]">сьогодні</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right sub-column */}
              <div className="col-span-2 flex flex-col gap-3">
                {/* Second photo */}
                <div className="animate-scale-in relative rounded-2xl overflow-hidden aspect-[3/4] group">
                  <Image
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
                    alt="Майстер краси"
                    fill
                    className="object-cover photo-zoom"
                    sizes="(max-width: 1024px) 40vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} width="10" height="10" viewBox="0 0 24 24" fill="#FFB800">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                      <span className="text-[10px] font-bold text-white ml-0.5">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Stats mini card */}
                <div className="animate-scale-in-delay rounded-2xl bg-white border border-[var(--gray-100)] p-3 mockup-shadow-sm group hover:border-[var(--accent)]/30 transition-all duration-300 flex-1 flex flex-col justify-center">
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-light)] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6.88 18.15V16.08M12 18.15V14.01M17.12 18.15V11.93M17.12 5.85L16.66 6.38C14.11 9.33 10.69 11.35 6.88 12.15" stroke="var(--accent-dark)" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M14.19 5.85H17.12V8.77" stroke="var(--accent-dark)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-2xl font-extrabold number-highlight leading-none">+34%</p>
                  <p className="text-[11px] text-[var(--gray-500)] font-medium mt-1">записів щомісяця</p>
                </div>
              </div>
            </div>

            {/* Floating notification - desktop only */}
            <div className="hidden lg:block absolute -left-10 bottom-16 animate-float-delay z-10">
              <div className="mockup-shadow-sm rounded-2xl bg-white/95 backdrop-blur-md p-3 pr-5 flex items-center gap-3 border border-[var(--gray-100)]">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#10B981" strokeWidth="1.8" />
                    <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[var(--foreground)]">Новий запис!</p>
                  <p className="text-[10px] text-[var(--gray-400)]">Ірина Д. — завтра, 11:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee ticker — full width */}
      </div>
      <div className="relative overflow-hidden py-3 mt-8 sm:mt-10">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[var(--background)] to-transparent" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center shrink-0">
                {[
                  "Онлайн-запис 24/7",
                  "Автоматичні нагадування",
                  "Розумний календар",
                  "Клієнтська база",
                  "Аналітика доходів",
                  "SMS та Telegram",
                  "Без неявок",
                  "Для салонів і майстрів",
                ].map((item, i) => (
                  <div key={`${setIndex}-${i}`} className="flex items-center gap-3 mx-4 sm:mx-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--gray-500)]">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
