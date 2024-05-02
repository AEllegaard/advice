/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        scale: ['scale-variable', 'sans-serif'],
        krub: ['krub', 'sans-serif']
      },
    },
  },
  plugins: [],
}

