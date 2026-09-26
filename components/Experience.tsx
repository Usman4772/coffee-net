import Image from "next/image";
import { experiences } from "@/lib/site";

export function Experience() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div data-stagger>
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Why visit</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl">
            Rooftop air, a printed buffet, and a kitchen that photographs well.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {experiences.map((item) => (
            <article key={item.title} data-batch className="overflow-hidden rounded-sm bg-ink-soft">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div data-parallax className="absolute inset-x-0 -inset-y-[8%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
