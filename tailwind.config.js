const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
        },
        flesh: {
          100: '#D6FEC1',
          200: '#AFFFB5',
          300: '#EFFFFB',
          400: '#C4FFFF',
          500: '#AFE8FF',
          600: '#ACFFD4',
        },
      },
      fontFamily: {
        noto: ['Noto Sans JP'],
      },
    },
  },
  plugins: [],
};
