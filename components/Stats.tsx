"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { target: 5, suffix: "+", label: "JAHRE ERFAHRUNG" },
  { target: 24, suffix: "h", label: "ANTWORTZEIT" },
  { target: 100, suffix: "%", label: "PERSÖNLICHER ANSPRECHPARTNER" },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counters =
      sectionRef.current?.querySelectorAll<HTMLSpanElement>(".count");
    if (!counters) return;

    const triggers: ScrollTrigger[] = [];

    counters.forEach((el) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const counterObj = { value: 0 };
          gsap.to(counterObj, {
            value: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counterObj.value).toString();
            },
          });
        },
      });
      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-t border-b border-line bg-graphite-deep"
    >
      <div className="w-[90%] max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 py-[46px] gap-7 sm:gap-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center pb-7 sm:pb-0 ${
              i < STATS.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-line"
                : ""
            }`}
          >
            <div className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-bold">
              <span className="count" data-target={stat.target}>
                0
              </span>
              {stat.suffix}
            </div>
            <div className="font-mono text-[0.78rem] text-slate mt-1.5 tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
