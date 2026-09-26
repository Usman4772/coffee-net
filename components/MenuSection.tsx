"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { buffet } from "@/lib/site";

const tabs = ["Buffet", "Kitchen", "Cakes", "Drinks"] as const;

export function MenuSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Buffet");
  const panel = useRef<HTMLDivElement>(null);
  const shownTab = useRef(tab);

  useGSAP(
    () => {
      if (shownTab.current === tab) return;
      shownTab.current = tab;
      if (!panel.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        panel.current.children,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" },
      );
    },
    { dependencies: [tab], scope: panel },
  );

  const kitchen = useMemo(
    () => [
      { name: "Pasta", image: "/images/pasta.png", note: "From their pasta photography." },
      { name: "Pizza", image: "/images/pizza-pull.png", note: "Captioned Super Delicious." },
      { name: "Cheese lover’s pizza", image: "/images/pizza-cheese.jpg", note: "As labelled on their graphic." },
      { name: "Burger", image: "/images/burger.png", note: "Flavorful & juicy." },
      { name: "Crispy burger", image: "/images/burger-crispy.png", note: "Served with fries." },
      { name: "Sizzling shrimp", image: "/images/shrimp-plate.png", note: "Fresh veggies, perfect rice." },
    ],
    [],
  );

  const cakes = [
    { name: "Milk cake", image: "/images/milk-cake.png", note: "Fresh, soft, and full of flavor." },
    { name: "Lotus cake", image: "/images/lotus-cake.png", note: "From their dessert series." },
    { name: "Layer cake", image: "/images/red-velvet.png", note: "Happiness comes in layers." },
  ];

  const drinks = [
    { name: "Coffee", image: "/images/coffee.png", note: "Hello. Must try." },
    { name: "Summer drink", image: "/images/summer-drink.png", note: "As labelled on their post." },
    { name: "Citrus cooler", image: "/images/citrus-drink.png", note: "From their drinks photography." },
  ];

  return (
    <section id="menu" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p data-reveal className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Menu</p>
        <div data-reveal className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-4xl text-ink md:text-5xl">
            A buffet they print, and plates they photograph.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft/75">
            Buffet items and the Rs. 1,799 + tax price are from Koffee Net’s own menu card. Other dishes are shown only when they named or labelled them.
          </p>
        </div>

        <div
          data-reveal
          className="mt-8 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Menu categories"
        >
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              onClick={() => setTab(item)}
              className={`rounded-full px-5 py-2 text-[0.72rem] tracking-[0.16em] uppercase whitespace-nowrap transition ${
                tab === item
                  ? "bg-ink text-cream"
                  : "border border-ink/15 text-ink/70 hover:border-ink/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === "Buffet" ? (
          <div
            ref={panel}
            key="buffet"
            data-stagger
            className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="relative min-h-[28rem] overflow-hidden rounded-sm bg-ink">
              <Image
                src="/images/menu-buffet.png"
                alt="Koffee Net hi-tea and dinner buffet menu"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div>
              <p className="font-display text-3xl text-ink">{buffet.title}</p>
              <p className="mt-2 text-sm tracking-[0.2em] uppercase text-gold">{buffet.hours}</p>
              <p className="mt-4 font-display text-4xl text-ink">{buffet.price}</p>
              <p className="mt-1 text-sm text-ink-soft/70">{buffet.kids}</p>
              <p className="mt-1 text-xs text-muted">{buffet.note}</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {buffet.categories.map((cat) => (
                  <div key={cat.name}>
                    <h3 className="text-[0.7rem] tracking-[0.22em] uppercase text-gold">{cat.name}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
                      {cat.items.map((dish) => (
                        <li key={dish}>{dish}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div ref={panel} key={tab} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(tab === "Kitchen" ? kitchen : tab === "Cakes" ? cakes : drinks).map((dish) => (
              <article key={dish.name} className="overflow-hidden rounded-sm bg-paper">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-ink">{dish.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft/70">{dish.note}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
