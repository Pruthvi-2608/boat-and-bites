/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#101820",
          "ink-dark": "#0B1015",
          "ink-soft": "#19222D",
          cream: "#FAF8F3",
          sand: "#EEE8DC",
          "warm-white": "#FFFDF9",
          orange: "#F0822A",
          "orange-dark": "#D96518",
          "orange-light": "#FDF2E9",
          "wave-blue": "#3C3181",
          "wave-purple": "#6257A5",
          "wave-light": "#EEECF7",
          text: "#171717",
          muted: "#6F6A63",
          border: "rgba(23, 23, 23, 0.12)",
          "border-dark": "rgba(255, 255, 255, 0.12)"
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        display: ["'Playfair Display'", "'Cormorant Garamond'", "serif"],
        sans: ["'Plus Jakarta Sans'", "Manrope", "sans-serif"]
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
