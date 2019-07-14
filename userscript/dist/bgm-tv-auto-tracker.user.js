// ==UserScript==
// @name        Bgm.tv auto tracker
// @namespace   https://trim21.me/
// @version     1.0.8
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @license     MIT
// @match       https://www.bilibili.com/bangumi/play/*
// @match       http*://www.iqiyi.com/*_*.html
// @match       https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback*
// @require     https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js
// @require     https://cdn.jsdelivr.net/npm/axios-userscript-adapter@0.0.3/dist/axiosGmxhrAdapter.min.js
// @require     https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     127.0.0.1
// @connect     api.bgm.tv
// @connect     bangumi-auto-tracker.trim21.cn
// @connect     www.trim21.cn
// @run-at      document-idle
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
/******/ 	return __webpack_require__(__webpack_require__.s = "e6Wu");
/******/ })
/************************************************************************/
/******/ ({

/***/ "4L2y":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("NJzz");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "6/sP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = __webpack_require__("J10y");
const vars_1 = __webpack_require__("HKzn");
const utils_1 = __webpack_require__("j7bY");
let collection = vars_1.gmGetValue('collection', false);
if (!collection) {
    collection = {};
}
else {
    collection = JSON.parse(collection);
}
exports.default = externals_1.Vue.extend({
    data() {
        let website = this.$website.name;
        let config = utils_1.getConfig();
        return {
            episodeNotMatch: false,
            tmpEpisodeID: null,
            tmpSubjectID: null,
            messages: [],
            bangumiID: null,
            bangumiName: null,
            // is episode starts with 1,
            // like https://www.bilibili.com/bangumi/play/ep200167
            episodeStartWith: null,
            // episode id in bgm.tv
            episodeID: null,
            episode: null,
            episodeSort: null,
            title: null,
            subjectID: null,
            score: '',
            config: {
                autoMarkWatched: config.autoMarkWatched,
                collectionSubjectWhenMarkStatus: config.collectionSubjectWhenMarkStatus,
            },
            watchPercent: 0,
            episodeMarked: false,
            website,
        };
    },
    computed: {
        reportUrl() {
            let baseURL = 'https://github.com/' +
                'Trim21/bgm-tv-auto-tracker/issues/new';
            let hrefWithoutHash = vars_1.gmUnsafeWindow.location.protocol + '//'
                + vars_1.gmUnsafeWindow.location.host + vars_1.gmUnsafeWindow.location.pathname;
            let body = `问题页面: [${this.bangumiName}](${hrefWithoutHash})` + '\n' +
                `Bangumi ID: ${this.bangumiID}` + '\n' +
                `episode: ${this.episode}` + '\n' +
                'bgm page: \n' +
                `Subject: https://bgm.tv/subject/${this.subjectID}` + '\n' +
                `episode: https://bgm.tv/ep/${this.episodeID}` + '\n' +
                '\n<!-- 描述你遇到的问题 -->\n';
            let params = {
                labels: 'bug',
                body
            };
            let query = externals_1.$.param(params);
            return baseURL + '?' + query;
        },
    },
    watch: {
        config: {
            handler(val) {
                // this.notify(JSON.stringify(val, null, 2))
                vars_1.gmSetValue('config', JSON.stringify(val));
            },
            deep: true
        },
        subjectID(val) {
            this.episodeMarked = false;
            let vm = this;
            if (val) {
                this.$bgmApi.getSubject(val).then((response) => {
                    vm.score = ' ' + response.data.rating.score;
                    vm.bangumiName = response.data.name_cn || response.data.name;
                });
            }
        },
        bangumiID() {
            this.episodeMarked = false;
        },
        episode: function () {
            this.episodeMarked = false;
            if (!this.subjectID)
                return;
            let vm = this;
            // serverApi.getBgmEpisodeID(this.$website).then(
            //   data => {
            //     this.episodeID = data.bgm_ep_id
            //     this.episodeNotMatch = false
            //
            //     vm.$bgmApi.getEps(this.subjectID).then(
            //       (data: any) => {
            //         let eps = data.eps.filter((val: { id: number }) => val.id === parseInt(vm.episodeID, 10))
            //         try {
            //           this.episodeSort = eps[0].sort
            //         } catch (e) {
            //           vm.notify('没找到这集...')
            //         }
            //       },
            //       (error: any) => {
            //         vm.notify('233')
            //         vm.notify(JSON.stringify(error))
            //       }
            //     )
            //
            //   },
            //   () => {
            this.episodeNotMatch = true;
            vm.$bgmApi.getEps(this.subjectID).then((data) => {
                let episode = vm.episode;
                let eps = data.eps.filter((val) => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0));
                eps = utils_1.sortEps(eps);
                try {
                    this.episodeID = eps[episode - 1].id;
                    if (this.episodeStartWith) {
                        this.episodeSort = this.episode + this.episodeStartWith - 1;
                    }
                    else {
                        this.episodeSort = this.episode;
                    }
                }
                catch (e) {
                    vm.notify('没找到这集...');
                }
            }, (error) => {
                vm.notify('233');
                vm.notify(JSON.stringify(error));
            });
            // }
            // )
        }
    },
    methods: {
        userSubmitSubjectID() {
            if (this.tmpSubjectID) {
                if (this.tmpSubjectID.startsWith('http')) {
                    const myURL = new URL(this.tmpSubjectID);
                    const p = myURL.pathname;
                    const pList = p.split('/');
                    this.tmpSubjectID = pList[pList.length - 1];
                }
                this.subjectID = this.tmpSubjectID;
                utils_1.serverApi.report_missing_bangumi(this.bangumiID, this.subjectID, this.title, this.website);
            }
        },
        // userSubmitEpisodeID () {
        //   if (this.tmpEpisodeID) {
        //     if (this.tmpEpisodeID.startsWith('http')) {
        //       const myURL = new URL(this.tmpEpisodeID)
        //       const p = myURL.pathname
        //       const pList = p.split('/')
        //       this.tmpEpisodeID = pList[pList.length - 1]
        //     }
        //     this.episodeID = this.tmpEpisodeID
        //     serverApi.report_missing_episode(
        //       this.bangumiID.toString(),
        //       this.$website.episodeID.toString(),
        //       this.episodeID,
        //       this.website
        //     )
        //   }
        // },
        notify(message) {
            let now = new Date();
            this.messages.unshift({
                time: now,
                text: message,
            });
            console.log(this.messages);
        },
        collectSubject(subjectID) {
            if (!this.config.collectionSubjectWhenMarkStatus)
                return;
            let vm = this;
            if (!collection[subjectID]) {
                this.$bgmApi.setSubjectCollectionStatus({
                    subjectID,
                    status: 'do'
                }).then((response) => {
                    if (response.data.code === 401) {
                        vm.notify(JSON.stringify(response));
                        vm.notify(response.data.error);
                    }
                    else {
                        vm.notify('add this bangumi to your collection');
                        collection[subjectID] = true;
                        vars_1.gmSetValue('collection', JSON.stringify(collection));
                    }
                }, (error) => vm.notify(error.response.data.detail));
            }
        },
        trigger() {
            externals_1.$('.bgm_tv_tracker_info').toggle('fast');
        },
        watchEps() {
            return __awaiter(this, void 0, void 0, function* () {
                this.collectSubject(this.subjectID);
                let vm = this;
                try {
                    let data = yield vm.$bgmApi.getEps(this.subjectID);
                    let episode = vm.episode;
                    let eps = utils_1.sortEps(data.eps.filter((val) => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0)));
                    let ep = eps[episode - 1].id;
                    yield vm.$bgmApi.setEpisodeWatched(ep);
                    this.episodeMarked = true;
                    vm.notify('mark your status successfully');
                }
                catch (error) {
                    if (error.response.status === 401) {
                        vm.notify('授权已过期 请重新授权');
                        vars_1.gmOpenInTab(vars_1.URLS.authURL, { active: true });
                    }
                    vm.notify(error.toString());
                    vm.notify(JSON.stringify(error));
                }
            });
        },
        setWatchProgress() {
            return __awaiter(this, void 0, void 0, function* () {
                let episode = this.episode;
                this.collectSubject(this.subjectID);
                try {
                    yield this.$bgmApi.setSubjectProgress(this.subjectID, episode);
                    this.notify('mark status successful');
                    this.episodeMarked = true;
                }
                catch (error) {
                    if (error.response.data.code === 400) {
                        this.notify('error: ' + error.response.data.error +
                            ',' + '应该是因为你在bgm上的状态已经是看到本集');
                    }
                    else {
                        this.notify('error: ' + JSON.stringify(error.response));
                    }
                }
            });
        }
    },
    created() {
        // serverApi.getBgmEpisodeID(this.$website).then(
        //   (res: any) => {},
        //   (err: any) => {
        //     this.notify('不能精确定位这是哪一集, 只能根据集数来猜了, 可能猜的不太对.')
        this.episodeNotMatch = true;
        // }
        // )
        // episode-item
        this.$website.init().then((data) => {
            let { episodeID, // todo
            episodeIndex, title, bangumiID, episodeStartWith } = data;
            utils_1.serverApi.getBgmSubjectID(this.$website).then(res => {
                this.subjectID = res.subject_id;
            }, err => {
                console.log(err);
            });
            this.episode = episodeIndex;
            this.episodeID = episodeID;
            this.title = title;
            this.bangumiID = bangumiID;
            this.episodeStartWith = episodeStartWith;
        }, (error) => {
            if (error.error.response.status === 404) {
                this.notify('番剧没找到 手动输入吧');
            }
            let { episode, title, bangumiID, episodeStartWith } = error;
            this.episodeStartWith = episodeStartWith;
            this.episode = episode;
            this.title = title;
            this.bangumiID = bangumiID;
        });
        let vm = this;
        this.$website.detectEpisodeChange((data) => {
            if (data.subjectID) {
                vm.subjectID = data.subjectID;
            }
            if (data.episode) {
                vm.episode = data.episode;
            }
            if (data.bangumiID) {
                vm.bangumiID = data.bangumiID;
            }
        }, (error) => {
            vm.episode = error.episode;
            if (error.bangumiID !== vm.bangumiID) {
                vm.subjectID = undefined;
                vm.bangumiID = error.bangumiID;
                vm.title = error.title;
                vm.episodeStartWith = error.episodeStartWith;
                vm.episode = error.episode;
            }
        });
        setInterval(() => {
            this.$website.getPlayerInfo().then((info) => {
                let { percent, duration } = info;
                console.debug('get player percent');
                this.watchPercent = percent;
                if (percent > 0.8 && (duration > 120)) {
                    if (this.config.autoMarkWatched && this.subjectID &&
                        !this.episodeMarked) {
                        this.episodeMarked = true;
                        this.watchEps();
                    }
                }
            }).catch((e) => {
                console.error('can\'t get play time');
            });
        }, 30 * 1000);
    }
});


