const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pkg = require('../package.json')
const config = require('./config')

const production = process.env.NODE_ENV === 'production'

let webpackConfig = {
  resolve: {
    extensions: ['.js', '.vue']
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  externals: {
    'jquery': '$',
    'vue': 'Vue',
    axios: 'axios',
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
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          // 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              minimize: true,
              importLoaders: 1
            }
          },
          'postcss-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'PRODUCTION': JSON.stringify(production),
      'process.env': {
        'version': JSON.stringify(pkg.version),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new VueLoaderPlugin(),

  ]
}

if (production) {
  webpackConfig = merge(webpackConfig, config.production)
} else {
  webpackConfig = merge(webpackConfig, config.development)
}

// let devMeta = JSON.parse(JSON.stringify(metadata))
// if (devMeta.require) {
//   devMeta.require.push(path.resolve(__dirname, '../dist', config.output.filename))
// }

// let devConfig = {
//   entry: '',
//   output: {
//     filename: 'dev.user.js',
//     path: path.resolve(__dirname, '../dist')
//   },
//   plugins: [
//     new UserScriptMetaDataPlugin({
//       metadata: devMeta
//     }),
//   ]
// }

// module.exports = [config, devConfig]
module.exports = webpackConfig
