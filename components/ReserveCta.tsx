import { site } from "@/lib/site";

export function ReserveCta() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-24">
      <div data-stagger className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Planning a visit?</p>
        <h2 className="mt-4 font-display text-4xl text-ink md:text-6xl">
          Reserve your table, or message the rooftop directly.
        </h2>
        <p className="mt-5 text-ink-soft/75">
          Call or WhatsApp the numbers published on their Facebook page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.whatsapp}
            className="rounded-full bg-ink px-7 py-3.5 text-[0.74rem] tracking-[0.16em] uppercase text-cream"
          >
            WhatsApp Us
          </a>
          <a
            href={site.phones[0].href}
            className="rounded-full border border-ink/20 px-7 py-3.5 text-[0.74rem] tracking-[0.16em] uppercase text-ink"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
