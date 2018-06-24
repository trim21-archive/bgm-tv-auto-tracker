// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @description  auto tracker your bangumi progress
// @version      0.5.1
// @author       Trim21
// @match        https://www.bilibili.com/bangumi/play/*
// @match        http*://www.iqiyi.com/*
// @match        https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @match        https://bangumi-auto-tracker.trim21.cn/userscript/options*
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require      https://cdn.bootcss.com/axios/0.18.0/axios.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      localhost
// @connect      api.bgm.tv
// @connect      bangumi-auto-tracker.trim21.cn
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict'
  /* eslint-disable no-undef, camelcase */
  let tm_unsafeWindow = unsafeWindow
  let tm_xmlHttpRequest = GM_xmlhttpRequest
  let tm_setValue = GM_setValue
  let tm_getValue = GM_getValue
  let tm_openInTab = GM_openInTab
  let tm_addStyle = GM_addStyle
  let $ = window.$
  let website
  /* eslint-enable no-undef, camelcase */

  let auth
  let bangumiData = {}

  console.log('hello world')

  function notify (message) {
    let now = new Date()

    $('#bgm_tv_tracker_notification')
      .prepend(`<hr><p>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${message}</p>`)
  }

  const parseHeader = function (lines) {
    let headers = {}
    for (let line of lines.trim().split('\r')) {
      line = line.trim()
      if (line) {
        Object.assign(headers, parseHeaderLine(line))
      }
    }
    return headers
  }

  const parseHeaderLine = function (line) {
    let headers = {}
    let headerExp = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/
    let match = headerExp.exec(line)
    let k = match && match[1]
    k = k.toLowerCase()
    headers[k] = match[2]
    return headers
  }

  const NORMAL_ONLOAD = (resolve, reject) => (response) => {
    response.headers = parseHeader(response.responseHeaders)
    if (response.status < 300) {
      if (response.headers['content-type'].startsWith('application/json')) {
        response.data = JSON.parse(response.responseText)
      }
      resolve(response)
    } else {
      console.log(response)
      if (response.headers['content-type'].startsWith('application/json')) {
        response.data = JSON.parse(response.responseText)
      }
      reject({ response })
    }
  }

  const requests = {
    get (url, headers = {}) {
      // headers.cookie = ''
      return new Promise((resolve, reject) => {
        tm_xmlHttpRequest({
          method: 'GET',
          url,
          headers,
          onload: NORMAL_ONLOAD(resolve, reject)
        })
      })
    },
    post (url, data = {}, headers = {}) {
      if (data !== null && typeof data === 'object') {
        data = JSON.stringify(data)
        headers['content-Type'] = 'application/json'
      }
      // headers.cookie = ''
      return new Promise((resolve, reject) => {
        tm_xmlHttpRequest({
          method: 'POST',
          data,
          url,
          headers,
          onload: NORMAL_ONLOAD(resolve, reject)
        })
      })
    }
  }

  const bgmApi = {
    get (url, headers = {}) {
      Object.assign(headers, { 'User-Agent': 'Bgm.tv auto tracker' })
      return new Promise((resolve, reject) => {
        requests.get(url, headers).then(
          response => {
            if (response.data.code && response.data.code >= 300) {
              let error = { response }
              reject(error)
            } else {
              resolve(response)
            }
          },
          error => reject(error)
        )
      })
    },
    post (url, data = {}, headers = {}) {
      Object.assign(headers, { 'User-Agent': 'Bgm.tv auto tracker' })
      // headers.cookie = ''
      return new Promise((resolve, reject) => {
        requests.post(url, data, headers).then(
          response => {
            if (response.data.code && response.data.code >= 300) {
              let error = { response }
              reject(error)
            } else {
              resolve(response)
            }
          },
          error => reject(error)
        )
      })
    }
  }

  const VARS = {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: ''
  }
  VARS.authURL = 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=' + VARS.callBackUrl

  if (window.TM_ENV === 'dev') {
    VARS.apiServerURL = 'http://localhost:6001'
    console.log('dev')
  }

  function getEps (subjectID) {
    return new Promise(
      (resolve, reject) => {
        let eps = tm_getValue(`eps_${subjectID}`, false)
        if (!eps) {
          bgmApi.get(`${VARS.apiBgmUrl}/subject/${subjectID}/ep`).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
              resolve(response.data)
            },
            (error) => {
              reject(error)
              notify('get bgm eps error', 2)
            }
          )
        } else {
          eps = JSON.parse(eps)
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
            requests.get(`${VARS.apiBgmUrl}/subject/${subjectID}/ep`).then(
              (response) => {
                response.data.time = Number(new Date().getTime() / 1000)
                tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
                resolve(response.data)
              },
              (error) => {
                reject(error)
                notify('get bgm eps error', 2)
              }
            )
          } else {
            resolve(eps)
          }
        }
      }
    )
  }

  let collection = tm_getValue('collection', false) // @type {Array}
  if (!collection) {
    collection = {}
  } else {
    collection = JSON.parse(collection)
  }

  function collectSubject (subjectID) {
    if (!collection[subjectID]) {
      requests.post(`${VARS.apiBgmUrl}/collection/${subjectID}/update`, 'status=do',
        {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + auth.access_token
        }).then(
        response => {
          if (response.data.code === 401) {
            notify(response.data.error)
          } else {
            notify('add this bangumi to your collection', 2)
            collection[subjectID] = true
            tm_setValue('collection', JSON.stringify(collection))
          }
        },
        error => notify(error.response.data.error_description)
      )
    }
  }

  function watchEpisode (message) {
    collectSubject(message.subject_id)
    getEps(message.subject_id).then(
      (data) => {
        console.log(message.episode)
        let ep = data.eps.filter(function (val) {
          return val.sort === parseInt(message.episode)
        })
        console.log(ep)
        ep = ep[0].id

        requests.post(`${VARS.apiBgmUrl}/ep/${ep}/status/watched`,
          null, { 'Authorization': 'Bearer ' + auth.access_token }).then(
          () => notify(`mark your status successfully`.toString(), 2),
          error => notify(JSON.stringify(error.response.data))
        )
      },
      error => notify(JSON.stringify(error.response.data))
    ).catch(function (err) {
      notify(err.toString(), 2)
    })
  }

  // auth

  if (tm_unsafeWindow.location.href.startsWith(VARS.callBackUrl)) {
    if (tm_unsafeWindow.data) {
      tm_setValue('auth', JSON.stringify(tm_unsafeWindow.data))
      let child = tm_unsafeWindow.document.createElement('h1')
      child.innerText = '成功授权 请关闭网页'
      tm_unsafeWindow.document.body.appendChild(child)
    }
  } else {
    auth = tm_getValue('auth', false)
    if (auth) {
      auth = JSON.parse(auth)
    } else {
      let r = tm_unsafeWindow.alert('you need to auth bgm.tv_auto_tracker first')
      if (r) {
        tm_openInTab(VARS.authURL, { active: true })
      }
    }
  }

  const dealWithSubjectID = function (subjectID) {
    bangumiData.subjectID = subjectID

    $('#bgm_tv_tracker_link').html(`<a href="http://bgm.tv/subject/${subjectID}" target="_blank" rel="noopener noreferrer">subject/${subjectID}</a>`)
    $('#bgm_tv_tracker_mark_watched').click(
      () => {
        let ep = $('#bgm_tv_tracker_episode').html()
        collectSubject(subjectID)
        getEps(subjectID).then(data => {
          let eps = data.eps.findIndex(function (element) {
            return element.sort === parseInt(ep)
          }) + 1
          bgmApi.post(`https://api.bgm.tv/subject/${subjectID}/update/watched_eps?watched_eps=${eps}`,
            `watched_eps=${eps}`, {
              'content-type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + auth.access_token
            })
            .then(
              (response) => {
                if (response.data.code === 202) {
                  notify('mark status successful')
                } else {
                  notify('error: ' + JSON.stringify(response.data))
                }
              },
              error => notify('error: ' + JSON.stringify(error))
            )
        })
      }
    )

    $('#bgm_tv_tracker_mark_watch').click(
      () => {
        watchEpisode({
          subject_id: subjectID,
          'type': 'watch_episode',
          'website': 'bilibili',
          'bangumi_id': $('#bgm_tv_tracker').data('id'),
          'title': $('#bgm_tv_tracker_title').html(),
          episode: $('#bgm_tv_tracker_episode').html()
        })
      }
    )
  }

  // inject bilibili
  if (tm_unsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
    console.log('inject bilibili')
    website = 'bilibili'

    // noinspection JSAnnotator
    const injectBilibili = function () {
      const status = tm_unsafeWindow.__INITIAL_STATE__
      const episode = status.epInfo.index
      const bangumiID = status.mediaInfo.season_id
      bangumiData.bangumiID = status.mediaInfo.season_id
      bangumiData.episode = episode

      $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
        .prepend('<div id="bgm_tv_tracker" class="disable" data-id=""><div class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius">bgm.tv</div><div class="bgm_tv_tracker_info"><div class="not_found"></div><br><div><p>你正在看: <span id="bgm_tv_tracker_title"></span></p><p>第 <span id="bgm_tv_tracker_episode">{episode}</span>集</p></div><br><div id="bgm_tv_tracker_link"></div><br><button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watch">标记本集为看过</button> <button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watched">看到本集</button><br><br><a href="https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues" target="_blank" rel="noopener noreferrer">报告问题</a><br><div id="bgm_tv_tracker_notification"></div></div></div>')
      tm_addStyle('#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px;user-select:none}.bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef}.bgm_tv_tracker_btn.bgm_tv_tracker{color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:80px!important;transition:all .1s ease-in}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px}@media screen and (max-width:1400px){.arc-toolbar .block{padding:0 12px;margin-left:-12px}.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important}}#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}.bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;box-shadow:rgba(0,0,0,.16) 0 2px 4px;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bgm_tv_tracker_info *{max-width:100%}#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff}.bgm_tv_tracker_info button:active{background:#fff}.bgm_tv_tracker_info button:hover{border:2px solid #99bdf7}')
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

      $('#bgm_tv_tracker_episode').html(episode)
      $('#bgm_tv_tracker').data('id', bangumiID)
      $('#bgm_tv_tracker_title').html(status.mediaInfo.title)

      requests.get(`${VARS.apiServerURL}/query/bilibili?bangumi_id=${bangumiID}`).then(
        (response) => {
          let subjectID = response.data.bangumi_id || response.data.subject_id
          dealWithSubjectID(subjectID)
        },
        (err) => {
          if (err.response.status === 404) {
            // $('.bgm_tv_tracker_info').html('没找到你在看的番剧')
            // const subjectID = tm_unsafeWindow.prompt('Bgm.tv auto tracker 没找到你在看的番剧 手动指定subject id')
            let notFound = $('.bgm_tv_tracker_info .not_found')
              .html('<label><input type="text" class="subject"> <button class="notfound">submit subject id</button></label>')

            // $('.bgm_tv_tracker_info .not_found')
            $('.bgm_tv_tracker_info .not_found button').click(
              () => {
                let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
                if (subjectID) {
                  notFound.hide()
                  requests.get(`${VARS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${bangumiID}&subject_id=${subjectID}`)
                  dealWithSubjectID(subjectID)
                }
              })
          }
        }
      )
    }
    injectBilibili()

    let INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index

    // noinspection JSAnnotator
    const onHrefChange = function () {
      const status = tm_unsafeWindow.__INITIAL_STATE__
      const episode = status.epInfo.index
      bangumiData.bangumiID = status.mediaInfo.season_id
      bangumiData.episode = episode
      $('#bgm_tv_tracker_episode').html(episode)
    }

    // noinspection JSAnnotator
    const detectHrefChange = function () {
      console.log('check href')
      if (INNER_EPISODE !== tm_unsafeWindow.__INITIAL_STATE__.epInfo.index) {
        onHrefChange()
        INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }
  // inject iqiyi
  if (tm_unsafeWindow.location.hostname === 'www.iqiyi.com') {
    console.log(tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName)
    website = 'iqiyi'
    let videoID
    let title = tm_unsafeWindow.document.title

    const injectIqiyi = function () {
      console.log('inject iqiyi just for collecting animation data now')
      let bangumiName = $('#datainfo-navlist > a:nth-child(3)').html()

      $('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
        .prepend('<div id="bgm_tv_tracker" class="disable" data-id=""><div class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius">bgm.tv</div><div class="bgm_tv_tracker_info"><div class="not_found"></div><br><div><p>你正在看: <span id="bgm_tv_tracker_title"></span></p><p>第 <span id="bgm_tv_tracker_episode">{episode}</span>集</p></div><br><div id="bgm_tv_tracker_link"></div><br><button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watch">标记本集为看过</button> <button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watched">看到本集</button><br><br><a href="https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues" target="_blank" rel="noopener noreferrer">报告问题</a><br><div id="bgm_tv_tracker_notification"></div></div></div>')
      tm_addStyle('#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline;user-select:none}.bgm_tv_tracker_btn.bgm_tv_tracker{float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:80px!important;transition:all .1s ease-in}#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}.bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bgm_tv_tracker_info *{max-width:100%}#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}')
      let info = $('.bgm_tv_tracker_info')
      $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
        info.toggle('fast')
      }).hover(function () {
        $(this).css('color', '#5aa700')
      }, function () {
        $(this).css('color', '#959799')
      })
      console.log(bangumiName)
      title = tm_unsafeWindow.document.title

      requests.post(`${VARS.apiServerURL}/api/v0.1/parser/title`, {
        title: bangumiName,
        title_with_episode: title
      }).then(
        (response) => {
          $('#bgm_tv_tracker_title').html(bangumiName)
          $('#bgm_tv_tracker_episode').html(response.data.episode)
          $('#bgm_tv_tracker').data('id', response.data.bangumi_id)
          let subjectID = response.data.subject_id || response.data.bangumi_id
          bangumiData.subjectID = subjectID
          if (subjectID) {
            dealWithSubjectID(subjectID)
          } else {
            let notFound = $('.bgm_tv_tracker_info .not_found')
              .html('<label><input type="text" class="subject"> <button class="notfound">submit subject id</button></label>')

            $('.bgm_tv_tracker_info .not_found button').click(
              () => {
                let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
                if (subjectID) {
                  notFound.hide()
                  requests.get(`${VARS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${encodeURI(tm_unsafeWindow.location.href)}&subject_id=${subjectID}`)
                  dealWithSubjectID(subjectID)
                }
              })
          }
        },
        () => {
          notify('net work error')
        }
      )
    }

    // noinspection JSAnnotator
    const onHrefChange = function () {
      console.log('hash change')
      if (!(videoID !== tm_unsafeWindow._player._videoid &&
        title !== tm_unsafeWindow.document.title)) {
        console.log('video not change')
        setTimeout(onHrefChange, 500)
      }
      videoID = tm_unsafeWindow._player._videoid
      title = tm_unsafeWindow.document.title
    }

    if (tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
      setTimeout(injectIqiyi, 1000)
      tm_unsafeWindow.addEventListener('hashchange', function () {
        setTimeout(onHrefChange, 500)
      }, false)
    }
  }
})()
