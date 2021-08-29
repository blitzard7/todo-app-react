const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
    },
    mode: process.env.NODE_ENV || 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        // all requests are sent to index.html
        // we can load deep-links which are all handled by react-router
        historyApiFallback: true,
        // the next 3 lines are needed due to an open issue with webpack
        // using the latest version of chrome
        // when resolved we can get rid of those 3 lines
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        https: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        }),
    ],
};
