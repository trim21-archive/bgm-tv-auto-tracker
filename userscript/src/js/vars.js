/* eslint-disable no-undef, camelcase */
/**
 * @typedef {window} Window
 * @property {boolean|undefined} bgm_tv_debug
 * @property {function(string, function)} addEventListener
 * @property {Object} document
 * @property {string} document.title
 * @property {Object} location
 * @property {string} location.href
 * @property {string} location.protocol
 * @property {string} location.host
 * @property {string} location.pathname
 */

/**
 * @typedef {Window} BiliWindow
 * @property {Object} __INITIAL_STATE__
 * @property {string} __INITIAL_STATE__.mediaInfo.season_id
 * @property {Object[]} __INITIAL_STATE__.epList
 * @property {Object} __INITIAL_STATE__.epInfo
 */

/**
 * @typedef {Object} iQiyiVideoInfo
 * @property {number} currentTime
 * @property {number} totalDuration
 */

/**
 * @typedef {Window} IqiyiWindow
 * @property {Object} player
 * @property {function} player.getCurrentTime
 * @property {function} player.getDuration
 * @property {Object} _player
 * @property {function(function) : iQiyiVideoInfo} _player.getPlayInfo
 */

/**
 * @type {BiliWindow|IqiyiWindow}
 */
let gmUnsafeWindow = unsafeWindow
let gmSetValue = GM_setValue
let gmGetValue = GM_getValue
let gmOpenInTab = GM_openInTab
/**
 * @namespace
 * @property {object} script
 * @property {object} script
 * @property {string} script.version
 */
let gmInfo = GM_info
/* eslint-enable no-undef, camelcase */

/**
 * @namespace
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

export { WEBSITE, gmSetValue, gmGetValue, gmOpenInTab, gmUnsafeWindow, URLS, gmInfo }
