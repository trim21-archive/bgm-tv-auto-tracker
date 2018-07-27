const path = require('path')
const pkg = require('../package.json')
const common = require('./webpack.common.config.js')
const WrapperPlugin = require('wrapper-webpack-plugin')
const merge = require('webpack-merge')
const WatchLiveReloadPlugin = require('webpack-watch-livereload-plugin')

const production = process.env.NODE_ENV === 'production'


parseAuthor = (author) => {
  if (typeof author === 'string') return author

  let a = author['name']
  if (author['email']) {
    a += ' <' + author['email'] + '>'
  }
  if (author['url']) {
    a += ' (' + author['url'] + ')'
  }

  return a
}

/**
 * Generate the user
 * @param {Object.<string, string|string[]|undefined|null>} metadata the metadata.
 * @return {string} the metadata block as a string.
 */
const generateMetadataBlock = (metadata) => {
  let block = ''
  for (let key in metadata) {
    if (metadata.hasOwnProperty(key)) {
      let values = metadata[key]
      if (values) {
        if (!Array.isArray(values)) {
          values = [values]
        }
        for (let i = 0; i < values.length; i++) {
          block += '// @' + key + ' ' + values[i] + '\n'
        }
      } else {
        block += '// @' + key + '\n'
      }
    }
  }

  return '// ==UserScript==\n'
    + block
    + '// ==/UserScript==\n\n'
}

let myMeta = {
  'name': 'Bgm.tv auto tracker',
  'namespace': 'https://trim21.me/',
  'version': pkg['version'],
  'author': parseAuthor(pkg['author']),
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

const config = merge(common, {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: production ? 'bgm-tv-auto-tracker.user.js' : 'bgm-tv-auto-tracker.dev.user.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new WatchLiveReloadPlugin({
      delay: 500,
      files: [
        // Replace these globs with yours
        './src/**/*.html',
        './src/**/*.css',
        './src/**/*.js',
      ]
    }),
    new WrapperPlugin({
      test: /\.user\.js$/,
      header: generateMetadataBlock(myMeta)
    })
  ]
})

module.exports = config
