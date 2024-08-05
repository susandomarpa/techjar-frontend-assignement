/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sidebar': "#15192a",
        'dark-bg': '#0b1020'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};