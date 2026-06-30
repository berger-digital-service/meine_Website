import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Direkt mit mir",
    text: "Kein Callcenter, keine Weiterleitung — Sie sprechen vom ersten Kontakt bis zum Launch direkt mit mir.",
  },
  {
    title: "Echtes Interesse",
    text: "Ich mache das aus Begeisterung für Digitalisierung, nicht nach Schema F — deshalb schaue ich mir Ihr Unternehmen wirklich an.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Website, Online-Sichtbarkeit und passende Fotos oder Videos vom Standort — Sie brauchen keine drei Dienstleister.",
  },
];

export default function WhyUs() {
  return (
    <section id="warum" className="py-[120px]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <Reveal className="max-w-[560px] mb-16">
          <div className="font-mono text-[0.8rem] tracking-[0.08em] text-steel-blue mb-[22px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-steel-blue shadow-[0_0_0_4px_rgba(74,127,224,0.18)]" />
            WARUM WIR
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold tracking-tight">
            Worauf Sie sich verlassen können.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.1}>
              <div className="border-t-2 border-steel-blue pt-[22px]">
                <h3 className="font-display text-[1.08rem] font-semibold mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-slate text-[0.94rem]">{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
