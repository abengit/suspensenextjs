module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
       }
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [],
}
