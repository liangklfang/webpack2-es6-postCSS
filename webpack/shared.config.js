const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    'vendor': './src/vendor.js'
  },
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file',
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })
  ]

};
