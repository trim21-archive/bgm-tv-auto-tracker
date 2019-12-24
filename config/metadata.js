const pkg = require('../package.json')

module.exports = {
  name: 'Bgm.tv auto tracker',
  namespace: 'https://trim21.me/',
  version: pkg.version,
  author: pkg.author,
  source: pkg.repository.url,
  license: 'MIT',
  match: [
    'https://www.bilibili.com/bangumi/play/*',
    'http*://www.iqiyi.com/*_*.html*',
    'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback*',
  ],
  grant: [
    'GM_addStyle',
    'GM_setValue',
    'GM_getValue',
    'GM_openInTab',
    'GM_addStyle',
    'GM_xmlhttpRequest',
    'unsafeWindow'
  ],
  connect: [
    '127.0.0.1',
    'api.bgm.tv',
    'www.trim21.cn',
  ],
  'run-at': 'document-idle'
}
