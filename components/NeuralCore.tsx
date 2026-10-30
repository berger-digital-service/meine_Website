"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const tracks = [
  "M 300 300 H 180 V 220 H 92", "M 300 300 H 170 V 382 H 82", "M 300 300 H 238 V 112 H 190",
  "M 300 300 H 238 V 488 H 190", "M 300 300 H 420 V 180 H 510", "M 300 300 H 430 V 420 H 520",
  "M 300 300 H 360 V 86 H 408", "M 300 300 H 360 V 514 H 408", "M 150 220 V 152 H 105",
  "M 450 180 V 114 H 498", "M 150 382 V 450 H 108", "M 450 420 V 478 H 500",
];

function CircuitSvg({ progress }: { progress: any }) {
  const scale = useTransform(progress, [0, 0.42, 1], [0.82, 1.06, 1.16]);
  const rotateX = useTransform(progress, [0, 0.48, 1], [18, 0, -8]);
  const rotateY = useTransform(progress, [0, 0.48, 1], [-24, 0, 18]);
  const y = useTransform(progress, [0, 0.5, 1], [36, 0, -18]);
  const shellY = useTransform(progress, [0, 0.55, 1], [0, -10, -34]);
  const coreY = useTransform(progress, [0, 0.55, 1], [0, 12, 48]);
  const coreOpacity = useTransform(progress, [0.35, 0.7], [0.2, 1]);
  const beamOpacity = useTransform(progress, [0.55, 0.9], [0, 0.9]);
  const trackOpacity = useTransform(progress, [0.2, 0.62, 1], [0.22, 0.8, 1]);

  return (
    <motion.div className="relative aspect-square w-[min(86vw,680px)] [perspective:1200px]" style={{ scale, rotateX, rotateY, y }}>
      <motion.svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full overflow-visible" aria-label="Exploded technical processor diagram">
        <defs>
          <radialGradient id="coreGlow"><stop stopColor="#fff8ee" /><stop offset=".16" stopColor="#ffc08f" /><stop offset=".42" stopColor="#ff5b08" stopOpacity=".72" /><stop offset="1" stopColor="#ff5500" stopOpacity="0" /></radialGradient>
          <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#171a1d" /><stop offset=".28" stopColor="#9ca4a9" /><stop offset=".48" stopColor="#42494e" /><stop offset=".72" stopColor="#c8ced0" /><stop offset="1" stopColor="#202427" /></linearGradient>
          <linearGradient id="copper" x1="0" x2="1"><stop stopColor="#6f2109" /><stop offset=".5" stopColor="#ff8b50" /><stop offset="1" stopColor="#7d250b" /></linearGradient>
          <filter id="orangeGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <filter id="softGlow"><feGaussianBlur stdDeviation="14" /></filter>
          <pattern id="microGrid" width="12" height="12" patternUnits="userSpaceOnUse"><path d="M12 0H0V12" fill="none" stroke="#ff7333" strokeOpacity=".14" strokeWidth=".6" /></pattern>
        </defs>

        <g className="fill-none stroke-[#ff5500]" filter="url(#orangeGlow)">
          {tracks.map((d, i) => <motion.path key={d} d={d} strokeWidth={i % 3 === 0 ? 2 : 1} strokeDasharray="4 13" style={{ pathLength: 1, opacity: trackOpacity }} animate={{ strokeDashoffset: [0, -34] }} transition={{ duration: 1.5 + (i % 4) * .35, repeat: Infinity, ease: "linear" }} />)}
        </g>
        <g className="fill-none stroke-[#ff7333]" opacity=".34">
          {tracks.slice(0, 8).map((d) => <path key={`fine-${d}`} d={d} strokeWidth=".5" strokeDasharray="1 8" />)}
        </g>
        <g fill="#ffb17e">
          {tracks.map((d, i) => <motion.circle key={`node-${d}`} r={i % 3 === 0 ? 4 : 2.5} animate={{ opacity: [.25, 1, .25], scale: [0.8, 1.35, 0.8] }} transition={{ duration: 1.4 + i * .11, repeat: Infinity, delay: i * .08 }}><animateMotion dur={`${2.4 + i * .15}s`} repeatCount="indefinite" path={d} /></motion.circle>)}
        </g>

        <motion.g style={{ y: shellY }}>
          <rect x="145" y="145" width="310" height="310" rx="32" fill="#050606" opacity=".7" filter="url(#softGlow)" />
          <rect x="158" y="158" width="284" height="284" rx="26" fill="#111315" stroke="url(#metal)" strokeWidth="10" />
          <rect x="166" y="166" width="268" height="268" rx="21" fill="url(#microGrid)" opacity=".35" />
          <rect x="180" y="180" width="240" height="240" rx="16" fill="#1c2022" stroke="#667077" strokeWidth="2" />
          <path d="M205 180v-22m38 22v-30m38 30v-22m38 22v-30m38 30v-22M205 420v22m38-22v30m38-30v22m38-22v30m38-30v22" stroke="#b0b6b8" strokeWidth="3" opacity=".65" />
          <path d="M180 205h-22m22 38h-30m30 38h-22m22 38h-30m30 38h-22M420 205h22m-22 38h30m-30 38h22m-22 38h30m-30 38h22" stroke="#b0b6b8" strokeWidth="3" opacity=".65" />
          <rect x="202" y="202" width="196" height="196" rx="14" fill="none" stroke="url(#copper)" strokeWidth="2" opacity=".75" />
          <rect x="216" y="216" width="168" height="168" rx="10" fill="#080909" stroke="#ff5500" strokeWidth="2" />
          <path d="M240 240h120v120H240z M260 240v120m40-120v120m40-120v120M240 260h120m-120 40h120m-120 40h120" fill="none" stroke="#ff5500" strokeWidth="1" opacity=".52" />
          <motion.path d="M222 232H378" stroke="#ffe1ce" strokeWidth="2" opacity=".55" animate={{ y: [0, 138, 0], opacity: [.1, .7, .1] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} />
        </motion.g>

        <motion.g style={{ y: coreY, opacity: coreOpacity }}>
          <motion.circle cx="300" cy="300" r="112" fill="url(#coreGlow)" animate={{ scale: [0.92, 1.08, 0.92], opacity: [.65, 1, .65] }} transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }} />
          <circle cx="300" cy="300" r="62" fill="#ff5500" opacity=".14" filter="url(#orangeGlow)" />
          <motion.circle cx="300" cy="300" r="44" fill="none" stroke="#ffc4a5" strokeWidth="1" strokeDasharray="3 7" animate={{ rotate: 360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
          <path d="M270 300h60M300 270v60" stroke="#fff7f1" strokeWidth="3" />
          <circle cx="300" cy="300" r="26" fill="none" stroke="#fff1e8" strokeWidth="2" />
          <motion.circle cx="300" cy="300" r="10" fill="#fff" animate={{ opacity: [.35, 1, .35], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 1.2, repeat: Infinity }} />
        </motion.g>
        <motion.path d="M300 286 L300 70" stroke="#ffb17e" strokeWidth="3" filter="url(#orangeGlow)" style={{ opacity: beamOpacity }} animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
        <motion.path d="M300 314 L300 530" stroke="#ff5500" strokeWidth="12" filter="url(#orangeGlow)" style={{ opacity: beamOpacity }} animate={{ opacity: [.25, .95, .25] }} transition={{ duration: 1.5, repeat: Infinity }} />
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
        <div className="absolute left-6 top-8 right-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.25em] text-[#ff7333] md:left-12 md:right-12"><span>BDX // NEURAL CORE</span><motion.span>{phase}</motion.span></div>
        <div className="relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          <div className="z-10 max-w-xs self-start pt-8 lg:self-center"><p className="mb-5 font-mono text-[10px] uppercase tracking-[.3em] text-[#ff5500]">Scroll to accelerate</p><h2 className="font-display text-4xl font-semibold leading-[.95] tracking-[-.05em] md:text-6xl">Digital<br /><span className="text-[#ff5500]">intelligence.</span></h2><p className="mt-6 max-w-[240px] text-sm leading-6 text-[#8b92a0]">Systems engineered with precision. Every connection becomes an advantage.</p></div>
          <CircuitSvg progress={progress} />
          <div className="absolute bottom-0 right-0 z-10 hidden w-44 font-mono text-[9px] uppercase leading-5 tracking-[.18em] text-[#8b92a0] lg:block"><span className="text-[#ff5500]">●</span> Layer separation<br />&nbsp;&nbsp;Inner core active<br /><span className="text-[#ff5500]">●</span> Signal integrity 99.9%</div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between font-mono text-[10px] uppercase tracking-[.25em] text-[#8b92a0] md:left-12 md:right-12"><span>Scroll / explore the architecture</span><span>Scroll 01—04</span></div>
      </div>
    </section>
  );
}