/***/ }),

/***/ "9tPo":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "As2x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = __webpack_require__("J10y");
const vars_1 = __webpack_require__("HKzn");
const utils_1 = __webpack_require__("j7bY");
class Bilibili {
    constructor() {
        this.name = vars_1.WEBSITE.bilibili;
        this.window = vars_1.gmUnsafeWindow;
    }
    getTitle() {
        return this.window.__INITIAL_STATE__.mediaInfo.title;
    }
    getBangumiID() {
        return this.window.__INITIAL_STATE__.mediaInfo.season_id;
    }
    getEpisodeID() {
        return this.window.__INITIAL_STATE__.epInfo.ep_id;
    }
    init() {
        const status = this.window.__INITIAL_STATE__;
        const episode = this.window.__INITIAL_STATE__.epList.filter(val => !val.index.includes('.')).findIndex(val => {
            return val.index === this.window.__INITIAL_STATE__.epInfo.index;
        }) + 1;
        const bangumiID = this.getBangumiID();
        const title = this.getTitle();
        const episodeStartWith = parseInt(status.epList[0].index);
        // apiServer.post('/bgm-tv-auto-tracker/api.v1/collect_episode_info', {
        //   mediaInfo: this.window.__INITIAL_STATE__.mediaInfo,
        //   epInfo: this.window.__INITIAL_STATE__.epInfo,
        //   epList: this.window.__INITIAL_STATE__.epList,
        // })
        return new Promise((resolve) => {
            resolve({
                episodeID: this.window.__INITIAL_STATE__.epInfo.ep_id,
                episodeIndex: episode.toString(),
                title,
                episodeStartWith,
                bangumiID
            });
        });
        //
        // return new Promise((resolve, reject) => {
        //   apiServer.get('/api/v0.2/querySubjectID', {
        //     params: { bangumiID, website: 'Bilibili' }
        //   }).then((response: QuerySubjectIDResponse) => {
        //       resolve({
        //         subjectID: response.data.subject_id,
        //         episode: episode.toString(),
        //         title,
        //         episodeStartWith,
        //         bangumiID
        //       })
        //     },
        //     (error: AxiosError) => {
        //       // console.log(error)
        //       reject({
        //         episode: episode.toString(),
        //         title,
        //         episodeStartWith,
        //         bangumiID,
        //         error
        //       })
        //     }
        //   )
        // })
    }
    detectEpisodeChange(cb, notfound) {
        let cls = this;
        let bangumiID = this.getBangumiID();
        let INNER_EPISODE = this.window.__INITIAL_STATE__.epInfo.index;
        function onEpisodeChange({ season = false, episode = false }) {
            if (season) {
                cls.init().then(data => {
                    cb(data);
                    return data;
                }, notfound);
            }
            if (episode) {
                let ep = cls.window.__INITIAL_STATE__.epList
                    .filter(val => !val.index.includes('.'))
                    .findIndex(val => val.index === cls.window.__INITIAL_STATE__.epInfo.index) + 1;
                if (ep) {
                    cb({
                        episode: ep.toString()
                    });
                }
                else {
                    cb({
                        episode: cls.window.__INITIAL_STATE__.epInfo.index
                    });
                }
            }
        }
        const detectHrefChange = function () {
            console.debug('check href', bangumiID, INNER_EPISODE);
            if (bangumiID !== cls.window.__INITIAL_STATE__.mediaInfo.season_id) {
                onEpisodeChange({
                    season: true
                });
            }
            else if (INNER_EPISODE !== cls.window.__INITIAL_STATE__.epInfo.index) {
                onEpisodeChange({
                    episode: true
                });
            }
            INNER_EPISODE = cls.window.__INITIAL_STATE__.epInfo.index;
            bangumiID = cls.window.__INITIAL_STATE__.mediaInfo.season_id;
        };
        setInterval(detectHrefChange, 10 * 1000);
        setTimeout(detectHrefChange, 5000);
    }
    getPlayerInfo() {
        return Promise.resolve({
            current: this.window.player.getCurrentTime(),
            duration: this.window.player.getDuration(),
            percent: this.window.player.getCurrentTime() / this.window.player.getDuration(),
        });
    }
}
exports.Bilibili = Bilibili;
class Iqiyi {
    constructor() {
        this.name = vars_1.WEBSITE.iqiyi;
        this.window = vars_1.gmUnsafeWindow;
    }
    getBangumiID() {
        let collectionLinkEl = externals_1.$('#block-C > div.qy-player-detail > div > div > div > div > div.qy-player-title > h1 > a');
        let collectionLink = collectionLinkEl.attr('href');
        let filename = collectionLink.split('/');
        return filename[filename.length - 1].split('.').slice(0, -1).join('.');
    }
    getEpisodeID() {
        return vars_1.gmUnsafeWindow.location.pathname.split('_')[1].split('.')[0];
    }
    getTitle() {
        return vars_1.gmUnsafeWindow.document.title;
    }
    init() {
        let title = this.getTitle();
        let bangumiID = this.getBangumiID();
        let episode = utils_1.parseEpisode(title);
        return new Promise(resolve => {
            resolve({
                title,
                bangumiID,
                episodeID: this.getEpisodeID(),
                episodeIndex: episode.toString(),
                episodeStartWith: 1
            });
        });
    }
    detectEpisodeChange(cb, notfound) {
        function onEpisodeChange() {
            console.log('href change');
            let title = vars_1.gmUnsafeWindow.document.title;
            let episode = utils_1.parseEpisode(title);
            if (episode) {
                cb({
                    episode: episode.toString()
                });
            }
            else {
                notfound({
                    episode: episode.toString()
                });
            }
        }
        let href = vars_1.gmUnsafeWindow.location.href;
        const detectHrefChange = function () {
            if (href !== vars_1.gmUnsafeWindow.location.href) {
                onEpisodeChange();
            }
            href = vars_1.gmUnsafeWindow.location.href;
        };
        setInterval(detectHrefChange, 10 * 1000);
        setTimeout(detectHrefChange, 5000);
    }
    getPlayerInfo() {
        return new Promise((resolve) => {
            this.window.player.getPlayInfo(resolve);
        }).then(function (info) {
            return {
                current: info.currentTime,
                duration: info.totalDuration / 1000,
                percent: info.currentTime / info.totalDuration * 1000,
            };
        });
    }
}
exports.Iqiyi = Iqiyi;


