// ==UserScript==
// @name Bgm.tv auto tracker
// @namespace https://trim21.me/
// @version 0.5.3
// @author Trim21 <trim21me@gmail.com>
// @source https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @match https://www.bilibili.com/bangumi/play/*
// @match http*://www.iqiyi.com/*
// @match https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @match https://bangumi-auto-tracker.trim21.cn/userscript/options*
// @require https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require https://cdn.bootcss.com/axios/0.18.0/axios.js
// @grant GM_addStyle
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_openInTab
// @grant GM_addStyle
// @grant GM_xmlhttpRequest
// @grant unsafeWindow
// @connect localhost
// @connect api.bgm.tv
// @connect bangumi-auto-tracker.trim21.cn
// @run-at document-end
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<label> <input type=text class=subject /> <button class=notfound>submit subject id</button> </label> ";

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<div id=bgm_tv_tracker class=disable data-id=\"\"> <div class=\"bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius\">bgm.tv</div> <div class=bgm_tv_tracker_info> <div class=not_found></div> <br> <div> <p>你正在看: <span id=bgm_tv_tracker_title></span> </p> <p>第 <span id=bgm_tv_tracker_episode>{episode}</span>集</p> </div> <br> <div id=bgm_tv_tracker_link></div> <br> <button class=bgm_tv_tracker_radius id=bgm_tv_tracker_mark_watch>标记本集为看过</button> <button class=bgm_tv_tracker_radius id=bgm_tv_tracker_mark_watched>看到本集</button> <br> <br> <a href=https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues target=_blank rel=\"noopener noreferrer\">报告问题</a> <br> <div id=bgm_tv_tracker_notification></div> </div> </div>";

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(6);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(7);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/gm_vars.js
/* eslint-disable no-undef, camelcase */
let tm_unsafeWindow = unsafeWindow
let tm_xmlHttpRequest = GM_xmlhttpRequest
let tm_setValue = GM_setValue
let tm_getValue = GM_getValue
let tm_openInTab = GM_openInTab
let tm_addStyle = GM_addStyle
/**
 * @type {jQuery}
 */
let $ = window.$
/* eslint-enable no-undef, camelcase */



// CONCATENATED MODULE: ./src/js/utils.js


const deepCopy = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

const parseHeader = function (lines) {
  let headers = {}
  for (let line of lines.trim().split('\r')) {
    line = line.trim()
    if (line) {
      Object.assign(headers, parseHeaderLine(line))
    }
  }
  return headers
}

const parseHeaderLine = function (line) {
  let headers = {}
  let headerExp = /^([^: \t]+):[ \t]*((?:.*[^ \t])|)/
  let match = headerExp.exec(line)
  let k = match && match[1]
  k = k.toLowerCase()
  headers[k] = match[2]
  return headers
}

const NORMAL_ONLOAD = (resolve, reject) => (response) => {
  response.headers = parseHeader(response.responseHeaders)
  if (response.status < 300) {
    if (response.headers['content-type'].startsWith('application/json')) {
      response.data = JSON.parse(response.responseText)
    }
    resolve(response)
  } else {
    if (response.headers['content-type'].startsWith('application/json')) {
      response.data = JSON.parse(response.responseText)
    }
    reject({ response })
  }
}

const requests = {
  get (url, headers = {}) {
    // headers.cookie = ''
    return new Promise((resolve, reject) => {
      tm_xmlHttpRequest({
        method: 'GET',
        url,
        headers,
        onload: NORMAL_ONLOAD(resolve, reject)
      })
    })
  },
  post (url, data = {}, headers = {}) {
    if (data !== null && typeof data === 'object') {
      data = JSON.stringify(data)
      headers['content-Type'] = 'application/json'
    }
    // headers.cookie = ''
    return new Promise((resolve, reject) => {
      tm_xmlHttpRequest({
        method: 'POST',
        data,
        url,
        headers,
        onload: NORMAL_ONLOAD(resolve, reject)
      })
    })
  }
}

