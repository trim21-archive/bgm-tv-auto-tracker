import { $, tm_getValue, tm_openInTab, tm_setValue, tm_unsafeWindow, URLS } from './vars'
import App from './App.vue'
import Vue from 'vue'
import { BgmApi } from './utils'
import axios from 'axios'
import { bilibili, iQiyi } from './website'

if (tm_unsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (tm_unsafeWindow.data) {
    tm_setValue('auth', JSON.stringify(tm_unsafeWindow.data))
    let child = tm_unsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    tm_unsafeWindow.document.body.appendChild(child)
  }
}
let website
// inject bilibili
if (tm_unsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  website = 'bilibili'
  $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
    .prepend(`<div id='bgm_tv_app'></div>`)
}

// inject iqiyi
if (tm_unsafeWindow.location.hostname === 'www.iqiyi.com') {
  if (tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    website = 'iqiyi'
    $('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
      .prepend(`<div id='bgm_tv_app'></div>`)
  }

}

/**
 * @namespace
 * @property {object} auth               - The default values for parties.
 * @property {string} access_token access token
 * @property {number} expires_in expires duration
 * @property {string} token_type
 * @property {null}   scope
 * @property {number} user_id
 * @property {string} refresh_token
 * @property {number} auth_time
 */
let auth
if ($('#bgm_tv_app')) {
  auth = tm_getValue('auth', false)
  if (auth) {
    /**
     * @type {BgmApi}
     */
    auth = JSON.parse(auth)
    Vue.prototype.$bgmApi = new BgmApi({ access_token: auth.access_token })
    Vue.prototype.$http = axios
  } else {
    tm_openInTab(URLS.authURL, { active: true })
  }
  if (website) {
    if (website === 'bilibili')
      Vue.prototype.$website = bilibili
    if (website === 'iqiyi')
      Vue.prototype.$website = iQiyi
    let vm = new Vue({
      el: '#bgm_tv_app',
      render: h => h(App),
    })
  }
}
