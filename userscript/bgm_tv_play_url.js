// ==UserScript==
// @name        Yet another bangumi player url
// @namespace   https://trim21.me/
// @version     0.0.1
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @license     MIT
// @match       http*://bgm.tv/ep/*
// @match       http*://chii.in/ep/*
// @match       http*://bangumi.tv/ep/*
// @run-at      document-end
// ==/UserScript==

/* global $, prompt, alert, location */
/* env jquery */

(() => {
  const SERVER_ROOT = 'https://bangumi-auto-tracker.trim21.cn'
  const CONTAINER_EL_ID = 'trim21-episode-player-url'
  $('body').append(`<style>
    #${CONTAINER_EL_ID} a.${CONTAINER_EL_ID}-episodes:hover{
      color: white;
    }
    
    .${CONTAINER_EL_ID}-other{
      background-color: gray;
    }

    .${CONTAINER_EL_ID}-bilibili{
      background-color: #00a1d6;
    }

    .${CONTAINER_EL_ID}-iqiyi{
      background-color: #00be06;
    }

    .${CONTAINER_EL_ID}-tencent{
      background-color: #ff9602;
    }
    
    
    .${CONTAINER_EL_ID}-episodes{
      margin: 4px;
      height: 2rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    #${CONTAINER_EL_ID}{
      padding: 0 1rem;
      margin: 1rem 0 0 0;
    }

    #${CONTAINER_EL_ID}-edit{
      position: relative;
      float: right;
      text-align: right;
      color: grey;
    }

    #${CONTAINER_EL_ID}-edit:hover{
      color: black;
    }
    
</style>`)

  function post (url, data) {
    let userHomeLink = $('.avatar').attr('href').split('/')
    let user = userHomeLink[userHomeLink.length - 1]
    return $.ajax({
      url: SERVER_ROOT + url,
      type: 'POST',
      xhrFields: { withCredentials: true },
      crossDomain: true,
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({
        user,
        ...data
      }),
    })
  }

  function checkUserInputValid (url) {
    if (!url) {
      return false
    }
    try {
      let urlObj = new URL(url)
      if (['http', 'https'].indexOf(urlObj.protocol) !== -1) {
        return false
      }
    } catch (e) {
      return false
    }
    return true
  }

  function getEpId () {
    let s = location.pathname.split('/')
    return s[s.length - 1]
  }

  function renderItem ({ type, link }) {
    return `<a href="${link}" target="_blank"
               class="${CONTAINER_EL_ID}-${type} ${CONTAINER_EL_ID}-episodes">${type}</a>`
  }

  $('.epDesc .tip').after(`<div id="${CONTAINER_EL_ID}">loading</div>`)
  const ROOT_EL = $('#' + CONTAINER_EL_ID)
  // console.log('hello world');
  let innerHtml = ''
  $.ajax({
    url: SERVER_ROOT + '/api/v0.1/player_url',
    type: 'GET',
    withCredentials: true,
    xhrFields: { withCredentials: true },
    data: { bgm_ep_id: getEpId() },
    crossDomain: true,
  }).then(
    res => {
      for (let item of res.data) {
        innerHtml += renderItem(item)
      }
      if (!res.data.length) {
        innerHtml = 'no episode now'
      }
      innerHtml += `<a id="${CONTAINER_EL_ID}-edit">add</a>`
      ROOT_EL.html(innerHtml)
      $(`#${CONTAINER_EL_ID}-edit`).click(function () {
        let userInput = prompt('输入完整url')
        if (userInput === null) {
          return
        }
        if (checkUserInputValid(userInput)) {
          console.log(userInput)
          post('/api/v0.1/player_url',
            {
              'bgm_ep_id': getEpId(),
              'link': userInput,
            }
          ).then(
            res => {
              console.log(res)
            },
            err => {
              if (err.status === 401) {
                console.log(err)
                window.open(SERVER_ROOT + '/auth')
              } else {
                console.log(err)
              }
            }
          )
        } else {
          alert('不是合法的url')
        }
      })
    },
    err => { console.log(err) }
  )
})()
