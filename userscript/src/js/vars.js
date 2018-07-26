/* eslint-disable no-undef, camelcase */
let tm_unsafeWindow = unsafeWindow
let tm_xmlHttpRequest = GM_xmlhttpRequest
let tm_setValue = GM_setValue
let tm_getValue = GM_getValue
let tm_openInTab = GM_openInTab
let tm_addStyle = GM_addStyle
/**
 * @type {jQuery}
 */
let $ = window.$
/* eslint-enable no-undef, camelcase */

/**
 * @namespace
 * @property {object} URLS
 * @property {string} apiServerURL access token
 * @property {string} callBackUrl
 * @property {number} apiBgmUrl
 * @property {number} authURL
 */
const URLS = {
  apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
  callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  apiBgmUrl: 'https://api.bgm.tv',
  authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri' +
    '=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
}

if (window.TM_ENV === 'dev') {
  Object.assign(URLS, {
    apiServerURL: 'http://localhost:6001',
    callBackUrl: 'http://localhost:6001/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2955b3b3050e7bf2&response_type=code&redirect_uri' +
      '=http://localhost:6001/oauth_callback',
  })
}
const WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi',
}

export { $, WEBSITE, tm_setValue, tm_getValue, tm_openInTab, tm_unsafeWindow, URLS, tm_addStyle }
