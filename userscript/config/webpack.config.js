const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const pkg = require('../package.json')
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const production = process.env.NODE_ENV === 'production'

let metadata = {
  'name': 'Bgm.tv auto tracker',
  'namespace': 'https://trim21.me/',
  'version': pkg['version'],
  'author': pkg['author'],
  'source': pkg['repository']['url'],
  'license': 'MIT',
  'match': [
    'https://www.bilibili.com/bangumi/play/*',
    'http*://www.iqiyi.com/*',
    'https://bangumi-auto-tracker.trim21.cn/oauth_callback*',
    'https://bangumi-auto-tracker.trim21.cn/userscript/options*'
  ],
  'require': [
    'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js',
    'https://cdn.bootcss.com/axios/0.18.0/axios.js'
  ],
  'grant': [
    'GM_addStyle',
    'GM_setValue',
    'GM_getValue',
    'GM_openInTab',
    'GM_addStyle',
    'GM_xmlhttpRequest',
    'unsafeWindow'
  ],
  'connect': [
    'localhost',
    'api.bgm.tv',
    'bangumi-auto-tracker.trim21.cn'
  ],
  'run-at': 'document-end'
}


const config = {
  resolve: {
    extensions: ['.js', '.vue']
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: production ? 'bgm-tv-auto-tracker.user.js' : 'bgm-tv-auto-tracker.dev.user.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
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
    new VueLoaderPlugin(),
    new UserScriptMetaDataPlugin({
      metadata
    }),
  ]
}

if (production) {
  // config.plugins.unshift(new UglifyJSPlugin({
  //   uglifyOptions: {
  //     output: {
  //       comments: false,
  //       beautify: true,
  //     },
  //   }
  // }))
} else {
  config.plugins.push(new WatchLiveReloadPlugin({
    delay: 500,
    files: [
      // Replace these globs with yours
      './src/**/*.html',
      './src/**/*.css',
      './src/**/*.js',
    ]
  }),)
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
