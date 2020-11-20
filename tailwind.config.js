module.exports = {
  darkMode: 'media',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        'corben': 'Corben, cursive',
        'oswald': 'Oswald, sans-serif',
        'spectral': 'Spectral, serif',
        'varela': 'Varela Round, sans-serif',
      },
    },
  },
  variants: {},
  plugins: [],
}
