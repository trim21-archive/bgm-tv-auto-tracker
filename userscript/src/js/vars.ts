declare global {
  interface Window {
    TM_ENV?: string;
  }
}

/* eslint-disable no-undef, camelcase */
let gmUnsafeWindow = unsafeWindow
let gmSetValue = GM_setValue
let gmGetValue = GM_getValue
let gmOpenInTab = GM_openInTab
let gmInfo = GM_info
/* eslint-enable no-undef, camelcase */

const URLS = {
  apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
  apiBgmUrl: 'https://api.bgm.tv',
  refreshTokenPath: '/api/v0.1/refresh_token',
  newApiServer: 'https://www.trim21.cn',
  authURL: 'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/auth',
  callBackUrl: 'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback',

}

if (window.TM_ENV === 'dev') {
  URLS.newApiServer = 'http://127.0.0.1:8000/'
  URLS.authURL = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/auth'
  URLS.callBackUrl = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/oauth_callback'
}

const WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi',
}

export {
  WEBSITE,
  gmSetValue,
  gmGetValue,
  gmOpenInTab,
  gmUnsafeWindow,
  URLS,
  gmInfo
}