/***/ }),

/***/ "CFBl":
/***/ (function(module, exports) {

module.exports = axiosGmxhrAdapter;

/***/ }),

/***/ "HKzn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef, camelcase */
let gmUnsafeWindow = unsafeWindow;
exports.gmUnsafeWindow = gmUnsafeWindow;
let gmSetValue = GM_setValue;
exports.gmSetValue = gmSetValue;
let gmGetValue = GM_getValue;
exports.gmGetValue = gmGetValue;
let gmOpenInTab = GM_openInTab;
exports.gmOpenInTab = gmOpenInTab;
let gmInfo = GM_info;
exports.gmInfo = gmInfo;
/* eslint-enable no-undef, camelcase */
const URLS = {
    apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
    apiBgmUrl: 'https://api.bgm.tv',
    refreshTokenPath: '/bgm-tv-auto-tracker/api.v1/refresh',
    newApiServer: 'https://www.trim21.cn',
    authURL: 'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/auth',
    callBackUrl: 'https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback',
};
exports.URLS = URLS;
if (window.TM_ENV === 'dev') {
    URLS.newApiServer = 'http://127.0.0.1:8000/';
    URLS.authURL = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/auth';
    URLS.callBackUrl = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/oauth_callback';
}
const WEBSITE = {
    bilibili: 'bilibili',
    iqiyi: 'iqiyi',
};
exports.WEBSITE = WEBSITE;


