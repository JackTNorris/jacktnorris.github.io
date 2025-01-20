const { transform } = require('lodash');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            transform: 'translateY(0%)'
          },
          '20%': {
            transform: 'translateY(-100%)'
          },
          '40%': {
            transform: 'translateY(-200%)'
          },
          '60%': {
            transform: 'translateY(-300%)'
          },
          '80%': {
            transform: 'translateY(-400%)'
          },
          '80.001%': {
            transform: 'translateY(0%)'
          },
          '90%': {
            transform: 'translateY(0%)'
          }
        },
        'shaker': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '20%': {
            transform: 'rotate(-10deg)',
          },
          '40%': {
            transform: 'rotate(10deg)'
          },
          '60%': {
            transform: 'rotate(-10deg)'
          },
          '80%': {
            transform: 'rotate(10deg)'
          },
          '100%': {
            transform: 'rotate(0deg)'
          }
        }
      },
      animation: {
        'snap-slide-down': 'fade-in-down 5s infinite',
        'shake': 'shaker 0.5s'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

