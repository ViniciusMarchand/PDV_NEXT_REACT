import type { Config } from "tailwindcss"
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
theme: {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
      '160': '40rem',
      '176': '44rem',
      '192': '48rem',
      '208': '52rem',
      'sidebar': '240px',
      'header':'70px'

  },
  screens: {
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2560px',
      '6xl': '3200px',
      '7xl': '3840px',
      '8xl': '4480px',
      '9xl': '5120px',
  },
  fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
  },
  dropShadow: {

      '1xl': '0px 1px 2px rgba(0, 0, 0, 1)',
      '2xl': '0px 1px 10px rgba(0, 0, 0, 0.1)',
      '2xlside': [
          '0 1px 3px rgba(0, 0, 0, 0.9)',
          '0 1px 2px rgba(0, 0, 0, 0.9)'
      ],
      '3xl': '1px 1px .25px rgba(255, 255, 255, 1)',
      '4xl': [
          '0 15px 15px rgba(0, 0, 0, 0.25)',
          '0 25px 25px rgba(0, 0, 0, 0.15)'
      ],
      '5xl': '0 1px 2px rgba(0, 172, 172, 0.8)',
      '6xl': '0 5px 10px rgba(0, 172, 172, 0.9)',
  },
  boxShadow: {
      'alarmed': 'inset 0 0 0 4px #f00',

      '2xl': '2px 2px 5px rgba(0, 0, 0, 0.9)',
  },
    colors: {
      primaria: '#F5F5F5',
      secundaria: '#FBFBFB',
      terciaria: '#facc15',
      terciaria2: '#eab308',
      textoContraste:'#fdfdfd',
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
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
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },

},
  darkMode: ["class"],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  prefix: "",
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config


/** @type {import('tailwindcss').Config} */



