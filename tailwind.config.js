/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#c9beff',
        'on-primary': '#311c7e',
        background: '#08080A',
        surface: '#131315',
        'surface-variant': '#353437',
        'on-surface': '#e5e1e4',
        'on-surface-variant': '#c9c4d3',
        'outline-variant': '#484552',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'container-max': '1440px',
        'stack-lg': '48px',
        'stack-sm': '12px',
        gutter: '32px',
        'stack-md': '24px',
        margin: '64px',
        unit: '4px',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Geist', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '800' }],
        'headline-lg': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      keyframes: {
        backgroundAlive: {
          '0%':   { transform: 'scale(1.2) rotate(0deg) translate(0px, 0px)' },
          '25%':  { transform: 'scale(1.35) rotate(3deg) translate(60px, -40px)' },
          '50%':  { transform: 'scale(1.25) rotate(-2deg) translate(-40px, 30px)' },
          '75%':  { transform: 'scale(1.3) rotate(2deg) translate(30px, 50px)' },
          '100%': { transform: 'scale(1.2) rotate(0deg) translate(0px, 0px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%':       { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'background-alive': 'backgroundAlive 18s ease-in-out infinite',
        blink: 'blink 1s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      maxWidth: {
        'container-max': '1440px',
      },
    },
  },
  plugins: [],
}
