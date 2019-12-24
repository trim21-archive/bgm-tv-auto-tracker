const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const production = process.env.NODE_ENV === 'production'
const pkg = require('../package.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.less'],
    alias: { '@': path.resolve(__dirname, '../src/') },
  },
  optimization: {
    minimize: true,
    removeEmptyChunks: true,
    chunkIds: 'named',
    removeAvailableModules: false,
    mergeDuplicateChunks: false,
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  externals: {
    // jquery: '$',
    // vue: 'Vue',
    // axios: 'axios',
    // 'axios-userscript-adapter': 'axiosGmxhrAdapter',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader', // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
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
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(production),
      'process.env': {
        version: JSON.stringify(pkg.version),
        PRODUCTION: JSON.stringify(production),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
}

if (process.env.npm_config_report) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
