"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { gallery } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  useGSAP(
    () => {
      const open = active !== null;
      if (!open) {
        wasOpen.current = false;
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!wasOpen.current) {
        gsap.fromTo(overlay.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
      }
      gsap.fromTo(
        frame.current,
        { autoAlpha: 0, scale: 0.94, y: 16 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.55, ease: "power3.out" },
      );
      wasOpen.current = true;
    },
    { dependencies: [active] },
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div data-stagger>
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Gallery</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            How Koffee Net actually looks.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft/75">
            Every photograph here is theirs — food, cake, coffee, drinks, and the rooftop.
          </p>
        </div>

        <div className="masonry mt-10">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              data-batch
              className="masonry-item group relative block w-full overflow-hidden rounded-sm text-left"
              onClick={() => setActive(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={1100}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition group-hover:bg-ink/25" />
              <span className="absolute bottom-3 left-3 text-[0.65rem] tracking-[0.2em] uppercase text-cream opacity-0 transition group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          ref={overlay}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-sm tracking-[0.2em] uppercase text-cream/80"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          <div
            ref={frame}
            className="relative max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              width={1600}
              height={1600}
              className="max-h-[80vh] w-full object-contain"
            />
            <p className="mt-4 text-center text-sm text-cream/70">{gallery[active].alt}</p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-full border border-cream/30 px-4 py-2 text-xs uppercase tracking-widest text-cream"
                onClick={() => setActive((i) => (i === null ? 0 : (i - 1 + gallery.length) % gallery.length))}
              >
                Prev
              </button>
              <button
                type="button"
                className="rounded-full border border-cream/30 px-4 py-2 text-xs uppercase tracking-widest text-cream"
                onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % gallery.length))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
