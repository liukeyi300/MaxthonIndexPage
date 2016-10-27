/**
 * Created by Liukeyi on 2016/10/26.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/[name].css');

var buildPath = path.resolve(__dirname, 'build');

var config = {
    entry : {
        index : './src/js/entry.js'
    },
    extensions: ['', '.js', '.json', '.css', '.less'],
    output: {
        path: buildPath,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        extractCSS
    ]
};

module.exports = config;