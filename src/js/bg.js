let maps = {
  '粗点心战争2': '221490',
  '原书·原书使': '220632',
  'ISUCA': '106292'
}

function parseHTMLOfBangumi (bangumiId, cb) {
  $.get(`https://bgm.tv/subject/${bangumiId}`, (data) => {
    // console.log(data)
    let c = $.parseHTML(data)
    let bangumiEpisodesList = $('ul.prg_list>li>a', c)
    let m = {}

    bangumiEpisodesList.toArray().forEach((item) => {
      let title = item.href
      m[parseInt(item.innerHTML)] = title.split('/').pop()
    })
    cb(m)
  })
}

function setProgress (bangumiId, progress) {
  let c = parseHTMLOfBangumi()
  $.post(`https://bgm.tv/subject/set/watched/${bangumiId}`,
    {referer: 'subject', watchedeps: parseInt(progress)},
    (data) => console.log(data))
}

function watchSingleEpisode (episodeId) {

  $.ajax({
    type: 'POST',
    url: `https://bgm.tv/subject/ep/${episodeId}/status/watched?ajax=1`,
    headers: {
      origin: 'bgm.tv'
    },
    success: (data) => {
      if (JSON.parse(data)['status'] === 'ok') {
        console.log('set success')
      } else {
        console.log('sth wrong')
      }
    }
  })

  // $.post(,)
}

function fromBangumiNameToId (bangumiName) {
  return maps[bangumiName]
}

function getMap (bangumiName, cb) {
  let myStorage = localStorage
  let f = myStorage.getItem(bangumiName)
  if (f) {
    f = JSON.parse(f)
    cb(f)
  } else {
    let id = fromBangumiNameToId(bangumiName)
    parseHTMLOfBangumi(id, (episodeMap) => {
      myStorage.setItem(bangumiName, JSON.stringify(episodeMap))
      cb(bangumiName)
    })
  }
}

(function () {
  let resOK = {
    farewell: 'extension send response back...'
  }

  let resError = {
    farewell: 'extension hasError!'
  }

  chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('Request comes from content script ' + sender.tab.url)

    if (request.type === 'bangumi_info') {
      let bangumiName = request.data.title
      let episode = request.data.episode

      getMap(bangumiName, (map) => {
        watchSingleEpisode(map[episode])
      })

      sendResponse(resOK)
    } else {
      sendResponse(resError)
    }
  })
})()
