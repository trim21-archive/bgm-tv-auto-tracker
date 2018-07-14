const path = require('path')
const webpack = require('webpack')

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
      { test: /webpack\..+\.config\.js$/, use: 'webpack-loader' },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          // 'style-loader/useable',
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
  plugins: []
}

if (production) {
  // config.plugins.unshift(new UglifyJSPlugin())
} else {
  config.devtool = 'inline-source-map'
}
config.plugins.unshift(
  new webpack.DefinePlugin({
    'PRODUCTION': JSON.stringify(production),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  })
)

module.exports = config
