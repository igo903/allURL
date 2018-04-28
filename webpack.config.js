var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//const path = require('dist');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },

  module: {
    rules:[
      //{test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])}
      //{ test: /\.scss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ 'css-loader' ] }) }
      //{ test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])}

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }


    ]
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin("app.css")
  ]

}
