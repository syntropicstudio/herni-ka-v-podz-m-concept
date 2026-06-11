import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Děti se smějí a hrají si v herničce", tall: true },
  { src: g2, alt: "Káva s latte art na stole v kavárně" },
  { src: g3, alt: "Detail dřevěných hraček a útulného koutku" },
  { src: g4, alt: "Maminka s dítětem u kávy v rodinné kavárně", tall: true },
  { src: g5, alt: "Měkký koutek pro nejmenší děti" },
  { src: g6, alt: "Radostná dětská narozeninová oslava s balónky" },
];

export function Gallery() {
  return (
    <section id="galerie" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow text-sage-foreground">
            Galerie
          </span>
          <h2 className="mt-4 h-section text-foreground">
            Nahlédněte <span className="serif-italic text-primary">k nám</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Atmosféra, která mluví za vše.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="reveal group relative overflow-hidden rounded-3xl shadow-soft break-inside-avoid"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  p.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
