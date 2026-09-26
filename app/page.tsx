import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { MobileDock } from "@/components/MobileDock";
import { Motion } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { ReserveCta } from "@/components/ReserveCta";
import { Reviews } from "@/components/Reviews";
import { Signatures } from "@/components/Signatures";
import { Social } from "@/components/Social";

export default function Home() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-gold focus:px-4 focus:py-2"
      >
        Skip to menu
      </a>
      <Motion>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Signatures />
          <MenuSection />
          <Gallery />
          <Experience />
          <Reviews />
          <Social />
          <Contact />
          <ReserveCta />
        </main>
        <Footer />
        <MobileDock />
      </Motion>
    </>
  );
}
