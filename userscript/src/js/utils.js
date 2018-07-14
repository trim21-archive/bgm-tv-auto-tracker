import { tm_xmlHttpRequest } from './gm_vars'

const deepCopy = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

const parseHeader = function (lines) {
  let headers = {}
  for (let line of lines.trim().split('\r')) {
    line = line.trim()
    if (line) {
      Object.assign(headers, parseHeaderLine(line))
    }
  }
  return headers
}

const parseHeaderLine = function (line) {
  let headers = {}
  let headerExp = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/
  let match = headerExp.exec(line)
  let k = match && match[1]
  k = k.toLowerCase()
  headers[k] = match[2]
  return headers
}

const NORMAL_ONLOAD = (resolve, reject) => (response) => {
  response.headers = parseHeader(response.responseHeaders)
  if (response.status < 300) {
    if (response.headers['content-type'].startsWith('application/json')) {
      response.data = JSON.parse(response.responseText)
    }
    resolve(response)
  } else {
    if (response.headers['content-type'].startsWith('application/json')) {
      response.data = JSON.parse(response.responseText)
    }
    reject({ response })
  }
}

const requests = {
  get (url, headers = {}) {
    // headers.cookie = ''
    return new Promise((resolve, reject) => {
      tm_xmlHttpRequest({
        method: 'GET',
        url,
        headers,
        onload: NORMAL_ONLOAD(resolve, reject)
      })
    })
  },
  post (url, data = {}, headers = {}) {
    if (data !== null && typeof data === 'object') {
      data = JSON.stringify(data)
      headers['content-Type'] = 'application/json'
    }
    // headers.cookie = ''
    return new Promise((resolve, reject) => {
      tm_xmlHttpRequest({
        method: 'POST',
        data,
        url,
        headers,
        onload: NORMAL_ONLOAD(resolve, reject)
      })
    })
  }
}

class BgmApi {
  constructor ({ userAgent = null, access_token, serverRoot = 'https://api.bgm.tv' }) {
    this.userAgent = null
    this.access_token = access_token
    if (serverRoot.endsWith('/')) {
      this.serverRoot = serverRoot.substring(0, serverRoot.length - 1)
    }
    else {
      this.serverRoot = serverRoot
    }
    console.log('register server root at ' + this.serverRoot)
  }

  setSubjectProgress (subjectID, ep) {

    return new Promise((resolve, reject) => {
      this.post(`${this.serverRoot}/subject/${subjectID}/update/watched_eps`,
        `watched_eps=${ep}`,
        { 'content-type': 'application/x-www-form-urlencoded', })
        .then((response) => {
            console.log(response)
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
    return this.post(`${this.serverRoot}/ep/${ep}/status/watched`)
  }

  getSubjectEps (subjectID) {
    return new Promise((resolve, reject) => {
      this.get(`${this.serverRoot}/subject/${subjectID}/ep`).then(
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

  getCalendar () {
    return this.get(`${this.serverRoot}/calendar`)
  }

  get (url, headers = {}) {
    if (!url.startsWith('http')) {
      if (url.startsWith('/')) {
        url = this.serverRoot + url
      }
      else {
        url = this.serverRoot + '/' + url
      }
    }
    if (this.userAgent) {
      headers['User-Agent'] = this.userAgent
    }
    headers['Authorization'] = 'Bearer ' + this.access_token
    return new Promise((resolve, reject) => {
      requests.get(url, headers).then(
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

  post (url, data = {}, headers = {}) {
    console.log(url)
    if (!url.startsWith('http')) {
      if (url.startsWith('/')) {
        url = this.serverRoot + url
      }
      else {
        url = this.serverRoot + '/' + url
      }
    }
    if (this.userAgent) {
      headers['User-Agent'] = this.userAgent
    }
    headers['Authorization'] = 'Bearer ' + this.access_token
    return new Promise((resolve, reject) => {
      requests.post(url, data, headers).then(
        response => {
          // if (response.data.code && response.data.code >= 300) {
          //   let error = { response }
          //   reject(error)
          // } else {
            resolve(response)
          // }
        },
        error => reject(error)
      )
    })
  }
}

export { BgmApi, requests }
