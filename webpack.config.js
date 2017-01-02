var path = require("path");
var webpack = require("webpack");
var debug = process.env.NODE_ENV !== "production";

var BUILD_DIR = path.resolve(__dirname, ".");
var APP_DIR = path.resolve(__dirname, "./src");

module.exports = {
  //devtool: debug ? "inline-sourcemap" : null,

  entry: APP_DIR + "/index.js",
  output: {
    filename: "bundle.js",
    path: BUILD_DIR,
    publicPath: "/flexbox/",
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include : APP_DIR,
        loader: "style!css"
      },
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        include : APP_DIR,
        loader: "babel-loader",
        query:
          {
            presets:["react", "es2015", "stage-0"],
            plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"]
          }
      },
      {
        test: /\.scss$/,
        include : APP_DIR,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        include : APP_DIR,
        loader: "html"
      }
    ]
  },
  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
    root: path.resolve(__dirname, "src/assets"),
    attrs: ["img:src", "link:href"]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]
};
