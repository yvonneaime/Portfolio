/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backdropFilter: { 'none': 'none', 'blur': 'blur(20px)' },

    },
  },
  plugins: [],
}

