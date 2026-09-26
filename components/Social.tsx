import Image from "next/image";
import { site, socialGrid } from "@/lib/site";

export function Social() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div data-reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">More from Koffee Net</p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">The feed is the brand.</h2>
          </div>
          <div className="flex gap-3">
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-5 py-2 text-[0.7rem] tracking-[0.16em] uppercase text-ink hover:border-gold"
            >
              Facebook
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-5 py-2 text-[0.7rem] tracking-[0.16em] uppercase text-ink hover:border-gold"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {socialGrid.map((item) => (
            <a
              key={item.src}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              data-batch
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="33vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
