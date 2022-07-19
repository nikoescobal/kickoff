/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
      fraunces: ['fraunces', 'serif'],
    },
    extend: {
      colors: {
        orange: 'hsl(26, 93%, 78%)',
        'light-orange': 'hsl(30, 97%, 85%)',
      },
    },
  },
  plugins: [],
};
