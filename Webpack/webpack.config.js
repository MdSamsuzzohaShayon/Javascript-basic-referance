// https://webpack.js.org/configuration/

const path = require("path");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    // https://webpack.js.org/loaders/css-loader/
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
    }
};

// 48:00