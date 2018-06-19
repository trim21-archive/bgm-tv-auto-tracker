var script = document.createElement('script')
script.text = `
const status = window.data

chrome.runtime.sendMessage('${chrome.runtime.id}', data, function (res) {
    alert(res)
    close()
  })

`
document.body.appendChild(script)

//`