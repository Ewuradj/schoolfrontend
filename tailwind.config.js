// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        primary: ['var(--primary)', 'var(--primary)'],
        'primary-transparent': ['var(--primary)', 'transparent'],
      },
    },
  },
  plugins: [],
};