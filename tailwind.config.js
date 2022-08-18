/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        slide: 'slide 300ms ease-out forwards',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateY(-3rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        indigo: {
          100: '#e2e3e4',
          200: '#c5c6c9',
          300: '#a8aaaf',
          400: '#8b8d94',
          500: '#6e7179',
          600: '#585a61',
          700: '#424449',
          800: '#2c2d30',
          900: '#161718',
        },
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require('@tailwindcss/forms')],
};
