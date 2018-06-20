// ==UserScript==
// @name         Bgm.tv auto tracker
// @namespace    https://trim21.me/
// @version      0.1
// @description  try to take over the world!
// @author       Trim21
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @grant        GM_setValue
// @run-at       document_end
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  if (location.href.startsWith('https://bangumi-auto-tracker.trim21.cn/oauth_callback')) {
    if (window.data) {
      GM_setValue('auth', JSON.stringify(window.data))
    } else {
      Notification.requestPermission(function () {
        let n = new Notification('hehe')
      })
    }
    console.log(window.data)
  }
  // Your code here...
})()