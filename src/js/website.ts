import { $ } from './externals'
import { gmUnsafeWindow, WEBSITE } from './vars'
import { apiServer, parseEpisode } from './utils'
import { QuerySubjectIDResponse } from '../lib/responses'
import { AxiosError } from 'axios'

interface AbstractWebsite {
  readonly name: string

  getBangumiID (): string

  getEpisodeID (): string

  getTitle (): string

  detectEpisodeChange (cb: Function, notfound: Function): void

  getPlayerInfo (): Promise<any>

  init (): Promise<InitResult>
}

class Bilibili implements AbstractWebsite {
  name = WEBSITE.bilibili
  window: BiliWindow

  constructor () {
    this.window = <BiliWindow>gmUnsafeWindow
  }

  getTitle (): string {
    return this.window.__INITIAL_STATE__.mediaInfo.title
  }

  getBangumiID (): string {
    return this.window.__INITIAL_STATE__.mediaInfo.id.toString()
  }

  getEpisodeID (): string {
    return this.window.__INITIAL_STATE__.epInfo.ep_id
  }

  init (): Promise<InitResult> {
    const status = this.window.__INITIAL_STATE__
    const episode = this.window.__INITIAL_STATE__.epList.filter(
      val => !val.title.includes('.')
    ).findIndex(val => {
      return val.index === this.window.__INITIAL_STATE__.epInfo.index
    }) + 1

    const bangumiID = this.getBangumiID()
    const title = this.getTitle()
    const episodeStartWith = parseInt(status.epList[0].index)

    // apiServer.post('/bgm-tv-auto-tracker/api.v1/collect_episode_info', {
    //   mediaInfo: this.window.__INITIAL_STATE__.mediaInfo,
    //   epInfo: this.window.__INITIAL_STATE__.epInfo,
    //   epList: this.window.__INITIAL_STATE__.epList,
    // })

    return new Promise((resolve) => {
        resolve({
          episodeID: this.window.__INITIAL_STATE__.epInfo.ep_id,
          episodeIndex: episode.toString(),
          title,
          episodeStartWith,
          bangumiID
        })
      },
    )
    //
    // return new Promise((resolve, reject) => {
    //   apiServer.get('/api/v0.2/querySubjectID', {
    //     params: { bangumiID, website: 'Bilibili' }
    //   }).then((response: QuerySubjectIDResponse) => {
    //       resolve({
    //         subjectID: response.data.subject_id,
    //         episode: episode.toString(),
    //         title,
    //         episodeStartWith,
    //         bangumiID
    //       })
    //     },
    //     (error: AxiosError) => {
    //       // console.log(error)
    //       reject({
    //         episode: episode.toString(),
    //         title,
    //         episodeStartWith,
    //         bangumiID,
    //         error
    //       })
    //     }
    //   )
    // })
  }

  detectEpisodeChange (cb: EpisodeChangeCallback, notfound: EpisodeChangeCallback) {
    let cls = this
    let bangumiID = this.getBangumiID()
    let INNER_EPISODE = this.window.__INITIAL_STATE__.epInfo.index

    function onEpisodeChange ({ season = false, episode = false }) {
      if (season) {
        cls.init().then(data => {
            cb(data)
            return data
          },
          notfound
        )
      }
      if (episode) {
        let ep = cls.window.__INITIAL_STATE__.epList
          .filter(val => !val.index.includes('.'))
          .findIndex(val => val.index === cls.window.__INITIAL_STATE__.epInfo.index) + 1
        if (ep) {
          cb({
            episode: ep
          })
        } else {
          cb({
            episode: cls.window.__INITIAL_STATE__.epInfo.index
          })
        }
      }
    }

    const detectHrefChange = function () {
      console.debug('check href', bangumiID, INNER_EPISODE)
      if (bangumiID !== cls.getBangumiID()) {
        onEpisodeChange({
          season: true
        })
      } else if (INNER_EPISODE !== cls.window.__INITIAL_STATE__.epInfo.index) {
        onEpisodeChange({
          episode: true
        })
      }

      INNER_EPISODE = cls.window.__INITIAL_STATE__.epInfo.index
      bangumiID = cls.getBangumiID()
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }

  getPlayerInfo () {
    return Promise.resolve(
      {
        current: this.window.player.getCurrentTime(),
        duration: this.window.player.getDuration(),
        percent: this.window.player.getCurrentTime() / this.window.player.getDuration(),
      }
    )
  }

}

class Iqiyi implements AbstractWebsite {
  name = WEBSITE.iqiyi
  window: IqiyiWindow

  constructor () {
    this.window = <IqiyiWindow>gmUnsafeWindow
  }

  getBangumiID (): string {
    let collectionLinkEl = $('#block-C > div.qy-player-detail > div > div > div > div > div.qy-player-title > h1 > a')
    let collectionLink = collectionLinkEl.attr('href')
    let filename = collectionLink.split('/')
    return filename[filename.length - 1].split('.').slice(0, -1).join('.')
  }

  getEpisodeID () {
    return gmUnsafeWindow.location.pathname.split('_')[1].split('.')[0]
  }

  getTitle () {
    return gmUnsafeWindow.document.title
  }

  init (): Promise<InitResult> {
    let title = this.getTitle()
    let bangumiID = this.getBangumiID()
    let episode = parseEpisode(title)
    return new Promise(resolve => {
      resolve({
        title,
        bangumiID,
        episodeID: this.getEpisodeID(),
        episodeIndex: episode.toString(),
        episodeStartWith: 1
      })
    })
  }

  detectEpisodeChange (cb: EpisodeChangeCallback, notfound: EpisodeChangeCallback) {
    function onEpisodeChange () {
      console.log('href change')
      let title = gmUnsafeWindow.document.title
      let episode = parseEpisode(title)
      if (episode) {
        cb({
          episode: episode.toString()
        })
      } else {
        notfound({
          episode: episode.toString()
        })
      }
    }

    let href = gmUnsafeWindow.location.href
    const detectHrefChange = function () {
      if (href !== gmUnsafeWindow.location.href) {
        onEpisodeChange()
      }
      href = gmUnsafeWindow.location.href
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }

  getPlayerInfo () {
    return new Promise((resolve) => {
      this.window.player.getPlayInfo(resolve)
    }).then(function (info: iQiyiVideoInfo) {
      return {
        current: info.currentTime,
        duration: info.totalDuration / 1000,
        percent: info.currentTime / info.totalDuration * 1000,
      }
    })
  }
}

export { Bilibili, Iqiyi, AbstractWebsite }
