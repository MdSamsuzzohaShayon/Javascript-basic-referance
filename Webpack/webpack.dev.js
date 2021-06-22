// https://webpack.js.org/configuration/
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name].bndle.js", // https://webpack.js.org/guides/caching/
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[hash][ext][query]'
    },
    plugins:  // webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface.
    [
        new HtmlWebpackPlugin({
            template: "./src/template.html",  // https://github.com/jantimon/html-webpack-plugin#options
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",// STEP 3. INJECT INTO DOM
                    "css-loader", // STEP 2. TURN CSS INTO COMMON JS
                    "sass-loader" // STEP 1. TURNS SASS INTO CSS
                ]
            },
        ]
    }
});
