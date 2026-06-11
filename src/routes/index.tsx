import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { WhyParents } from "@/components/site/WhyParents";
import { Experience } from "@/components/site/Experience";
import { Birthday } from "@/components/site/Birthday";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "Hernička V Podzámčí – dětská hernička a kavárna v Blansku";
const description =
  "Hernička a rodinná kavárna v Blansku. Bezpečné hraní pro děti od 0 do 6 let, káva a odpočinek pro rodiče i nezapomenutelné narozeninové oslavy.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyParents />
        <Experience />
        <Birthday />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
