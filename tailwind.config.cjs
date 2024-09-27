/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Arial': ['Arial', 'sans-serif'],
        'Helvetica': ['Helvetica', 'sans-serif'],
      },
      colors: {
        'purple': '#210837',
      },
    },
  },
  plugins: [],
}
