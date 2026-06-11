const reviews = [
  {
    quote:
      "Skvělé místo, kam se dcera vždy těší. A já si mezitím konečně vypiju kávu v klidu.",
    name: "Petra",
    role: "maminka Elišky",
    tone: "bg-pink/35",
  },
  {
    quote:
      "Nádherné prostředí, milý personál a perfektní narozeninová oslava.",
    name: "Lucie",
    role: "maminka Honzíka",
    tone: "bg-sage/35",
  },
  {
    quote: "V Blansku jsme nic podobného dlouho postrádali.",
    name: "Martin",
    role: "tatínek dvojčat",
    tone: "bg-sky/40",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sage-foreground">
            Reference
          </span>
          <h2 className="mt-4 h-section text-foreground">
            Co říkají <span className="serif-italic text-primary">rodiče</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex flex-col rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl text-pink-foreground/70">“</div>
              <blockquote className="-mt-2 flex-1 text-lg leading-relaxed text-foreground">
                {r.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-foreground ${r.tone}`}
                >
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {r.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {r.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
