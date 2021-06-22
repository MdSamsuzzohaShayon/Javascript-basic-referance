// https://webpack.js.org/configuration/
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "main.js", // https://webpack.js.org/guides/caching/
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[hash][ext][query]'
    }
});
