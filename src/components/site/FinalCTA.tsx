export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage/45 via-cream to-pink/40 py-28 sm:py-36">
      <span className="animate-float pointer-events-none absolute left-[10%] top-[20%] h-20 w-20 rounded-full bg-cream/70" />
      <span className="animate-float-rev pointer-events-none absolute right-[12%] bottom-[18%] h-28 w-28 rounded-full bg-pink/40" />

      <div className="reveal relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="h-section text-foreground">
          Přijďte si užít společný čas{" "}
          <span className="serif-italic text-primary">s vašimi dětmi</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Dveře naší herničky a kavárny jsou otevřené pro celou rodinu. Zastavte
          se, zahrajte si, odpočiňte si – a vytvořte si vzpomínky, ke kterým se
          budete rádi vracet.
        </p>
        <a
          href="#kontakt"
          className="mt-10 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
        >
          Těšíme se na vás
        </a>
      </div>
    </section>
  );
}
