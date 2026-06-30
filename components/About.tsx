import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="ueber-mich" className="py-[120px] bg-graphite-deep">
      <div className="w-[90%] max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative h-[420px] rounded-2xl overflow-hidden border border-line">
            <Image
              src="https://images.unsplash.com/photo-1577760258779-e787a1733016"
              alt="Junger Unternehmer arbeitet konzentriert an einem Laptop in hellem Arbeitsumfeld"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="font-mono text-[0.8rem] tracking-[0.08em] text-signal-orange mb-[22px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-signal-orange shadow-[0_0_0_4px_rgba(255,107,53,0.18)]" />
            ÜBER MICH
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold tracking-tight mb-6">
            Jung, motiviert und mit voller Energie für Ihre Digitalisierung.
          </h2>
          <p className="text-slate text-[1rem] mb-4">
            Ich habe Berger Digital Service gegründet, weil ich es liebe, aus
            einer Idee einen funktionierenden digitalen Auftritt zu machen —
            von der ersten Skizze bis zur fertigen Website.
          </p>
          <p className="text-slate text-[1rem]">
            Genau deshalb bekommen Sie bei mir alles aus einer Hand: Website,
            Sichtbarkeit bei Google, Google Maps und Apple Karten, sowie
            professionelle Fotos und Videos, die ich selbst mit meiner
            Kamera direkt bei Ihnen vor Ort aufnehme.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
