//  using the default  colors
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        35: '35px',
      },
    },
    screen: {},
    colors: {
      white: '#ffff',
      blue: '#1fb6ff',
      red: colors.red,
      gray: colors.slate,
      green: colors.red,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      gray33: '#333333',
      tahiti: {
        100: colors.cyan,
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#155e75',
      },
    },
    animation: {},
  },

  plugins: [],
};
