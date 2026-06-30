import Image from "next/image";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Webentwicklung",
    text: "Ich baue Ihnen eine individuelle Website, technisch sauber umgesetzt, schnell und auf Wachstum ausgelegt — keine Vorlage von der Stange.",
    image: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4",
    alt: "Code auf mehreren Bildschirmen an einem Entwickler-Arbeitsplatz",
  },
  {
    title: "Standort-Präsenz",
    text: "Ich sorge dafür, dass Sie bei Google, Google Maps und Apple Karten gefunden werden — inklusive professioneller Fotos und Videos, die ich direkt vor Ort bei Ihnen aufnehme.",
    image: "https://images.unsplash.com/photo-1760061398084-0ec65a992725",
    alt: "Hand hält eine professionelle Kamera mit großem Objektiv",
  },
  {
    title: "IT-Beratung",
    text: "Ich schaue mir Ihre bestehenden Systeme an und zeige Ihnen, welche Digitalisierungsschritte für Ihr Unternehmen wirklich Sinn ergeben.",
    image: "https://images.unsplash.com/photo-1758519288814-bb9f97e4df95",
    alt: "Zwei Personen besprechen gemeinsam Inhalte auf einem Laptop",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-[120px]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <Reveal className="max-w-[560px] mb-16">
          <div className="font-mono text-[0.8rem] tracking-[0.08em] text-steel-blue mb-[22px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-steel-blue shadow-[0_0_0_4px_rgba(74,127,224,0.18)]" />
            LEISTUNGEN
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold tracking-tight">
            Drei Bereiche, eine Verantwortung.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.12}>
              <div className="group h-full rounded-2xl border border-line bg-graphite-deep overflow-hidden">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-deep via-graphite-deep/10 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate text-[0.95rem]">{service.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
