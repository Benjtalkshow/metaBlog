/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#3B3C4A',
      badge: '#4B6BFB',
        accent: '#ff7e5f',
      }
    },
  },
  plugins: [],
}