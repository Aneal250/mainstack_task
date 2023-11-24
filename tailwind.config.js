/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#006CFF',
        success: '#00AC47',
        'main-text': '#333333',
        'primary-text': ' #242739',
        'sub-text': '#858597',
        'grey-text': '#cccccc',
        'grey-100-text': '#5C5C5C',
        'grey-200-text': '#F8F8F8',
        'grey-bg': '#f7f8fa',
        'grey-secondary': '#EFEFF4',
        'alt-text': '#2B2D42',
        'grey-outline': '#E5E5E5',
        'invert-green': '#CFFFDC',
        'brand-purple': '#242739',
        'brand-purple-200': '#222533',
        'deep-blue': '#182748',
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
