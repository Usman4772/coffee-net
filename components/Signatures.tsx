import Image from "next/image";
import { signatures } from "@/lib/site";

export function Signatures() {
  return (
    <section className="bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">From their lens</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl md:text-5xl">
              Plates they keep putting on the table.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/65">
            Names and lines come from Koffee Net’s own photography. À la carte prices are not listed on the materials we have, so they are left off the cards.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signatures.map((item, i) => (
            <article
              key={item.name}
              data-batch
              className={`group relative overflow-hidden rounded-sm ${
                i === 0 || i === 3 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 || i === 3 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {item.caption ? (
                    <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold-bright">
                      {item.caption}
                    </p>
                  ) : null}
                  <h3 className="font-display text-3xl">{item.name}</h3>
                  <p className="mt-1 max-w-sm text-sm text-cream/75">{item.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
