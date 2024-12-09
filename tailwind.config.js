/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'carousel': 'carousel 5s infinite linear',
      },
      keyframes: {
        carousel: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-25vw)' },
        },
      },
      colors: {
        app: {
          gray: {
            1: '#D0D0D04D',
            2: '#444444',
            3: '#201446',
            4: "#161616B2"
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
        'map-bg': `url(/src/assets/map-custom.png)`,
        'map-bg-2': `url(/src/assets/map/map2.png)`,
        support1: `url(/src/assets/card-image.svg)`,
        support2: `url(/src/assets/support2.png)`,
        support3: `url(/src/assets/support3.png)`,
        'gradient-bg': "url(/src/assets/map-color.png)"
      },
      animation: {
        'loop-scroll': 'loop-scroll 5s linear infinite',
        'fade-in-up': 'fade-in-up 1500ms ease-in-out forwards', // Custom animation,
        'fade-in-visibility': 'fade-in-visibility 3s ease-in-out forwards', // Custom animation
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
        'fade-in-visibility': {
          '0%': {
            opacity: '0',
            visibility: 'hidden',
          },
          '100%': {
            opacity: '1',
            visibility: 'visible',
          },
        }
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, and other WebKit browsers
        },
      });
    },
  ],
};
