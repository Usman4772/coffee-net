"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Motion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            "[data-hero-image]",
            { autoAlpha: 0, clipPath: "inset(100% 0% 0% 0%)" },
            { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.out" },
          )
          .fromTo(
            "[data-hero-image] img",
            { scale: 1.25 },
            { scale: 1, duration: 1.8, ease: "power2.out" },
            0,
          )
          .fromTo(
            "[data-hero-line]",
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12 },
            0.35,
          );

        gsap.to("[data-hero-image]", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 48,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
          gsap.from(el.children, {
            autoAlpha: 0,
            y: 56,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-img-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.3,
              ease: "power4.inOut",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            },
          );
          const img = el.querySelector("img");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.2 },
              {
                scale: 1,
                duration: 1.6,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%", once: true },
              },
            );
          }
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        gsap.set("[data-batch]", { autoAlpha: 0, y: 40, scale: 0.96 });
        ScrollTrigger.batch("[data-batch]", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.fromTo(
              els,
              { autoAlpha: 0, y: 40, scale: 0.96 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" },
            ),
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const counter = { value: 0 };
          el.textContent = `0${suffix}`;
          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              el.textContent = `${Math.round(counter.value)}${suffix}`;
            },
          });
        });

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        return () => window.removeEventListener("load", refresh);
      });
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
