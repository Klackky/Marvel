const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const resolveUrlLoader = require("resolve-url-loader");
const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
});
const isDevelopment = !process.env.production;
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'resolve-url-loader'),
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader','sass-loader?sourceMap']
               })
             },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name][hash].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 70
                        }
                    }
                }, ],
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name][hash].[ext]'
                    }
                },
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new UglifyJsPlugin()
    ]
};
