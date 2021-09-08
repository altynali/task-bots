module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [],
      loaderOptions: (babelLoaderOptions, { env, paths }) => { return babelLoaderOptions; }
  },
}