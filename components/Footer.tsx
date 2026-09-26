import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 pt-16 text-cream md:pb-12">
      <div data-stagger className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-cream/60">{site.facebookAbout}</p>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.24em] uppercase text-gold">Visit</p>
          <p className="mt-3 text-sm text-cream/75">{site.address}</p>
          <p className="mt-4 text-[0.68rem] tracking-[0.24em] uppercase text-gold">Buffet</p>
          <p className="mt-2 text-sm text-cream/75">7 PM – 9 PM</p>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.24em] uppercase text-gold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/75">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>{p.label}</a>
              </li>
            ))}
            <li>
              <a href={site.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[0.68rem] tracking-[0.24em] uppercase text-gold">Menu</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/75">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-4 text-xs text-cream/35 md:px-8">
        © 2026 Koffee Net · F-7, Islamabad.
      </p>
    </footer>
  );
}
