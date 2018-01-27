let episodeCN = $('li.episode-item.on').find('h4.ep-index')[0].innerHTML
const regex = /第(\d+)话/
let episode = parseInt(episodeCN.match(regex)[1])
let title = $('div.info-title.clearfix').find('a').find('h2')[0].innerHTML

console.log(episode)
console.log(title)

console.log('injected')

chrome.extension.sendMessage({
  type: 'bangumi_info',
  data: {title, episode}
}, function (response) {
  console.log(response.farewell)
})
