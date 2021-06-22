// https://webpack.js.org/configuration/


const path = require("path");

module.exports = {
    entry: { 
        main: "./src/index.js" ,
        vendor: './src/vendor.js'
    },

    // npm install --save-dev css-loader
    module: {
        rules: [
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
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                  },
                ],
              },
        ]
    },
};

// 48:00