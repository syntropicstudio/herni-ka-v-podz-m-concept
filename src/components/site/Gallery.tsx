import g1 from "@/assets/gallery-real-1.png.asset.json";
import g2 from "@/assets/gallery-real-2.png.asset.json";
import g3 from "@/assets/gallery-real-3.png.asset.json";
import g4 from "@/assets/gallery-real-4.png.asset.json";
import g5 from "@/assets/gallery-real-5.png.asset.json";
import g6 from "@/assets/gallery-real-6.png.asset.json";

const photos = [
  {
    src: g1.url,
    alt: "Recepce a kavárenský pult Herničky V Podzámčí",
    tall: false,
    label: "Kavárna",
  },
  {
    src: g2.url,
    alt: "Dřevěná prolézačka se skluzavkou v dětské herničce",
    tall: false,
    label: "Herní zóna",
  },
  {
    src: g3.url,
    alt: "Bezpečný koutek pro nejmenší děti s hračkami a posezením",
    tall: false,
    label: "Pro nejmenší",
  },
  {
    src: g4.url,
    alt: "Domácí dezerty a sladké občerstvení v rodinné kavárně",
    tall: true,
    label: "Dobroty ke kávě",
  },
  {
    src: g5.url,
    alt: "Prostor připravený na dětskou narozeninovou oslavu s balónky",
    tall: true,
    label: "Narozeninové oslavy",
  },
  {
    src: g6.url,
    alt: "Ledová káva servírovaná v kavárně Herničky V Podzámčí",
    tall: false,
    label: "Chvíle pro rodiče",
  },
];

export function Gallery() {
  return (
    <section id="galerie" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sage-foreground">Galerie</span>
          <h2 className="mt-4 h-section text-foreground">
            Skutečné <span className="serif-italic text-primary">momenty od nás</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Opravdové prostředí, opravdová atmosféra a místo, kde se dobře cítí děti i rodiče.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {photos.map((p, i) => (
            <figure
              key={p.alt}
              className="reveal group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-soft break-inside-avoid"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                    p.tall ? "aspect-[4/5]" : "aspect-[5/4]"
                  }`}
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/28 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between rounded-full border border-cream/60 bg-cream/80 px-4 py-2 text-sm text-foreground opacity-0 shadow-soft backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-medium">{p.label}</span>
                <span className="text-muted-foreground">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

