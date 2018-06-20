// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @version      0.1
// @description  try to take over the world!
// @author       Trim21
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @require      https://cdn.bootcss.com/axios/0.18.0/axios.js
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_getValue
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  const VARS = {
    // serverURL: 'http://localhost:6001',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    serverURL: 'https://bangumi-auto-tracker.trim21.cn',
  }

  const serverApi = axios.create({
    baseURL: `${VARS.serverURL}/`,
    timeout: 10000
  })

  function watchEpisode (bgmApi, message) {

    serverApi.get('/query/bilibili', {
      params: { bangumi_id: message.bangumi_id }
    }).then(
      function (response) {
        console.log(response.data)
        const subjectID = response.data.subject_id
        var fd = new FormData()
        fd.append('status', 'do')
        bgmApi.post(`/collection/${subjectID}/update`,
          `status=do`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        ).then(function (res) {
          return bgmApi.get(`/subject/${subjectID}/ep`).then(
            function (res) {
              notify(`Find you watching ${message.title} ${message.episode}`.toString(), 2)
              let ep = res.data.eps[parseInt(message.episode) - 1].id
              return bgmApi.post(`/ep/${ep}/status/watched`)
            }
          )
        })
      }
    ).catch(function (err) {
      notify(err.toString(), 2)
    })
  }

  if (location.href.startsWith('https://bangumi-auto-tracker.trim21.cn/oauth_callback')) {
    Notification.requestPermission(function (permission) {
      if (data) {
        GM_setValue('auth', JSON.stringify(data))
        if (permission !== 'denied') {
          new Notification('auth success, please close tab')
        } else {
          alert('auth success, please close tab')
        }
      } else {
        let n = new Notification('hehe')
      }
    })
    // inject bilibili
  } else {
    let auth = GM_getValue('auth', false)
    console.log(auth)
    if (auth) {
      auth = JSON.parse(auth)
    } else {
      let r = confirm('you need to auth bgm.tv_auto_tracker first')
      if (r) {
        GM_openInTab(VARS.authURL, { active: true })
        return
      } else {
        return
      }
    }
  }

  if (location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {

    // noinspection JSAnnotator
    function injectBilibili () {
      const status = window.__INITIAL_STATE__
      const episode = status.epInfo.index
      const id = status.mediaInfo.season_id
      console.log('inject bilibili')

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