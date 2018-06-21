// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @version      0.2.2
// @description  auto tracker your bangumi progress
// @author       Trim21
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @match        https://bangumi-auto-tracker.trim21.cn/userscript/options*

// @require      https://cdn.bootcss.com/axios/0.18.0/axios.js

// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        unsafeWindow
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @connect      localhost:6001
// @connect      api.bgm.tv
// @connect      bangumi-auto-tracker.trim21.cn
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'
  const ONLOAD = (resolve, reject) => (response) => {
    if (response.status >= 300) {
      reject(response)
    } else {
      resolve(response)
    }
  }
  const requests = {
    get (url, headers = {}) {
      return new Promise((resolve, reject) => {
        var ret = GM_xmlhttpRequest({
          method: 'GET',
          responseType: 'json',
          url,
          headers,
          onload: ONLOAD(resolve, reject)
        })
      },)
    },
    post (url, data = {}, headers = {},) {
      if (data !== null && typeof data === 'object') {
        data = JSON.stringify(data)
        headers['content-Type'] = 'application/json'
      }
      return new Promise((resolve, reject) => {
        var ret = GM_xmlhttpRequest({
          method: 'POST',
          responseType: 'json',
          data,
          url,
          headers,
          onload: ONLOAD(resolve, reject)
        })
      })
    }
  }

  const VARS = {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    authURL: '',
  }
  VARS.authURL = 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=' + VARS.callBackUrl

  if (window.TM_ENV === 'dev') {
    VARS.apiServerURL = 'http://localhost:6001'
    console.log('dev')
  }

  const serverApi = axios.create({
    baseURL: `${VARS.apiServerURL}/`,
    timeout: 10000
  })

  function notify (message, timeout = 4) {
    Notification.requestPermission(function (permission) {
      if (permission !== 'denied') {
        let n = new Notification(message, {})
        setTimeout(n.close.bind(n), timeout * 1000)
      }
    })
  }

  function watchEpisode (message) {
    requests.post(`${VARS.apiServerURL}/watch_episode`, {
      website: 'bilibili',
      episode: message.episode,
      bangumi_id: message.bangumi_id,
      user_id: auth.user_id,
      access_token: auth.access_token
    }).then(
      (response) => {
        notify(`mark your status successfully`.toString(), 2)
      },
      (error) => {
        console.log(error.response.message)
        console.log(error)
        notify(error.response.message)
      }
    ).catch(function (err) {
      notify(err.toString(), 2)
    })
  }

  // auth
  let auth
  if (location.href.startsWith(VARS.callBackUrl)) {
    console.log('try auth')
    if (data) {
      GM_setValue('auth', JSON.stringify(data))
      alert('auth success, please close tab')
    }
  } else {
    auth = GM_getValue('auth', false)
    if (auth) {
      auth = JSON.parse(auth)
    } else {
      let r = alert('you need to auth bgm.tv_auto_tracker first')
      if (r) {
        GM_openInTab(VARS.authURL, { active: true })
      }
    }
  }

  // inject bilibili
  if (location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
    console.log('inject bilibili')

    // noinspection JSAnnotator
    function injectBilibili () {
      const status = __INITIAL_STATE__
      const episode = status.epInfo.index
      const bangumi_id = status.mediaInfo.season_id
      let div = `<div id="bgm_tv_tracker" class=" disable" data-id="${bangumi_id}">
    <div class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius">bgm.tv</div>
    <div class="bgm_tv_tracker_info">
    <br>
        <div>
            <p>你正在看: <span id="bgm_tv_tracker_title"></span></p>
            <p>第<span id="bgm_tv_tracker_episode">${episode}</span>集</p>
        </div>
        <br>
        <div id="bgm_tv_tracker_link"></div>
        <br>
        <button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watch">标记为看过</button>
        <br>
        <a href="https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues" target="_blank" rel="noopener noreferrer">报告问题</a>
    </div>
</div>
<style>
#bgm_tv_tracker {
    display: inline-block;
    position: relative;
    float: left;
    margin-right: 20px;
    user-select: none;
}

.bgm_tv_tracker_radius {
    border-radius: 4px;
    border: 1px solid #e5e9ef;
}

.bgm_tv_tracker_btn.bgm_tv_tracker {
    color: #6d757a;
    float: left;
    cursor: pointer;
    font-size: 14px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    width: 80px !important;
    transition: all .1s ease-in;

}

.bangumi-info .info-right .info-title.clearfix h2 {
    width: 380px;
}

@media screen and (max-width: 1400px) {
    .arc-toolbar .block {
        padding: 0 12px;
        margin-left: -12px;
    }

    .video-toolbar-module .btn-item {
        padding: 0 0 0 60px !important;
        margin-left: -12px;
    }

    .bangumi-info .info-right .info-title.clearfix h2 {
        width: 200px !important;
    }
}

#bgm_tv_tracker.disable .bgm_tv_tracker_info {
    display: none;
}

.bgm_tv_tracker_info {
    margin-top: 5px;
    background: #fff;
    border-radius: 0 0 4px 4px;
    border: 1px solid #e5e9ef;
    box-shadow: rgba(0, 0, 0, .16) 0 2px 4px;
    cursor: default;
    height: auto;
    left: -1px;
    line-height: normal;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    text-align: left;
    top: 70px;
    white-space: normal;
    width: 200px;
    z-index: 1000;

}

.bgm_tv_tracker_info *{
max-width: 100%;
}

#bgm_tv_tracker .bgm_tv_tracker_info {
    opacity: 1;
    pointer-events: auto;
    top: 100%;
}

.bgm_tv_tracker_info button {
    padding: 4px 6px;
    line-height: 14px;
    display: inline-block;
    margin: 4px;
}
</style>
`
      $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix').prepend(div)
      let info = $('.bgm_tv_tracker_info')
      $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
        info.toggle('fast')
      }).hover(function () {
        $(this).css('background-color', '#00A1D6')
        $(this).css('color', 'white')
      }, function () {
        $(this).css('background-color', 'white')
        $(this).css('color', 'black')
      })
      $('#bgm_tv_tracker_title').html(status.mediaInfo.alias)

      serverApi.get('/query/bilibili', { params: { bangumi_id } }).then(
        (response) => {
          let subject_id = response.data.subject_id

          $('#bgm_tv_tracker_link').html(`<a href="http://bgm.tv/subject/${subject_id}" target="_blank" rel="noopener noreferrer">subject/${subject_id}</a>`)
          $('#bgm_tv_tracker_mark_watch').click(() => {
              watchEpisode({
                'type': 'watch_episode',
                'website': 'bilibili',
                'bangumi_id': $('#bgm_tv_tracker').data('id'),
                'title': $('#bgm_tv_tracker_title').html(),
                episode: $('#bgm_tv_tracker_episode').html(),
              })
            }
          )
        },
        (err) => {
          if (err.response.status === 404) {
            $('.bgm_tv_tracker_info').html('没找到你在看的番剧')
          }
        }
      )
      // Your code here...
    }

    // setTimeout(injectBilibili, 1000)
    injectBilibili()

    let url = location.href
    let INNER_EPISODE = __INITIAL_STATE__.epInfo.index

    // noinspection JSAnnotator
    function onHrefChange () {
      const status = __INITIAL_STATE__
      const episode = status.epInfo.index
      $('#bgm_tv_tracker_episode').html(episode)
      if (GM_getValue('auto_mark', false) === 'true') {
        watchEpisode({
          'type': 'watch_episode',
          'website': 'bilibili',
          'bangumi_id': status.mediaInfo.season_id,
          'title': $('#bgm_tv_tracker_title').html(),
          episode,
        })
      }
    }

    // noinspection JSAnnotator
    function detectHrefChange () {
      console.log('check href')
      if (INNER_EPISODE !== __INITIAL_STATE__.epInfo.index) {
        onHrefChange()
        INNER_EPISODE = __INITIAL_STATE__.epInfo.index
        // url = location.href
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 2000)
  }

})()