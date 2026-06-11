import heroImg from "@/assets/hero.jpg";

const stats = [
  { value: "0–6", label: "let věku dětí" },
  { value: "100 %", label: "bezpečný prostor" },
  { value: "★ 5,0", label: "hodnocení rodičů" },
];

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Děti si hrají v herničce, zatímco rodiče odpočívají u kávy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full scale-105 object-cover animate-drift"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/25 to-cream/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/20 to-transparent" />

      {/* floating decor */}
      <span className="animate-float pointer-events-none absolute left-[8%] top-[22%] h-16 w-16 rounded-full bg-pink/50 blur-[1px]" />
      <span className="animate-float-rev pointer-events-none absolute right-[12%] top-[28%] h-24 w-24 rounded-full bg-sage/40 blur-[1px]" />
      <span className="animate-float pointer-events-none absolute right-[30%] bottom-[24%] h-10 w-10 rounded-full bg-sky/50" />

      {/* floating glass info card */}
      <div className="animate-float-rev pointer-events-none absolute right-[8%] top-[34%] hidden rounded-3xl border border-cream/60 bg-cream/70 p-5 shadow-card backdrop-blur-md lg:block">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage/50 text-xl">
            ☕
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Otevřeno dnes</p>
            <p className="text-xs text-muted-foreground">Káva + hraní od 9:00</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
        <div className="max-w-3xl pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage-foreground/15 bg-cream/80 px-4 py-2 eyebrow text-sage-foreground shadow-soft">
            🌿 Hernička & kavárna · Blansko
          </span>
          <h1 className="mt-7 h-display text-foreground">
            Místo, kde si děti hrají{" "}
            <span className="serif-italic text-primary">a rodiče</span> si konečně
            odpočinou.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Hernička a kavárna v Blansku vytvořená pro společné chvíle, dětskou
            radost a pohodu celé rodiny.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#zazitek"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-card lift hover:shadow-card"
            >
              Navštívit herničku
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#oslavy"
              className="rounded-full border border-sage-foreground/25 bg-cream/60 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-cream"
            >
              Narozeninové oslavy
            </a>
          </div>

          {/* trust stats */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-foreground/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-foreground">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#proc"
        aria-label="Posunout dolů"
        className="scroll-indicator absolute bottom-8 left-1/2 hidden h-10 w-6 -translate-x-1/2 rounded-full border border-foreground/25 text-foreground/40 sm:block"
      />
    </section>
  );
}
