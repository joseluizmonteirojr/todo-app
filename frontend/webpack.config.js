const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: path.normalize('app.js')
    },
    devServer: {
        port: 8080,
        contentBase: path.normalize('public')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.join(__dirname, 'node_modules')
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            use: 'file'
        }]
    }
}