/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
          'azul-claro':'#3b82f6',
          'azul-oscuro':'#1e40af'
      },
      width:{
        '42':'170px'
      },
      height:{
        '50':'200px'
      },
      screens: {
        'tablet': '900px',
      },
    },
  },
  plugins: [],
}