/***/ }),

/***/ "Ij0+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=template&id=65592b54&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"disable",class:{
        iqiyi: this.website === 'iqiyi',
        bilibili: this.website === 'bilibili',
     },attrs:{"id":"bgm_tv_tracker"}},[_c('div',{staticClass:"bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius",class:{},attrs:{"id":"bgm_tv_tracker_btn_on_page"},on:{"click":_vm.trigger}},[_vm._v("\n    bgm.tv"+_vm._s(_vm.score)+" "+_vm._s(_vm.episodeMarked?'✓':'')+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"bgm_tv_tracker_info"},[(!_vm.subjectID)?_c('div',{staticClass:"not_found"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tmpSubjectID),expression:"tmpSubjectID"}],staticClass:"subject",attrs:{"placeholder":"条目ID或者对应条目链接","type":"text"},domProps:{"value":(_vm.tmpSubjectID)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tmpSubjectID=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"notfound",on:{"click":_vm.userSubmitSubjectID}},[_vm._v("submit subject\n          id\n        ")])])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('p',[_vm._v("你正在看:\n        "),_c('span',{attrs:{"id":"bgm_tv_tracker_title"}},[_vm._v(_vm._s(_vm.bangumiName))])]),_vm._v(" "),_c('p',[_vm._v("第 "),_c('span',{attrs:{"id":"bgm_tv_tracker_episode"}},[_vm._v("\n        "+_vm._s(_vm.episodeSort)+"\n      ")]),_vm._v("\n        集")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_link"}},[(_vm.episodeID)?_c('a',{attrs:{"href":("https://bgm.tv/ep/" + _vm.episodeID),"rel":"noopener noreferrer","target":"_blank"}},[_vm._v("吐槽本集")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.subjectID)?_c('a',{attrs:{"href":("https://bgm.tv/subject/" + _vm.subjectID),"rel":"noopener noreferrer","target":"_blank"}},[_vm._v("subject/"+_vm._s(_vm.subjectID))]):_c('a',{attrs:{"href":("https://bgm.tv/subject_search/" + _vm.title + "?cat=2"),"rel":"noopener noreferrer","target":"_blank"}},[_vm._v("search in bgm.tv")])]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.subjectID)?_c('div',[_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watch"},on:{"click":_vm.watchEps}},[_vm._v("标记本集为看过\n      ")]),_vm._v(" "),_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watched"},on:{"click":_vm.setWatchProgress}},[_vm._v("看到本集\n      ")])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticStyle:{"color":"red"},attrs:{"href":_vm.reportUrl,"rel":"noopener noreferrer","target":"_blank"}},[_c('p',[_vm._v("报告问题")])]),_vm._v(" "),_vm._m(0),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"bangumi_id\" : \""+_vm._s(_vm.bangumiID)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"title\" : \""+_vm._s(_vm.title)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"website\" : \""+_vm._s(_vm.website)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"subject\" : \"\",")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.config.autoMarkWatched),expression:"config.autoMarkWatched"}],attrs:{"id":"bgm_tv_tracker_auto_mark_watched","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.config.autoMarkWatched)?_vm._i(_vm.config.autoMarkWatched,null)>-1:(_vm.config.autoMarkWatched)},on:{"change":function($event){var $$a=_vm.config.autoMarkWatched,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.config, "autoMarkWatched", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.config, "autoMarkWatched", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.config, "autoMarkWatched", $$c)}}}}),_vm._v(" "),_c('label',{attrs:{"for":"bgm_tv_tracker_auto_mark_watched"}},[_vm._v("\n      播放进度大于80%时自动标记为看过\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.config.collectionSubjectWhenMarkStatus),expression:"config.collectionSubjectWhenMarkStatus"}],attrs:{"id":"bgm_tv_tracker_collection_status_when_watch_status","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.config.collectionSubjectWhenMarkStatus)?_vm._i(_vm.config.collectionSubjectWhenMarkStatus,null)>-1:(_vm.config.collectionSubjectWhenMarkStatus)},on:{"change":function($event){var $$a=_vm.config.collectionSubjectWhenMarkStatus,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$c)}}}}),_vm._v(" "),_c('label',{attrs:{"for":"bgm_tv_tracker_collection_status_when_watch_status"}},[_vm._v("\n      标记播放进度时把条目标记为在看\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_notification"}},_vm._l((_vm.messages),function(message,index){return _c('div',{key:index},[_c('hr'),_vm._v(" "),_c('div',[_c('p',[_vm._v("\n          "+_vm._s(message.time.getHours())+":"+_vm._s(message.time.getMinutes())+":\n          "+_vm._s(message.time.getSeconds())+"\n        ")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(message.text))])])])}),0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticStyle:{"color":"red"},attrs:{"href":"https://github.com/Trim21/\n      bgm-tv-auto-tracker/blob/master/docs/user_info_collection.md","rel":"noopener noreferrer","target":"_blank"}},[_c('p',[_vm._v("\n      关于信息收集")])])}]


// CONCATENATED MODULE: ./src/js/App.vue?vue&type=template&id=65592b54&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ "IrU1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6/sP");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "J10y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i7/w");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "$", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CFBl");
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default.a; });
/*
* this js module is a wrapper that don't let ts-loader
* call `module.var` with `module.default.var` in compiled file
* But `axios.default` is `axios` itself, so no need to wrap axios.
* */







