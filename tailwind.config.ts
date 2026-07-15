import type { Config } from "tailwindcss";
// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        /* backgrounds */
        page:    "var(--bg-page)",
        subtle:  "var(--bg-subtle)",
        muted:   "var(--bg-muted)",
        surface: "var(--bg-surface)",
        "dark-contrast": "var(--bg-dark-contrast)",
        /* text */
        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted":     "var(--text-muted)",
        "text-subtle":    "var(--text-subtle)",
        "text-contrast":  "var(--text-contrast)",
        /* accents */
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          soft:    "var(--accent-soft)",
          glow:    "var(--accent-glow)",
          blue:    "var(--accent-blue)",
          "blue-hover": "var(--accent-blue-hover)",
          "blue-soft": "var(--accent-blue-soft)",
          "blue-glow": "var(--accent-blue-glow)",
        },
        /* border */
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        "border-accent": "var(--border-accent)",
        /* shadcn compat */
        background: "var(--bg-page)",
        foreground: "var(--text-primary)",
        card: "var(--bg-card)",
        "card-foreground": "var(--text-primary)",
        primary: { DEFAULT: "var(--accent)", foreground: "var(--text-contrast)" },
        secondary: { DEFAULT: "var(--bg-subtle)", foreground: "var(--text-primary)" },
        ring: "var(--accent)",
        blacksect: "var(--bg-dark-contrast)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "9999px",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem,7vw,6rem)",    { lineHeight: "1", letterSpacing: "-0.04em" }],
        "display-xl":  ["clamp(2.5rem,5.5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg":  ["clamp(2rem,4vw,3rem)",    { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md":  ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        sm:  "0 1px 3px rgba(0,0,0,0.08)",
        md:  "0 4px 16px rgba(0,0,0,0.08)",
        lg:  "0 16px 48px rgba(0,0,0,0.1)",
        xl:  "0 32px 80px rgba(0,0,0,0.12)",
        blue: "0 8px 32px rgba(251,113,21,0.1)",
        teal: "0 8px 32px rgba(251,113,21,0.1)",
      },
      animation: {
        float:        "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer:      "shimmer 2.5s linear infinite",
        "spin-slow":  "spin 8s linear infinite",
        aurora:       "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(251,113,21,0.06) 0%, transparent 65%)",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
