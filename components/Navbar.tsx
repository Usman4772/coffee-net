"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-nav-bar]", { yPercent: -100, autoAlpha: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });
    },
    { scope: header },
  );

  useGSAP(
    () => {
      if (!open || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo("[data-nav-overlay]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        "[data-nav-overlay] a",
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out", delay: 0.05 },
      );
    },
    { dependencies: [open], scope: header },
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={header} className="fixed inset-x-0 top-0 z-50">
      <div
        data-nav-bar
        className={`transition-colors duration-300 ${
          scrolled || open ? "nav-blur border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="relative z-10" aria-label="Koffee Net home">
          <Logo variant="light" compact />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.78rem] tracking-[0.18em] uppercase text-cream/80 transition hover:text-gold-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.whatsapp}
            className="rounded-full bg-gold px-5 py-2.5 text-[0.72rem] font-medium tracking-[0.16em] uppercase text-ink transition hover:bg-gold-bright"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-cream transition ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-cream transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-cream transition ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </span>
        </button>
        </div>
      </div>

      {open ? (
        <div data-nav-overlay className="fixed inset-0 top-[3.75rem] z-40 overflow-y-auto bg-ink px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.whatsapp}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-gold px-6 py-3 text-sm tracking-[0.16em] uppercase text-ink"
            >
              Reserve a Table
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
