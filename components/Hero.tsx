import NetworkCanvas from "./NetworkCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[90px] overflow-hidden">
      <NetworkCanvas />
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(20,23,28,0) 0%, #14171C 85%)",
        }}
      />
      <div className="relative z-[2] w-[90%] max-w-[1180px] mx-auto">
        <div className="max-w-[680px]">
          <div className="font-mono text-[0.8rem] tracking-[0.08em] text-signal-orange mb-[22px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-signal-orange shadow-[0_0_0_4px_rgba(255,107,53,0.18)]" />
            WEBENTWICKLUNG · STANDORT-PRÄSENZ · IT-BERATUNG
          </div>
          <h1 className="font-display font-bold text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.08] tracking-tight mb-6">
            Digitale Systeme,
            <br />
            die mitdenken.
          </h1>
          <p className="text-[1.12rem] text-slate max-w-[520px] mb-[38px]">
            Hinter Berger Digital Service steckt kein Team, sondern ich
            persönlich — mit echter Begeisterung für Digitalisierung. Ich
            baue Ihre Website, kümmere mich um Ihre Sichtbarkeit bei Google,
            Google Maps und Apple Karten und liefere dafür auf Wunsch auch
            professionelle Fotos und Videos direkt vor Ort.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-medium text-[0.95rem] px-7 py-[15px] rounded-lg bg-signal-orange text-graphite-deep font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,107,53,0.55)]"
            >
              Projekt besprechen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 font-medium text-[0.95rem] px-7 py-[15px] rounded-lg border border-line text-off-white transition-all hover:border-steel-blue hover:-translate-y-0.5"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
