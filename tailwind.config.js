/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f9d3d3',
        rose: '#c79198',
        champagne: '#f7e7ce',
        ivory: '#fffff0',
        lavender: '#e6e6fa',
        peach: '#ffdab9',
        gold: '#d4af37',
        plum: '#4a2333',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
