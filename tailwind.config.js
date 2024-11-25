/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          gray: {
            1: '#D0D0D04D',
            2: '#444444'
          },
          blue: {
            1: '#2324FA'
          },
          aqua: {
            1: '#56FEFE',
            2: '#00CDE21A'
          },
        }
      },
      fontFamily: {
        albara: ["Albara Substitute", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        'map-bg': `url(/src/assets/map.png)`, // Define your custom class
      },
      animation: {
        'loop-scroll': 'loop-scroll 5s linear infinite'
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 20px))' }
        }
      }
    },
  },
  plugins: [],
}