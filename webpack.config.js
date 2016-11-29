//import webpack from 'webpack';
var webpack = require('webpack');


//var mainEntry = path.resolve(__dirname, '../client/client.js');
/*
Notes...
Parameter "?reload=true" tells to webpack to relead the page if hot reloading failes for some reason.

App's actual entry point must be specified here last, the order is critical. (extension is implied... client.js)
*/

var entries = [
   'webpack-hot-middleware/client?reload=true',
   './client/client'
];

var plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

module.exports = {
  noInfo: false,// To see what webpack is doing
  entry: entries,
  output: {
    path: __dirname + '/static/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
  target: 'web',
  debug: true,
  watch: true,
  plugins: plugins,
  module: {
    preLoaders: [
        /*{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'

        }*/
    ],
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel']
        }/*,
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ['style', 'css']
        }*/
    ]
  }
}