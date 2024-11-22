/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-gray-1': '#D0D0D04D',
        'app-gray-2': '#DFDBE9',
        'app-blue-1':'#2324FA'
      },
      fontFamily: {
        albara: ["Albara Substitute", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        'map-bg': `url(/src/assets/map.png)`, // Define your custom class
      },

    },
  },
  plugins: [],
}