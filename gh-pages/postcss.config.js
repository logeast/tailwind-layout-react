module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./packs/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
