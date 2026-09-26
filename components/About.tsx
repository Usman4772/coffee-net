import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-12 md:px-8">
        <div data-stagger className="md:col-span-5">
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">About Koffee Net</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            A contemporary café on the Union Gold Mall rooftop.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft/80">
            {site.instagramBio} They describe themselves simply: {site.facebookAbout.toLowerCase()}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft/80">
            In 2021 they moved to the Union Gold Mall rooftop in F-7 — the address they still use today. Guests come for coffee and cake, stay for plated food, and book the terrace against the Margalla Hills.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="tracking-[0.2em] uppercase text-muted">Where</dt>
              <dd className="mt-1 font-display text-2xl text-ink">F-7 rooftop</dd>
            </div>
            <div>
              <dt className="tracking-[0.2em] uppercase text-muted">How to visit</dt>
              <dd className="mt-1 font-display text-2xl text-ink">Reservations</dd>
            </div>
          </dl>
        </div>
        <div className="grid gap-4 md:col-span-7 sm:grid-cols-2">
          <div data-img-reveal className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/coffee.png"
              alt="Koffee Net coffee and cake"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
          <div data-img-reveal className="relative mt-0 aspect-[3/4] overflow-hidden rounded-sm sm:mt-12">
            <Image
              src="/images/shrimp-close.png"
              alt="Koffee Net shrimp dish"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
