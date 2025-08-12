/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9fcfb0',
        background: '#5a7865',
        // background: '#3e5948',
        // background: '#475c4e',
        // primary: '#3b7767',
        // background: '#f5d6c9',
        // background: '#d6a78b',
      },
      scrollBehavior: ['responsive'],
      fontFamily: {
        script: ['"Parisienne"', 'cursive'],
      },
    },
  },
  plugins: [],
};
