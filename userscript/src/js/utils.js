import { tm_getValue, tm_setValue, URLS } from './vars.js'
import axios from 'axios'
import adapter from 'axios-userscript-adapter'

axios.defaults.adapter = adapter

class BgmApi {
  constructor ({ access_token, serverRoot = 'https://api.bgm.tv' }) {
    this.access_token = access_token
    this.http = axios.create({
      baseURL: serverRoot,
      headers: { Authorization: 'Bearer ' + this.access_token },
      adapter
    })
  }

  setSubjectProgress (subjectID, ep) {
    return new Promise((resolve, reject) => {
      this.http.post(`/subject/${subjectID}/update/watched_eps`,
        `watched_eps=${ep}`,
        { 'content-type': 'application/x-www-form-urlencoded', })
        .then((response) => {
            if (response.data.code >= 300) {
              reject({ status: response.data.code, response })
            }
            else {
              resolve(response)
            }
          },
          error => reject(error)
        )
    })
  }

  setEpisodeWatched (ep) {
    return this.http.post(`/ep/${ep}/status/watched`)
  }

  getEps (subjectID) {
    return new Promise((resolve, reject) => {
        let noData = false
        let eps = tm_getValue(`eps_${subjectID}`, false)
        // no data
        if (!eps) noData = true
        if (eps) {
          eps = JSON.parse(eps)
          // out of time
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) noData = true
        }

        if (!noData) {
          resolve(eps)
        } else {
          this.http.getSubjectEps(subjectID).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify({ eps: response.data.eps }))
              resolve(response.data)
            },
            (error) => {
              reject(error)
            }
          )
        }
      }
    )
  }

  getSubjectEps (subjectID) {
    return new Promise((resolve, reject) => {
      this.http.get(`/subject/${subjectID}/ep`).then(
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

  getSubject (subjectID) {
    return new Promise((resolve, reject) => {
      this.http.get(`/subject/${subjectID}`).then(
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

  setSubjectCollectionStatus ({ subjectID, status }) {
    return new Promise(((resolve, reject) => {
      this.http.post(`/collection/${subjectID}/update`, `status=${status}`,
        {
          'content-type': 'application/x-www-form-urlencoded'
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
    }))
  }
}

let apiServer = axios.create({
  baseURL: URLS.apiServerURL,
  headers: { 'bgm.tv': process.env.version },
})

function parseEpisode (title) {
  let re = /第(\d+)集/g
  let result = re.exec(title)
  console.log(result)

  if (result) {
    return parseInt(result[1], 10)
  } else {
    return 0
  }
}

/**
 * A number, or a string containing a number.
 * @typedef {object} Auth
 * @property {string} access_token access token
 * @property {number} expires_in expires duration
 * @property {string} token_type
 * @property {null}   scope
 * @property {number} user_id
 * @property {string} refresh_token
 * @property {number} auth_time
 */

/**
 *
 * @param {Auth} auth
 */
function saveAuth (auth) {
  auth.auth_time = parseInt(new Date().getTime() / 1000, 10)
  tm_setValue('auth', JSON.stringify(auth))
}

/**
 * @param {Auth} auth
 * @return {boolean}
 */
function ifAuthExpires (auth) {
  /* auth_time 2d  expires in 9d */
  /*            2d + 7d - 1d < 6d => false*/
  /*            2d + 7d - 1d < 8d => true*/
  return (auth.auth_time + auth.expires_in - 2 * 24 * 60 * 60) < Math.round(new Date().getTime() / 1000)
}

// * @returns {(Auth|false)}
/**
 *
 * @return {Promise.< Auth|false >}
 */
function getAuth () {
  /**
   * @type {Auth}
   */
  let auth = tm_getValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    if (ifAuthExpires(auth)) {
      // if (true) {
      console.log('refresh token')
      return apiServer.post('/api/v0.1/refresh_token', auth,)
        .then(response => {
          if (response.data.hasOwnProperty('error')) {
            // alert('续期token失败,请手动重新授权')
            console.log(response.data)
          }
          saveAuth(response.data)
          return response.data
        })
    }
  }
  return Promise.resolve(auth)
  // return auth
}

export { BgmApi, axios, apiServer, parseEpisode, saveAuth, getAuth }
