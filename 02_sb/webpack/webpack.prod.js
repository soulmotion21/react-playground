const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const utils = require('./utils.js')
const commonConfig = require('./webpack.common.js')

const ENV = 'production'

module.exports = merge(commonConfig({ env: ENV }), {
  mode: ENV,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: {
    main: './src/main/webapp/app/index',
  },
  output: {
    path: utils.root('build/resources/main/static/'),
    filename: 'app/[name].[contenthash:8].bundle.js',
    chunkFilename: 'app/[name].[contenthash:8].chunk.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.s?css$/,
        loader: 'stripcomment-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      enforceSizeThreshold: 50000,
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
    }),
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(tsx|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
      compressionOptions: { level: 1 },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
})
