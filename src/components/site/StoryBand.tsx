export function StoryBand() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-cream sm:py-32">
      <span className="animate-float pointer-events-none absolute left-[12%] top-[18%] h-24 w-24 rounded-full bg-sage/20 blur-md" />
      <span className="animate-float-rev pointer-events-none absolute right-[14%] bottom-[16%] h-32 w-32 rounded-full bg-pink/20 blur-md" />

      <div className="reveal relative mx-auto max-w-4xl px-6 text-center">
        <span className="eyebrow text-sage">Naše srdce</span>
        <p className="mt-7 font-display text-2xl leading-[1.5] text-cream sm:text-3xl md:text-4xl">
          „Víme, jak vzácné jsou chvíle, kdy se dítě bezstarostně směje{" "}
          <span className="serif-italic text-pink">a rodič si v klidu vydechne</span>.
          Právě pro tyto okamžiky jsme Herničku V Podzámčí vytvořili.“
        </p>
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-cream/30" />
          <p className="text-sm uppercase tracking-[0.2em] text-cream/70">
            Tým Hernička V Podzámčí
          </p>
          <span className="h-px w-10 bg-cream/30" />
        </div>
      </div>
    </section>
  );
}
