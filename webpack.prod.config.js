/*
alias npm-exec='PATH=$(npm bin):$PATH'
*/
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "#eval-sourcemap",
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.sass$/,
         use: [
          { loader: "sass-loader" },
          { loader: "css-loader" },
          {loader: "postcss"}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: __dirname + "/dist/",
    filename: "mainCreated.js"
  }
};