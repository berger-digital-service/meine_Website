import Image from "next/image";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="py-[120px]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <Reveal>
          <div className="relative rounded-2xl overflow-hidden border border-line h-[380px] flex items-center">
            <Image
              src="https://images.unsplash.com/photo-1747499967281-c0c5eec9933c"
              alt="Beleuchtete moderne Stadtsilhouette bei Nacht"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-graphite-deep via-graphite-deep/80 to-graphite-deep/20" />
            <div className="relative z-10 px-10 md:px-16 max-w-[620px]">
              <div className="font-mono text-[0.8rem] tracking-[0.08em] text-signal-orange mb-4">
                BEREIT FÜR MEHR SICHTBARKEIT?
              </div>
              <h2 className="font-display text-[clamp(1.6rem,3.2vw,2.3rem)] font-semibold tracking-tight mb-5">
                Lassen Sie uns Ihren digitalen Auftritt gemeinsam aufbauen.
              </h2>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 font-medium text-[0.95rem] px-7 py-[15px] rounded-lg bg-signal-orange text-graphite-deep font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,107,53,0.55)]"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
