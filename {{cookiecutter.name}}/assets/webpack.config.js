const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => ({
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  entry: {
    app: ['@babel/polyfill', './js/app.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../priv/static'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.elm$/,
        use: {
          loader: 'elm-webpack-loader',
          options: {},
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    new CopyWebpackPlugin([{ from: 'static/', to: './' }]),
  ],
})
