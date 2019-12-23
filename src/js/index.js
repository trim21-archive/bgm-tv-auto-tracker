import Vue from 'vue'
import $ from 'jquery'

import { gmOpenInTab, gmUnsafeWindow, URLS, WEBSITE } from './vars'
import { BgmApi, getAuth, saveAuth } from './utils'
import { Bilibili, Iqiyi } from './website'
import App from './App.vue'

if (gmUnsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (gmUnsafeWindow.data) {
    saveAuth(gmUnsafeWindow.data)
    const child = gmUnsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    gmUnsafeWindow.document.body.appendChild(child)
  }
}
let website

// inject Bilibili

/**
 *
 * @param {string} websiteName
 * @returns {AbstractWebsite}
 */
function getWebsiteClass (websiteName) {
  if (websiteName === WEBSITE.iqiyi) return new Iqiyi()
  if (websiteName === WEBSITE.bilibili) return new Bilibili()
}

if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  website = WEBSITE.bilibili
}

// inject iqiyi
if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
  website = WEBSITE.iqiyi
}

function init () {
  if (website === WEBSITE.bilibili) {
    if ([
      1, // 动漫
      2, // 电影
      4, // 国创
      5, // 电视剧
    ].includes(gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.ssType)) {
      $('.media-tool-bar.clearfix').prepend('<div id=\'bgm_tv_tracker\'></div>')
    }
  }

  // inject iqiyi
  if (website === WEBSITE.iqiyi) {
    if (gmUnsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
      $('div.qy-player-title ').append('<div id=\'bgm_tv_tracker\'></div>')
    }
  }

  if ($('#bgm_tv_tracker').length) {
    getAuth().then(
      auth => {
        if (auth && Object.prototype.hasOwnProperty.call(auth, 'access_token')) {
          Vue.prototype.$bgmApi = new BgmApi({ accessToken: auth.access_token })
          if (website) {
            Vue.prototype.$website = getWebsiteClass(website)
            gmUnsafeWindow.bgm_tv_tracker = new Vue({
              el: '#bgm_tv_tracker',
              render: h => h(App),
            })
          }
        } else {
          gmOpenInTab(URLS.authURL, { active: true })
        }
      })
  }
}

function initWrapper () {
  if (website === WEBSITE.bilibili) {
    init()
  } else if (website === WEBSITE.iqiyi) {
    setTimeout(init, 1000 * 10)
  }
}

$(gmUnsafeWindow).ready(function () {
  initWrapper()
})
