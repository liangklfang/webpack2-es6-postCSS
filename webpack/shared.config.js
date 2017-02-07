const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

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
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file',
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['> 0.5% in JP']
    })
  ],
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    })
  ]

};
