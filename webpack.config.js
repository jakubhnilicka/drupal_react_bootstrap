const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
  entry: {
    "root": "./js/src/root.js",
    "root2": "./js/src/root2.js",
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].build.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};

module.exports = config;
