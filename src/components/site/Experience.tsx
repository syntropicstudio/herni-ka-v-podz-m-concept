import experienceImg from "@/assets/experience.jpg";

const highlights = [
  { icon: "🧩", title: "Herní zóna", text: "Prostor plný podnětů, kde děti objevují a tvoří." },
  { icon: "🍼", title: "Prostor pro nejmenší", text: "Měkký a bezpečný koutek pro miminka a batolata." },
  { icon: "☕", title: "Kavárna", text: "Káva, dobroty a klid přesně tam, kde to potřebujete." },
  { icon: "👋", title: "Setkávání rodičů", text: "Místo, kde vznikají nová přátelství a sdílí se zkušenosti." },
];

export function Experience() {
  return (
    <section id="zazitek" className="overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pink/40 blur-sm" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-sage/40 blur-sm" />
          <img
            src={experienceImg}
            alt="Dítě objevuje dřevěné hračky v herničce"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-card"
          />
        </div>

        <div>
          <span className="reveal block eyebrow text-sage-foreground">
            Náš příběh
          </span>
          <h2 className="reveal mt-4 h-section text-foreground">
            Více než jen <span className="serif-italic text-primary">hernička</span>
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-muted-foreground">
            Představte si odpoledne, kdy se vaše dítě s rozzářenýma očima vrhá do
            hry, poznává nové kamarády a objevuje svět – zatímco vy poprvé za
            celý den sedíte, držíte v ruce teplou kávu a jen se díváte. Žádný
            spěch, žádný stres. Jen společné chvíle, na které budete oba rádi
            vzpomínat.
          </p>


          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="reveal flex gap-4 rounded-2xl bg-card/70 p-5 shadow-soft backdrop-blur"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl">{h.icon}</span>
                <div>
                  <h3 className="text-base text-foreground">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
