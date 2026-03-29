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
        // MNC-Style Backgrounds
        'bg': {
          'page': '#FAFBFC',
          'primary': '#FFFFFF',
          'elevated': '#F8F9FB',
          'accent-soft': '#E8F1FF',
        },
        // Primary Brand (Google-like Blue)
        'primary': {
          DEFAULT: '#0066FF',
          'main': '#0066FF',
          'hover': '#0052CC',
          'dark': '#003D99',
          'light': '#E3F0FF',
          '50': '#F0F7FF',
          '100': '#E3F0FF',
          '500': '#0066FF',
          '600': '#0052CC',
          '700': '#003D99',
          foreground: '#FFFFFF',
        },
        // Secondary Accent (Robotics/Energy Orange)
        'accent': {
          DEFAULT: '#FF6B35',
          'main': '#FF6B35',
          'light': '#FFE4D6',
          'hover': '#E85A29',
          foreground: '#FFFFFF',
        },
        // Professional Text Hierarchy
        'text': {
          'primary': '#0D0D0D',
          'secondary': '#1A1A1A',
          'tertiary': '#5A6C7D',
          'muted': '#8B95A5',
          'on-primary': '#FFFFFF',
          'on-accent': '#FFFFFF',
          // Mappings for older code compat
          main: '#0D0D0D',
          body: '#1A1A1A',
        },
        // MNC-Style Borders
        'border': {
          DEFAULT: '#E8EBF0',
          'light': '#E8EBF0',
          'medium': '#D0D7E0',
          'strong': '#B3BCCF',
          subtle: '#E8EBF0',
          stronger: '#D0D7E0',
        },
        // Status Colors
        'success': {
          DEFAULT: '#10B981',
          bg: '#ECFDF5',
        },
        'warning': {
          DEFAULT: '#F59E0B',
          bg: '#FFFBEB',
        },
        'error': {
          DEFAULT: '#EF4444',
          bg: '#FEE2E2',
        },
        'info': {
          DEFAULT: '#3B82F6',
          bg: '#EFF6FF',
        },
        // Standard Grays
        'gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Compatibility for shadcn components
        background: '#FAFBFC',
        foreground: '#0D0D0D',
        secondary: {
          DEFAULT: '#E3F0FF',
          foreground: '#0066FF',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#5A6C7D',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#0D0D0D',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0D0D0D',
        },
      },
      spacing: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '40px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0,0,0,0.08)',
        'md': '0 2px 6px rgba(0,0,0,0.08)',
        'lg': '0 4px 12px rgba(0,0,0,0.1)',
        'xl': '0 8px 16px rgba(0,0,0,0.12)',
        'hover': '0 8px 16px rgba(0,0,0,0.12)',
        // Compatibility
        soft: '0 2px 6px rgba(0,0,0,0.08)',
        elevated: '0 8px 16px rgba(0,0,0,0.12)',
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      fontFamily: {
        heading: ["'SF Pro Display'", "-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
        sans: ["'Inter'", "'Segoe UI'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
