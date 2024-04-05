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
        primeBlue: "var(--prime-blue)",
        dullBlue: "var(--dull-blue)",
        darkBlue: "var(--dark-blue)",
        textNav: "var(--text-nav)",
        cardBackground: "var(--card-background)",
        lightPrimeGray: "var(--light-primeGray)",
        fontColor: "var(--font-color)"
      }
    },
  },
  plugins: [],
}