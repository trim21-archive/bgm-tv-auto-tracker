let maps = {
  '粗点心战争2': '221490'
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
  return 233
}

function hello () {
  let id = fromBangumiNameToId('粗点心战争2')
  parseHTMLOfBangumi(id, (m) => {
    console.log(m)
  })
  // setProgress(id, 11)
}

function setProgress (bangumiId, progress) {
  let c = parseHTMLOfBangumi()
  $.post(`https://bgm.tv/subject/set/watched/${bangumiId}`,
    {referer: 'subject', watchedeps: parseInt(progress)},
    (data) => console.log(data))
}

function watchSingleEpisode (episodeId) {
  $.post(`https://bgm.tv/subject/ep/${episodeId}/status/watched?ajax=1`, (data) => {
    if (JSON.parse(data)['status'] === 'ok') {
      console.log('set success')
    } else {
      console.log('sth wrong')
    }
  })
}

function fromBangumiNameToId (bangumiName) {
  return maps[bangumiName]
}

function getBangumiName () {
  //todo
  let bangumiName = '233'
  return bangumiName
}

function getBangumiEpisode () {
  // todo
  let episode = 2
  return episode
}

$('#btn').on('click', hello)
