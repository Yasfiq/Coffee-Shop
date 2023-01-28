/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      fontFamily: {
        'rubik' : 'Rubik',
        'poppins' : 'Poppins'
      },
      colors: {
        'primary' : '#FFBA33',
        'secondary' : '#6A4029',
        'third' : '#bababa',
        'blold' : '#4F5665'
      }
    },
  },
  plugins: [],
}