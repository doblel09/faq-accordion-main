/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(275, 100%, 97%)',
        gpurple: 'hsl(292, 16%, 49%)',
        dpurple: 'hsl(292, 42%, 14%)'
      },
      fontFamily: {
        WorkSans: ['WorkSans','WorkSans-Bold']
      }
    },
  },
  plugins: [],
}

