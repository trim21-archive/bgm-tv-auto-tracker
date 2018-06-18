const user_id = localStorage.getItem('user_id')
if (user_id) {
  // $('#info').html('user_id' + user_id)
  $('#info').html('已经成功授权')
  $('#btn').hide()
} else {
  $('#btn').click(function (event) {
    chrome.tabs.create({ url: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=http://localhost:6001/oauth_callback?w=233' })
  })

}
$('#clear').click(() => {
  localStorage.clear()
  location.reload()
})