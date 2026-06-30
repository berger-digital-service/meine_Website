import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#14171C",
        "graphite-deep": "#0D0F13",
        "off-white": "#EDEEF0",
        slate: "#8B92A0",
        "signal-orange": "#FF6B35",
        "steel-blue": "#4A7FE0",
        line: "rgba(237,238,240,0.08)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-ibm-plex-sans)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
