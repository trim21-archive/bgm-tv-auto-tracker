import { BgmApi, requests } from './utils'
import { $, tm_addStyle, tm_getValue, tm_openInTab, tm_setValue, tm_unsafeWindow } from './gm_vars'
import bilibili_html from '../html/bilibili.html'
import iqiyi_css from '../css/iqiyi.css'
import bilibili_css from '../css/bilibili.css'
import bilibili_notfound from '../html/bilibili_notfound.html'

/**
 * @typedef {string} WEBSITE
 * @enum {WEBSITE}
 */
let WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi'
}

/**
 * @type {WEBSITE}
 */
let website

/**
 * @type {BgmApi}
 */
let bgmApi


/**
 * @namespace
 * @property {object} bangumiData
 * @property {string} bangumiID access token
 * @property {string} subjectID expires duration
 * @property {number} episode
 */
let bangumiData = {}

/**
 * Append a message to banner
 * @param {string} message.
 */
function notify (message) {
  let now = new Date()
  $('#bgm_tv_tracker_notification').prepend(`<hr><p>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${message}</p>`)
}

/**
 * @namespace
 * @property {object} URLS
 * @property {string} apiServerURL access token
 * @property {string} callBackUrl
 * @property {number} apiBgmUrl
 * @property {number} authURL
 */
const URLS = {}

if (window.TM_ENV === 'dev') {
  Object.assign(URLS, {
    apiServerURL: 'http://localhost:6001',
    callBackUrl: 'http://localhost:6001/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2955b3b3050e7bf2&response_type=code&redirect_uri=http://localhost:6001/oauth_callback',
  })

} else {
  Object.assign(URLS, {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  })
}

function getEps (subjectID) {
  return new Promise((resolve, reject) => {
      let eps = tm_getValue(`eps_${subjectID}`, false)
      if (!eps) {
        bgmApi.getSubjectEps(subjectID).then(
          (response) => {
            response.data.time = Number(new Date().getTime() / 1000)
            tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
            resolve(response.data)
          },
          (error) => {
            reject(error)
            notify('get bgm eps error')
          }
        )
      } else {
        eps = JSON.parse(eps)
        if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
          bgmApi.getSubjectEps(subjectID).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
              resolve(response.data)
            },
            (error) => {
              reject(error)
              notify('get bgm eps error')
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

function collectSubject (subjectID) {
  if (!collection[subjectID]) {
    requests.post(`${URLS.apiBgmUrl}/collection/${subjectID}/update`, 'status=do',
      {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + auth.access_token
      }).then(
      response => {
        if (response.data.code === 401) {
          notify(response.data.error)
        } else {
          notify('add this bangumi to your collection')
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
      bgmApi.setEpisodeWatched(ep).then(
        () => notify(`mark your status successfully`.toString()),
        error => {
          notify(JSON.stringify(error.response.data))
        }
      )
    },
    error => notify(JSON.stringify(error.response.data))
  ).catch(function (err) {
    notify(err.toString())
  })
}


if (tm_unsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (tm_unsafeWindow.data) {
    tm_setValue('auth', JSON.stringify(tm_unsafeWindow.data))
    let child = tm_unsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    tm_unsafeWindow.document.body.appendChild(child)
  }
} else {
  auth = tm_getValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    bgmApi = new BgmApi({ userAgent: 'Bgm.tv auto tracker', access_token: auth.access_token })
  } else {
    tm_openInTab(URLS.authURL, { active: true })
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

        bgmApi.setSubjectProgress(subjectID, ep).then(
            (response) => {
                notify('mark status successful')
            },
            error => {
              if (error.response.data.code === 400) {
                notify('error: ' + error.response.data.error + ',' + '应该是因为你在bgm上的状态已经是看到本集')
              } else {
                notify('error: ' + JSON.stringify(error.response))
              }
            }
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

    tm_addStyle(bilibili_css)
    $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
      .prepend(bilibili_html)
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

    requests.get(`${URLS.apiServerURL}/query/bilibili?bangumi_id=${bangumiID}`).then(
      (response) => {
        let subjectID = response.data.bangumi_id || response.data.subject_id
        dealWithSubjectID(subjectID)
      },
      (err) => {
        if (err.response.status === 404) {
          // $('.bgm_tv_tracker_info').html('没找到你在看的番剧')
          // const subjectID = tm_unsafeWindow.prompt('Bgm.tv auto tracker 没找到你在看的番剧 手动指定subject id')
          let notFound = $('.bgm_tv_tracker_info .not_found')
            .html(bilibili_notfound)

          // $('.bgm_tv_tracker_info .not_found')
          $('.bgm_tv_tracker_info .not_found button').click(
            () => {
              let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
              if (subjectID) {
                notFound.hide()
                requests.get(`${URLS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${bangumiID}&subject_id=${subjectID}`)
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
      .prepend(bilibili_html)
    tm_addStyle(iqiyi_css)
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

    requests.post(`${URLS.apiServerURL}/api/v0.1/parser/title`, {
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
            .html(bilibili_notfound)
          $('.bgm_tv_tracker_info .not_found button').click(
            () => {
              let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
              if (subjectID) {
                notFound.hide()
                requests.get(`${URLS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${encodeURI(tm_unsafeWindow.location.href)}&subject_id=${subjectID}`)
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
    if (!(videoID !== tm_unsafeWindow._player._videoid && title !== tm_unsafeWindow.document.title)) {
      console.log('video not change')
      setTimeout(onHrefChange, 500)
    }
    videoID = tm_unsafeWindow._player._videoid
    title = tm_unsafeWindow.document.title

    requests.post(`${URLS.apiServerURL}/api/v0.1/parser/title`, {
      title: $('#datainfo-navlist > a:nth-child(3)').html(),
      title_with_episode: title
    }).then(
      (response) => {
        $('#bgm_tv_tracker_episode').html(response.data.episode)
        bangumiData.episode = response.data.episode
      },
      () => {
        notify('net work error')
      }
    )

  }

  if (tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    setTimeout(injectIqiyi, 1000)
    tm_unsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onHrefChange, 500)
    }, false)
  }
}
