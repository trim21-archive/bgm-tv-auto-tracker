const pkg = require('../package.json')

module.exports = {
  'name': 'Bgm.tv auto tracker',
  'namespace': 'https://trim21.me/',
  'version': pkg['version'],
  'author': pkg['author'],
  'source': pkg['repository']['url'],
  'license': 'MIT',
  'match': [
    'https://www.bilibili.com/bangumi/play/*',
    'http*://www.iqiyi.com/*_*.html',
    'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback*',
  ],
  'require': [
    'https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
    'https://cdn.jsdelivr.net/npm/axios-userscript-adapter@0.0.3/dist/axiosGmxhrAdapter.min.js',
    'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js'
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
    '127.0.0.1',
    'api.bgm.tv',
    'bangumi-auto-tracker.trim21.cn',
    'www.trim21.cn',
  ],
  'run-at': 'document-idle'
}
