module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        defaultGray: {
          50: '#ffffff',
          100: '#f0f1f2',
          200: '#969696',
          300: '#3e3e3e',
        },
        defaultBlue: {
          50: '#94cbff',
          100: '#6daee9',
          200: '#4d88bd',
          300: '#336a9b',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
