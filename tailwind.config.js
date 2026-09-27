/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#171717",
          deep: "#101820",
          dark: "#0B1015",
          soft: "#1F2833",
        },
        cream: {
          DEFAULT: "#FAF8F3",
          warm: "#FFFDF9",
          sand: "#EEE8DC",
        },
        orange: {
          brand: "#F0822A",
          dark: "#D96518",
          light: "#FDF2E9",
        },
        wave: {
          blue: "#3C3181",
          purple: "#6257A5",
          light: "#EEECF7",
        },
        muted: "#6F6A63",
        border: "rgba(23, 23, 23, 0.12)",
        "border-dark": "rgba(255, 255, 255, 0.12)"
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Manrope'", "sans-serif"],
        mono: ["monospace"],
      },
      animation: {
        'wave-flow': 'waveFlow 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        waveFlow: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.92', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
