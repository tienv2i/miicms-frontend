const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleTracker = require('webpack-bundle-tracker');
const LoadablePlugin = require('@loadable/webpack-plugin');

var config = {
    entry: {
        main: './src/entry.client.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[fullhash].js',
        publicPath: '/static/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.s(c|a)?ss$/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name]-[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]-[fullhash].css'
        }),
        new LoadablePlugin({
            filename: 'stats.json'
        })
        // new BundleTracker({
        //     path:__dirname,
        //     filename: 'webpack-stats.json'
        // }),
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../src/index.html'),
        //     cache: false
        // }),
    ],
    resolve: {
        // alias: {
        //     'assets': path.resolve(__dirname, '..', 'src', 'assets'),
        //     'components': path.resolve(__dirname, '..', 'src', 'components'),
        //     'pages': path.resolve(__dirname, '..', 'src', 'pages')
        // },
        extensions: [ '', '.js', '.jsx']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../dist')
        }
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
 
}

module.exports = config;