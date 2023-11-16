/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'milk-white': '#F6F4EB'
      },
      fontFamily: {
        'pop': ['Poppins','sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mons' : ['Montserrat','sans-serif'],
      }
    },
  },
  plugins: [],
}

