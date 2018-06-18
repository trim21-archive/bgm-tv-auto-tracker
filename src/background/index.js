function init () {
  const axios = window.axios
  const serverApi = axios.create({
    baseURL: 'http://localhost:6001/',
    timeout: 10000
  })
  console.log('init')
  const chrome = window.chrome
  chrome.runtime.onMessageExternal.addListener(function (message, sender, sendResponse) {
    console.log(message)
    if (message.type === 'auth') {
      setData(message)
      sendResponse('Successfully authorized')
    }
    else if (message.type === 'watch_episode') {
      serverApi.get('/query/bilibili', {
        params: { bangumi_id: message.bangumi_id }
      }).then(
        function (response) {
          console.log(response.data)
          const subject_id = response.data.subject_id
          return bgmApi.get(`/subject/${subject_id}/ep`).then(
            function (res) {
              console.log(res.data)
              let ep = res.data.eps[parseInt(message.episode) - 1].id
              return bgmApi.post(`/ep/${ep}/status/watched`)
            }
          )
        }
      )
    }
  })

  const data = getData()
  if (!data) { return }
  if (data.authTime + data.expiresIn - parseInt(new Date().getTime() / 1000) < 24 * 60 * 60) {
    refreshToken(data.userID, data.refreshToken)
  } else {
    const axios = window.axios
    window.bgmApi = axios.create({
      baseURL: 'https://api.bgm.tv/',
      timeout: 1000,
      headers: { 'Authorization': 'Bearer ' + data.accessToken }
    })
  }
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

function refreshToken (userID, refreshToken) {
  console.log('refresh token')
  const axios = window.axios
  axios.post('http://localhost:6001/refresh_token', {
    refresh_token: refreshToken,
    user_id: userID
  }).then(function (response) {
    setData(response.data)
    init()
  }, function (err) {
    alert('can\'t refresh token')
    console.log(err)
  })
}

init()
