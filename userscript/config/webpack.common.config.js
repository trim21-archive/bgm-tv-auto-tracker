const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const pkg = require('../package.json')
const production = process.env.NODE_ENV === 'production'

const config = {
  resolveLoader: {
    alias: {
      'webpack-loader': path.join(__dirname, '../bin/webpack-loader')
    }
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
        // options: {        }
      // },
      { test: /webpack\..+\.config\.js$/, use: 'webpack-loader' },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="style">
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
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
              minimize: true
            }
          }
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
    new VueLoaderPlugin()
  ]
}

if (production) {
  config.plugins.unshift(new UglifyJSPlugin())
} else {
  config.devtool = 'inline-source-map'
}
config.plugins.unshift(
  new webpack.DefinePlugin({
    'PRODUCTION': JSON.stringify(production),
    'process.env': {
      "version": JSON.stringify(pkg.version),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
)

module.exports = config
