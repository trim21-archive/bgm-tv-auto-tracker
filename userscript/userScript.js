// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @version      0.2.0
// @description  auto tracker your bangumi progress
// @author       Trim21
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @require      https://cdn.bootcss.com/axios/0.18.0/axios.js
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_getValue
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'
  const VARS = {
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    serverURL: 'https://bangumi-auto-tracker.trim21.cn',
    // serverURL: 'http://localhost:6001',
  }

  const serverApi = axios.create({
    baseURL: `${VARS.serverURL}/`,
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
    serverApi.post('/watch_episode', { website: 'bilibili', episode: message.episode, bangumi_id: message.bangumi_id, access_token: auth.access_token },
    ).then(
      function (response) {
        console.log(response.data)
        notify(`mark your status successfully`.toString(), 2)
      },
      function (error) {
        notify(error.response.data.message)
      }
    ).catch(function (err) {
      notify(err.toString(), 2)
    })
  }

  // auth
  let auth
  if (location.href.startsWith('https://bangumi-auto-tracker.trim21.cn/oauth_callback')) {
    console.log('try auth')
    if (data) {
      GM_setValue('auth', JSON.stringify(data))
      alert('auth success, please close tab')
    }
  } else {
    auth = GM_getValue('auth', false)
    console.log(auth)
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
      const id = status.mediaInfo.season_id
      serverApi.get('/query/bilibili', { params: { bangumi_id: id } }).then(
        (response) => {
          let subject_id = response.data.subject_id
          let div =
            `<span id="bgm_tv_tracker" class="disable" data-id="${id}">
    <div class="bgm_tv_tracker_btn bgm_tv_tracker">tracker</div>
    <div class="bgm_tv_tracker_info">
    <br>
        <div>
            <p>你正在看: <span id="bgm_tv_tracker_title"></span></p>
            <p>第<span id="bgm_tv_tracker_episode">${episode}</span>集</p>
        </div>
        <br>
        <a href="http://bgm.tv/subject/${subject_id}" target="_blank" rel="noopener noreferrer">http://bgm.tv/subject/${subject_id}</a>
        <br>
        <button id="bgm_tv_tracker_mark_watch">标记为看过</button>

    </div>
</span>
<style>
    #bgm_tv_tracker {
        display: inline-block;
        position: relative;
        float: left;
        margin-right: 20px;
    }

    .bgm_tv_tracker_btn.bgm_tv_tracker {
        border-radius: 4px;
        border: 1px solid #e5e9ef;
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
 
    #bgm_tv_tracker .bgm_tv_tracker_info {
        background: #fff;
        border-radius: 0 0 4px 4px;
        border: 1px solid #e5e9ef;
        border-top: none;
        box-shadow: rgba(0,0,0,.16) 0 2px 4px;
        cursor: default;
        height: auto;
        left: -1px;
        line-height: normal;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        text-align: left;
        top: 70px;
        transition: .2s all ease-in;
        white-space: normal;
        width: 310px;
        z-index: 1000;
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
    
</style>`
          $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix').prepend(div)
          $('#bgm_tv_tracker_mark_watch').click(() => {
              const status = window.__INITIAL_STATE__
              console.log(window)
              watchEpisode({
                'type': 'watch_episode',
                'website': 'bilibili',
                'bangumi_id': $('#bgm_tv_tracker').data('id'),
                'title': $('#bgm_tv_tracker_title').html(),
                episode: $('#bgm_tv_tracker_episode').html(),
              })
            }
          )
          $('#bgm_tv_tracker_title').html(status.mediaInfo.alias)
          $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
            let el = $('#bgm_tv_tracker')
            if (el.hasClass('disable')) {
              el.removeClass('disable')
            } else {
              el.addClass('disable')
            }
          }).hover(function () {
            $(this).css('background-color', '#00A1D6')
            $(this).css('color', 'white')
          }, function () {
            $(this).css('background-color', 'white')
            $(this).css('color', 'black')
          })
        })

      // Your code here...
    }

    injectBilibili()
    let url = location.href

    // noinspection JSAnnotator
    function onHrefChange () {
      const status = __INITIAL_STATE__
      const episode = status.epInfo.index
      const id = status.mediaInfo.season_id
      $('#bgm_tv_tracker_episode').html(episode)
    }

    // noinspection JSAnnotator
    function detectHrefChange () {
      console.log('check href')
      if (location.href !== url) {
        onHrefChange()
        url = location.href
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
  }

  // Your code here...
})()