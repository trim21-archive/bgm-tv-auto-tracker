import { tm_unsafeWindow } from './vars'
import { apiServer } from './utils'

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
      apiServer.get('/query/bilibili', { params: { bangumi_id: bangumiID } }).then(
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

  static inject () {
    console.log(bangumiName)
    let bangumiName = $('#datainfo-navlist > a:nth-child(3)').html()
    let title = tm_unsafeWindow.document.title
    return new Promise((resolve, reject) => {

      apiServer.post('/api/v0.1/parser/title', {
        data: {
          title: bangumiName,
          title_with_episode: title
        }
      }).then(
        response => {
          $('#bgm_tv_tracker_title').html(bangumiName)
          $('#bgm_tv_tracker').data('id', response.data.bangumi_id)
          let subjectID = response.data.subject_id
          let episode = response.data.episode
          resolve({ subjectID, episode, title, bangumiName })
        },
        err => {
          reject(err)
        }
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    function onEpisodeChange () {
      let title = tm_unsafeWindow.document.title
      apiServer.post('/api/v0.1/parser/title', {
        data: {
          title: $('#datainfo-navlist > a:nth-child(3)').html(),
          title_with_episode: title
        }
      }).then(
        response => cb(response.data),
        notfound
      )
    }

    tm_unsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onEpisodeChange, 500)
    }, false)
  }
}

export { bilibili, iQiyi }