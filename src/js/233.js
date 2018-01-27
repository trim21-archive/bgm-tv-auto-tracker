// chrome.runtime.onInstalled.addListener(function (details) {
//   if (details.reason == 'install') {
//
//     chrome.storage.local.set('mappedBangumi', new Set())
//
//   } else if (details.reason == 'update') {
//     var thisVersion = chrome.runtime.getManifest().version
//     console.log('Updated from ' + details.previousVersion + ' to ' + thisVersion + '!')
//   }
// })