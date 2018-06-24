chrome.runtime.onMessageExternal.addListener(function (message, sender, sendResponse) {
  console.log(message)
  if (message.type === 'auth') {
    setData(message)
    sendResponse('Successfully authorized')
  } else if (message.type === 'watch_episode') {
    watchEpisode(bgmApi, message)
  }
})

function init () {
  const axios = window.axios
  console.log('init')
  const data = getData()
  if (!data) {
    chrome.tabs.create({ url: `https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=${VARS.serverURL}/oauth_callback` })
    return
  }
  if (data.authTime + data.expiresIn - parseInt(new Date().getTime() / 1000) < 24 * 60 * 60) {
    refreshToken(data.userID, data.refreshToken, function (err) {
      if (err) {
        notify(err.toString(), 4)
      } else {
        init()
      }
    })
  }

  window.bgmApi = axios.create({
    baseURL: 'https://api.bgm.tv/',
    timeout: 10000,
    headers: { 'Authorization': 'Bearer ' + data.accessToken }
  })

}

function getData () {
  const localStorage = window.localStorage

  const authorised = localStorage.getItem('authorised')
  if (authorised !== 'true') { return null }
  const data = JSON.parse(localStorage.getItem('message'))
  const userID = data.user_id
  const authTime = data.auth_time
  const accessToken = data.access_token
  const refreshToken = data.refresh_token
  const expiresIn = data.expires_in
  return {
    userID,
    authTime,
    accessToken,
    refreshToken,
    expiresIn
  }
  // return JSON.stringify(localStorage.getItem('message'))
}

function setData (message) {
  const localStorage = window.localStorage

  localStorage.setItem('authorised', 'true')
  localStorage.setItem('message', JSON.stringify(message))
  localStorage.setItem('user_id', message.user_id)
  localStorage.setItem('auth_time', message.time)
  localStorage.setItem('expires_in', message.expires_in)
  localStorage.setItem('access_token', message.access_token)
  localStorage.setItem('refresh_token', message.refresh_token)
}

function refreshToken (userID, refreshToken, cb) {
  console.log('refresh token')
  const axios = window.axios
  const serverApi = axios.create({
    baseURL: `${VARS.serverURL}/`,
    timeout: 10000
  })

  serverApi.post('/refresh_token', {
    refresh_token: refreshToken,
    user_id: userID
  }).then(function (response) {
    setData(response.data)
    cb()
  }, function (err) {
    alert('can\'t refresh token')
    console.log(err)
    cb(err)
  })
}

function watchEpisode (bgmApi, message) {
  const serverApi = axios.create({
    baseURL: `${VARS.serverURL}/`,
    timeout: 10000
  })

  serverApi.get('/query/bilibili', {
    params: { bangumi_id: message.bangumi_id }
  }).then(
    function (response) {
      console.log(response.data)
      const subjectID = response.data.subject_id
      var fd = new FormData()
      fd.append('status', 'do')
      bgmApi.post(`/collection/${subjectID}/update`,
        `status=do`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then(function (res) {
        return bgmApi.get(`/subject/${subjectID}/ep`).then(
          function (res) {
            notify(`Find you watching ${message.title} ${message.episode}`.toString(), 2)
            let ep = res.data.eps[parseInt(message.episode) - 1].id
            return bgmApi.post(`/ep/${ep}/status/watched`)
          }
        )
      })
    }
  ).catch(function (err) {
    notify(err.toString(), 2)
  })
}

function notify (message, timeout = 4) {
  chrome.notifications.create('id', {
    type: 'basic',
    title: 'bgm.tv auto tracker',
    message: message,
    priority: 1,
    iconUrl: '../icon.png'
  }, function (id) {
    let timer = setTimeout(function () {chrome.notifications.clear(id)}, timeout * 1000)
  })
}

init()
