var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname + "/static/src",
    entry: {
        app: "./js/main.js"
    },
    output: {
        path: __dirname + "/static/dist",
        filename: "/js/site.js",
        publicPath: "/site_media/static"
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?name=/fonts/[name].[ext]?[hash]" },
            { test: /\.jsx?$/, loader: "babel-loader", query: {compact: false} },
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new ExtractTextPlugin("/css/site.css")
    ]
};
