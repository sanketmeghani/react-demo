var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var __dirname = path.resolve();

module.exports = {
    context: __dirname + "/app",
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.min.js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        new HtmlWebpackPlugin({
            inject: 'head',
            template: 'index.html'
        })
    ],
};
