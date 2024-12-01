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
            2: '#444444',
            3: '#201446'
          },
          blue: {
            1: '#2324FA',
            2: '#72C2F7',
            blend: '#2324FA1A',
            blend2: '#201446'
          },
          aqua: {
            1: '#56FEFE',
            2: '#00CDE21A',
            3: '#72C2F7'
          },
          purple: {
            1: "#8A62F6",
            2: '#5152FF'
          }
        }
      },
      fontFamily: {
        albara: ["Albara Substitute", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        'map-bg': `url(/src/assets/map.png)`,
        'cardbg': `url(/src/assets/card-image.svg)`,
      },
      animation: {
        'loop-scroll': 'loop-scroll 5s linear infinite',
        'fade-in-up': 'fade-in-up 1.5s ease-in-out forwards', // Custom animation
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - 20px))' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
};
