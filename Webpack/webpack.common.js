// https://webpack.js.org/configuration/



const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require("path");

module.exports = {
    entry: { 
        main: "./src/index.js" ,
        vendor: './src/vendor.js'
    },
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
                test: /\.svg/,
                type: 'asset/inline', // Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders. https://webpack.js.org/guides/asset-modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",// STEP 3. INJECT STYLE INTO DOM
                    "css-loader", // STEP 2. TURN CSS INTO COMMON JS
                    "sass-loader" // STEP 1. TURNS SASS INTO CSS
                ]
            },
            {
                test: /\.html$/,
                loader: "html-loader", // html-loader Exports HTML as string, require references to static resources
                options: {
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            '...',
                            {
                                tag: 'img',
                                attribute: 'data-src',
                                type: 'src',
                            },
                            {
                                tag: 'img',
                                attribute: 'data-srcset',
                                type: 'srcset',
                            },
                        ],
                        urlFilter: (attribute, value, resourcePath) => {
                            // The `attribute` argument contains a name of the HTML attribute.
                            // The `value` argument contains a value of the HTML attribute.
                            // The `resourcePath` argument contains a path to the loaded HTML file.

                            if (/example\.svg$/.test(value)) {
                                return false;
                            }

                            return true;
                        },
                    }
                },
            }
        ]
    },
};

// 48:00