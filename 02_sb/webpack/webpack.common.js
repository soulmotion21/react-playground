const webpack = require('webpack')
const utils = require('./utils.js')
const { transform } = require('@formatjs/ts-transformer')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const ReactRefreshTypeScript = require('react-refresh-typescript')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { createEmotionPlugin } = require('emotion-ts-plugin')

const getTsLoaderRule = env => {
  return [
    {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before:
            env !== 'production' &&
            [
              ReactRefreshTypeScript(),
              transform({
                overrideIdFn: '[sha512:contenthash:base64:6]',
              }),
              createEmotionPlugin({
                sourcemap: true,
                autoLabel: true,
                labelFormat: '[local]',
                autoInject: false,
              }),
            ].filter(Boolean),
        }),
        transpileOnly: env !== 'production',
      },
    },
  ]
}

module.exports = options => ({
  cache: options.env !== 'production',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    modules: ['node_modules'],
    alias: utils.mapTypescriptAliasToWebpackAlias(),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: getTsLoaderRule(options.env),
        include: [utils.root('./src/main/webapp/app')],
        exclude: [utils.root('node_modules')],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot)$/i,
        loader: 'file-loader',
        options: {
          digest: 'hex',
          hash: 'sha512',
          name: 'content/[hash:8].[ext]',
        },
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
      },
    ],
  },
  stats: {
    children: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    moduleIds: 'named',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(options.env),
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/main/webapp/index.html',
      chunksSortMode: 'auto',
      inject: 'body',
      base: '/',
    }),
    new ESLintPlugin({
      exclude: [utils.root('node_modules')],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
})
