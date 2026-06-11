const benefits = [
  {
    icon: "🛡️",
    title: "Bezpečné prostředí pro nejmenší",
    text: "Promyšlený a čistý prostor, kde mají i ti nejmladší vše na dosah a v bezpečí.",
    tone: "bg-sage/35",
  },
  {
    icon: "☕",
    title: "Káva a odpočinek pro rodiče",
    text: "Voňavá káva a klidné posezení s výhledem na hrající si děti.",
    tone: "bg-pink/40",
  },
  {
    icon: "🧸",
    title: "Zábava pro děti od 0 do 6 let",
    text: "Herní zóny rozdělené podle věku, aby si užil každý – od miminek po předškoláky.",
    tone: "bg-sky/45",
  },
  {
    icon: "💛",
    title: "Rodinná atmosféra bez stresu",
    text: "Vlídné prostředí, kde se cítíte jako doma a nikam nespěcháte.",
    tone: "bg-beige",
  },
];

export function WhyParents() {
  return (
    <section id="proc" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-foreground">
            Proč právě my
          </span>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Proč si nás rodiče oblíbili
          </h2>
          <p className="mt-4 text-muted-foreground">
            Vytvořili jsme místo, kde mají radost děti i jejich rodiče.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="reveal group rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${b.tone} transition-transform duration-500 group-hover:scale-110`}
              >
                {b.icon}
              </div>
              <h3 className="mt-6 text-xl text-foreground">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
