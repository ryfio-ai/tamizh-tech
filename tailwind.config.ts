import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--neon-orange)",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "var(--neon-magenta)",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--neon-green)",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.6)",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          orange: "#eb9234",
          magenta: "#ff00ff",
          violet: "#b026ff",
          green: "#00ff66",
          dark: "#0a0a1a",
          panel: "rgba(10, 10, 26, 0.7)",
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(235, 146, 52, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(235, 146, 52, 0.1) 1px, transparent 1px)',
        'cyber-gradient': 'radial-gradient(circle at center, rgba(176, 38, 255, 0.15) 0%, rgba(10, 10, 26, 1) 100%)',
      },
      boxShadow: {
        'neon-orange': '0 0 10px rgba(235, 146, 52, 0.5), 0 0 20px rgba(235, 146, 52, 0.3)',
        'neon-magenta': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
        'neon-green': '0 0 10px rgba(0, 255, 102, 0.5), 0 0 20px rgba(0, 255, 102, 0.3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
