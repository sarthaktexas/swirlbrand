module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'swirl-green': '#3BCB0B',
        'swirl-pink': '#FF4CDE',
        'swirl-yellow': '#F0F600',
        'swirl-orange': '#F54100',
        'swirl-blue': '#3F00FF',
        'swirl-purple': '#AF2BBF'
      },
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
