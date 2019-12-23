import {
  gmGetValue,
  gmInfo,
  gmOpenInTab,
  gmSetValue,
  gmUnsafeWindow,
  URLS
} from './vars'
import axios, {
  AxiosAdapter,
  AxiosError,
  AxiosInstance,
  AxiosResponse,
} from 'axios'
import { adapter } from './externals'
import { AuthResponse, BaseResponse, SubjectResponse } from '../lib/responses'
import { AbstractWebsite } from './website'

axios.defaults.adapter = adapter

function openAuthPage () {
  gmOpenInTab(URLS.authURL, { active: true })
}

function getScriptUserAgent (): string {
  return gmUnsafeWindow.navigator.userAgent +
    ` Extension/${ gmInfo.version } ` +
    `Bgm-tv-auto-tracker/${ gmInfo.script.version }`
}

function sortEps (eps: { sort: number, id: number }[]) {
  eps = JSON.parse(JSON.stringify(eps))
  return eps.sort(
    function (a: { sort: number }, b: { sort: number }) {
      const x = a.sort
      const y = b.sort
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    }
  )
}

interface SubjectEpsResponse {
  data: any
}

class BgmApi {
  readonly access_token: string
  readonly http: AxiosInstance

  constructor ({ accessToken, serverRoot = 'https://api.bgm.tv' }: {
    accessToken: string; serverRoot?: string;
  }) {
    this.access_token = accessToken
    this.http = axios.create({
      baseURL: serverRoot,
      adapter,
      headers: {
        Authorization: 'Bearer ' + this.access_token,
        'User-Agent': getScriptUserAgent(),
      },
    })
  }

  setSubjectProgress (subjectID: string, ep: number) {
    return new Promise((resolve, reject) => {
      this.http.post(`/subject/${ subjectID }/update/watched_eps`,
        `watched_eps=${ ep }`,
        { headers: { 'content-type': 'application/x-www-form-urlencoded', } })
        .then(
          response => {
            if (response.data.code >= 300) {
              reject({ status: response.data.code, response })
            } else {
              resolve(response)
            }
          },
          error => reject(error)
        )
    })
  }

  setEpisodeWatched (ep: number) {
    return this.http.post(`/ep/${ ep }/status/watched`)
  }

