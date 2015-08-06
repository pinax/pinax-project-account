var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./js/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "/js/site.js",
        publicPath: "/site_media/static"
    },
    module: {
        loaders: [
            {
                test: /\.(gif|png|ico|jpg|svg)$/,
                include: [
                    path.resolve(__dirname, "src/images")
                ],
                loader: "file-loader?name=/images/[name].[ext]"
            },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.resolve(__dirname, "/src/fonts"),
                    path.resolve(__dirname, "../node_modules")
                ],
                loader: "file-loader?name=/fonts/[name].[ext]?[hash]"
            },
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
