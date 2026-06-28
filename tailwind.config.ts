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
          DEFAULT: '#FF4D2D',
          'main': '#FF4D2D',
          'hover': '#E04020',
          'soft': 'rgba(255, 77, 45, 0.1)',
          foreground: '#F5F6F8',
        },
        'secondary': {
          DEFAULT: '#00D1B2',
          'main': '#00D1B2',
          'hover': '#00B89C',
          foreground: '#0A0C10',
        },
        'bg': {
          'page': '#0A0C10',
          'primary': '#0A0C10',
          'secondary': '#11141A',
          'elevated': '#181C24',
          'accent': 'rgba(255, 77, 45, 0.1)',
        },
        'text': {
          'primary': '#F5F6F8',
          'secondary': '#9AA1AC',
          'muted': '#858E9B',
          'on-primary': '#F5F6F8',
        },
        'border': {
          DEFAULT: '#232833',
          'light': '#232833',
          'medium': '#232833',
        },
        // Compatibility with UI components
        background: '#0A0C10',
        foreground: '#F5F6F8',
        muted: {
          DEFAULT: '#11141A',
          foreground: '#9AA1AC',
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
