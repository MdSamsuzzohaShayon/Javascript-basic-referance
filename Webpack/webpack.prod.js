// https://webpack.js.org/configuration/
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



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
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",  // https://github.com/jantimon/html-webpack-plugin#options
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true
            })
        ],
    },
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
    },
});