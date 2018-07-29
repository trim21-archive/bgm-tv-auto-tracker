/* eslint-disable no-undef, camelcase */
let gmUnsafeWindow = unsafeWindow
let gmSetValue = GM_setValue
let gmGetValue = GM_getValue
let gmOpenInTab = GM_openInTab
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

export { WEBSITE, gmSetValue, gmGetValue, gmOpenInTab, gmUnsafeWindow, URLS }
