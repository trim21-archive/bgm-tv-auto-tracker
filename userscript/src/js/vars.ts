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
  callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  apiBgmUrl: 'https://api.bgm.tv',
  authURL: 'https://bangumi-auto-tracker.trim21.cn/oauth',
  refreshTokenPath: '/api/v0.1/refresh_token',
  newApiServer: 'https://www.trim21.cn'

}

if (window.TM_ENV === 'dev') {
  URLS.newApiServer = 'http://localhost:8000/'
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
