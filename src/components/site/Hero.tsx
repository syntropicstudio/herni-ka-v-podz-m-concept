import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <img
        src={heroImg}
        alt="Děti si hrají v herničce, zatímco rodiče odpočívají u kávy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream/70 via-transparent to-transparent" />

      {/* floating decor */}
      <span className="animate-float pointer-events-none absolute left-[8%] top-[22%] h-16 w-16 rounded-full bg-pink/50 blur-[1px]" />
      <span className="animate-float-rev pointer-events-none absolute right-[12%] top-[30%] h-24 w-24 rounded-full bg-sage/40 blur-[1px]" />
      <span className="animate-float pointer-events-none absolute right-[24%] bottom-[18%] h-10 w-10 rounded-full bg-sky/50" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-2xl pt-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage-foreground shadow-soft">
            🌿 Hernička & kavárna · Blansko
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
            Místo, kde si děti hrají a rodiče si konečně odpočinou.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Hernička a kavárna v Blansku vytvořená pro společné chvíle, dětskou
            radost a pohodu celé rodiny.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#zazitek"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
            >
              Navštívit herničku
            </a>
            <a
              href="#oslavy"
              className="rounded-full border border-sage-foreground/30 bg-cream/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-cream"
            >
              Narozeninové oslavy
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-foreground/40 animate-float">
        ↓
      </div>
    </section>
  );
}
