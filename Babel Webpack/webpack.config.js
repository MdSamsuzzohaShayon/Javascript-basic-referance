const path = require('path');

module.exports ={
    //THIS WILL BE ENTRY OF OUR APPLICATION
    entry: {
        app: './src/app.js',
    },
    //THIS WILL COMPILE ALL ES6,ES7 AND NEW SYNTEX TO ES5
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    // THIS WILL LOAD OUR BABEL-LOADER
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loder',
            query: {
                presets: ['env']
            }
        }]
    }
}