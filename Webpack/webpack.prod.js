// https://webpack.js.org/configuration/
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js", // https://webpack.js.org/guides/caching/
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'img/[hash][ext][query]'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,// STEP 3. EXTRACT CSS INTO FILES
                    "css-loader", // STEP 2. TURN CSS INTO COMMON JS
                    "sass-loader" // STEP 1. TURNS SASS INTO CSS
                ]
            },
        ]
    }
});