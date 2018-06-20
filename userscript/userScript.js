// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @version      0.1.9
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
      notify(`Find you watching ${status.mediaInfo.alias} ${episode}, try to mark your status`.toString(), 2)

      watchEpisode({
        'type': 'watch_episode',
        'website': 'bilibili',
        'bangumi_id': id,
        'title': status.mediaInfo.alias,
        episode,
      })

      // Your code here...
    }

    injectBilibili()
    let url = location.href

    // noinspection JSAnnotator
    function detectHrefChange () {
      console.log('check href')
      if (location.href !== url) {
        injectBilibili()
        url = location.href
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
  }

// Your code here...
})()