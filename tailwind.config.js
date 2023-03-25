/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'parag': ['Fasthand', 'cursive'],
        'header': ['Source Code Pro', 'monospace']
      },
    },
  },
  plugins: [],
}
