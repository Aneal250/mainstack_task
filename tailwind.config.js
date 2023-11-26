/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#131316',
        'grey-400': '#56616B',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
