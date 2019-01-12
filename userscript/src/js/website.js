import $ from 'jquery'
import { gmUnsafeWindow, WEBSITE } from './vars'
import { apiServer, parseEpisode } from './utils'

class bilibili {
  static get name () {
    return WEBSITE.bilibili
  }

  /**
   * Init Website Data.
   *
   * @method
   * @returns {Promise}
   */
  static init () {
    const status = gmUnsafeWindow.__INITIAL_STATE__
    const episode = gmUnsafeWindow.__INITIAL_STATE__.epList
      .findIndex(val => {
        return val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      }) + 1
    console.log(episode)
    const bangumiID = status.mediaInfo.season_id
    let title = status.mediaInfo.title
    let episodeStartWith = parseInt(status.epList[0].index)

    apiServer.post('/api/v0.1/collect_episode_info', {
      mediaInfo: gmUnsafeWindow.__INITIAL_STATE__.mediaInfo,
      epInfo: gmUnsafeWindow.__INITIAL_STATE__.epInfo,
      epList: gmUnsafeWindow.__INITIAL_STATE__.epList,
      pubInfo: gmUnsafeWindow.__INITIAL_STATE__.pubInfo,
    }).then(
      res => {
        console.log(res)
      },
      err => {
        console.log(err)
      })

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'bilibili' }
      }).then(
        response => resolve({
          subjectID: response.data.subject_id,
          episode,
          title,
          episodeStartWith,
          bangumiID
        }),
        error => reject({
          episode,
          title,
          episodeStartWith,
          bangumiID,
          error
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    let cls = this
    const status = gmUnsafeWindow.__INITIAL_STATE__
    let bangumiID = status.mediaInfo.season_id
    let INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index

    function onEpisodeChange ({ season = false, episode = false }) {
      if (season) {
        cls.init().then(
          data => {
            cb(data)
          },
          notfound
        )
      }
      if (episode) {
        let ep = gmUnsafeWindow.__INITIAL_STATE__.epList
          .findIndex(val => val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) + 1
        if (ep) {
          cb({
            episode: ep
          })
        } else {
          cb({
            episode: gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
          })
        }
      }
    }

    const detectHrefChange = function () {
      console.log('check href', bangumiID, INNER_EPISODE)
      if (bangumiID !== gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id) {
        onEpisodeChange({
          season: true
        })
      } else if (INNER_EPISODE !== gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) {
        onEpisodeChange({
          episode: true
        })
      }

      INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      bangumiID = gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }

  static getPlayerInfo () {
    return Promise.resolve(
      {
        current: gmUnsafeWindow.player.getCurrentTime(),
        duration: gmUnsafeWindow.player.getDuration(),
        percent: gmUnsafeWindow.player.getCurrentTime() / gmUnsafeWindow.player.getDuration(),
      }
    )
  }
}

class iQiyi {
  static get name () {
    return WEBSITE.iqiyi
  }

  static init () {
    // console.log(bangumiName)
    let collectionLinkEl = $('#block-C > div.qy-player-detail > div > div > div > div > div.qy-player-title > h1 > a')
    let title = gmUnsafeWindow.document.title
    // let title = gmUnsafeWindow.document.title
    let collectionLink = collectionLinkEl.attr('href')
    let filename = collectionLink.split('/')
    filename = filename[filename.length - 1]
    let bangumiID = filename.split('.').slice(0, -1).join('.')
    let episode = parseEpisode(title)

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'iqiyi' }
      }).then(
        response => {
          console.log(response)
          let subjectID = response.data.subject_id
          resolve({
            subjectID, episode, title, bangumiID, episodeStartWith: 1,
          })
        },
        error => reject({
          error,
          episode,
          title,
          episodeStartWith: 1,
          bangumiID,
          // bangumiName
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    function onEpisodeChange () {
      console.log('href change')
      let title = gmUnsafeWindow.document.title
      let episode = parseEpisode(title)
      if (episode) {
        cb({ episode })
      } else {
        notfound()
      }
    }

    let href = gmUnsafeWindow.location.href
    const detectHrefChange = function () {
      if (href !== gmUnsafeWindow.location.href) {
        onEpisodeChange({
          episode: true
        })
      }
      href = gmUnsafeWindow.location.href
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }

  static getPlayerInfo () {
    return new Promise((resolve) => {
      gmUnsafeWindow.playerObject.getPlayInfo(resolve)
    }).then(info => {
      return {
        current: info.currentTime,
        duration: info.totalDuration / 1000,
        percent: info.currentTime / info.totalDuration * 1000,
      }
    })
  }
}

export { bilibili, iQiyi }
