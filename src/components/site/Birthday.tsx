import birthdayImg from "@/assets/birthday.jpg";

const features = [
  { icon: "🎈", title: "Soukromé oslavy", text: "Hernička jen pro vás a vaše hosty." },
  { icon: "🎀", title: "Výzdoba", text: "Jemná pastelová výzdoba na míru oslavenci." },
  { icon: "🧸", title: "Prostor pro děti", text: "Bezpečné hraní a zábava po celou oslavu." },
  { icon: "☕", title: "Pohodlí pro rodiče", text: "Posezení, káva a klid během celé akce." },
  { icon: "🍰", title: "Občerstvení", text: "Dobroty a nápoje pro malé i velké hosty." },
];

export function Birthday() {
  return (
    <section id="oslavy" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink/40 via-cream to-sage/35 shadow-card">
          <div className="grid items-center gap-0 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-foreground">
                Narozeninové oslavy
              </span>
              <h2 className="mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
                Narozeniny, na které budou děti vzpomínat
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Oslavte výjimečný den ve výjimečném prostředí. Postaráme se o
                výzdobu, prostor i pohodlí, abyste si mohli užít každý okamžik.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-2xl bg-card/70 p-4 shadow-soft backdrop-blur"
                  >
                    <span className="text-xl">{f.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {f.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#kontakt"
                className="mt-9 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-105"
              >
                Zjistit více
              </a>
            </div>

            <div className="relative h-full min-h-[320px]">
              <img
                src={birthdayImg}
                alt="Slavnostně vyzdobený stůl na dětskou narozeninovou oslavu"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover lg:rounded-l-[2.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
