var script = document.createElement('script')
script.text = `

function injectBilibili () {
  const status = window.__INITIAL_STATE__
  const episode = status.epInfo.index
  const id = status.mediaInfo.season_id
  console.log('inject bilibili')

  chrome.runtime.sendMessage('gdifpeefpjjmkgcpiaplkhemifadigmp', {
    'type': 'watch_episode',
    'website': 'bilibili',
    'bangumi_id': id,
    episode
  }, function (res) {
    console.log(res)
  })

  // Your code here...
}

injectBilibili()
let url = location.href

function detectHrefChange () {
  if (location.href !== url) {
    injectBilibili()
    url = location.href
  }

}

setInterval(detectHrefChange, 100 * 1000)
 `
document.body.appendChild(script)
//`