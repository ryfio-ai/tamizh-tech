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
        // B2B Industrial Palette (Strict adherence to request)
        'primary': {
          DEFAULT: '#F47A20',
          'main': '#F47A20',
          'hover': '#D96510',
          'soft': '#FFF1E6',
          foreground: '#FFFFFF',
        },
        'secondary': {
          DEFAULT: '#1F2A44',
          'main': '#1F2A44',
          'hover': '#161E31',
          foreground: '#FFFFFF',
        },
        'bg': {
          'page': '#F7F7F5', // Warm off-white surface
          'primary': '#FFFFFF',
          'secondary': '#F3F4F6',
          'accent': '#FFF1E6',
        },
        'text': {
          'primary': '#1F2A44', // Deep navy-charcoal
          'secondary': '#5B6470', // Steel gray muted
          'muted': '#838B98',
          'on-primary': '#FFFFFF',
        },
        'border': {
          DEFAULT: '#D9DEE5', // Industrial border
          'light': '#E5E9EF',
          'medium': '#D1D5DB',
        },
        // Compatibility with UI components
        background: '#F7F7F5',
        foreground: '#1F2A44',
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#5B6470',
        },
      },
      borderRadius: {
        'none': '0',
        'xs': '1px',
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'full': '9999px',
      },
      fontFamily: {
        // B2B 'Suit Font' System
        sans: ["'Satoshi'", "'General Sans'", "Inter", "system-ui", "sans-serif"],
        heading: ["'General Sans'", "'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.02em',
        'wide': '0.05em',
        'widest': '0.1em',
        'industrial': '0.2em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.6',
      },
    },
  },
  plugins: [],
};
export default config;
