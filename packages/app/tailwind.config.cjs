// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,json,ts}',
    './index.html',
    './../ui/src/**/*.{html,js,json,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('daisyui')],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
