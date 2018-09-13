import Vue from 'vue'
import axios from 'axios'
import $ from 'jquery'

import { gmOpenInTab, gmUnsafeWindow, URLS } from './vars'
import { BgmApi, getAuth, saveAuth } from './utils'
import { bilibili, iQiyi } from './website'
import App from './App'

if (gmUnsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (gmUnsafeWindow.data) {
    saveAuth(gmUnsafeWindow.data)
    // gmSetValue('auth', JSON.stringify(gmUnsafeWindow.data))
    let child = gmUnsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    gmUnsafeWindow.document.body.appendChild(child)
  }
}
let website
// inject bilibili
if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  website = 'bilibili'
  if ([
    1, // 动漫
    2, // 电影
    4, // 国创
    5, // 电视剧
  ].includes(gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_type)) {
    $('#bangumi_detail div.func-module.clearfix')
      .prepend(`<div id='bgm_tv_app'></div>`)
  }
}

// inject iqiyi
if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
  if (gmUnsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    website = 'iqiyi'
    $('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
      .prepend(`<div id='bgm_tv_app'></div>`)
  }
}

/**
 *
 * @param {string} websiteName
 * @returns {iQiyi|bilibili}
 */
function getWebsiteClass (websiteName) {
  if (website === 'iqiyi') return iQiyi
  if (website === 'bilibili') return bilibili
}

if ($('#bgm_tv_app').length) {
  getAuth().then(
    auth => {
      if (auth && auth.hasOwnProperty('access_token')) {
        console.log(auth)
        /* eslint-disable unused-def */
        /**
         * @type {BgmApi}
         */
        Vue.prototype.$bgmApi = new BgmApi({ accessToken: auth.access_token })
        // Vue.prototype.$bgmApi = new BgmApi({ accessToken: undefined })
        Vue.prototype.$http = axios
        /* eslint-enable unused-def */
        if (website) {
          Vue.prototype.$website = getWebsiteClass(website)
          // eslint-disable-next-line no-new
          new Vue({
            el: '#bgm_tv_app',
            render: h => h(App),
          })
        }
      } else {
        gmOpenInTab(URLS.authURL, { active: true })
      }
    })
}
