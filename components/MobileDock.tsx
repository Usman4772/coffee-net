import { site } from "@/lib/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={site.whatsapp}
          className="rounded-full bg-gold py-3 text-center text-[0.65rem] tracking-[0.12em] uppercase text-ink"
        >
          WhatsApp
        </a>
        <a
          href={site.phones[0].href}
          className="rounded-full border border-cream/25 py-3 text-center text-[0.65rem] tracking-[0.12em] uppercase text-cream"
        >
          Call
        </a>
        <a
          href={site.directions}
          className="rounded-full border border-cream/25 py-3 text-center text-[0.65rem] tracking-[0.12em] uppercase text-cream"
        >
          Map
        </a>
      </div>
    </div>
  );
}
