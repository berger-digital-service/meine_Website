"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const trigger = ScrollTrigger.create({
      start: "top -10",
      end: 99999,
      onUpdate: (self) => {
        el.classList.toggle("bg-graphite-deep/85", self.scroll() > 10);
        el.classList.toggle("backdrop-blur-md", self.scroll() > 10);
        el.classList.toggle("border-line", self.scroll() > 10);
        el.classList.toggle("py-3.5", self.scroll() > 10);
        el.classList.toggle("py-[22px]", self.scroll() <= 10);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[100] py-[22px] border-b border-transparent transition-[padding,background-color] duration-300"
    >
      <nav className="w-[90%] max-w-[1180px] mx-auto flex items-center justify-between">
        <div className="font-display font-bold text-xl tracking-tight">
          <span className="text-signal-orange">Berger</span>Digital Service
        </div>
        <div className="flex items-center gap-9">
          <a
            href="#leistungen"
            className="hidden sm:inline text-sm text-slate hover:text-off-white transition-colors"
          >
            Leistungen
          </a>
          <a
            href="#warum"
            className="hidden sm:inline text-sm text-slate hover:text-off-white transition-colors"
          >
            Warum wir
          </a>
          <a
            href="#kontakt"
            className="font-mono text-[0.82rem] px-5 py-2.5 border border-line rounded-full hover:border-signal-orange hover:-translate-y-0.5 transition-all"
          >
            Projekt besprechen
          </a>
        </div>
      </nav>
    </header>
  );
}
