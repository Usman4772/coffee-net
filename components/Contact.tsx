import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
        <div data-stagger>
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Location</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Find the rooftop.</h2>
          <p className="mt-6 text-lg text-cream/75">{site.address}</p>
          <p className="text-cream/50">Islamabad {site.postal}</p>
          <div className="mt-8 space-y-3 text-sm">
            {site.phones.map((phone) => (
              <p key={phone.href}>
                <a href={phone.href} className="tracking-[0.08em] text-cream hover:text-gold-bright">
                  {phone.label}
                </a>
              </p>
            ))}
            <p className="text-cream/55">Dine-in · In-store pickup · Reservations</p>
            <p className="text-cream/55">Hi-tea & dinner buffet: 7 PM – 9 PM</p>
            <p className="text-xs text-cream/40">
              Full daily opening hours are not listed on their public Facebook page, so they are not shown here.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.directions}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-6 py-3 text-[0.72rem] tracking-[0.16em] uppercase text-ink"
            >
              Get Directions
            </a>
            <a
              href={site.whatsapp}
              className="rounded-full border border-cream/30 px-6 py-3 text-[0.72rem] tracking-[0.16em] uppercase text-cream"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        <div data-img-reveal className="min-h-[20rem] overflow-hidden rounded-sm border border-white/10">
          <iframe
            title="Map to Koffee Net, Union Gold Mall rooftop"
            src={site.mapsEmbed}
            className="h-full min-h-[20rem] w-full grayscale-[0.35] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
