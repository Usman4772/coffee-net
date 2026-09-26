import Image from "next/image";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <Image
        src="/images/rooftop-shisha.png"
        alt=""
        aria-hidden
        fill
        priority
        className="scale-110 object-cover object-[center_35%] blur-2xl opacity-75 md:object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40 lg:bg-gradient-to-r lg:from-ink lg:via-ink/70 lg:to-ink/20" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-end gap-6 px-4 pb-28 pt-20 lg:gap-10 md:px-8 md:pb-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:pb-16">
        <div
          data-hero-image
          className="relative mx-auto aspect-[702/886] w-full max-w-[14rem] overflow-hidden rounded-sm shadow-2xl ring-1 ring-cream/10 sm:max-w-[22rem] lg:order-2 lg:mx-0 lg:ml-auto lg:max-w-[30rem]"
        >
          <Image
            src="/images/rooftop-shisha.png"
            alt="Koffee Net rooftop seating with a Margalla Hills view"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 22rem, 30rem"
          />
        </div>

        <div className="lg:order-1">
          <p data-hero-line className="text-[0.68rem] tracking-[0.32em] uppercase text-gold-bright">
            F-7 · Union Gold Mall rooftop
          </p>
          <h1
            data-hero-line
            className="mt-4 max-w-4xl font-display text-[2.55rem] leading-[0.98] text-cream sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Dining above <span className="whitespace-nowrap">F-7</span>, with the Margallas in view.
          </h1>
          <p data-hero-line className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {site.facebookAbout} Coffee, plates, cake, and open-air tables on the Union Gold Mall rooftop.
          </p>
          <div data-hero-line className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-gold px-7 py-3.5 text-[0.74rem] tracking-[0.18em] uppercase text-ink transition hover:bg-gold-bright"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-[0.74rem] tracking-[0.18em] uppercase text-cream transition hover:border-gold hover:text-gold-bright"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
