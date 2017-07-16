const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: './public/build/js/app.min.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }, {
            test: /\.scss?$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    minimize: true
                }
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};