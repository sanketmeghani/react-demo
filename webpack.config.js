var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var __dirname = path.resolve();

module.exports = {
    context: __dirname + "/app",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app.jsx",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.min.js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
};
