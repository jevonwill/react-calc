/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/comps/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'gold':'#fcc513',
      'black':'#000000',
      'white':'#ffffff',
    },
    extend: {},
  },
  plugins: [],
}
