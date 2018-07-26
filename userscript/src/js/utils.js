import { tm_getValue, tm_setValue } from './vars'
import axios from 'axios'
import adapter from 'axios-gmxhr-adapter'
// monkey patch for https://github.com/damoclark/axios-gmxhr-adapter/issues/1
import GmXHR from 'gmxhr'
// var adapter = require('axios-gmxhr-adapter')
axios.defaults.adapter = adapter

GmXHR.prototype.send = function (data) {
  this.data = data
  var that = this
  // http://wiki.greasespot.net/GM_xmlhttpRequest
  GM_xmlhttpRequest({
    method: this.type,
    url: this.url,
    headers: this.headers,
    data: this.data,
    onload: function (rsp) {
      // Populate wrapper object with returned data
      // including the Greasemonk ey specific "responseHeaders"
      var responseKeys = ['readyState', 'responseHeaders', 'finalUrl', 'status', 'statusText', 'response', 'responseText']
      for (var k in responseKeys) {
        if (rsp.hasOwnProperty(responseKeys[k]))
          that[responseKeys[k]] = rsp[responseKeys[k]]

      }
      that.onreadystatechange()
    },
    onerror: function (rsp) {
      var responseKeys = ['readyState', 'responseHeaders', 'finalUrl', 'status', 'statusText', 'response', 'responseText']
      for (var k in responseKeys) {
        if (rsp.hasOwnProperty(responseKeys[k]))
          that[responseKeys[k]] = rsp[responseKeys[k]]
      }
      that.onreadystatechange()
    }
  })
}

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
      this.post(`/subject/${subjectID}/update/watched_eps`,
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
    return this.post(`/ep/${ep}/status/watched`)
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
          this.getSubjectEps(subjectID).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
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
      this.get(`/subject/${subjectID}/ep`).then(
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
      this.get(`/subject/${subjectID}`).then(
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
      this.post(`/collection/${subjectID}/update`, `status=${status}`,
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

  get (url, headers = {}) {
    return new Promise((resolve, reject) => {
      this.http.get(url, { headers }).then(response => {
          if (response.data.code && response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error))
    })
  }

  post (url, data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      this.http.post(url, data, { headers }).then(response => {
          if (response.data.code && response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error))
    })
  }
}

let apiServer = axios.create({
  baseURL: 'https://bangumi-auto-tracker.trim21.cn/',
  headers: { 'bgm.tv': process.env.version },
})

export { BgmApi, axios, apiServer }