  getEps (subjectID: string) {
    let ins = this
    return new Promise(
      (resolve, reject) => {
        let noData = false
        let eps = gmGetValue(`eps_${ subjectID }`, false)
        // no data
        if (!eps) noData = true
        if (eps) {
          eps = JSON.parse(eps)
          // out of time
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
            noData = true
          } else {
            eps.eps = sortEps(eps.eps)
          }
        }

        if (!noData) {
          resolve(eps)
        } else {
          ins.getSubjectEps(subjectID).then(
            (response: SubjectEpsResponse) => {
              let eps = sortEps(response.data.eps)
              gmSetValue(`eps_${ subjectID }`, JSON.stringify({
                eps,
                time: Number(new Date().getTime() / 1000)
              }))
              resolve({ eps })
            },
            (error) => {
              reject(error)
            }
          )
        }
      }
    )
  }

  getSubjectEps (subjectID: string) {
    let ins = this
    console.log('fetch api result')
    return new Promise((resolve, reject) => {
      ins.http.get(`/subject/${ subjectID }/ep`).then(
        response => {
          console.log(response)
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => {
          console.log(error)
          reject(error)
        }
      )
    })
  }

  getSubject (subjectID: string): Promise<SubjectResponse> {
    return new Promise((resolve, reject) => {
      this.http.get(`/subject/${ subjectID }`).then(
        response => {
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }

  setSubjectCollectionStatus ({ subjectID, status }: {
    subjectID: string;
    status: string;
  }) {
    return new Promise((resolve, reject) => {
      this.http.post(`/collection/${ subjectID }/update`,
        `status=${ status }`,
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' }
        }).then(
        response => {
          if (response.data.code >= 300) {
            reject({ response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }
}

let apiServer = axios.create({
  baseURL: URLS.apiServerURL,
  adapter,
  headers: {
    'User-Agent': getScriptUserAgent()
  }
})

const newApiServer = axios.create({
  baseURL: URLS.newApiServer,
  adapter,
  headers: {
    'User-Agent': getScriptUserAgent()
  }
})
newApiServer.interceptors.response.use((res: AxiosResponse) => {
  return res
}, (err: AxiosError) => {
  if (err.response.status == 403) {
    openAuthPage()
  }
  return Promise.reject(err)
})
//
// apiServer.interceptors.request.use(
//   config => {
//     console.log(config)
//     return config
//   }
// )

function parseEpisode (title: string) {
  let re = /第(\d+)集/g
  let result = re.exec(title)
  console.log('parse episode result', result)

  if (result.length) {
    return parseInt(result[1], 10)
  } else {
    return 0
  }
}

class Auth implements AuthResponse {
  access_token: string
  expires_in: number
  token_type: string
  scope?: string
  user_id: number
  refresh_token: string
  auth_time: string
}

function saveAuth (auth: Auth): void {
  gmSetValue('auth', JSON.stringify(auth))
}

function ifAuthExpires (auth: Auth): boolean {
  /* auth_time 2d  expires in 9d */
  /*            2d + 7d - 1d < 6d => false */
  /*            2d + 7d - 1d < 8d => true */
  return (parseInt(auth.auth_time, 10) + auth.expires_in - 2 * 24 * 60 * 60)
    < Math.round(new Date().getTime() / 1000)
}

function getAuth (): Promise<Auth | boolean> {
  let auth = gmGetValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    if (ifAuthExpires(auth)) {
      console.debug('refresh token')
      return serverApi.refreshToken()
    }
  }
  return Promise.resolve(auth)
}

class Config {
  autoMarkWatched?: boolean
  collectionSubjectWhenMarkStatus?: boolean
}

function getConfig (): Config {
  let rawConfig = gmGetValue('config', false)
  if (rawConfig) {
    try {
      rawConfig = JSON.parse(rawConfig)
    } catch (e) {
      gmSetValue('config', '{}')
      rawConfig = {}
    }
  }
  return rawConfig
}

type EpsMap = {
  subject_id: number
  source: string
  source_ep_id: string
  bgm_ep_id: number
  episode: number
}[]

class ServerApi {
  readonly http: AxiosInstance
  readonly newHttpServer: AxiosInstance

  constructor () {
    this.http = apiServer
    this.newHttpServer = newApiServer
  }

  refreshToken (): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      this.newHttpServer.post(URLS.refreshTokenPath)
        .then((response: BaseResponse<AuthResponse>) => {
          if (response.data.hasOwnProperty('error')) {
            console.error(response.data)
            reject(false)
          }
          saveAuth(response.data)
          resolve(response.data)
        }, () => {
          openAuthPage()
          reject(false)
        })
    })
  }

  report_missing_episode (bangumiID: string, episodeID: string,
                          bgmEpisodeID: string, website: string): void {
    this.http.post('/api/v0.1/report_missing_episode',
      {
        bangumiID,
        episodeID,
        bgmEpisodeID,
        website
      }
    )
  }

  report_missing_bangumi (bangumiID: string, subjectID: number,
                          title: string, website: string) {
    return this.newHttpServer.post('/bgm-tv-auto-tracker/api.v1/submit/subject_id',
      {
        bangumi_id: bangumiID,
        subject_id: subjectID,
        title,
        href: gmUnsafeWindow.location.href,
        source: website,
      })
  }

  async getBgmSubjectID (instance: AbstractWebsite): Promise<{
    bangumi_id: string
    subject_id: number
  }> {
    let response: BaseResponse<{
      source: string,
      bangumi_id: string,
      subject_id: number,
    }> = await this.newHttpServer.get('/bgm-tv-auto-tracker/api.v1/subject_id', {
      params: {
        source: instance.name,
        bangumi_id: instance.getBangumiID()
      },
      withCredentials: true,
    })
    return {
      bangumi_id: response.data.bangumi_id,
      subject_id: response.data.subject_id,
    }
  }

  async getBgmEpisodeID (instance: AbstractWebsite): Promise<{ bgm_ep_id: number }> {
    let res: BaseResponse<{
      subject_id: number
      source: string
      source_ep_id: string
      bgm_ep_id: number
      episode: number
    }> = await this.newHttpServer.get(`/ep_id/${ instance.name }/${ instance.getEpisodeID() }`)
    return { bgm_ep_id: res.data.bgm_ep_id }
  }

}

const serverApi = new ServerApi()

export {
  BgmApi,
  axios,
  apiServer,
  serverApi,
  parseEpisode,
  saveAuth,
  getAuth,
  getConfig,
  sortEps,
}

