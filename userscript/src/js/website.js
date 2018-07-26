import { tm_unsafeWindow } from './vars'
import { apiServer, parseEpisode } from './utils'
import path from 'path'

class bilibili {
  /**
   * Init Website Data.
   *
   * @method
   * @returns {Promise}
   */
  static init () {

    const status = tm_unsafeWindow.__INITIAL_STATE__
    const episode = status.epInfo.index
    const bangumiID = status.mediaInfo.season_id
    let title = status.mediaInfo.title

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'bilibili' }
      }).then(
        response => resolve({
          subjectID: response.data.subject_id,
          episode,
          title,
          bangumiID,
        }),
        err => {
          // reject({
          //   subjectID: response.data.subject_id,
          //   episode,
          //   title,
          //   bangumiID,
          // })
          if (err.response.status === 404) {
            reject(err)
          } else {
            reject({ error: 'not found' })
          }
        }
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    let cls = this
    const status = tm_unsafeWindow.__INITIAL_STATE__
    let bangumiID = status.mediaInfo.season_id

    let INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index

    function onEpisodeChange () {
      cls.init().then(
        data => {
          cb(data)
        },
        notfound
      )
    }

    const detectHrefChange = function () {
      console.log('check href')
      if (INNER_EPISODE !== tm_unsafeWindow.__INITIAL_STATE__.epInfo.index ||
        bangumiID !== tm_unsafeWindow.__INITIAL_STATE__.mediaInfo.season_id) {
        onEpisodeChange()
        INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index
        bangumiID = tm_unsafeWindow.__INITIAL_STATE__.mediaInfo.season_id
      }
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)

  }

}

class iQiyi {
  static reportMissingBangumi (subjectID) {
    // requests.get(`${URLS.apiServerURL}/api/v0.1/missingBilibili` +
    //   `?bangumi_id=${encodeURI(tm_unsafeWindow.location.href)}&subject_id=${subjectID}`)
  }

  static init () {
    // console.log(bangumiName)
    let collectionLinkEl = $('#datainfo-navlist > a:nth-child(3)')
    let bangumiName = collectionLinkEl.html()
    let title = tm_unsafeWindow.document.title
    let collectionLink = collectionLinkEl.attr('href')
    let filename = path.basename(collectionLink)
    let bangumiID = filename.split('.').slice(0, -1).join('.')

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'iqiyi' }
      }).then(
        response => {
          console.log(response)
          let subjectID = response.data.subject_id
          let episode = parseEpisode(title)
          // let episode = response.data.episode
          resolve({ subjectID, episode, title, bangumiName, bangumiID })
        },
        err => {
          reject(err)
        }
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    function onEpisodeChange () {
      console.log('href change')
      let title = tm_unsafeWindow.document.title
      let episode = parseEpisode(title)
      if (episode) {
        cb({ episode })
      } else {
        notfound()
      }
    }

    tm_unsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onEpisodeChange, 500)
    }, false)
  }
}

export { bilibili, iQiyi }