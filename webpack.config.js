const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/index.js')],
  output: {
    // options related to how webpack emits results

    // where compiled files go
    path: path.resolve(__dirname, "static/"),

    // 127.0.0.1/static/frontend/public/ where files are served from
    publicPath: "/",
    filename: 'main.js',  // the same one we import in index.html
  },
  module: {
    // configuration regarding modules
    rules: [
      {
        // regex test for js and jsx files
        test: /\.(js|jsx)?$/,
        // don't look in the node_modules/ folder
        exclude: /node_modules/,
        // for matching files, use the babel-loader
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
          ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css"
    }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),
  ]
};