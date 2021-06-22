// https://webpack.js.org/configuration/



const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    plugins:  // webpack has a rich plugin interface. Most of the features within webpack itself use this plugin interface.
        [
            new HtmlWebpackPlugin({
                template: "./src/template.html"  // https://github.com/jantimon/html-webpack-plugin#options
            })
        ],
    // npm install --save-dev css-loader
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",// STEP 3. INJECT STYLE INTO DOM
                    "css-loader", // STEP 2. TURN CSS INTO COMMON JS
                    "sass-loader" // STEP 1. TURNS SASS INTO CSS
                ]
            }
        ]
    },
};

// 48:00