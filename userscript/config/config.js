const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const metadata = require('./metadata')
const webpack = require('webpack')

module.exports = {
  development: {
    output: {
      filename: 'bgm-tv-auto-tracker.dev.user.js',
    },
    devtool: 'inline-source-map',
    plugins: [
      new webpack.DefinePlugin({
        // window: { TM_ENV: JSON.stringify('dev') }
      }),
      new WatchLiveReloadPlugin({
        delay: 500,
        files: [
          // Replace these globs with yours
          './src/**/*.html',
          './src/**/*.css',
          './src/**/*.js',
        ]
      })
    ],
  },
  production: {
    output: {
      filename: 'bgm-tv-auto-tracker.user.js',
    },
    plugins: [
      new UserScriptMetaDataPlugin({
        metadata
      }),
    ]
  },
  common: {}
}
