const details = [
  { icon: "📍", label: "Adresa", lines: ["Svitavská 500/7", "Blansko"] },
  { icon: "📞", label: "Telefon", lines: ["732 617 020"], href: "tel:+420732617020" },
  { icon: "✉️", label: "E-mail", lines: ["vpodzamci@outlook.cz"], href: "mailto:vpodzamci@outlook.cz" },
];

export function Location() {
  return (
    <section id="kontakt" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-foreground">
            Kontakt
          </span>
          <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
            Kde nás najdete
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="reveal flex flex-col justify-center gap-5">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage/35 text-xl">
                  {d.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {d.lines[0]}
                    </a>
                  ) : (
                    d.lines.map((l) => (
                      <p key={l} className="mt-1 text-lg font-medium text-foreground">
                        {l}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal overflow-hidden rounded-[2.5rem] shadow-card">
            <iframe
              title="Mapa – Hernička V Podzámčí, Blansko"
              src="https://www.google.com/maps?q=Svitavsk%C3%A1%20500/7%20Blansko&output=embed"
              className="h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
