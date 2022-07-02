/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // ADDED CUSTOM VIEWPORT FOR SMALL DEVICES
  theme: {
    maxWidth: {
      '4/5': '80%'
    },

    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
  },
  plugins: [],
}
