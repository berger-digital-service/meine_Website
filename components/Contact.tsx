"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Versand fehlgeschlagen");

      setStatus("Danke! Ich melde mich persönlich innerhalb von 24 Stunden.");
      form.reset();
    } catch {
      setStatus(
        "Da ist leider etwas schiefgelaufen. Schreiben Sie mir gerne direkt an john-berger@t-online.de."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="kontakt" className="py-[120px]">
      <div className="w-[90%] max-w-[1180px] mx-auto">
        <Reveal className="max-w-[560px] mb-16">
          <div className="font-mono text-[0.8rem] tracking-[0.08em] text-steel-blue mb-[22px] flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-steel-blue shadow-[0_0_0_4px_rgba(74,127,224,0.18)]" />
            KONTAKT
          </div>
          <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold tracking-tight">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16">
          <Reveal>
            <form onSubmit={handleSubmit}>
              <div className="mb-[18px]">
                <label
                  htmlFor="name"
                  className="block font-mono text-[0.78rem] text-slate mb-2"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-graphite-deep border border-line rounded-lg px-4 py-3.5 text-off-white focus:outline-none focus:border-steel-blue transition-colors"
                />
              </div>
              <div className="mb-[18px]">
                <label
                  htmlFor="email"
                  className="block font-mono text-[0.78rem] text-slate mb-2"
                >
                  E-MAIL
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-graphite-deep border border-line rounded-lg px-4 py-3.5 text-off-white focus:outline-none focus:border-steel-blue transition-colors"
                />
              </div>
              <div className="mb-[18px]">
                <label
                  htmlFor="message"
                  className="block font-mono text-[0.78rem] text-slate mb-2"
                >
                  NACHRICHT
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-graphite-deep border border-line rounded-lg px-4 py-3.5 text-off-white focus:outline-none focus:border-steel-blue transition-colors resize-y"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="font-medium text-[0.95rem] px-7 py-[15px] rounded-lg bg-signal-orange text-graphite-deep font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(255,107,53,0.55)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {sending ? "Wird gesendet …" : "Nachricht senden"}
              </button>
              <div className="font-mono text-[0.85rem] text-signal-orange mt-3.5 min-h-[1.2em]">
                {status}
              </div>
            </form>
          </Reveal>

          <Reveal>
            <div className="pt-1.5">
              <div className="flex gap-3.5 items-start py-4.5 border-b border-line">
                <div className="font-mono text-[0.78rem] text-slate w-[90px] shrink-0 pt-0.5">
                  TELEFON
                </div>
                <div className="text-[0.98rem]">+49 123 456 789</div>
              </div>
              <div className="flex gap-3.5 items-start py-4.5 border-b border-line">
                <div className="font-mono text-[0.78rem] text-slate w-[90px] shrink-0 pt-0.5">
                  STANDORT
                </div>
                <div className="text-[0.98rem]">Berlin, Deutschland</div>
              </div>
              <div className="flex gap-3.5 items-start py-4.5">
                <div className="font-mono text-[0.78rem] text-slate w-[90px] shrink-0 pt-0.5">
                  WEB
                </div>
                <div className="text-[0.98rem]">www.berger-digital-service.de</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
