const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const metadata = require('./metadata')
const path = require('path')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const LiveReloadPlugin = require('webpack-livereload-plugin')

const webpackConfig = require('./webpack.config.base')

if (Object.prototype.hasOwnProperty.call(metadata, 'require')) {
  metadata.require.push('file://' + path.resolve(__dirname, '../dist', 'bgm-tv-auto-tracker.prod.user.js'))
} else {
  metadata.require = ['file://' + path.resolve(__dirname, '../dist', 'bgm-tv-auto-tracker.prod.user.js')]
}

metadata.name = 'dev ' + metadata.name
const cfg = merge(webpackConfig, {
  entry: {
    prod: webpackConfig.entry,
    dev: path.resolve(__dirname, './empty.js'),
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'bgm-tv-auto-tracker.[name].user.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [
    new LiveReloadPlugin({
      delay: 500,
    }),
    new UserScriptMetaDataPlugin({
      metadata
    })
  ]
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