/***/ }),

/***/ "JPst":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "KHd+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "NJzz":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("JPst")(false);
// Module
exports.push([module.i, "#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}input[type=checkbox]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.iqiyi #bgm_tv_tracker_btn_on_page{color:#797979;border-top-left-radius:5px;border-top-right-radius:5px;cursor:pointer;display:block;font-weight:700;font-family:PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;font-size:16px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;-webkit-font-variant-ligatures:normal;font-variant-ligatures:normal;font-variant-numeric:normal;height:38px;line-height:38px;margin:0;white-space:nowrap;overflow-x:hidden;overflow-y:hidden;padding:0 10px}.iqiyi#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline}.iqiyi #bgm_tv_tracker_link a{color:#000}.iqiyi#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.iqiyi .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.iqiyi .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:250px;z-index:1000}.iqiyi .bgm_tv_tracker_info *{max-width:100%}.iqiyi .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px}@media screen and (max-width:1400px){.arc-toolbar .block{padding:0 12px;margin-left:-12px}.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important}}.bilibili#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px}.bilibili .bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker:hover{color:#00a1d6;border:1px solid #00a1d6}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.bilibili .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.16);box-shadow:0 2px 4px rgba(0,0,0,.16);cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bilibili .bgm_tv_tracker_info *{max-width:100%}.bilibili .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bilibili .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff}.bilibili .bgm_tv_tracker_info button:active{background:#fff}.bilibili .bgm_tv_tracker_info button:hover{border:2px solid #99bdf7}", ""]);



