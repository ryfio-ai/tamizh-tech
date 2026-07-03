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
          DEFAULT: '#FB7115',
          'main': '#FB7115',
          'hover': '#D95B0F',
          'soft': 'rgba(251, 113, 21, 0.1)',
          foreground: '#FFFFFF',
        },
        'secondary': {
          DEFAULT: '#FFFFFF',
          'main': '#FFFFFF',
          'hover': '#F5F6F8',
          foreground: '#031549',
        },
        'bg': {
          'page': '#031549',
          'primary': '#031549',
          'secondary': '#0A2060',
          'elevated': '#102B75',
          'accent': 'rgba(251, 113, 21, 0.1)',
        },
        'text': {
          'primary': '#FFFFFF',
          'secondary': '#C5CCE0',
          'muted': '#8A99C0',
          'on-primary': '#FFFFFF',
        },
        'border': {
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          'light': 'rgba(255, 255, 255, 0.12)',
          'medium': 'rgba(255, 255, 255, 0.12)',
        },
        // Compatibility with UI components
        background: '#031549',
        foreground: '#FFFFFF',
        muted: {
          DEFAULT: '#0A2060',
          foreground: '#C5CCE0',
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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
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
