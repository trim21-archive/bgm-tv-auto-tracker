// ==UserScript==
// @name        Show Player Url On Bgm.tv
// @namespace   https://trim21.me/
// @version     0.0.2
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bgm-tv-auto-tracker
// @description show link of video website
// @license     MIT
// @include     /https?:\/\/(bgm\.tv|bangumi\.tv|chii\.in)\/subject/.*/
// @match       https?://bgm.tv/subject/*
// @match       https?://bangumi.tv/subject/*
// @match       https?://chii.in/subject/*
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     www.trim21.cn
// @run-at      document-idle
// ==/UserScript==

/* global $, GM_xmlhttpRequest */
(function () {
  'use strict'
  if (document.location.pathname.startsWith('/subject/')) {
    const subjectID = /\/subject\/(\d+).*/g.exec(document.location.pathname)[1]
    GM_xmlhttpRequest({
      method: 'GET',
      url: `https://www.trim21.cn/bgm.tv/api.v1/subject/player/${subjectID}`,
      onload: function (response) {
        const data = JSON.parse(response.responseText)
        const container = $('h1.nameSingle')
        for (const episode of data) {
          container.append(`<small> <a href="${episode.url}">${episode.website}</a></small>`)
        }
      }
    })
    console.log(document.location)
  }

  // if (document.location.pathname.startsWith('/ep/')) {
  //   const epID = /\/ep\/(\d+).*/g.exec(document.location.pathname)[1]
  //   GM_xmlhttpRequest({
  //     method: 'GET',
  //     url: `https://www.trim21.cn/bgm.tv/api.v0/ep/player/${epID}`,
  //     onload: function (response) {
  //       const data = JSON.parse(response.responseText)
  //       $('#columnEpA .epDesc').append('<hr><ul id="trim21-player-url-details"></ul>')
  //       const container = $('#trim21-player-url-details')
  //       for (const episode of data) {
  //         container.append(`<li> <a href="${episode.url}">${episode.website}</a></li>`)
  //       }
  //     }
  //   })
  //   console.log(document.location)
  // }
})()
