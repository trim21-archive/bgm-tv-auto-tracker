var script = document.createElement('script')
script.text = `

function injectBilibili () {
  const status = window.__INITIAL_STATE__
  const episode = status.epInfo.index
  const id = status.mediaInfo.season_id
  console.log('inject bilibili')

  chrome.runtime.sendMessage('${chrome.runtime.id}', {
    'type': 'watch_episode',
    'website': 'bilibili',
    'bangumi_id': id,
    'title': status.mediaInfo.alias,
    episode,
  }, function (res) {
    console.log(res)
  })

  // Your code here...
}

injectBilibili()
let url = location.href

function detectHrefChange () {
  console.log('check href')
  if (location.href !== url) {
    injectBilibili()
    url = location.href
  }

}

setInterval(detectHrefChange, 10 * 1000)
 `
document.body.appendChild(script)
