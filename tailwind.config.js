/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          'londrina-solid': ['"Londrina Solid"', 'cursive'],
        },
        fontWeight: {
          'black': 900,
        },
      },
    },
  },
  plugins: [],
}