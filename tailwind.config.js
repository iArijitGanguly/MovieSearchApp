/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        primeBlue: "#00a0d6",
        dullBlue: "#364f65",
        darkBlue: "#191e26",
        textNav: "#fbfbfb",
        lightPrimeGray: "#32373e"
      }
    },
  },
  plugins: [],
}