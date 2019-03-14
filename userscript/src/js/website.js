import $ from 'jquery'
import { gmUnsafeWindow, WEBSITE } from './vars'
import { apiServer, parseEpisode } from './utils'

class AbstractWebsite {
  constructor () {
    if (new.target === AbstractWebsite) {
      throw new TypeError('Cannot construct Abstract instances directly')
    }
  }

  static get name () {}

  static get bangumiID () {}

  static get episodeID () {}

  static get title () {}

  /**
   * Init Website Data.
   *
   * @method
   * @returns {Promise}
   */
  static init () {}

  static async getBgmEpisodeID () {
    try {
      return await apiServer.get('/api/v0.2/querySubjectID', {
        params: {
          bangumiID: this.bangumiID,
          episodeID: this.episodeID,
          website: this.name,
        }
      })
    } catch (e) {
      throw e
    }
  }

  static detectEpisodeChange (cb, notfound) {}

  static getPlayerInfo () {}
}

class bilibili extends AbstractWebsite {
  static get name () {
    return WEBSITE.bilibili
  }

  static get bangumiID () {
    return gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id
  }

  static get episodeID () {
    return gmUnsafeWindow.__INITIAL_STATE__.epInfo.ep_id
  }

  static get title () {
    return gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.title
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
      .filter(val => !val.index.includes('.')
      ).findIndex(val => {
        return val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      }) + 1

    const bangumiID = this.bangumiID
    let title = this.title
    let episodeStartWith = parseInt(status.epList[0].index)

    apiServer.post('/api/v0.1/collect_episode_info', {
      mediaInfo: gmUnsafeWindow.__INITIAL_STATE__.mediaInfo,
      epInfo: gmUnsafeWindow.__INITIAL_STATE__.epInfo,
      epList: gmUnsafeWindow.__INITIAL_STATE__.epList,
      pubInfo: gmUnsafeWindow.__INITIAL_STATE__.pubInfo,
    })
    return apiServer.get('/api/v0.2/querySubjectID', {
      params: { bangumiID, website: 'bilibili' }
    }).then(
      response => ({
        subjectID: response.data.subject_id,
        episode,
        title,
        episodeStartWith,
        bangumiID
      }),
      error => ({
        episode,
        title,
        episodeStartWith,
        bangumiID,
        error
      })
    )
  }

  static detectEpisodeChange (cb, notfound) {
    let cls = this
    let bangumiID = this.bangumiID
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
          .filter(val => !val.index.includes('.')
          ).findIndex(val => val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) + 1
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

class iQiyi extends AbstractWebsite {
  static get name () {
    return WEBSITE.iqiyi
  }

  static get bangumiID () {
    let collectionLinkEl = $('#block-C > div.qy-player-detail > div > div > div > div > div.qy-player-title > h1 > a')
    let collectionLink = collectionLinkEl.attr('href')
    let filename = collectionLink.split('/')
    filename = filename[filename.length - 1]
    return filename.split('.').slice(0, -1).join('.')
  }

  static get episodeID () {
    return gmUnsafeWindow.location.pathname.split('_')[1].split('.')[0]
  }

  static get title () {
    return gmUnsafeWindow.document.title
  }

  static init () {
    let title = this.title
    let bangumiID = this.bangumiID
    let episode = parseEpisode(title)

    return apiServer.get('/api/v0.2/querySubjectID', {
      params: { bangumiID, website: 'iqiyi' }
    }).then(
      response => ({
        subjectID: response.data.subject_id,
        episode,
        title,
        bangumiID,
        episodeStartWith: 1
      }),
      error => ({
        error,
        episode,
        title,
        episodeStartWith: 1,
        bangumiID,
        // bangumiName
      })
    )
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
