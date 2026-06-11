import birthdayImg from "@/assets/birthday.jpg";

const inclusions = [
  { icon: "🎈", title: "Soukromé oslavy", text: "Celá hernička jen pro vás a vaše hosty." },
  { icon: "🎀", title: "Výzdoba", text: "Jemná pastelová výzdoba laděná na míru." },
  { icon: "🧸", title: "Prostor pro děti", text: "Bezpečné hraní a zábava po celou oslavu." },
  { icon: "☕", title: "Pohodlí pro rodiče", text: "Posezení, káva a klid během celé akce." },
  { icon: "🍰", title: "Občerstvení", text: "Dobroty a nápoje pro malé i velké hosty." },
];

const packages = [
  {
    name: "Hravá",
    price: "od 2 490 Kč",
    duration: "2 hodiny",
    perks: ["Soukromá hernička", "Základní výzdoba", "Nápoje pro děti"],
    featured: false,
  },
  {
    name: "Slavnostní",
    price: "od 3 990 Kč",
    duration: "3 hodiny",
    perks: [
      "Vše z balíčku Hravá",
      "Tematická výzdoba na míru",
      "Občerstvení pro děti i rodiče",
      "Káva a dezerty pro dospělé",
    ],
    featured: true,
  },
  {
    name: "Královská",
    price: "od 5 490 Kč",
    duration: "4 hodiny",
    perks: [
      "Vše z balíčku Slavnostní",
      "Dort dle přání",
      "Animační program",
      "Asistence po celou oslavu",
    ],
    featured: false,
  },
];

export function Birthday() {
  return (
    <section id="oslavy" className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-pink/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-pink-foreground">Narozeninové oslavy</span>
          <h2 className="mt-4 h-section text-foreground">
            Narozeniny, na které{" "}
            <span className="serif-italic text-primary">budou děti vzpomínat</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Oslavte výjimečný den ve výjimečném prostředí. Postaráme se o výzdobu,
            prostor i pohodlí, abyste si mohli užít každý okamžik – bez starostí.
          </p>
        </div>

        {/* image + inclusions */}
        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-5">
          <div className="reveal relative overflow-hidden rounded-[2.5rem] shadow-card lg:col-span-2">
            <img
              src={birthdayImg}
              alt="Slavnostně vyzdobený stůl na dětskou narozeninovou oslavu"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-6">
              <p className="font-display text-xl text-cream">
                Den, který zůstane v srdci
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {inclusions.map((f, i) => (
              <div
                key={f.title}
                className="reveal flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-soft lift hover:shadow-card"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink/35 text-xl">
                  {f.icon}
                </span>
                <div>
                  <p className="text-base font-semibold text-foreground">{f.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* packages */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-[2rem] p-8 shadow-soft lift ${
                p.featured
                  ? "bg-foreground text-cream shadow-card ring-2 ring-primary/40"
                  : "border border-border/60 bg-card"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                  Nejoblíbenější
                </span>
              )}
              <p
                className={`text-xs uppercase tracking-[0.2em] ${
                  p.featured ? "text-cream/70" : "text-muted-foreground"
                }`}
              >
                Balíček {p.duration}
              </p>
              <h3
                className={`mt-2 font-display text-2xl ${
                  p.featured ? "text-cream" : "text-foreground"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-3 font-display text-3xl ${
                  p.featured ? "text-cream" : "text-primary"
                }`}
              >
                {p.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.perks.map((perk) => (
                  <li
                    key={perk}
                    className={`flex items-start gap-2.5 text-sm ${
                      p.featured ? "text-cream/85" : "text-muted-foreground"
                    }`}
                  >
                    <span className={p.featured ? "text-sage" : "text-sage-foreground"}>
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  p.featured
                    ? "bg-cream text-foreground"
                    : "bg-primary text-primary-foreground shadow-soft"
                }`}
              >
                Zjistit více
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-muted-foreground">
          Každou oslavu rádi přizpůsobíme vašim přáním. Stačí se{" "}
          <a href="#kontakt" className="font-semibold text-primary underline-offset-4 hover:underline">
            ozvat
          </a>
          .
        </p>
      </div>
    </section>
  );
}
