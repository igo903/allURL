var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules:[
      //{test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])}
      { test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] }) }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin()
  ]

}
