/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'tommy-regular': 'made_tommyregular',
        'tommy-bold': 'made_tommymedium',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
