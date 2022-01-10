const webpack = require('webpack')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const { merge } = require('webpack-merge')

const utils = require('./utils.js')
const commonConfig = require('./webpack.common.js')

const ENV = 'development'

module.exports = options =>
  merge(commonConfig({ env: ENV }), {
    devtool: 'cheap-module-source-map',
    mode: ENV,
    entry: ['./src/main/webapp/app/index'],
    output: {
      path: utils.root('build/resources/main/static/'),
      filename: 'app/[name].bundle.js',
      chunkFilename: 'app/[id].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
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
    watchOptions: {
      ignored: /node_modules/,
    },
    devServer: {
      port: 3000,
      devMiddleware: {
        stats: options.stats,
      },
      compress: true,
      // open: true,
      static: {
        publicPath: './build/resources/main/static/',
      },
      https: options.tls,
      historyApiFallback: true,
      proxy: [
        {
          context: ['/api'],
          target: 'https://reqres.in', // demo api
          changeOrigin: true,
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin({
        activeModules: false,
        entries: true,
        modules: true,
        modulesCount: 5000,
        profile: false,
        dependencies: true,
        dependenciesCount: 10000,
        percentBy: null,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new SimpleProgressWebpackPlugin({
        format: options.stats === 'minimal' ? 'minimal' : 'expanded',
      }),
    ].filter(Boolean),
  })
