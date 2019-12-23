const merge = require('webpack-merge')

const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const metadata = require('./metadata')

const webpackConfig = require('./webpack.config.base')
const cfg = merge({}, webpackConfig, {
  output: {
    filename: 'bgm-tv-auto-tracker.prod.user.js'
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata
    })
  ]
})

module.exports = cfg