/***/ }),

/***/ "SwRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4L2y");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "aET+":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("9tPo");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "e6Wu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i7/w");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HKzn");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j7bY");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("As2x");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_website__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("m624");








if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].location.href.startsWith(_vars__WEBPACK_IMPORTED_MODULE_2__["URLS"].callBackUrl)) {
  if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].data) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["saveAuth"])(_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].data)
    let child = _vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    _vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].document.body.appendChild(child)
  }
}
let website

// inject Bilibili

/**
 *
 * @param {string} websiteName
 * @returns {AbstractWebsite}
 */
function getWebsiteClass (websiteName) {
  if (websiteName === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].iqiyi) return new _website__WEBPACK_IMPORTED_MODULE_4__["Iqiyi"]()
  if (websiteName === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].bilibili) return new _website__WEBPACK_IMPORTED_MODULE_4__["Bilibili"]()
}

if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  website = _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].bilibili
}

// inject iqiyi
if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].location.hostname === 'www.iqiyi.com') {
  website = _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].iqiyi
}

function init () {
  if (website === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].bilibili) {
    if ([
      1, // 动漫
      2, // 电影
      4, // 国创
      5, // 电视剧
    ].includes(_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].__INITIAL_STATE__.mediaInfo.season_type)) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bangumi_detail div.func-module.clearfix').prepend(`<div id='bgm_tv_tracker'></div>`)
    }
  }

  // inject iqiyi
  if (website === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].iqiyi) {
    if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].Q.PageInfo.playPageInfo.categoryName === '动漫') {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('div.qy-player-title ').append(`<div id='bgm_tv_tracker'></div>`)
    }
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bgm_tv_tracker').length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAuth"])().then(
      auth => {
        if (auth && auth.hasOwnProperty('access_token')) {
          vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$bgmApi = new _utils__WEBPACK_IMPORTED_MODULE_3__["BgmApi"]({ accessToken: auth.access_token })
          if (website) {
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$website = getWebsiteClass(website)
            _vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].bgm_tv_tracker = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
              el: '#bgm_tv_tracker',
              render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]),
            })
          }
        } else {
          Object(_vars__WEBPACK_IMPORTED_MODULE_2__["gmOpenInTab"])(_vars__WEBPACK_IMPORTED_MODULE_2__["URLS"].authURL, { active: true })
        }
      })
  }
}

