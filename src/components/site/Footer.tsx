export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/40 text-base">
              🌿
            </span>
            <span className="font-display text-lg">
              Hernička V Podzámčí
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70">
            Hernička a kavárna pro celou rodinu v srdci Blanska.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>Svitavská 500/7, Blansko</li>
            <li>
              <a href="tel:+420732617020" className="transition-colors hover:text-cream">
                732 617 020
              </a>
            </li>
            <li>
              <a href="mailto:vpodzamci@outlook.cz" className="transition-colors hover:text-cream">
                vpodzamci@outlook.cz
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/80">
            Sociální sítě
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
            >
              ig
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-cream/15 px-6 pt-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Hernička V Podzámčí · Všechna práva vyhrazena
      </div>
    </footer>
  );
}
