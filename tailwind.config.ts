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
        // Vercel / Apple Startup Style Palette
        'primary': {
          DEFAULT: '#0B6EFD',
          'main': '#0B6EFD',
          'hover': '#0256D6',
          'soft': '#EBF3FF',
          foreground: '#FFFFFF',
        },
        'secondary': {
          DEFAULT: '#111827',
          'main': '#111827',
          'hover': '#1F2937',
          foreground: '#FFFFFF',
        },
        'accent': {
          DEFAULT: '#14B8A6',
          'main': '#14B8A6',
          'hover': '#0F766E',
          'soft': '#F0FDFA',
          foreground: '#FFFFFF',
        },
        'bg': {
          'page': '#FFFFFF',
          'primary': '#FFFFFF',
          'secondary': '#F8FAFC',
          'accent': '#EBF3FF',
        },
        'text': {
          'primary': '#111827',
          'secondary': '#4B5563',
          'muted': '#9CA3AF',
          'on-primary': '#FFFFFF',
        },
        'border': {
          DEFAULT: '#E5E7EB',
          'light': '#F3F4F6',
          'medium': '#D1D5DB',
        },
        // Compatibility with UI components
        background: '#FFFFFF',
        foreground: '#111827',
        muted: {
          DEFAULT: '#F8FAFC',
          foreground: '#4B5563',
        },
      },
      borderRadius: {
        'none': '0',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'full': '9999px',
      },
      fontFamily: {
        // Modern Inter & Satoshi System
        sans: ["Inter", "'Satoshi'", "'General Sans'", "system-ui", "sans-serif"],
        heading: ["Inter", "'General Sans'", "'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.02em',
        'wide': '0.05em',
        'widest': '0.1em',
        'industrial': '0.15em',
      },
      lineHeight: {
        'tight': '1.1',
        'relaxed': '1.625',
      },
    },
  },
  plugins: [],
};
export default config;
