"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const tracks = [
  "M 300 300 H 180 V 220 H 92",
  "M 300 300 H 170 V 382 H 82",
  "M 300 300 H 238 V 112 H 190",
  "M 300 300 H 238 V 488 H 190",
  "M 300 300 H 420 V 180 H 510",
  "M 300 300 H 430 V 420 H 520",
  "M 300 300 H 360 V 86 H 408",
  "M 300 300 H 360 V 514 H 408",
  "M 150 220 V 152 H 105",
  "M 450 180 V 114 H 498",
  "M 150 382 V 450 H 108",
  "M 450 420 V 478 H 500",
];

function CircuitSvg({ progress }: { progress: any }) {
  const scale = useTransform(progress, [0, 0.42, 1], [0.8, 1.08, 1.2]);
  const rotateX = useTransform(progress, [0, 0.48, 1], [18, 0, -8]);
  const rotateY = useTransform(progress, [0, 0.48, 1], [-24, 0, 18]);
  const y = useTransform(progress, [0, 0.5, 1], [36, 0, -18]);
  const shellY = useTransform(progress, [0, 0.55, 1], [0, 0, -26]);
  const coreY = useTransform(progress, [0, 0.55, 1], [0, 0, 42]);
  const coreOpacity = useTransform(progress, [0.55, 0.82], [0.2, 1]);
  const beamOpacity = useTransform(progress, [0.72, 1], [0, 0.95]);
  const trackOpacity = useTransform(progress, [0.2, 0.62, 1], [0.25, 0.95, 1]);

  return (
    <motion.div
      className="relative aspect-square w-[min(86vw,680px)] [perspective:1200px]"
      style={{ scale, rotateX, rotateY, y }}
    >
      <motion.svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full overflow-visible" aria-label="Exploded technical processor diagram">
        <defs>
          <radialGradient id="coreGlow"><stop stopColor="#fff6ed" /><stop offset=".22" stopColor="#ff9a5c" /><stop offset="1" stopColor="#ff5500" stopOpacity="0" /></radialGradient>
          <linearGradient id="metal" x1="0" x2="1"><stop stopColor="#373b40" /><stop offset=".5" stopColor="#a6adb2" /><stop offset="1" stopColor="#282c30" /></linearGradient>
          <filter id="orangeGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g className="fill-none stroke-[#ff5500]" filter="url(#orangeGlow)" opacity=".82">
          {tracks.map((d, i) => <motion.path key={d} d={d} strokeWidth={i % 3 === 0 ? 2 : 1} strokeDasharray="4 13" style={{ pathLength: 1, opacity: trackOpacity }} />)}
        </g>
        <g className="fill-none stroke-[#ff7333]" opacity=".38">
          {tracks.slice(0, 8).map((d) => <path key={`fine-${d}`} d={d} strokeWidth=".5" strokeDasharray="1 8" />)}
        </g>
        <motion.g style={{ y: shellY }}>
          <rect x="158" y="158" width="284" height="284" rx="26" fill="#111315" stroke="url(#metal)" strokeWidth="10" />
          <rect x="180" y="180" width="240" height="240" rx="16" fill="#1c2022" stroke="#596066" strokeWidth="2" />
          <path d="M205 180v-22m38 22v-30m38 30v-22m38 22v-30m38 30v-22M205 420v22m38-22v30m38-30v22m38-22v30m38-30v22" stroke="#b0b6b8" strokeWidth="3" opacity=".65" />
          <path d="M180 205h-22m22 38h-30m30 38h-22m22 38h-30m30 38h-22M420 205h22m-22 38h30m-30 38h22m-22 38h30m-30 38h22" stroke="#b0b6b8" strokeWidth="3" opacity=".65" />
          <rect x="216" y="216" width="168" height="168" rx="10" fill="#080909" stroke="#ff5500" strokeWidth="2" />
          <path d="M240 240h120v120H240z M260 240v120m40-120v120m40-120v120M240 260h120m-120 40h120m-120 40h120" fill="none" stroke="#ff5500" strokeWidth="1" opacity=".5" />
        </motion.g>
        <motion.g style={{ y: coreY, opacity: coreOpacity }}>
          <circle cx="300" cy="300" r="108" fill="url(#coreGlow)" />
          <circle cx="300" cy="300" r="54" fill="#ff5500" opacity=".18" filter="url(#orangeGlow)" />
          <path d="M270 300h60M300 270v60" stroke="#fff1e8" strokeWidth="3" />
          <circle cx="300" cy="300" r="26" fill="none" stroke="#fff1e8" strokeWidth="2" />
        </motion.g>
        <motion.path d="M300 286 L300 70" stroke="#ffb17e" strokeWidth="3" filter="url(#orangeGlow)" style={{ opacity: beamOpacity }} />
        <motion.path d="M300 314 L300 530" stroke="#ff5500" strokeWidth="12" filter="url(#orangeGlow)" style={{ opacity: beamOpacity }} />
      </motion.svg>
    </motion.div>
  );
}

export default function NeuralCore() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.2 });
  const gridY = useTransform(progress, [0, 1], [0, -80]);
  const phase = useTransform(progress, [0, 0.33, 0.66, 1], ["01 / ALIGN", "02 / FLOW", "03 / CORE", "04 / DEPLOY"]);

  return (
    <section ref={ref} id="neural-core" className="relative h-[300vh] overflow-hidden bg-black text-[#edeef0]">
      <motion.div className="pointer-events-none absolute inset-0 opacity-30" style={{ y: gridY, backgroundImage: "linear-gradient(rgba(255,85,0,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,85,0,.12) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      <div className="sticky top-0 flex h-screen items-center justify-center px-6 py-20">
        <div className="absolute left-6 top-8 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.25em] text-[#ff7333] md:left-12 md:right-12">
          <span>BDX // NEURAL CORE</span><motion.span>{phase}</motion.span>
        </div>
        <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          <div className="z-10 max-w-xs self-start pt-8 lg:self-center">
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#ff5500]">Scroll to accelerate</p>
            <h2 className="font-display text-4xl font-semibold leading-[.95] tracking-[-.05em] md:text-6xl">Digital<br /><span className="text-[#ff5500]">intelligence.</span></h2>
            <p className="mt-6 max-w-[240px] text-sm leading-6 text-[#8b92a0]">Systems engineered with precision. Every connection becomes an advantage.</p>
          </div>
          <CircuitSvg progress={progress} />
          <div className="absolute bottom-0 right-0 z-10 hidden w-44 font-mono text-[9px] uppercase leading-5 tracking-[.18em] text-[#8b92a0] lg:block"><span className="text-[#ff5500]">●</span> Layer separation<br />&nbsp;&nbsp;Inner core active<br /><span className="text-[#ff5500]">●</span> Signal integrity 99.9%</div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[.25em] text-[#8b92a0] md:left-12 md:right-12"><span>Scroll / explore the architecture</span><span>Scroll 01—04</span></div>
      </div>
    </section>
  );
}
