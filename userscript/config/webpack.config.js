const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pkg = require('../package.json')
const config = require('./config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const production = process.env.NODE_ENV === 'production'

let webpackConfig = {
  node: {
    Buffer: false
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false,
    removeEmptyChunks: true,
    namedChunks: true,
    removeAvailableModules: false,
    mergeDuplicateChunks: false,
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  externals: {
    'path-browserify': 'path-browserify',
    'jquery': '$',
    'vue': 'Vue',
    axios: 'axios',
    'axios-userscript-adapter': 'axiosGmxhrAdapter',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader', // <style lang="style">
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(production),
      'process.env': {
        'version': JSON.stringify(pkg.version),
        'PRODUCTION': JSON.stringify(production),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ]
}

if (production) {
  webpackConfig = merge(webpackConfig, config.production)
} else {
  webpackConfig = merge(webpackConfig, config.development)
}

if (process.env.npm_config_report) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
