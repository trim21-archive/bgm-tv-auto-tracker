import path from 'path'
import $ from 'jquery'
import { gmUnsafeWindow } from './vars'
import { apiServer, parseEpisode } from './utils'

class bilibili {
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
        console.log(val)
        console.log(gmUnsafeWindow.__INITIAL_STATE__.epInfo.index)
        return val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      }) + 1
    console.log(episode)
    const bangumiID = status.mediaInfo.season_id
    let title = status.mediaInfo.title
    let episodeStartWith = parseInt(status.epList[0].index)

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
  static init () {
    // console.log(bangumiName)
    let collectionLinkEl = $('#datainfo-navlist > a:nth-child(3)')
    let bangumiName = collectionLinkEl.html()
    let title = gmUnsafeWindow.document.title
    let collectionLink = collectionLinkEl.attr('href')
    let filename = path.basename(collectionLink)
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
            subjectID, episode, title, bangumiName, bangumiID, episodeStartWith: 1,
          })
        },
        () => reject({
          episode,
          title,
          episodeStartWith: 1,
          bangumiID,
          bangumiName
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

    gmUnsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onEpisodeChange, 500)
    }, false)
  }

  static getPlayerInfo () {
    return new Promise((resolve) => {
      gmUnsafeWindow._player.getPlayInfo(resolve)
    }).then(info => {
      return {
        current: info.currentTime,
        duration: info.totalDuration / 1000,
        percent: info.currentTime / info.totalDuration * 1000,
      }
      // return info.currentTime / info.totalDuration * 1000
    })
  }
}

export { bilibili, iQiyi }
