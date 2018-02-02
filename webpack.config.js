const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var resolveUrlLoader = require("resolve-url-loader");
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:'./dist'
  },
  module: {
  rules: [
    {
         test   : /\.css$/,
         loaders: ['style-loader', 'css-loader?url=false', 'resolve-url-loader'],
         exclude: /node_modules/
       }, {
         test   : /\.scss$/,
         loaders: ['style-loader', 'css-loader?url=false', 'resolve-url-loader', 'sass-loader'],
         exclude: /node_modules/
       },
       {
        test: /\.(png|jpeg|ttf|...)$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        query: {
          limit:10000,
          name: '[name].[ext]',
        }
      }
      ]
},
  plugins: [
   new ExtractTextPlugin('style.css'),
   new UglifyJsPlugin()
  ]
};
