const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/');
const BUILD_DIR = path.resolve(__dirname, 'src/public/');

const config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        inline:true,
        port: 8008
    },
    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                include: APP_DIR,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', 
                    'css?sourceMap!sass?sourceMap'
                )
            },
            { test: /\.(png|jpg)$/, loader: 'file-loader' }

        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]


};

module.exports = config; 