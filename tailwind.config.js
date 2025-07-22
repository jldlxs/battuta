/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
  fontFamily: {
  'tommy-regular': ['made_tommyregular', 'sans-serif'],
  'tommy-bold': ['made_tommymedium', 'sans-serif'], // se quiser usar o "bold" também
},
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
