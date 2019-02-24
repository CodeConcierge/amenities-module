const path = require('path');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');


module.exports = {

  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },

  module: {
    rules : [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loaders: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },

  plugins: [
    new BrotliGzipPlugin({
        asset: '[path].br[query]',
        algorithm: 'brotli',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
        quality: 11
    }),
    new BrotliGzipPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
    })
  ]
}