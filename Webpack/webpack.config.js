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
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};

// 48:00