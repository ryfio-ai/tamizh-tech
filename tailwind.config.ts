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
        'primary': {
          DEFAULT: '#FF6B00',
          'main': '#FF6B00',
          'hover': '#E05E00',
          'soft': '#FFF2E6',
          foreground: '#FFFFFF',
        },
        'secondary': {
          DEFAULT: '#FFFFFF',
          'main': '#FFFFFF',
          'hover': '#FAFAFA',
          foreground: '#111111',
        },
        'bg': {
          'page': '#FFFFFF',
          'primary': '#FFFFFF',
          'secondary': '#FAFAFA',
          'accent': '#FFF2E6',
        },
        'text': {
          'primary': '#111111',
          'secondary': '#555555',
          'muted': '#999999',
          'on-primary': '#FFFFFF',
        },
        'border': {
          DEFAULT: '#E5E5E5',
          'light': '#F0F0F0',
          'medium': '#D1D1D1',
        },
        // Compatibility with UI components
        background: '#FFFFFF',
        foreground: '#111111',
        muted: {
          DEFAULT: '#FAFAFA',
          foreground: '#555555',
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
