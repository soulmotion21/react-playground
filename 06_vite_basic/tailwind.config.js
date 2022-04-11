const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,tsx,ts}'],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        gray: colors.slate,
        'red-500': '#fa00ff',
      },
    },
  },
  plugins: [],
}
