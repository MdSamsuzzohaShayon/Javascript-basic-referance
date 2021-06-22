// https://webpack.js.org/configuration/
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');




const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js", // https://webpack.js.org/guides/caching/
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[hash][ext][query]'
    },
    plugins: [new CleanWebpackPlugin()]
});