function initWrapper () {
  if (website === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].bilibili) {
    init()
  } else if (website === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].iqiyi) {
    setTimeout(init, 1000 * 10)
  }
}

jquery__WEBPACK_IMPORTED_MODULE_1___default()(_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"]).ready(function () {
  initWrapper()
})


/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "j7bY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = __webpack_require__("HKzn");
const axios_1 = __webpack_require__("zr5I");
exports.axios = axios_1.default;
const externals_1 = __webpack_require__("J10y");
axios_1.default.defaults.adapter = externals_1.adapter;
function openAuthPage() {
    vars_1.gmOpenInTab(vars_1.URLS.authURL, { active: true });
}
function getScriptUserAgent() {
    return vars_1.gmUnsafeWindow.navigator.userAgent +
        ` Extension/${vars_1.gmInfo.version} ` +
        `Bgm-tv-auto-tracker/${vars_1.gmInfo.script.version}`;
}
function sortEps(eps) {
    eps = JSON.parse(JSON.stringify(eps));
    return eps.sort(function (a, b) {
        const x = a.sort;
        const y = b.sort;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
exports.sortEps = sortEps;
class BgmApi {
    constructor({ accessToken, serverRoot = 'https://api.bgm.tv' }) {
        this.access_token = accessToken;
        this.http = axios_1.default.create({
            baseURL: serverRoot,
            adapter: externals_1.adapter,
            headers: {
                Authorization: 'Bearer ' + this.access_token,
                'User-Agent': getScriptUserAgent(),
            },
        });
    }
    setSubjectProgress(subjectID, ep) {
        return new Promise((resolve, reject) => {
            this.http.post(`/subject/${subjectID}/update/watched_eps`, `watched_eps=${ep}`, { headers: { 'content-type': 'application/x-www-form-urlencoded', } })
                .then(response => {
                if (response.data.code >= 300) {
                    reject({ status: response.data.code, response });
                }
                else {
                    resolve(response);
                }
            }, error => reject(error));
        });
    }
    setEpisodeWatched(ep) {
        return this.http.post(`/ep/${ep}/status/watched`);
    }
    getEps(subjectID) {
        let ins = this;
        return new Promise((resolve, reject) => {
            let noData = false;
            let eps = vars_1.gmGetValue(`eps_${subjectID}`, false);
            // no data
            if (!eps)
                noData = true;
            if (eps) {
                eps = JSON.parse(eps);
                // out of time
                if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
                    noData = true;
                }
                else {
                    eps.eps = sortEps(eps.eps);
                }
            }
            if (!noData) {
                resolve(eps);
            }
            else {
                ins.getSubjectEps(subjectID).then((response) => {
                    let eps = sortEps(response.data.eps);
                    vars_1.gmSetValue(`eps_${subjectID}`, JSON.stringify({
                        eps,
                        time: Number(new Date().getTime() / 1000)
                    }));
                    resolve({ eps });
                }, (error) => {
                    reject(error);
                });
            }
        });
    }
    getSubjectEps(subjectID) {
        let ins = this;
        console.log('fetch api result');
        return new Promise((resolve, reject) => {
            ins.http.get(`/subject/${subjectID}/ep`).then(response => {
                console.log(response);
                if (response.data.code >= 300) {
                    reject({ status: response.data.code, response });
                }
                else {
                    resolve(response);
                }
            }, error => {
                console.log(error);
                reject(error);
            });
        });
    }
    getSubject(subjectID) {
        return new Promise((resolve, reject) => {
            this.http.get(`/subject/${subjectID}`).then(response => {
                if (response.data.code >= 300) {
                    reject({ status: response.data.code, response });
                }
                else {
                    resolve(response);
                }
            }, error => reject(error));
        });
    }
    setSubjectCollectionStatus({ subjectID, status }) {
        return new Promise((resolve, reject) => {
            this.http.post(`/collection/${subjectID}/update`, `status=${status}`, {
                headers: { 'content-type': 'application/x-www-form-urlencoded' }
            }).then(response => {
                if (response.data.code >= 300) {
                    reject({ response });
                }
                else {
                    resolve(response);
                }
            }, error => reject(error));
        });
    }
}
exports.BgmApi = BgmApi;
let apiServer = axios_1.default.create({
    baseURL: vars_1.URLS.apiServerURL,
    adapter: externals_1.adapter,
    headers: {
        'User-Agent': getScriptUserAgent()
    }
});
exports.apiServer = apiServer;
const newApiServer = axios_1.default.create({
    baseURL: vars_1.URLS.newApiServer,
    adapter: externals_1.adapter,
    headers: {
        'User-Agent': getScriptUserAgent()
    }
});
newApiServer.interceptors.response.use((res) => {
    return res;
}, (err) => {
    if (err.response.status == 403) {
        openAuthPage();
    }
    return Promise.reject(err);
});
//
// apiServer.interceptors.request.use(
//   config => {
//     console.log(config)
//     return config
//   }
// )
function parseEpisode(title) {
    let re = /第(\d+)集/g;
    let result = re.exec(title);
    console.log('parse episode result', result);
    if (result.length) {
        return parseInt(result[1], 10);
    }
    else {
        return 0;
    }
}
exports.parseEpisode = parseEpisode;
class Auth {
}
function saveAuth(auth) {
    vars_1.gmSetValue('auth', JSON.stringify(auth));
}
exports.saveAuth = saveAuth;
function ifAuthExpires(auth) {
    /* auth_time 2d  expires in 9d */
    /*            2d + 7d - 1d < 6d => false */
    /*            2d + 7d - 1d < 8d => true */
    return (parseInt(auth.auth_time, 10) + auth.expires_in - 2 * 24 * 60 * 60) < Math.round(new Date().getTime() / 1000);
}
function getAuth() {
    let auth = vars_1.gmGetValue('auth', false);
    if (auth) {
        auth = JSON.parse(auth);
        if (ifAuthExpires(auth)) {
            console.debug('refresh token');
            return serverApi.refreshToken();
        }
    }
    return Promise.resolve(auth);
}
exports.getAuth = getAuth;
class Config {
}
function getConfig() {
    let rawConfig = vars_1.gmGetValue('config', false);
    if (rawConfig) {
        try {
            rawConfig = JSON.parse(rawConfig);
        }
        catch (e) {
            vars_1.gmSetValue('config', '{}');
            rawConfig = {};
        }
    }
    return rawConfig;
}
exports.getConfig = getConfig;
class ServerApi {
    constructor() {
        this.http = apiServer;
        this.newHttpServer = newApiServer;
    }
    refreshToken() {
        return new Promise((resolve, reject) => {
            this.newHttpServer.post(vars_1.URLS.refreshTokenPath)
                .then((response) => {
                if (response.data.hasOwnProperty('error')) {
                    console.error(response.data);
                    reject(false);
                }
                saveAuth(response.data);
                resolve(response.data);
            }, () => {
                openAuthPage();
                reject(false);
            });
        });
    }
    report_missing_episode(bangumiID, episodeID, bgmEpisodeID, website) {
        this.http.post('/api/v0.1/report_missing_episode', {
            bangumiID,
            episodeID,
            bgmEpisodeID,
            website
        });
    }
    report_missing_bangumi(bangumiID, subjectID, title, website) {
        return this.newHttpServer.post('/bgm-tv-auto-tracker/api.v1/submit/subject_id', {
            bangumi_id: bangumiID,
            subject_id: subjectID,
            title,
            href: vars_1.gmUnsafeWindow.location.href,
            source: website,
        });
    }
    getBgmSubjectID(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.newHttpServer.get('/bgm-tv-auto-tracker/api.v1/subject_id', {
                params: {
                    source: instance.name,
                    bangumi_id: instance.getBangumiID()
                },
                withCredentials: true,
            });
            return {
                bangumi_id: response.data.bangumi_id,
                subject_id: response.data.subject_id,
            };
        });
    }
    getBgmEpisodeID(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield this.newHttpServer.get(`/ep_id/${instance.name}/${instance.getEpisodeID()}`);
            return { bgm_ep_id: res.data.bgm_ep_id };
        });
    }
}
const serverApi = new ServerApi();
exports.serverApi = serverApi;


/***/ }),

/***/ "m624":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _App_vue_vue_type_template_id_65592b54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ij0+");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IrU1");
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("SwRH");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_65592b54___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _App_vue_vue_type_template_id_65592b54___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = axios;

/***/ })

/******/ });