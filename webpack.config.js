const path = require("path");

const config = {
  // Use multiple entry files.
  // Uses format "OUTPUT FILE NAME": "ENTRY FILE PATH".
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
  // Remove react from build.
  // We are adding them as external library because size of multiple components.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};

module.exports = config;
