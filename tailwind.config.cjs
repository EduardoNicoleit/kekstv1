/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Arial': ['Arial', 'sans-serif'],
        'Helvetica': ['Helvetica', 'sans-serif'],
        // montserrat: ['Montserrat','sans-serif'],
      },
      screens: {
        '3xl': '1920px',
      },
      fontSize: {
        'xxs': '0.65rem',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
