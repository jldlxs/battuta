/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
  fontFamily: {
  'tommy-regular': ['made_tommyregular', 'sans-serif'],
  'tommy-medium': ['made_tommymedium', 'sans-serif'],
  'tommy-bold': ['made_tommybold', 'sans-serif'], // se quiser usar o "bold" também
},
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