class BgmApi {
  constructor ({ access_token, serverRoot = 'https://api.bgm.tv' }) {
    this.access_token = access_token
    if (serverRoot.endsWith('/')) {
      this.serverRoot = serverRoot.substring(0, serverRoot.length - 1)
    }
    else {
      this.serverRoot = serverRoot
    }
    console.log('register server root at ' + this.serverRoot)
  }

  setSubjectProgress (subjectID, ep) {
    return new Promise((resolve, reject) => {
      this.post(`${this.serverRoot}/subject/${subjectID}/update/watched_eps`,
        `watched_eps=${ep}`,
        { 'content-type': 'application/x-www-form-urlencoded', })
        .then((response) => {
            console.log(response)
            if (response.data.code >= 300) {
              reject({ status: response.data.code, response })
            }
            else {
              resolve(response)
            }
          },
          error => reject(error)
        )
    })
  }

  setEpisodeWatched (ep) {
    return this.post(`${this.serverRoot}/ep/${ep}/status/watched`)
  }

  getSubjectEps (subjectID) {
    return new Promise((resolve, reject) => {
      this.get(`${this.serverRoot}/subject/${subjectID}/ep`).then(
        response => {
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }

  getSubject (subjectID) {
    return new Promise((resolve, reject) => {
      this.get(`/subject/${subjectID}`).then(
        response => {
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }

  getCalendar () {
    return this.get(`${this.serverRoot}/calendar`)
  }

  get (url, headers = {}) {
    if (!url.startsWith('http')) {
      if (url.startsWith('/')) {
        url = this.serverRoot + url
      }
      else {
        url = this.serverRoot + '/' + url
      }
    }
    headers['Authorization'] = 'Bearer ' + this.access_token
    return new Promise((resolve, reject) => {
      requests.get(url, headers).then(
        response => {
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }

  post (url, data = {}, headers = {}) {
    console.log(url)
    if (!url.startsWith('http')) {
      if (url.startsWith('/')) {
        url = this.serverRoot + url
      }
      else {
        url = this.serverRoot + '/' + url
      }
    }
    headers['Authorization'] = 'Bearer ' + this.access_token
    return new Promise((resolve, reject) => {
      requests.post(url, data, headers).then(
        response => {
          // if (response.data.code && response.data.code >= 300) {
          //   let error = { response }
          //   reject(error)
          // } else {
            resolve(response)
          // }
        },
        error => reject(error)
      )
    })
  }
}



// EXTERNAL MODULE: ./src/html/bilibili.html
var bilibili = __webpack_require__(1);
var bilibili_default = /*#__PURE__*/__webpack_require__.n(bilibili);

// EXTERNAL MODULE: ./src/css/iqiyi.css
var iqiyi = __webpack_require__(4);
var iqiyi_default = /*#__PURE__*/__webpack_require__.n(iqiyi);

// EXTERNAL MODULE: ./src/css/bilibili.css
var css_bilibili = __webpack_require__(3);
var css_bilibili_default = /*#__PURE__*/__webpack_require__.n(css_bilibili);

// EXTERNAL MODULE: ./src/html/bilibili_notfound.html
var bilibili_notfound = __webpack_require__(0);
var bilibili_notfound_default = /*#__PURE__*/__webpack_require__.n(bilibili_notfound);

// CONCATENATED MODULE: ./src/js/index.js







/**
 * @typedef {string} WEBSITE
 * @enum {WEBSITE}
 */
let WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi'
}

/**
 * @type {WEBSITE}
 */
let website

/**
 * @type {BgmApi}
 */
let bgmApi


/**
 * @namespace
 * @property {object} bangumiData
 * @property {string} bangumiID
 * @property {string} subjectID
 * @property {string} title
 * @property {number} episode
 */
let bangumiData = {}

/**
 * Append a message to banner
 * @param {string} message.
 */
function notify (message) {
  let now = new Date()
  $('#bgm_tv_tracker_notification').prepend(`<hr><p>${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${message}</p>`)
}

/**
 * @namespace
 * @property {object} URLS
 * @property {string} apiServerURL access token
 * @property {string} callBackUrl
 * @property {number} apiBgmUrl
 * @property {number} authURL
 */
const URLS = {}

if (window.TM_ENV === 'dev') {
  Object.assign(URLS, {
    apiServerURL: 'http://localhost:6001',
    callBackUrl: 'http://localhost:6001/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2955b3b3050e7bf2&response_type=code&redirect_uri=http://localhost:6001/oauth_callback',
  })

} else {
  Object.assign(URLS, {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  })
}

function getEps (subjectID) {
  return new Promise((resolve, reject) => {
      let eps = tm_getValue(`eps_${subjectID}`, false)
      if (!eps) {
        bgmApi.getSubjectEps(subjectID).then(
          (response) => {
            response.data.time = Number(new Date().getTime() / 1000)
            tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
            resolve(response.data)
          },
          (error) => {
            reject(error)
            notify('get bgm eps error')
          }
        )
      } else {
        eps = JSON.parse(eps)
        if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
          bgmApi.getSubjectEps(subjectID).then(
            (response) => {
              response.data.time = Number(new Date().getTime() / 1000)
              tm_setValue(`eps_${subjectID}`, JSON.stringify(response.data))
              resolve(response.data)
            },
            (error) => {
              reject(error)
              notify('get bgm eps error')
            }
          )
        } else {
          resolve(eps)
        }
      }
    }
  )
}

let collection = tm_getValue('collection', false) // @type {Array}
if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

/**
 * @namespace
 * @property {object} auth               - The default values for parties.
 * @property {string} access_token access token
 * @property {number} expires_in expires duration
 * @property {string} token_type
 * @property {null}   scope
 * @property {number} user_id
 * @property {string} refresh_token
 * @property {number} auth_time
 */
let auth

function collectSubject (subjectID) {
  if (!collection[subjectID]) {
    requests.post(`${URLS.apiBgmUrl}/collection/${subjectID}/update`, 'status=do',
      {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + auth.access_token
      }).then(
      response => {
        if (response.data.code === 401) {
          notify(response.data.error)
        } else {
          notify('add this bangumi to your collection')
          collection[subjectID] = true
          tm_setValue('collection', JSON.stringify(collection))
        }
      },
      error => notify(error.response.data.error_description)
    )
  }
}

function watchEpisode (message) {
  collectSubject(message.subject_id)
  getEps(message.subject_id).then(
    (data) => {
      console.log(message.episode)
      let ep = data.eps.filter(function (val) {
        return val.sort === parseInt(message.episode)
      })
      console.log(ep)
      ep = ep[0].id
      bgmApi.setEpisodeWatched(ep).then(
        () => notify(`mark your status successfully`.toString()),
        error => {
          notify(JSON.stringify(error.response.data))
        }
      )
    },
    error => notify(JSON.stringify(error.response.data))
  ).catch(function (err) {
    notify(err.toString())
  })
}


if (tm_unsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (tm_unsafeWindow.data) {
    tm_setValue('auth', JSON.stringify(tm_unsafeWindow.data))
    let child = tm_unsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    tm_unsafeWindow.document.body.appendChild(child)
  }
} else {
  auth = tm_getValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    bgmApi = new BgmApi({ userAgent: 'Bgm.tv auto tracker', access_token: auth.access_token })
  } else {
    tm_openInTab(URLS.authURL, { active: true })
  }
}

const dealWithSubjectID = function (subjectID) {
  bangumiData.subjectID = subjectID

  $('#bgm_tv_tracker_link').html(`<a href="http://bgm.tv/subject/${subjectID}" target="_blank" rel="noopener noreferrer">subject/${subjectID}</a>`)
  $('#bgm_tv_tracker_mark_watched').click(
    () => {
      let ep = bangumiData.episode
      collectSubject(subjectID)
      getEps(subjectID).then(data => {
        let eps = data.eps.findIndex(function (element) {
          return element.sort === parseInt(ep)
        }) + 1

        bgmApi.setSubjectProgress(subjectID, ep).then(
            (response) => {
                notify('mark status successful')
            },
            error => {
              if (error.response.data.code === 400) {
                notify('error: ' + error.response.data.error + ',' + '应该是因为你在bgm上的状态已经是看到本集')
              } else {
                notify('error: ' + JSON.stringify(error.response))
              }
            }
          )
      })
    }
  )

  $('#bgm_tv_tracker_mark_watch').click(
    () => {
      watchEpisode({
        subject_id: subjectID,
        'type': 'watch_episode',
        'website': 'bilibili',
        'bangumi_id': bangumiData.bangumiID,
        'title': $('#bgm_tv_tracker_title').html(),
        episode: bangumiData.episode,
      })
    }
  )
}

// inject bilibili
if (tm_unsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  console.log('inject bilibili')
  website = 'bilibili'

  // noinspection JSAnnotator
  const injectBilibili = function () {
    const status = tm_unsafeWindow.__INITIAL_STATE__
    const episode = status.epInfo.index
    const bangumiID = status.mediaInfo.season_id
    bangumiData.bangumiID = status.mediaInfo.season_id
    bangumiData.episode = episode

    tm_addStyle(css_bilibili_default.a)
    $('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
      .prepend(bilibili_default.a)
    let info = $('.bgm_tv_tracker_info')
    $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
      info.toggle('fast')
    }).hover(function () {
      $(this).css('background-color', '#00A1D6')
      $(this).css('color', 'white')
    }, function () {
      $(this).css('background-color', 'white')
      $(this).css('color', 'black')
    })

    $('#bgm_tv_tracker_episode').html(episode)
    $('#bgm_tv_tracker').data('id', bangumiID)
    $('#bgm_tv_tracker_title').html(status.mediaInfo.title)

    requests.get(`${URLS.apiServerURL}/query/bilibili?bangumi_id=${bangumiID}`).then(
      (response) => {
        let subjectID = response.data.bangumi_id || response.data.subject_id
        dealWithSubjectID(subjectID)
      },
      (err) => {
        if (err.response.status === 404) {
          // $('.bgm_tv_tracker_info').html('没找到你在看的番剧')
          // const subjectID = tm_unsafeWindow.prompt('Bgm.tv auto tracker 没找到你在看的番剧 手动指定subject id')
          let notFound = $('.bgm_tv_tracker_info .not_found')
            .html(bilibili_notfound_default.a)

          // $('.bgm_tv_tracker_info .not_found')
          $('.bgm_tv_tracker_info .not_found button').click(
            () => {
              let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
              if (subjectID) {
                notFound.hide()
                requests.get(`${URLS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${bangumiID}&subject_id=${subjectID}`)
                dealWithSubjectID(subjectID)
              }
            })
        }
      }
    )
  }
  injectBilibili()

  let INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index

  // noinspection JSAnnotator
  const onHrefChange = function () {
    const status = tm_unsafeWindow.__INITIAL_STATE__
    const episode = status.epInfo.index
    bangumiData.bangumiID = status.mediaInfo.season_id
    bangumiData.episode = episode
    $('#bgm_tv_tracker_episode').html(episode)
  }

  // noinspection JSAnnotator
  const detectHrefChange = function () {
    console.log('check href')
    if (INNER_EPISODE !== tm_unsafeWindow.__INITIAL_STATE__.epInfo.index) {
      onHrefChange()
      INNER_EPISODE = tm_unsafeWindow.__INITIAL_STATE__.epInfo.index
    }
  }

  setInterval(detectHrefChange, 10 * 1000)
  setTimeout(detectHrefChange, 5000)
}
// inject iqiyi
if (tm_unsafeWindow.location.hostname === 'www.iqiyi.com') {
  console.log(tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName)
  website = WEBSITE.iqiyi
  let videoID
  let title = tm_unsafeWindow.document.title

  const injectIqiyi = function () {
    console.log('inject iqiyi just for collecting animation data now')
    let bangumiName = $('#datainfo-navlist > a:nth-child(3)').html()

    $('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
      .prepend(bilibili_default.a)
    tm_addStyle(iqiyi_default.a)
    let info = $('.bgm_tv_tracker_info')
    $('.bgm_tv_tracker_btn.bgm_tv_tracker').click(() => {
      info.toggle('fast')
    }).hover(function () {
      $(this).css('color', '#5aa700')
    }, function () {
      $(this).css('color', '#959799')
    })
    console.log(bangumiName)
    title = tm_unsafeWindow.document.title

    requests.post(`${URLS.apiServerURL}/api/v0.1/parser/title`, {
      title: bangumiName,
      title_with_episode: title
    }).then(
      (response) => {
        $('#bgm_tv_tracker_title').html(bangumiName)
        $('#bgm_tv_tracker_episode').html(response.data.episode)
        $('#bgm_tv_tracker').data('id', response.data.bangumi_id)
        let subjectID = response.data.subject_id || response.data.bangumi_id
        bangumiData.subjectID = subjectID
        if (subjectID) {
          dealWithSubjectID(subjectID)
        } else {
          let notFound = $('.bgm_tv_tracker_info .not_found').html(bilibili_notfound_default.a)
          $('.bgm_tv_tracker_info .not_found button').click(
            () => {
              let subjectID = $('.bgm_tv_tracker_info .not_found input').val()
              if (subjectID) {
                notFound.hide()
                requests.get(`${URLS.apiServerURL}/api/v0.1/missingBilibili?bangumi_id=${encodeURI(tm_unsafeWindow.location.href)}&subject_id=${subjectID}`)
                dealWithSubjectID(subjectID)
              }
            })
        }
      },
      () => {
        notify('net work error')
      }
    )
  }

  // noinspection JSAnnotator
  const onHrefChange = function () {
    console.log('hash change')
    if (!(videoID !== tm_unsafeWindow._player._videoid && title !== tm_unsafeWindow.document.title)) {
      console.log('video not change')
      setTimeout(onHrefChange, 500)
    }
    videoID = tm_unsafeWindow._player._videoid
    title = tm_unsafeWindow.document.title

    requests.post(`${URLS.apiServerURL}/api/v0.1/parser/title`, {
      title: $('#datainfo-navlist > a:nth-child(3)').html(),
      title_with_episode: title
    }).then(
      (response) => {
        $('#bgm_tv_tracker_episode').html(response.data.episode)
        bangumiData.episode = response.data.episode
      },
      () => {
        notify('net work error')
      }
    )

  }

  if (tm_unsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    setTimeout(injectIqiyi, 1000)
    tm_unsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onHrefChange, 500)
    }, false)
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px;user-select:none}.bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef}.bgm_tv_tracker_btn.bgm_tv_tracker{color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:80px!important;transition:all .1s ease-in}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px}@media screen and (max-width:1400px){.arc-toolbar .block{padding:0 12px;margin-left:-12px}.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important}}#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}.bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;box-shadow:0 2px 4px rgba(0,0,0,.16);cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bgm_tv_tracker_info *{max-width:100%}#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff}.bgm_tv_tracker_info button:active{background:#fff}.bgm_tv_tracker_info button:hover{border:2px solid #99bdf7}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline;user-select:none}.bgm_tv_tracker_btn.bgm_tv_tracker{float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:80px!important;transition:all .1s ease-in}#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}.bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bgm_tv_tracker_info *{max-width:100%}#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}", ""]);

// exports


/***/ })
/******/ ]);