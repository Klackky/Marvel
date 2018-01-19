const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
         loaders: ['style-loader', 'css-loader?url=false', 'resolve-url-loader']
       }, {
         test   : /\.scss$/,
         loaders: ['style-loader', 'css-loader?url=false', 'resolve-url-loader', 'sass-loader']
       },
       {
        test: /\.(png|jpeg|ttf|...)$/,
        loader: 'url-loader',
        query: {
          limit:10000,
          name: '[name].[ext]',
        }
      }
      ]
},
  plugins: [
   new ExtractTextPlugin('style.css')
  ]
};
