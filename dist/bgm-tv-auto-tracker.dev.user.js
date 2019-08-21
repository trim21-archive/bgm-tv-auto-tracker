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
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "NJzz");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "6/sP":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
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
const externals_1 = __webpack_require__(/*! ./externals */ "J10y");
const vars_1 = __webpack_require__(/*! ./vars */ "HKzn");
const utils_1 = __webpack_require__(/*! ./utils */ "j7bY");
let collection = vars_1.gmGetValue("collection", false);
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
            score: "",
            config: {
                autoMarkWatched: config.autoMarkWatched,
                collectionSubjectWhenMarkStatus: config.collectionSubjectWhenMarkStatus
            },
            watchPercent: 0,
            episodeMarked: false,
            website
            // $website: null,
        };
    },
    computed: {
        reportUrl() {
            let baseURL = "https://github.com/" + "Trim21/bgm-tv-auto-tracker/issues/new";
            let hrefWithoutHash = vars_1.gmUnsafeWindow.location.protocol +
                "//" +
                vars_1.gmUnsafeWindow.location.host +
                vars_1.gmUnsafeWindow.location.pathname;
            let body = `问题页面: [${this.bangumiName}](${hrefWithoutHash})` +
                "\n" +
                `Bangumi ID: ${this.bangumiID}` +
                "\n" +
                `episode: ${this.episode}` +
                "\n" +
                "bgm page: \n" +
                `Subject: https://bgm.tv/subject/${this.subjectID}` +
                "\n" +
                `episode: https://bgm.tv/ep/${this.episodeID}` +
                "\n" +
                "\n<!-- 描述你遇到的问题 -->\n";
            let params = {
                labels: "bug",
                body
            };
            let query = externals_1.$.param(params);
            return baseURL + "?" + query;
        }
    },
    watch: {
        config: {
            handler(val) {
                // this.notify(JSON.stringify(val, null, 2))
                vars_1.gmSetValue("config", JSON.stringify(val));
            },
            deep: true
        },
        subjectID(val) {
            this.episodeMarked = false;
            let vm = this;
            if (val) {
                this.$bgmApi.getSubject(val).then((response) => {
                    vm.score = " " + response.data.rating.score;
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
            this.updateEpisode();
            // }
            // )
        }
    },
    methods: {
        updateEpisode() {
            let vm = this;
            this.$bgmApi.getEps(this.subjectID).then((data) => {
                let episode = vm.episode;
                let eps = data.eps.filter((val) => Number.isInteger(Number(val.sort)) && parseInt(val.type, 10) === 0);
                eps = utils_1.sortEps(eps);
                try {
                    this.episodeID = eps[episode - 1].id;
                    if (this.episodeStartWith) {
                        this.episodeSort =
                            parseInt(this.episode) + parseInt(this.episodeStartWith) - 1;
                    }
                    else {
                        this.episodeSort = this.episode;
                    }
                }
                catch (e) {
                    vm.notify("没找到这集...");
                }
            }, (error) => {
                vm.notify("233");
                vm.notify(JSON.stringify(error));
            });
        },
        userSubmitSubjectID() {
            if (this.tmpSubjectID) {
                if (this.tmpSubjectID.startsWith("http")) {
                    const myURL = new URL(this.tmpSubjectID);
                    const p = myURL.pathname;
                    const pList = p.split("/");
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
                text: message
            });
            console.log(this.messages);
        },
        collectSubject(subjectID) {
            if (!this.config.collectionSubjectWhenMarkStatus)
                return;
            let vm = this;
            if (!collection[subjectID]) {
                this.$bgmApi
                    .setSubjectCollectionStatus({
                    subjectID,
                    status: "do"
                })
                    .then((response) => {
                    if (response.data.code === 401) {
                        vm.notify(JSON.stringify(response));
                        vm.notify(response.data.error);
                    }
                    else {
                        vm.notify("add this bangumi to your collection");
                        collection[subjectID] = true;
                        vars_1.gmSetValue("collection", JSON.stringify(collection));
                    }
                }, (error) => vm.notify(error.response.data.detail));
            }
        },
        trigger() {
            externals_1.$(".bgm_tv_tracker_info").toggle("fast");
        },
        watchEps() {
            return __awaiter(this, void 0, void 0, function* () {
                this.collectSubject(this.subjectID);
                let vm = this;
                try {
                    let data = yield vm.$bgmApi.getEps(this.subjectID);
                    let episode = vm.episode;
                    let eps = utils_1.sortEps(data.eps.filter((val) => Number.isInteger(Number(val.sort)) && parseInt(val.type, 10) === 0));
                    let ep = eps[episode - 1].id;
                    yield vm.$bgmApi.setEpisodeWatched(ep);
                    this.episodeMarked = true;
                    vm.notify("mark your status successfully");
                }
                catch (error) {
                    if (error.response.status === 401) {
                        vm.notify("授权已过期 请重新授权");
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
                    this.notify("mark status successful");
                    this.episodeMarked = true;
                }
                catch (error) {
                    if (error.response.data.code === 400) {
                        this.notify("error: " +
                            error.response.data.error +
                            "," +
                            "应该是因为你在bgm上的状态已经是看到本集");
                    }
                    else {
                        this.notify("error: " + JSON.stringify(error.response));
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
            this.episode = episodeIndex;
            this.episodeID = episodeID;
            this.title = title;
            this.bangumiID = bangumiID;
            this.episodeStartWith = episodeStartWith;
            utils_1.serverApi.getBgmSubjectID(this.$website).then(res => {
                this.subjectID = res.subject_id;
                this.updateEpisode();
            }, err => {
                console.log(err);
            });
        }, (error) => {
            if (error.error.response.status === 404) {
                this.notify("番剧没找到 手动输入吧");
            }
            let { episode, title, bangumiID, episodeStartWith } = error;
            this.episodeStartWith = episodeStartWith;
            this.episode = parseInt(episode, 10);
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
            this.$website
                .getPlayerInfo()
                .then((info) => {
                let { percent, duration } = info;
                console.debug("get player percent");
                this.watchPercent = percent;
                if (percent > 0.8 && duration > 120) {
                    if (this.config.autoMarkWatched &&
                        this.subjectID &&
                        !this.episodeMarked) {
                        this.episodeMarked = true;
                        this.watchEps();
                    }
                }
            })
                .catch((e) => {
                console.error("can't get play time");
            });
        }, 30 * 1000);
    }
});


/***/ }),

/***/ "9tPo":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
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
/*!***************************!*\
  !*** ./src/js/website.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = __webpack_require__(/*! ./externals */ "J10y");
const vars_1 = __webpack_require__(/*! ./vars */ "HKzn");
const utils_1 = __webpack_require__(/*! ./utils */ "j7bY");
class Bilibili {
    constructor() {
        this.name = vars_1.WEBSITE.bilibili;
        this.window = vars_1.gmUnsafeWindow;
    }
    getTitle() {
        return this.window.__INITIAL_STATE__.mediaInfo.title;
    }
    getBangumiID() {
        return this.window.__INITIAL_STATE__.mediaInfo.media_id;
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
                        episode: ep
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
/*!************************************!*\
  !*** external "axiosGmxhrAdapter" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axiosGmxhrAdapter;

/***/ }),

/***/ "HKzn":
/*!************************!*\
  !*** ./src/js/vars.ts ***!
  \************************/
/*! no static exports found */
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
    // URLS.newApiServer = 'http://127.0.0.1:8000/'
    // URLS.authURL = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/auth'
    // URLS.callBackUrl = 'http://127.0.0.1:8000/bgm-tv-auto-tracker/api.v1/oauth_callback'
}
const WEBSITE = {
    bilibili: 'bilibili',
    iqiyi: 'iqiyi',
};
exports.WEBSITE = WEBSITE;


/***/ }),

/***/ "IrU1":
/*!*************************************************!*\
  !*** ./src/js/App.vue?vue&type=script&lang=ts& ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "6/sP");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "J10y":
/*!*****************************!*\
  !*** ./src/js/externals.js ***!
  \*****************************/
/*! exports provided: Vue, $, adapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "i7/w");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "$", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-userscript-adapter */ "CFBl");
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default.a; });
/*
* this js module is a wrapper that don't let ts-loader
* call `module.var` with `module.default.var` in compiled file
* But `axios.default` is `axios` itself, so no need to wrap axios.
* */







/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}input[type=checkbox]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.iqiyi #bgm_tv_tracker_btn_on_page{color:#797979;border-top-left-radius:5px;border-top-right-radius:5px;cursor:pointer;display:block;font-weight:700;font-family:PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;font-size:16px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;-webkit-font-variant-ligatures:normal;font-variant-ligatures:normal;font-variant-numeric:normal;height:38px;line-height:38px;margin:0;white-space:nowrap;overflow-x:hidden;overflow-y:hidden;padding:0 10px}.iqiyi#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline}.iqiyi #bgm_tv_tracker_link a{color:#000}.iqiyi#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.iqiyi .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.iqiyi .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:250px;z-index:1000}.iqiyi .bgm_tv_tracker_info *{max-width:100%}.iqiyi .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px}@media screen and (max-width:1400px){.arc-toolbar .block{padding:0 12px;margin-left:-12px}.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important}}.bilibili#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px}.bilibili .bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker:hover{color:#00a1d6;border:1px solid #00a1d6}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.bilibili .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.16);box-shadow:0 2px 4px rgba(0,0,0,.16);cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bilibili .bgm_tv_tracker_info *{max-width:100%}.bilibili .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bilibili .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff}.bilibili .bgm_tv_tracker_info button:active{background:#fff}.bilibili .bgm_tv_tracker_info button:hover{border:2px solid #99bdf7}", ""]);



/***/ }),

/***/ "SwRH":
/*!**********************************************************!*\
  !*** ./src/js/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss& */ "4L2y");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "W5Si":
/*!*******************************************************!*\
  !*** ./src/js/App.vue?vue&type=template&id=3ea74058& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3ea74058& */ "ww4Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "aET+":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var	fixUrls = __webpack_require__(/*! ./urls */ "9tPo");

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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "i7/w");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars */ "HKzn");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "j7bY");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website */ "As2x");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_website__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "m624");








if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].location.href.startsWith(_vars__WEBPACK_IMPORTED_MODULE_2__["URLS"].callBackUrl)) {
  if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].data) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["saveAuth"])(_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].data)
    const child = _vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].document.createElement('h1')
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
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bangumi_detail div.func-module.clearfix').prepend('<div id=\'bgm_tv_tracker\'></div>')
    }
  }

  // inject iqiyi
  if (website === _vars__WEBPACK_IMPORTED_MODULE_2__["WEBSITE"].iqiyi) {
    if (_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].Q.PageInfo.playPageInfo.categoryName === '动漫') {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('div.qy-player-title ').append('<div id=\'bgm_tv_tracker\'></div>')
    }
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()('#bgm_tv_tracker').length) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getAuth"])().then(
      auth => {
        if (auth && Object.prototype.hasOwnProperty.call(auth, 'access_token')) {
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
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "j7bY":
/*!*************************!*\
  !*** ./src/js/utils.ts ***!
  \*************************/
/*! no static exports found */
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
const vars_1 = __webpack_require__(/*! ./vars */ "HKzn");
const axios_1 = __webpack_require__(/*! axios */ "zr5I");
exports.axios = axios_1.default;
const externals_1 = __webpack_require__(/*! ./externals */ "J10y");
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
/*!************************!*\
  !*** ./src/js/App.vue ***!
  \************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3ea74058& */ "W5Si");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "IrU1");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ "SwRH");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "KHd+");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ww4Z":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=template&id=3ea74058& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "disable",
      class: {
        iqiyi: this.website === "iqiyi",
        bilibili: this.website === "bilibili"
      },
      attrs: { id: "bgm_tv_tracker" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius",
          class: {},
          attrs: { id: "bgm_tv_tracker_btn_on_page" },
          on: { click: _vm.trigger }
        },
        [
          _vm._v(
            "bgm.tv" +
              _vm._s(_vm.score) +
              " " +
              _vm._s(_vm.episodeMarked ? "✓" : "")
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bgm_tv_tracker_info" }, [
        !_vm.subjectID
          ? _c("div", { staticClass: "not_found" }, [
              _c("label", [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tmpSubjectID,
                      expression: "tmpSubjectID"
                    }
                  ],
                  staticClass: "subject",
                  attrs: {
                    placeholder: "条目ID或者对应条目链接",
                    type: "text"
                  },
                  domProps: { value: _vm.tmpSubjectID },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.tmpSubjectID = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "notfound",
                    on: { click: _vm.userSubmitSubjectID }
                  },
                  [_vm._v("\n          submit subject\n          id\n        ")]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", [
          _c("p", [
            _vm._v("\n        你正在看:\n        "),
            _c("span", { attrs: { id: "bgm_tv_tracker_title" } }, [
              _vm._v(_vm._s(_vm.bangumiName))
            ])
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n        第\n        "),
            _c("span", { attrs: { id: "bgm_tv_tracker_episode" } }, [
              _vm._v(_vm._s(_vm.episodeSort))
            ]),
            _vm._v("\n        集\n      ")
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", { attrs: { id: "bgm_tv_tracker_link" } }, [
          _vm.episodeID
            ? _c(
                "a",
                {
                  attrs: {
                    href: "https://bgm.tv/ep/" + _vm.episodeID,
                    rel: "noopener noreferrer",
                    target: "_blank"
                  }
                },
                [_vm._v("吐槽本集")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.subjectID
            ? _c(
                "a",
                {
                  attrs: {
                    href: "https://bgm.tv/subject/" + _vm.subjectID,
                    rel: "noopener noreferrer",
                    target: "_blank"
                  }
                },
                [_vm._v("subject/" + _vm._s(_vm.subjectID))]
              )
            : _c(
                "a",
                {
                  attrs: {
                    href:
                      "https://bgm.tv/subject_search/" + _vm.title + "?cat=2",
                    rel: "noopener noreferrer",
                    target: "_blank"
                  }
                },
                [_vm._v("search in bgm.tv")]
              )
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm.subjectID
          ? _c("div", [
              _c(
                "button",
                {
                  staticClass: "bgm_tv_tracker_radius",
                  attrs: { id: "bgm_tv_tracker_mark_watch" },
                  on: { click: _vm.watchEps }
                },
                [_vm._v("标记本集为看过")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "bgm_tv_tracker_radius",
                  attrs: { id: "bgm_tv_tracker_mark_watched" },
                  on: { click: _vm.setWatchProgress }
                },
                [_vm._v("看到本集")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "a",
          {
            staticStyle: { color: "red" },
            attrs: {
              href: _vm.reportUrl,
              rel: "noopener noreferrer",
              target: "_blank"
            }
          },
          [_c("p", [_vm._v("报告问题")])]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        !_vm.subjectID
          ? _c("p", [_vm._v('"bangumi_id" : "' + _vm._s(_vm.bangumiID) + '",')])
          : _vm._e(),
        _vm._v(" "),
        !_vm.subjectID
          ? _c("p", [_vm._v('"title" : "' + _vm._s(_vm.title) + '",')])
          : _vm._e(),
        _vm._v(" "),
        !_vm.subjectID
          ? _c("p", [_vm._v('"website" : "' + _vm._s(_vm.website) + '",')])
          : _vm._e(),
        _vm._v(" "),
        !_vm.subjectID ? _c("p", [_vm._v('"subject" : "",')]) : _vm._e(),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.config.autoMarkWatched,
              expression: "config.autoMarkWatched"
            }
          ],
          attrs: { id: "bgm_tv_tracker_auto_mark_watched", type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.config.autoMarkWatched)
              ? _vm._i(_vm.config.autoMarkWatched, null) > -1
              : _vm.config.autoMarkWatched
          },
          on: {
            change: function($event) {
              var $$a = _vm.config.autoMarkWatched,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 &&
                    _vm.$set(_vm.config, "autoMarkWatched", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.config,
                      "autoMarkWatched",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.config, "autoMarkWatched", $$c)
              }
            }
          }
        }),
        _vm._v(" "),
        _c("label", { attrs: { for: "bgm_tv_tracker_auto_mark_watched" } }, [
          _vm._v("播放进度大于80%时自动标记为看过")
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.config.collectionSubjectWhenMarkStatus,
              expression: "config.collectionSubjectWhenMarkStatus"
            }
          ],
          attrs: {
            id: "bgm_tv_tracker_collection_status_when_watch_status",
            type: "checkbox"
          },
          domProps: {
            checked: Array.isArray(_vm.config.collectionSubjectWhenMarkStatus)
              ? _vm._i(_vm.config.collectionSubjectWhenMarkStatus, null) > -1
              : _vm.config.collectionSubjectWhenMarkStatus
          },
          on: {
            change: function($event) {
              var $$a = _vm.config.collectionSubjectWhenMarkStatus,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 &&
                    _vm.$set(
                      _vm.config,
                      "collectionSubjectWhenMarkStatus",
                      $$a.concat([$$v])
                    )
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.config,
                      "collectionSubjectWhenMarkStatus",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$c)
              }
            }
          }
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            attrs: { for: "bgm_tv_tracker_collection_status_when_watch_status" }
          },
          [_vm._v("标记播放进度时把条目标记为在看")]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "bgm_tv_tracker_notification" } },
          _vm._l(_vm.messages, function(message, index) {
            return _c("div", { key: index }, [
              _c("hr"),
              _vm._v(" "),
              _c("div", [
                _c("p", [
                  _vm._v(
                    "\n            " +
                      _vm._s(message.time.getHours()) +
                      ":" +
                      _vm._s(message.time.getMinutes()) +
                      ":\n            " +
                      _vm._s(message.time.getSeconds()) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(message.text))])
              ])
            ])
          }),
          0
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticStyle: { color: "red" },
        attrs: {
          href:
            "https://github.com/Trim21/\n      bgm-tv-auto-tracker/blob/master/docs/user_info_collection.md",
          rel: "noopener noreferrer",
          target: "_blank"
        }
      },
      [_c("p", [_vm._v("关于信息收集")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "xeH2":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ "zr5I":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC52dWU/YWNhNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLnZ1ZT81NmMzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dlYnNpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NHbXhockFkYXB0ZXJcIiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLnZ1ZT9lNGFiIiwid2VicGFjazovLy8uL3NyYy9qcy9leHRlcm5hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlPzEwYzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC52dWU/YmFlNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLnZ1ZT9jYWQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlP2I5NDIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FB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O0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbldBLG1COzs7Ozs7Ozs7OztBQ0FBLHVCIiwiZmlsZSI6ImJnbS10di1hdXRvLXRyYWNrZXIuZGV2LnVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJlNld1XCIpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxyXG5pbXBvcnQgeyBWdWUsICQgfSBmcm9tIFwiLi9leHRlcm5hbHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ21HZXRWYWx1ZSxcclxuICBnbU9wZW5JblRhYixcclxuICBnbVNldFZhbHVlLFxyXG4gIGdtVW5zYWZlV2luZG93LFxyXG4gIFVSTFNcclxufSBmcm9tIFwiLi92YXJzXCI7XHJcbmltcG9ydCB7IGdldENvbmZpZywgc2VydmVyQXBpLCBzb3J0RXBzIH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHsgU3ViamVjdFJlc3BvbnNlIH0gZnJvbSBcIi4uL2xpYi9yZXNwb25zZXNcIjtcclxuXHJcbmxldCBjb2xsZWN0aW9uID0gZ21HZXRWYWx1ZShcImNvbGxlY3Rpb25cIiwgZmFsc2UpO1xyXG5cclxuaWYgKCFjb2xsZWN0aW9uKSB7XHJcbiAgY29sbGVjdGlvbiA9IHt9O1xyXG59IGVsc2Uge1xyXG4gIGNvbGxlY3Rpb24gPSBKU09OLnBhcnNlKGNvbGxlY3Rpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcclxuICBkYXRhKCkge1xyXG4gICAgbGV0IHdlYnNpdGUgPSB0aGlzLiR3ZWJzaXRlLm5hbWU7XHJcbiAgICBsZXQgY29uZmlnID0gZ2V0Q29uZmlnKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXBpc29kZU5vdE1hdGNoOiBmYWxzZSxcclxuICAgICAgdG1wRXBpc29kZUlEOiBudWxsLFxyXG5cclxuICAgICAgdG1wU3ViamVjdElEOiBudWxsLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICAgIGJhbmd1bWlJRDogbnVsbCxcclxuICAgICAgYmFuZ3VtaU5hbWU6IG51bGwsXHJcbiAgICAgIC8vIGlzIGVwaXNvZGUgc3RhcnRzIHdpdGggMSxcclxuICAgICAgLy8gbGlrZSBodHRwczovL3d3dy5iaWxpYmlsaS5jb20vYmFuZ3VtaS9wbGF5L2VwMjAwMTY3XHJcbiAgICAgIGVwaXNvZGVTdGFydFdpdGg6IG51bGwsXHJcbiAgICAgIC8vIGVwaXNvZGUgaWQgaW4gYmdtLnR2XHJcbiAgICAgIGVwaXNvZGVJRDogbnVsbCxcclxuICAgICAgZXBpc29kZTogbnVsbCxcclxuICAgICAgZXBpc29kZVNvcnQ6IG51bGwsXHJcbiAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICBzdWJqZWN0SUQ6IG51bGwsXHJcbiAgICAgIHNjb3JlOiBcIlwiLFxyXG4gICAgICBjb25maWc6IHtcclxuICAgICAgICBhdXRvTWFya1dhdGNoZWQ6IGNvbmZpZy5hdXRvTWFya1dhdGNoZWQsXHJcbiAgICAgICAgY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1czogY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXNcclxuICAgICAgfSxcclxuICAgICAgd2F0Y2hQZXJjZW50OiAwLFxyXG4gICAgICBlcGlzb2RlTWFya2VkOiBmYWxzZSxcclxuICAgICAgd2Vic2l0ZVxyXG4gICAgICAvLyAkd2Vic2l0ZTogbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcmVwb3J0VXJsKCkge1xyXG4gICAgICBsZXQgYmFzZVVSTCA9XHJcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vXCIgKyBcIlRyaW0yMS9iZ20tdHYtYXV0by10cmFja2VyL2lzc3Vlcy9uZXdcIjtcclxuICAgICAgbGV0IGhyZWZXaXRob3V0SGFzaCA9XHJcbiAgICAgICAgZ21VbnNhZmVXaW5kb3cubG9jYXRpb24ucHJvdG9jb2wgK1xyXG4gICAgICAgIFwiLy9cIiArXHJcbiAgICAgICAgZ21VbnNhZmVXaW5kb3cubG9jYXRpb24uaG9zdCArXHJcbiAgICAgICAgZ21VbnNhZmVXaW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICAgIGxldCBib2R5ID1cclxuICAgICAgICBg6Zeu6aKY6aG16Z2iOiBbJHt0aGlzLmJhbmd1bWlOYW1lfV0oJHtocmVmV2l0aG91dEhhc2h9KWAgK1xyXG4gICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgIGBCYW5ndW1pIElEOiAke3RoaXMuYmFuZ3VtaUlEfWAgK1xyXG4gICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgIGBlcGlzb2RlOiAke3RoaXMuZXBpc29kZX1gICtcclxuICAgICAgICBcIlxcblwiICtcclxuICAgICAgICBcImJnbSBwYWdlOiBcXG5cIiArXHJcbiAgICAgICAgYFN1YmplY3Q6IGh0dHBzOi8vYmdtLnR2L3N1YmplY3QvJHt0aGlzLnN1YmplY3RJRH1gICtcclxuICAgICAgICBcIlxcblwiICtcclxuICAgICAgICBgZXBpc29kZTogaHR0cHM6Ly9iZ20udHYvZXAvJHt0aGlzLmVwaXNvZGVJRH1gICtcclxuICAgICAgICBcIlxcblwiICtcclxuICAgICAgICBcIlxcbjwhLS0g5o+P6L+w5L2g6YGH5Yiw55qE6Zeu6aKYIC0tPlxcblwiO1xyXG5cclxuICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICBsYWJlbHM6IFwiYnVnXCIsXHJcbiAgICAgICAgYm9keVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHF1ZXJ5ID0gJC5wYXJhbShwYXJhbXMpO1xyXG5cclxuICAgICAgcmV0dXJuIGJhc2VVUkwgKyBcIj9cIiArIHF1ZXJ5O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICBoYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIC8vIHRoaXMubm90aWZ5KEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMikpXHJcbiAgICAgICAgZ21TZXRWYWx1ZShcImNvbmZpZ1wiLCBKU09OLnN0cmluZ2lmeSh2YWwpKTtcclxuICAgICAgfSxcclxuICAgICAgZGVlcDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHN1YmplY3RJRCh2YWwpIHtcclxuICAgICAgdGhpcy5lcGlzb2RlTWFya2VkID0gZmFsc2U7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICB0aGlzLiRiZ21BcGkuZ2V0U3ViamVjdCh2YWwpLnRoZW4oKHJlc3BvbnNlOiBTdWJqZWN0UmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIHZtLnNjb3JlID0gXCIgXCIgKyByZXNwb25zZS5kYXRhLnJhdGluZy5zY29yZTtcclxuICAgICAgICAgIHZtLmJhbmd1bWlOYW1lID0gcmVzcG9uc2UuZGF0YS5uYW1lX2NuIHx8IHJlc3BvbnNlLmRhdGEubmFtZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhbmd1bWlJRCgpIHtcclxuICAgICAgdGhpcy5lcGlzb2RlTWFya2VkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZXBpc29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZXBpc29kZU1hcmtlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoIXRoaXMuc3ViamVjdElEKSByZXR1cm47XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAvLyBzZXJ2ZXJBcGkuZ2V0QmdtRXBpc29kZUlEKHRoaXMuJHdlYnNpdGUpLnRoZW4oXHJcbiAgICAgIC8vICAgZGF0YSA9PiB7XHJcbiAgICAgIC8vICAgICB0aGlzLmVwaXNvZGVJRCA9IGRhdGEuYmdtX2VwX2lkXHJcbiAgICAgIC8vICAgICB0aGlzLmVwaXNvZGVOb3RNYXRjaCA9IGZhbHNlXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vICAgICB2bS4kYmdtQXBpLmdldEVwcyh0aGlzLnN1YmplY3RJRCkudGhlbihcclxuICAgICAgLy8gICAgICAgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAvLyAgICAgICAgIGxldCBlcHMgPSBkYXRhLmVwcy5maWx0ZXIoKHZhbDogeyBpZDogbnVtYmVyIH0pID0+IHZhbC5pZCA9PT0gcGFyc2VJbnQodm0uZXBpc29kZUlELCAxMCkpXHJcbiAgICAgIC8vICAgICAgICAgdHJ5IHtcclxuICAgICAgLy8gICAgICAgICAgIHRoaXMuZXBpc29kZVNvcnQgPSBlcHNbMF0uc29ydFxyXG4gICAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgLy8gICAgICAgICAgIHZtLm5vdGlmeSgn5rKh5om+5Yiw6L+Z6ZuGLi4uJylcclxuICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgIC8vICAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgIC8vICAgICAgICAgdm0ubm90aWZ5KCcyMzMnKVxyXG4gICAgICAvLyAgICAgICAgIHZtLm5vdGlmeShKU09OLnN0cmluZ2lmeShlcnJvcikpXHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gICAgIClcclxuICAgICAgLy9cclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgICgpID0+IHtcclxuICAgICAgdGhpcy5lcGlzb2RlTm90TWF0Y2ggPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVFcGlzb2RlKCk7XHJcblxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIClcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHVwZGF0ZUVwaXNvZGUoKSB7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuJGJnbUFwaS5nZXRFcHModGhpcy5zdWJqZWN0SUQpLnRoZW4oXHJcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgbGV0IGVwaXNvZGUgPSB2bS5lcGlzb2RlO1xyXG4gICAgICAgICAgbGV0IGVwcyA9IGRhdGEuZXBzLmZpbHRlcihcclxuICAgICAgICAgICAgKHZhbDogeyBzb3J0OiBzdHJpbmc7IHR5cGU6IHN0cmluZyB9KSA9PlxyXG4gICAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHZhbC5zb3J0KSkgJiYgcGFyc2VJbnQodmFsLnR5cGUsIDEwKSA9PT0gMFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBlcHMgPSBzb3J0RXBzKGVwcyk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmVwaXNvZGVJRCA9IGVwc1tlcGlzb2RlIC0gMV0uaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lcGlzb2RlU3RhcnRXaXRoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lcGlzb2RlU29ydCA9XHJcbiAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLmVwaXNvZGUpICsgcGFyc2VJbnQodGhpcy5lcGlzb2RlU3RhcnRXaXRoKSAtIDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lcGlzb2RlU29ydCA9IHRoaXMuZXBpc29kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB2bS5ub3RpZnkoXCLmsqHmib7liLDov5npm4YuLi5cIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdm0ubm90aWZ5KFwiMjMzXCIpO1xyXG4gICAgICAgICAgdm0ubm90aWZ5KEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIHVzZXJTdWJtaXRTdWJqZWN0SUQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnRtcFN1YmplY3RJRCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRtcFN1YmplY3RJRC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xyXG4gICAgICAgICAgY29uc3QgbXlVUkwgPSBuZXcgVVJMKHRoaXMudG1wU3ViamVjdElEKTtcclxuICAgICAgICAgIGNvbnN0IHAgPSBteVVSTC5wYXRobmFtZTtcclxuICAgICAgICAgIGNvbnN0IHBMaXN0ID0gcC5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICB0aGlzLnRtcFN1YmplY3RJRCA9IHBMaXN0W3BMaXN0Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN1YmplY3RJRCA9IHRoaXMudG1wU3ViamVjdElEO1xyXG4gICAgICAgIHNlcnZlckFwaS5yZXBvcnRfbWlzc2luZ19iYW5ndW1pKFxyXG4gICAgICAgICAgdGhpcy5iYW5ndW1pSUQsXHJcbiAgICAgICAgICB0aGlzLnN1YmplY3RJRCxcclxuICAgICAgICAgIHRoaXMudGl0bGUsXHJcbiAgICAgICAgICB0aGlzLndlYnNpdGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVzZXJTdWJtaXRFcGlzb2RlSUQgKCkge1xyXG4gICAgLy8gICBpZiAodGhpcy50bXBFcGlzb2RlSUQpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy50bXBFcGlzb2RlSUQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XHJcbiAgICAvLyAgICAgICBjb25zdCBteVVSTCA9IG5ldyBVUkwodGhpcy50bXBFcGlzb2RlSUQpXHJcbiAgICAvLyAgICAgICBjb25zdCBwID0gbXlVUkwucGF0aG5hbWVcclxuICAgIC8vICAgICAgIGNvbnN0IHBMaXN0ID0gcC5zcGxpdCgnLycpXHJcbiAgICAvLyAgICAgICB0aGlzLnRtcEVwaXNvZGVJRCA9IHBMaXN0W3BMaXN0Lmxlbmd0aCAtIDFdXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuZXBpc29kZUlEID0gdGhpcy50bXBFcGlzb2RlSURcclxuICAgIC8vICAgICBzZXJ2ZXJBcGkucmVwb3J0X21pc3NpbmdfZXBpc29kZShcclxuICAgIC8vICAgICAgIHRoaXMuYmFuZ3VtaUlELnRvU3RyaW5nKCksXHJcbiAgICAvLyAgICAgICB0aGlzLiR3ZWJzaXRlLmVwaXNvZGVJRC50b1N0cmluZygpLFxyXG4gICAgLy8gICAgICAgdGhpcy5lcGlzb2RlSUQsXHJcbiAgICAvLyAgICAgICB0aGlzLndlYnNpdGVcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgbm90aWZ5KG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgdGhpcy5tZXNzYWdlcy51bnNoaWZ0KHtcclxuICAgICAgICB0aW1lOiBub3csXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNvbGxlY3RTdWJqZWN0KHN1YmplY3RJRDogYW55KSB7XHJcbiAgICAgIGlmICghdGhpcy5jb25maWcuY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1cykgcmV0dXJuO1xyXG4gICAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgICBpZiAoIWNvbGxlY3Rpb25bc3ViamVjdElEXSkge1xyXG4gICAgICAgIHRoaXMuJGJnbUFwaVxyXG4gICAgICAgICAgLnNldFN1YmplY3RDb2xsZWN0aW9uU3RhdHVzKHtcclxuICAgICAgICAgICAgc3ViamVjdElELFxyXG4gICAgICAgICAgICBzdGF0dXM6IFwiZG9cIlxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09IDQwMSkge1xyXG4gICAgICAgICAgICAgICAgdm0ubm90aWZ5KEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB2bS5ub3RpZnkocmVzcG9uc2UuZGF0YS5lcnJvcik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZtLm5vdGlmeShcImFkZCB0aGlzIGJhbmd1bWkgdG8geW91ciBjb2xsZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbltzdWJqZWN0SURdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdtU2V0VmFsdWUoXCJjb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KGNvbGxlY3Rpb24pKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcjogYW55KSA9PiB2bS5ub3RpZnkoZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWwpXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHRyaWdnZXIoKSB7XHJcbiAgICAgICQoXCIuYmdtX3R2X3RyYWNrZXJfaW5mb1wiKS50b2dnbGUoXCJmYXN0XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhc3luYyB3YXRjaEVwcygpIHtcclxuICAgICAgdGhpcy5jb2xsZWN0U3ViamVjdCh0aGlzLnN1YmplY3RJRCk7XHJcbiAgICAgIGxldCB2bSA9IHRoaXM7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB2bS4kYmdtQXBpLmdldEVwcyh0aGlzLnN1YmplY3RJRCk7XHJcbiAgICAgICAgbGV0IGVwaXNvZGUgPSB2bS5lcGlzb2RlO1xyXG4gICAgICAgIGxldCBlcHMgPSBzb3J0RXBzKFxyXG4gICAgICAgICAgZGF0YS5lcHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAodmFsOiB7IHNvcnQ6IHN0cmluZzsgdHlwZTogc3RyaW5nIH0pID0+XHJcbiAgICAgICAgICAgICAgTnVtYmVyLmlzSW50ZWdlcihOdW1iZXIodmFsLnNvcnQpKSAmJiBwYXJzZUludCh2YWwudHlwZSwgMTApID09PSAwXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgZXAgPSBlcHNbZXBpc29kZSAtIDFdLmlkO1xyXG4gICAgICAgIGF3YWl0IHZtLiRiZ21BcGkuc2V0RXBpc29kZVdhdGNoZWQoZXApO1xyXG4gICAgICAgIHRoaXMuZXBpc29kZU1hcmtlZCA9IHRydWU7XHJcbiAgICAgICAgdm0ubm90aWZ5KFwibWFyayB5b3VyIHN0YXR1cyBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICB2bS5ub3RpZnkoXCLmjojmnYPlt7Lov4fmnJ8g6K+36YeN5paw5o6I5p2DXCIpO1xyXG4gICAgICAgICAgZ21PcGVuSW5UYWIoVVJMUy5hdXRoVVJMLCB7IGFjdGl2ZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdm0ubm90aWZ5KGVycm9yLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHZtLm5vdGlmeShKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2V0V2F0Y2hQcm9ncmVzcygpIHtcclxuICAgICAgbGV0IGVwaXNvZGUgPSB0aGlzLmVwaXNvZGU7XHJcbiAgICAgIHRoaXMuY29sbGVjdFN1YmplY3QodGhpcy5zdWJqZWN0SUQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuJGJnbUFwaS5zZXRTdWJqZWN0UHJvZ3Jlc3ModGhpcy5zdWJqZWN0SUQsIGVwaXNvZGUpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5KFwibWFyayBzdGF0dXMgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICB0aGlzLmVwaXNvZGVNYXJrZWQgPSB0cnVlO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZS5kYXRhLmNvZGUgPT09IDQwMCkge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZnkoXHJcbiAgICAgICAgICAgIFwiZXJyb3I6IFwiICtcclxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yICtcclxuICAgICAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICAgICAgXCLlupTor6XmmK/lm6DkuLrkvaDlnKhiZ23kuIrnmoTnirbmgIHlt7Lnu4/mmK/nnIvliLDmnKzpm4ZcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ub3RpZnkoXCJlcnJvcjogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvci5yZXNwb25zZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIC8vIHNlcnZlckFwaS5nZXRCZ21FcGlzb2RlSUQodGhpcy4kd2Vic2l0ZSkudGhlbihcclxuICAgIC8vICAgKHJlczogYW55KSA9PiB7fSxcclxuICAgIC8vICAgKGVycjogYW55KSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5ub3RpZnkoJ+S4jeiDveeyvuehruWumuS9jei/meaYr+WTquS4gOmbhiwg5Y+q6IO95qC55o2u6ZuG5pWw5p2l54yc5LqGLCDlj6/og73njJznmoTkuI3lpKrlr7kuJylcclxuICAgIHRoaXMuZXBpc29kZU5vdE1hdGNoID0gdHJ1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vIClcclxuXHJcbiAgICAvLyBlcGlzb2RlLWl0ZW1cclxuICAgIHRoaXMuJHdlYnNpdGUuaW5pdCgpLnRoZW4oXHJcbiAgICAgIChkYXRhOiBJbml0UmVzdWx0KSA9PiB7XHJcbiAgICAgICAgbGV0IHtcclxuICAgICAgICAgIGVwaXNvZGVJRCwgLy8gdG9kb1xyXG4gICAgICAgICAgZXBpc29kZUluZGV4LFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBiYW5ndW1pSUQsXHJcbiAgICAgICAgICBlcGlzb2RlU3RhcnRXaXRoXHJcbiAgICAgICAgfSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5lcGlzb2RlID0gZXBpc29kZUluZGV4O1xyXG4gICAgICAgIHRoaXMuZXBpc29kZUlEID0gZXBpc29kZUlEO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmJhbmd1bWlJRCA9IGJhbmd1bWlJRDtcclxuICAgICAgICB0aGlzLmVwaXNvZGVTdGFydFdpdGggPSBlcGlzb2RlU3RhcnRXaXRoO1xyXG5cclxuICAgICAgICBzZXJ2ZXJBcGkuZ2V0QmdtU3ViamVjdElEKHRoaXMuJHdlYnNpdGUpLnRoZW4oXHJcbiAgICAgICAgICByZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RJRCA9IHJlcy5zdWJqZWN0X2lkO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUVwaXNvZGUoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICB0aGlzLm5vdGlmeShcIueVquWJp+ayoeaJvuWIsCDmiYvliqjovpPlhaXlkKdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7IGVwaXNvZGUsIHRpdGxlLCBiYW5ndW1pSUQsIGVwaXNvZGVTdGFydFdpdGggfSA9IGVycm9yO1xyXG4gICAgICAgIHRoaXMuZXBpc29kZVN0YXJ0V2l0aCA9IGVwaXNvZGVTdGFydFdpdGg7XHJcbiAgICAgICAgdGhpcy5lcGlzb2RlID0gcGFyc2VJbnQoZXBpc29kZSwgMTApO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmJhbmd1bWlJRCA9IGJhbmd1bWlJRDtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgdm0gPSB0aGlzO1xyXG4gICAgdGhpcy4kd2Vic2l0ZS5kZXRlY3RFcGlzb2RlQ2hhbmdlKFxyXG4gICAgICAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEuc3ViamVjdElEKSB7XHJcbiAgICAgICAgICB2bS5zdWJqZWN0SUQgPSBkYXRhLnN1YmplY3RJRDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuZXBpc29kZSkge1xyXG4gICAgICAgICAgdm0uZXBpc29kZSA9IGRhdGEuZXBpc29kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuYmFuZ3VtaUlEKSB7XHJcbiAgICAgICAgICB2bS5iYW5ndW1pSUQgPSBkYXRhLmJhbmd1bWlJRDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgdm0uZXBpc29kZSA9IGVycm9yLmVwaXNvZGU7XHJcbiAgICAgICAgaWYgKGVycm9yLmJhbmd1bWlJRCAhPT0gdm0uYmFuZ3VtaUlEKSB7XHJcbiAgICAgICAgICB2bS5zdWJqZWN0SUQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB2bS5iYW5ndW1pSUQgPSBlcnJvci5iYW5ndW1pSUQ7XHJcbiAgICAgICAgICB2bS50aXRsZSA9IGVycm9yLnRpdGxlO1xyXG4gICAgICAgICAgdm0uZXBpc29kZVN0YXJ0V2l0aCA9IGVycm9yLmVwaXNvZGVTdGFydFdpdGg7XHJcbiAgICAgICAgICB2bS5lcGlzb2RlID0gZXJyb3IuZXBpc29kZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLiR3ZWJzaXRlXHJcbiAgICAgICAgLmdldFBsYXllckluZm8oKVxyXG4gICAgICAgIC50aGVuKChpbmZvOiBhbnkpID0+IHtcclxuICAgICAgICAgIGxldCB7IHBlcmNlbnQsIGR1cmF0aW9uIH0gPSBpbmZvO1xyXG4gICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImdldCBwbGF5ZXIgcGVyY2VudFwiKTtcclxuICAgICAgICAgIHRoaXMud2F0Y2hQZXJjZW50ID0gcGVyY2VudDtcclxuICAgICAgICAgIGlmIChwZXJjZW50ID4gMC44ICYmIGR1cmF0aW9uID4gMTIwKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5hdXRvTWFya1dhdGNoZWQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnN1YmplY3RJRCAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLmVwaXNvZGVNYXJrZWRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5lcGlzb2RlTWFya2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLndhdGNoRXBzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiY2FuJ3QgZ2V0IHBsYXkgdGltZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIDMwICogMTAwMCk7XHJcbiAgfVxyXG59KTtcclxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9leHRlcm5hbHMnXG5pbXBvcnQgeyBnbVVuc2FmZVdpbmRvdywgV0VCU0lURSB9IGZyb20gJy4vdmFycydcbmltcG9ydCB7IGFwaVNlcnZlciwgcGFyc2VFcGlzb2RlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IFF1ZXJ5U3ViamVjdElEUmVzcG9uc2UgfSBmcm9tICcuLi9saWIvcmVzcG9uc2VzJ1xuaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuXG5pbnRlcmZhY2UgQWJzdHJhY3RXZWJzaXRlIHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG5cbiAgZ2V0QmFuZ3VtaUlEKCk6IHN0cmluZ1xuXG4gIGdldEVwaXNvZGVJRCgpOiBzdHJpbmdcblxuICBnZXRUaXRsZSgpOiBzdHJpbmdcblxuICBkZXRlY3RFcGlzb2RlQ2hhbmdlKGNiOiBGdW5jdGlvbiwgbm90Zm91bmQ6IEZ1bmN0aW9uKTogdm9pZFxuXG4gIGdldFBsYXllckluZm8oKTogUHJvbWlzZTxhbnk+XG5cbiAgaW5pdCgpOiBQcm9taXNlPEluaXRSZXN1bHQ+XG59XG5cbmNsYXNzIEJpbGliaWxpIGltcGxlbWVudHMgQWJzdHJhY3RXZWJzaXRlIHtcbiAgbmFtZSA9IFdFQlNJVEUuYmlsaWJpbGlcbiAgd2luZG93OiBCaWxpV2luZG93XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aW5kb3cgPSA8QmlsaVdpbmRvdz5nbVVuc2FmZVdpbmRvd1xuICB9XG5cbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLnRpdGxlXG4gIH1cblxuICBnZXRCYW5ndW1pSUQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLm1lZGlhX2lkXG4gIH1cblxuICBnZXRFcGlzb2RlSUQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmVwX2lkXG4gIH1cblxuICBpbml0KCk6IFByb21pc2U8SW5pdFJlc3VsdD4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fXG4gICAgY29uc3QgZXBpc29kZSA9IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwTGlzdC5maWx0ZXIoXG4gICAgICB2YWwgPT4gIXZhbC5pbmRleC5pbmNsdWRlcygnLicpXG4gICAgKS5maW5kSW5kZXgodmFsID0+IHtcbiAgICAgIHJldHVybiB2YWwuaW5kZXggPT09IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mby5pbmRleFxuICAgIH0pICsgMVxuXG4gICAgY29uc3QgYmFuZ3VtaUlEID0gdGhpcy5nZXRCYW5ndW1pSUQoKVxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG4gICAgY29uc3QgZXBpc29kZVN0YXJ0V2l0aCA9IHBhcnNlSW50KHN0YXR1cy5lcExpc3RbMF0uaW5kZXgpXG5cbiAgICAvLyBhcGlTZXJ2ZXIucG9zdCgnL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL2NvbGxlY3RfZXBpc29kZV9pbmZvJywge1xuICAgIC8vICAgbWVkaWFJbmZvOiB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5tZWRpYUluZm8sXG4gICAgLy8gICBlcEluZm86IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mbyxcbiAgICAvLyAgIGVwTGlzdDogdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBMaXN0LFxuICAgIC8vIH0pXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUoe1xuICAgICAgICBlcGlzb2RlSUQ6IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mby5lcF9pZCxcbiAgICAgICAgZXBpc29kZUluZGV4OiBlcGlzb2RlLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBlcGlzb2RlU3RhcnRXaXRoLFxuICAgICAgICBiYW5ndW1pSURcbiAgICAgIH0pXG4gICAgfSxcbiAgICApXG4gICAgLy9cbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgYXBpU2VydmVyLmdldCgnL2FwaS92MC4yL3F1ZXJ5U3ViamVjdElEJywge1xuICAgIC8vICAgICBwYXJhbXM6IHsgYmFuZ3VtaUlELCB3ZWJzaXRlOiAnQmlsaWJpbGknIH1cbiAgICAvLyAgIH0pLnRoZW4oKHJlc3BvbnNlOiBRdWVyeVN1YmplY3RJRFJlc3BvbnNlKSA9PiB7XG4gICAgLy8gICAgICAgcmVzb2x2ZSh7XG4gICAgLy8gICAgICAgICBzdWJqZWN0SUQ6IHJlc3BvbnNlLmRhdGEuc3ViamVjdF9pZCxcbiAgICAvLyAgICAgICAgIGVwaXNvZGU6IGVwaXNvZGUudG9TdHJpbmcoKSxcbiAgICAvLyAgICAgICAgIHRpdGxlLFxuICAgIC8vICAgICAgICAgZXBpc29kZVN0YXJ0V2l0aCxcbiAgICAvLyAgICAgICAgIGJhbmd1bWlJRFxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xuICAgIC8vICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIC8vICAgICAgIHJlamVjdCh7XG4gICAgLy8gICAgICAgICBlcGlzb2RlOiBlcGlzb2RlLnRvU3RyaW5nKCksXG4gICAgLy8gICAgICAgICB0aXRsZSxcbiAgICAvLyAgICAgICAgIGVwaXNvZGVTdGFydFdpdGgsXG4gICAgLy8gICAgICAgICBiYW5ndW1pSUQsXG4gICAgLy8gICAgICAgICBlcnJvclxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIClcbiAgICAvLyB9KVxuICB9XG5cbiAgZGV0ZWN0RXBpc29kZUNoYW5nZShjYjogRXBpc29kZUNoYW5nZUNhbGxiYWNrLCBub3Rmb3VuZDogRXBpc29kZUNoYW5nZUNhbGxiYWNrKSB7XG4gICAgbGV0IGNscyA9IHRoaXNcbiAgICBsZXQgYmFuZ3VtaUlEID0gdGhpcy5nZXRCYW5ndW1pSUQoKVxuICAgIGxldCBJTk5FUl9FUElTT0RFID0gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4XG5cbiAgICBmdW5jdGlvbiBvbkVwaXNvZGVDaGFuZ2UoeyBzZWFzb24gPSBmYWxzZSwgZXBpc29kZSA9IGZhbHNlIH0pIHtcbiAgICAgIGlmIChzZWFzb24pIHtcbiAgICAgICAgY2xzLmluaXQoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGNiKGRhdGEpXG4gICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgICBub3Rmb3VuZFxuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoZXBpc29kZSkge1xuICAgICAgICBsZXQgZXAgPSBjbHMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwTGlzdFxuICAgICAgICAgIC5maWx0ZXIodmFsID0+ICF2YWwuaW5kZXguaW5jbHVkZXMoJy4nKSlcbiAgICAgICAgICAuZmluZEluZGV4KHZhbCA9PiB2YWwuaW5kZXggPT09IGNscy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4KSArIDFcbiAgICAgICAgaWYgKGVwKSB7XG4gICAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZXBpc29kZTogZXBcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKHtcbiAgICAgICAgICAgIGVwaXNvZGU6IGNscy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRldGVjdEhyZWZDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmRlYnVnKCdjaGVjayBocmVmJywgYmFuZ3VtaUlELCBJTk5FUl9FUElTT0RFKVxuICAgICAgaWYgKGJhbmd1bWlJRCAhPT0gY2xzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5tZWRpYUluZm8uc2Vhc29uX2lkKSB7XG4gICAgICAgIG9uRXBpc29kZUNoYW5nZSh7XG4gICAgICAgICAgc2Vhc29uOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKElOTkVSX0VQSVNPREUgIT09IGNscy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4KSB7XG4gICAgICAgIG9uRXBpc29kZUNoYW5nZSh7XG4gICAgICAgICAgZXBpc29kZTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBJTk5FUl9FUElTT0RFID0gY2xzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5lcEluZm8uaW5kZXhcbiAgICAgIGJhbmd1bWlJRCA9IGNscy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLnNlYXNvbl9pZFxuICAgIH1cblxuICAgIHNldEludGVydmFsKGRldGVjdEhyZWZDaGFuZ2UsIDEwICogMTAwMClcbiAgICBzZXRUaW1lb3V0KGRldGVjdEhyZWZDaGFuZ2UsIDUwMDApXG4gIH1cblxuICBnZXRQbGF5ZXJJbmZvKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICB7XG4gICAgICAgIGN1cnJlbnQ6IHRoaXMud2luZG93LnBsYXllci5nZXRDdXJyZW50VGltZSgpLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy53aW5kb3cucGxheWVyLmdldER1cmF0aW9uKCksXG4gICAgICAgIHBlcmNlbnQ6IHRoaXMud2luZG93LnBsYXllci5nZXRDdXJyZW50VGltZSgpIC8gdGhpcy53aW5kb3cucGxheWVyLmdldER1cmF0aW9uKCksXG4gICAgICB9XG4gICAgKVxuICB9XG5cbn1cblxuY2xhc3MgSXFpeWkgaW1wbGVtZW50cyBBYnN0cmFjdFdlYnNpdGUge1xuICBuYW1lID0gV0VCU0lURS5pcWl5aVxuICB3aW5kb3c6IElxaXlpV2luZG93XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy53aW5kb3cgPSA8SXFpeWlXaW5kb3c+Z21VbnNhZmVXaW5kb3dcbiAgfVxuXG4gIGdldEJhbmd1bWlJRCgpOiBzdHJpbmcge1xuICAgIGxldCBjb2xsZWN0aW9uTGlua0VsID0gJCgnI2Jsb2NrLUMgPiBkaXYucXktcGxheWVyLWRldGFpbCA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdi5xeS1wbGF5ZXItdGl0bGUgPiBoMSA+IGEnKVxuICAgIGxldCBjb2xsZWN0aW9uTGluayA9IGNvbGxlY3Rpb25MaW5rRWwuYXR0cignaHJlZicpXG4gICAgbGV0IGZpbGVuYW1lID0gY29sbGVjdGlvbkxpbmsuc3BsaXQoJy8nKVxuICAgIHJldHVybiBmaWxlbmFtZVtmaWxlbmFtZS5sZW5ndGggLSAxXS5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcuJylcbiAgfVxuXG4gIGdldEVwaXNvZGVJRCgpIHtcbiAgICByZXR1cm4gZ21VbnNhZmVXaW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJ18nKVsxXS5zcGxpdCgnLicpWzBdXG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gZ21VbnNhZmVXaW5kb3cuZG9jdW1lbnQudGl0bGVcbiAgfVxuXG4gIGluaXQoKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5nZXRUaXRsZSgpXG4gICAgbGV0IGJhbmd1bWlJRCA9IHRoaXMuZ2V0QmFuZ3VtaUlEKClcbiAgICBsZXQgZXBpc29kZSA9IHBhcnNlRXBpc29kZSh0aXRsZSlcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGJhbmd1bWlJRCxcbiAgICAgICAgZXBpc29kZUlEOiB0aGlzLmdldEVwaXNvZGVJRCgpLFxuICAgICAgICBlcGlzb2RlSW5kZXg6IGVwaXNvZGUudG9TdHJpbmcoKSxcbiAgICAgICAgZXBpc29kZVN0YXJ0V2l0aDogMVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGV0ZWN0RXBpc29kZUNoYW5nZShjYjogRXBpc29kZUNoYW5nZUNhbGxiYWNrLCBub3Rmb3VuZDogRXBpc29kZUNoYW5nZUNhbGxiYWNrKSB7XG4gICAgZnVuY3Rpb24gb25FcGlzb2RlQ2hhbmdlKCkge1xuICAgICAgY29uc29sZS5sb2coJ2hyZWYgY2hhbmdlJylcbiAgICAgIGxldCB0aXRsZSA9IGdtVW5zYWZlV2luZG93LmRvY3VtZW50LnRpdGxlXG4gICAgICBsZXQgZXBpc29kZSA9IHBhcnNlRXBpc29kZSh0aXRsZSlcbiAgICAgIGlmIChlcGlzb2RlKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICBlcGlzb2RlOiBlcGlzb2RlLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGZvdW5kKHtcbiAgICAgICAgICBlcGlzb2RlOiBlcGlzb2RlLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaHJlZiA9IGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICBjb25zdCBkZXRlY3RIcmVmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGhyZWYgIT09IGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgb25FcGlzb2RlQ2hhbmdlKClcbiAgICAgIH1cbiAgICAgIGhyZWYgPSBnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZGV0ZWN0SHJlZkNoYW5nZSwgMTAgKiAxMDAwKVxuICAgIHNldFRpbWVvdXQoZGV0ZWN0SHJlZkNoYW5nZSwgNTAwMClcbiAgfVxuXG4gIGdldFBsYXllckluZm8oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLndpbmRvdy5wbGF5ZXIuZ2V0UGxheUluZm8ocmVzb2x2ZSlcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvOiBpUWl5aVZpZGVvSW5mbykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY3VycmVudDogaW5mby5jdXJyZW50VGltZSxcbiAgICAgICAgZHVyYXRpb246IGluZm8udG90YWxEdXJhdGlvbiAvIDEwMDAsXG4gICAgICAgIHBlcmNlbnQ6IGluZm8uY3VycmVudFRpbWUgLyBpbmZvLnRvdGFsRHVyYXRpb24gKiAxMDAwLFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IHsgQmlsaWJpbGksIElxaXlpLCBBYnN0cmFjdFdlYnNpdGUgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBheGlvc0dteGhyQWRhcHRlcjsiLCJkZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIFRNX0VOVj86IHN0cmluZztcbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiwgY2FtZWxjYXNlICovXG5sZXQgZ21VbnNhZmVXaW5kb3cgPSB1bnNhZmVXaW5kb3dcbmxldCBnbVNldFZhbHVlID0gR01fc2V0VmFsdWVcbmxldCBnbUdldFZhbHVlID0gR01fZ2V0VmFsdWVcbmxldCBnbU9wZW5JblRhYiA9IEdNX29wZW5JblRhYlxubGV0IGdtSW5mbyA9IEdNX2luZm9cbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYsIGNhbWVsY2FzZSAqL1xuXG5jb25zdCBVUkxTID0ge1xuICBhcGlTZXJ2ZXJVUkw6ICdodHRwczovL2Jhbmd1bWktYXV0by10cmFja2VyLnRyaW0yMS5jbicsXG4gIGFwaUJnbVVybDogJ2h0dHBzOi8vYXBpLmJnbS50dicsXG4gIHJlZnJlc2hUb2tlblBhdGg6ICcvYmdtLXR2LWF1dG8tdHJhY2tlci9hcGkudjEvcmVmcmVzaCcsXG4gIG5ld0FwaVNlcnZlcjogJ2h0dHBzOi8vd3d3LnRyaW0yMS5jbicsXG4gIGF1dGhVUkw6ICdodHRwczovL3d3dy50cmltMjEuY24vYmdtLXR2LWF1dG8tdHJhY2tlci9hcGkudjEvYXV0aCcsXG4gIGNhbGxCYWNrVXJsOiAnaHR0cHM6Ly93d3cudHJpbTIxLmNuL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL29hdXRoX2NhbGxiYWNrJyxcblxufVxuXG5pZiAod2luZG93LlRNX0VOViA9PT0gJ2RldicpIHtcbiAgLy8gVVJMUy5uZXdBcGlTZXJ2ZXIgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwLydcbiAgLy8gVVJMUy5hdXRoVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9hdXRoJ1xuICAvLyBVUkxTLmNhbGxCYWNrVXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9vYXV0aF9jYWxsYmFjaydcbn1cblxuY29uc3QgV0VCU0lURSA9IHtcbiAgYmlsaWJpbGk6ICdiaWxpYmlsaScsXG4gIGlxaXlpOiAnaXFpeWknLFxufVxuXG5leHBvcnQge1xuICBXRUJTSVRFLFxuICBnbVNldFZhbHVlLFxuICBnbUdldFZhbHVlLFxuICBnbU9wZW5JblRhYixcbiAgZ21VbnNhZmVXaW5kb3csXG4gIFVSTFMsXG4gIGdtSW5mb1xufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCIvKlxuKiB0aGlzIGpzIG1vZHVsZSBpcyBhIHdyYXBwZXIgdGhhdCBkb24ndCBsZXQgdHMtbG9hZGVyXG4qIGNhbGwgYG1vZHVsZS52YXJgIHdpdGggYG1vZHVsZS5kZWZhdWx0LnZhcmAgaW4gY29tcGlsZWQgZmlsZVxuKiBCdXQgYGF4aW9zLmRlZmF1bHRgIGlzIGBheGlvc2AgaXRzZWxmLCBzbyBubyBuZWVkIHRvIHdyYXAgYXhpb3MuXG4qICovXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBhZGFwdGVyIGZyb20gJ2F4aW9zLXVzZXJzY3JpcHQtYWRhcHRlcidcblxuZXhwb3J0IHsgVnVlLCAkLCBhZGFwdGVyIH1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjYmdtX3R2X3RyYWNrZXIuZGlzYWJsZSAuYmdtX3R2X3RyYWNrZXJfaW5mb3tkaXNwbGF5Om5vbmV9aW5wdXRbdHlwZT1jaGVja2JveF17LXdlYmtpdC1hcHBlYXJhbmNlOmF1dG87LW1vei1hcHBlYXJhbmNlOmF1dG87YXBwZWFyYW5jZTphdXRvfS5pcWl5aSAjYmdtX3R2X3RyYWNrZXJfYnRuX29uX3BhZ2V7Y29sb3I6Izc5Nzk3OTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9jaztmb250LXdlaWdodDo3MDA7Zm9udC1mYW1pbHk6UGluZ0ZhbmdTQy1SZWd1bGFyLEhlbHZldGljYSxBcmlhbCxNaWNyb3NvZnQgWWFoZWksc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtmb250LXN0cmV0Y2g6MTAwJTtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LWVhc3QtYXNpYW46bm9ybWFsOy13ZWJraXQtZm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LWxpZ2F0dXJlczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2hlaWdodDozOHB4O2xpbmUtaGVpZ2h0OjM4cHg7bWFyZ2luOjA7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6aGlkZGVuO3BhZGRpbmc6MCAxMHB4fS5pcWl5aSNiZ21fdHZfdHJhY2tlcnttYXJnaW4tbGVmdDoxNXB4O3BhZGRpbmctbGVmdDoxNnB4O3Bvc2l0aW9uOnJlbGF0aXZlO2ZvbnQtc2l6ZToxNXB4O2Zsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmV9LmlxaXlpICNiZ21fdHZfdHJhY2tlcl9saW5rIGF7Y29sb3I6IzAwMH0uaXFpeWkjYmdtX3R2X3RyYWNrZXIgLmJnbV90dl90cmFja2VyX2luZm97b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG87dG9wOjEwMCV9LmlxaXlpIC5iZ21fdHZfdHJhY2tlcl9idG4uYmdtX3R2X3RyYWNrZXJ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2Zsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE0cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MThweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDBweCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbjt0cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbn0uaXFpeWkgLmJnbV90dl90cmFja2VyX2luZm97cGFkZGluZzo4cHg7bWFyZ2luLXRvcDo1cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlcjoxcHggc29saWQgI2U1ZTllZjtjdXJzb3I6ZGVmYXVsdDtoZWlnaHQ6YXV0bztsZWZ0Oi0xcHg7bGluZS1oZWlnaHQ6bm9ybWFsO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246bGVmdDt0b3A6NzBweDt3aGl0ZS1zcGFjZTpub3JtYWw7d2lkdGg6MjUwcHg7ei1pbmRleDoxMDAwfS5pcWl5aSAuYmdtX3R2X3RyYWNrZXJfaW5mbyAqe21heC13aWR0aDoxMDAlfS5pcWl5aSAuYmdtX3R2X3RyYWNrZXJfaW5mbyBidXR0b257cGFkZGluZzo0cHggNnB4O2xpbmUtaGVpZ2h0OjE0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjRweH0jYmFuZ3VtaV9kZXRhaWwgLmJhbmd1bWktaW5mby5jbGVhcmZpeCAuaW5mby1yaWdodCAuaW5mby10aXRsZS5jbGVhcmZpeCBhIGgye3dpZHRoOjM4MHB4fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQwMHB4KXsuYXJjLXRvb2xiYXIgLmJsb2Nre3BhZGRpbmc6MCAxMnB4O21hcmdpbi1sZWZ0Oi0xMnB4fS52aWRlby10b29sYmFyLW1vZHVsZSAuYnRuLWl0ZW17cGFkZGluZzowIDAgMCA2MHB4IWltcG9ydGFudDttYXJnaW4tbGVmdDotMTJweH0jYmFuZ3VtaV9kZXRhaWwgLmJhbmd1bWktaW5mby5jbGVhcmZpeCAuaW5mby1yaWdodCAuaW5mby10aXRsZS5jbGVhcmZpeCBhIGgye3dpZHRoOjIwMHB4IWltcG9ydGFudH19LmJpbGliaWxpI2JnbV90dl90cmFja2Vye2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjIwcHh9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9yYWRpdXN7Ym9yZGVyLXJhZGl1czo0cHg7Ym9yZGVyOjFweCBzb2xpZCAjZTVlOWVmfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfYnRuLmJnbV90dl90cmFja2VyOmhvdmVye2NvbG9yOiMwMGExZDY7Ym9yZGVyOjFweCBzb2xpZCAjMDBhMWQ2fS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfYnRuLmJnbV90dl90cmFja2Vyey13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtjb2xvcjojNmQ3NTdhO2Zsb2F0OmxlZnQ7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE0cHg7aGVpZ2h0OjI4cHg7bGluZS1oZWlnaHQ6MjhweDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMDBweCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbjt0cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbn0uYmlsaWJpbGkgLmJnbV90dl90cmFja2VyX2luZm97cGFkZGluZzo4cHg7bWFyZ2luLXRvcDo1cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MCAwIDRweCA0cHg7Ym9yZGVyOjFweCBzb2xpZCAjZTVlOWVmOy13ZWJraXQtYm94LXNoYWRvdzowIDJweCA0cHggcmdiYSgwLDAsMCwuMTYpO2JveC1zaGFkb3c6MCAycHggNHB4IHJnYmEoMCwwLDAsLjE2KTtjdXJzb3I6ZGVmYXVsdDtoZWlnaHQ6YXV0bztsZWZ0Oi0xcHg7bGluZS1oZWlnaHQ6bm9ybWFsO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246bGVmdDt0b3A6NzBweDt3aGl0ZS1zcGFjZTpub3JtYWw7d2lkdGg6MzAwcHg7ei1pbmRleDoxMDAwfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mbyAqe21heC13aWR0aDoxMDAlfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mb3tvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTAwJX0uYmlsaWJpbGkgLmJnbV90dl90cmFja2VyX2luZm8gYnV0dG9ue3BhZGRpbmc6NHB4IDZweDtsaW5lLWhlaWdodDoxNHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjo0cHg7Ym9yZGVyOjJweCBzb2xpZCAjZmZmfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mbyBidXR0b246YWN0aXZle2JhY2tncm91bmQ6I2ZmZn0uYmlsaWJpbGkgLmJnbV90dl90cmFja2VyX2luZm8gYnV0dG9uOmhvdmVye2JvcmRlcjoycHggc29saWQgIzk5YmRmN31cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhNzQwNTgmXCIiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG5pbXBvcnQgeyBnbU9wZW5JblRhYiwgZ21VbnNhZmVXaW5kb3csIFVSTFMsIFdFQlNJVEUgfSBmcm9tICcuL3ZhcnMnXG5pbXBvcnQgeyBCZ21BcGksIGdldEF1dGgsIHNhdmVBdXRoIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IEJpbGliaWxpLCBJcWl5aSB9IGZyb20gJy4vd2Vic2l0ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuXG5pZiAoZ21VbnNhZmVXaW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFVSTFMuY2FsbEJhY2tVcmwpKSB7XG4gIGlmIChnbVVuc2FmZVdpbmRvdy5kYXRhKSB7XG4gICAgc2F2ZUF1dGgoZ21VbnNhZmVXaW5kb3cuZGF0YSlcbiAgICBjb25zdCBjaGlsZCA9IGdtVW5zYWZlV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBjaGlsZC5pbm5lclRleHQgPSAn5oiQ5Yqf5o6I5p2DIOivt+WFs+mXree9kemhtSDmjojmnYPlkI7kuI3opoHlv5jorrDliLfmlrDlt7Lnu4/miZPlvIDnmoTop4bpopHnvZHpobUnXG4gICAgZ21VbnNhZmVXaW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxufVxubGV0IHdlYnNpdGVcblxuLy8gaW5qZWN0IEJpbGliaWxpXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB3ZWJzaXRlTmFtZVxuICogQHJldHVybnMge0Fic3RyYWN0V2Vic2l0ZX1cbiAqL1xuZnVuY3Rpb24gZ2V0V2Vic2l0ZUNsYXNzICh3ZWJzaXRlTmFtZSkge1xuICBpZiAod2Vic2l0ZU5hbWUgPT09IFdFQlNJVEUuaXFpeWkpIHJldHVybiBuZXcgSXFpeWkoKVxuICBpZiAod2Vic2l0ZU5hbWUgPT09IFdFQlNJVEUuYmlsaWJpbGkpIHJldHVybiBuZXcgQmlsaWJpbGkoKVxufVxuXG5pZiAoZ21VbnNhZmVXaW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKCdodHRwczovL3d3dy5iaWxpYmlsaS5jb20vYmFuZ3VtaS9wbGF5LycpKSB7XG4gIHdlYnNpdGUgPSBXRUJTSVRFLmJpbGliaWxpXG59XG5cbi8vIGluamVjdCBpcWl5aVxuaWYgKGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnd3d3LmlxaXlpLmNvbScpIHtcbiAgd2Vic2l0ZSA9IFdFQlNJVEUuaXFpeWlcbn1cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gIGlmICh3ZWJzaXRlID09PSBXRUJTSVRFLmJpbGliaWxpKSB7XG4gICAgaWYgKFtcbiAgICAgIDEsIC8vIOWKqOa8q1xuICAgICAgMiwgLy8g55S15b2xXG4gICAgICA0LCAvLyDlm73liJtcbiAgICAgIDUsIC8vIOeUteinhuWJp1xuICAgIF0uaW5jbHVkZXMoZ21VbnNhZmVXaW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLnNlYXNvbl90eXBlKSkge1xuICAgICAgJCgnI2Jhbmd1bWlfZGV0YWlsIGRpdi5mdW5jLW1vZHVsZS5jbGVhcmZpeCcpLnByZXBlbmQoJzxkaXYgaWQ9XFwnYmdtX3R2X3RyYWNrZXJcXCc+PC9kaXY+JylcbiAgICB9XG4gIH1cblxuICAvLyBpbmplY3QgaXFpeWlcbiAgaWYgKHdlYnNpdGUgPT09IFdFQlNJVEUuaXFpeWkpIHtcbiAgICBpZiAoZ21VbnNhZmVXaW5kb3cuUS5QYWdlSW5mby5wbGF5UGFnZUluZm8uY2F0ZWdvcnlOYW1lID09PSAn5Yqo5ryrJykge1xuICAgICAgJCgnZGl2LnF5LXBsYXllci10aXRsZSAnKS5hcHBlbmQoJzxkaXYgaWQ9XFwnYmdtX3R2X3RyYWNrZXJcXCc+PC9kaXY+JylcbiAgICB9XG4gIH1cblxuICBpZiAoJCgnI2JnbV90dl90cmFja2VyJykubGVuZ3RoKSB7XG4gICAgZ2V0QXV0aCgpLnRoZW4oXG4gICAgICBhdXRoID0+IHtcbiAgICAgICAgaWYgKGF1dGggJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGF1dGgsICdhY2Nlc3NfdG9rZW4nKSkge1xuICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuJGJnbUFwaSA9IG5ldyBCZ21BcGkoeyBhY2Nlc3NUb2tlbjogYXV0aC5hY2Nlc3NfdG9rZW4gfSlcbiAgICAgICAgICBpZiAod2Vic2l0ZSkge1xuICAgICAgICAgICAgVnVlLnByb3RvdHlwZS4kd2Vic2l0ZSA9IGdldFdlYnNpdGVDbGFzcyh3ZWJzaXRlKVxuICAgICAgICAgICAgZ21VbnNhZmVXaW5kb3cuYmdtX3R2X3RyYWNrZXIgPSBuZXcgVnVlKHtcbiAgICAgICAgICAgICAgZWw6ICcjYmdtX3R2X3RyYWNrZXInLFxuICAgICAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHApLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ21PcGVuSW5UYWIoVVJMUy5hdXRoVVJMLCB7IGFjdGl2ZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXcmFwcGVyICgpIHtcbiAgaWYgKHdlYnNpdGUgPT09IFdFQlNJVEUuYmlsaWJpbGkpIHtcbiAgICBpbml0KClcbiAgfSBlbHNlIGlmICh3ZWJzaXRlID09PSBXRUJTSVRFLmlxaXlpKSB7XG4gICAgc2V0VGltZW91dChpbml0LCAxMDAwICogMTApXG4gIH1cbn1cblxuJChnbVVuc2FmZVdpbmRvdykucmVhZHkoZnVuY3Rpb24gKCkge1xuICBpbml0V3JhcHBlcigpXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7IiwiaW1wb3J0IHtcbiAgZ21HZXRWYWx1ZSxcbiAgZ21JbmZvLFxuICBnbU9wZW5JblRhYixcbiAgZ21TZXRWYWx1ZSxcbiAgZ21VbnNhZmVXaW5kb3csXG4gIFVSTFNcbn0gZnJvbSAnLi92YXJzJ1xuaW1wb3J0IGF4aW9zLCB7XG4gIEF4aW9zQWRhcHRlcixcbiAgQXhpb3NFcnJvcixcbiAgQXhpb3NJbnN0YW5jZSxcbiAgQXhpb3NSZXNwb25zZSxcbn0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBhZGFwdGVyIH0gZnJvbSAnLi9leHRlcm5hbHMnXG5pbXBvcnQgeyBBdXRoUmVzcG9uc2UsIEJhc2VSZXNwb25zZSwgU3ViamVjdFJlc3BvbnNlIH0gZnJvbSAnLi4vbGliL3Jlc3BvbnNlcydcbmltcG9ydCB7IEFic3RyYWN0V2Vic2l0ZSB9IGZyb20gJy4vd2Vic2l0ZSdcblxuYXhpb3MuZGVmYXVsdHMuYWRhcHRlciA9IGFkYXB0ZXJcblxuZnVuY3Rpb24gb3BlbkF1dGhQYWdlICgpIHtcbiAgZ21PcGVuSW5UYWIoVVJMUy5hdXRoVVJMLCB7IGFjdGl2ZTogdHJ1ZSB9KVxufVxuXG5mdW5jdGlvbiBnZXRTY3JpcHRVc2VyQWdlbnQgKCk6IHN0cmluZyB7XG4gIHJldHVybiBnbVVuc2FmZVdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50ICtcbiAgICBgIEV4dGVuc2lvbi8keyBnbUluZm8udmVyc2lvbiB9IGAgK1xuICAgIGBCZ20tdHYtYXV0by10cmFja2VyLyR7IGdtSW5mby5zY3JpcHQudmVyc2lvbiB9YFxufVxuXG5mdW5jdGlvbiBzb3J0RXBzIChlcHM6IHsgc29ydDogbnVtYmVyLCBpZDogbnVtYmVyIH1bXSkge1xuICBlcHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVwcykpXG4gIHJldHVybiBlcHMuc29ydChcbiAgICBmdW5jdGlvbiAoYTogeyBzb3J0OiBudW1iZXIgfSwgYjogeyBzb3J0OiBudW1iZXIgfSkge1xuICAgICAgY29uc3QgeCA9IGEuc29ydFxuICAgICAgY29uc3QgeSA9IGIuc29ydFxuICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSlcbiAgICB9XG4gIClcbn1cblxuaW50ZXJmYWNlIFN1YmplY3RFcHNSZXNwb25zZSB7XG4gIGRhdGE6IGFueVxufVxuXG5jbGFzcyBCZ21BcGkge1xuICByZWFkb25seSBhY2Nlc3NfdG9rZW46IHN0cmluZ1xuICByZWFkb25seSBodHRwOiBBeGlvc0luc3RhbmNlXG5cbiAgY29uc3RydWN0b3IgKHsgYWNjZXNzVG9rZW4sIHNlcnZlclJvb3QgPSAnaHR0cHM6Ly9hcGkuYmdtLnR2JyB9OiB7XG4gICAgYWNjZXNzVG9rZW46IHN0cmluZzsgc2VydmVyUm9vdDogc3RyaW5nO1xuICB9KSB7XG4gICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NUb2tlblxuICAgIHRoaXMuaHR0cCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBzZXJ2ZXJSb290LFxuICAgICAgYWRhcHRlcixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICdVc2VyLUFnZW50JzogZ2V0U2NyaXB0VXNlckFnZW50KCksXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBzZXRTdWJqZWN0UHJvZ3Jlc3MgKHN1YmplY3RJRDogc3RyaW5nLCBlcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAvc3ViamVjdC8keyBzdWJqZWN0SUQgfS91cGRhdGUvd2F0Y2hlZF9lcHNgLFxuICAgICAgICBgd2F0Y2hlZF9lcHM9JHsgZXAgfWAsXG4gICAgICAgIHsgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIH0gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHsgc3RhdHVzOiByZXNwb25zZS5kYXRhLmNvZGUsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHNldEVwaXNvZGVXYXRjaGVkIChlcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAvZXAvJHsgZXAgfS9zdGF0dXMvd2F0Y2hlZGApXG4gIH1cblxuICBnZXRFcHMgKHN1YmplY3RJRDogc3RyaW5nKSB7XG4gICAgbGV0IGlucyA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBub0RhdGEgPSBmYWxzZVxuICAgICAgICBsZXQgZXBzID0gZ21HZXRWYWx1ZShgZXBzXyR7IHN1YmplY3RJRCB9YCwgZmFsc2UpXG4gICAgICAgIC8vIG5vIGRhdGFcbiAgICAgICAgaWYgKCFlcHMpIG5vRGF0YSA9IHRydWVcbiAgICAgICAgaWYgKGVwcykge1xuICAgICAgICAgIGVwcyA9IEpTT04ucGFyc2UoZXBzKVxuICAgICAgICAgIC8vIG91dCBvZiB0aW1lXG4gICAgICAgICAgaWYgKE51bWJlcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApIC0gZXBzLnRpbWUgPiA2MCAqIDYwICogMikge1xuICAgICAgICAgICAgbm9EYXRhID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcHMuZXBzID0gc29ydEVwcyhlcHMuZXBzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbm9EYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShlcHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zLmdldFN1YmplY3RFcHMoc3ViamVjdElEKS50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlOiBTdWJqZWN0RXBzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGVwcyA9IHNvcnRFcHMocmVzcG9uc2UuZGF0YS5lcHMpXG4gICAgICAgICAgICAgIGdtU2V0VmFsdWUoYGVwc18keyBzdWJqZWN0SUQgfWAsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlcHMsXG4gICAgICAgICAgICAgICAgdGltZTogTnVtYmVyKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMClcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIHJlc29sdmUoeyBlcHMgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGdldFN1YmplY3RFcHMgKHN1YmplY3RJRDogc3RyaW5nKSB7XG4gICAgbGV0IGlucyA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygnZmV0Y2ggYXBpIHJlc3VsdCcpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlucy5odHRwLmdldChgL3N1YmplY3QvJHsgc3ViamVjdElEIH0vZXBgKS50aGVuKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA+PSAzMDApIHtcbiAgICAgICAgICAgIHJlamVjdCh7IHN0YXR1czogcmVzcG9uc2UuZGF0YS5jb2RlLCByZXNwb25zZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdWJqZWN0IChzdWJqZWN0SUQ6IHN0cmluZyk6IFByb21pc2U8U3ViamVjdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYC9zdWJqZWN0LyR7IHN1YmplY3RJRCB9YCkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPj0gMzAwKSB7XG4gICAgICAgICAgICByZWplY3QoeyBzdGF0dXM6IHJlc3BvbnNlLmRhdGEuY29kZSwgcmVzcG9uc2UgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHJlamVjdChlcnJvcilcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgc2V0U3ViamVjdENvbGxlY3Rpb25TdGF0dXMgKHsgc3ViamVjdElELCBzdGF0dXMgfToge1xuICAgIHN1YmplY3RJRDogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAvY29sbGVjdGlvbi8keyBzdWJqZWN0SUQgfS91cGRhdGVgLFxuICAgICAgICBgc3RhdHVzPSR7IHN0YXR1cyB9YCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPj0gMzAwKSB7XG4gICAgICAgICAgICByZWplY3QoeyByZXNwb25zZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxubGV0IGFwaVNlcnZlciA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFVSTFMuYXBpU2VydmVyVVJMLFxuICBhZGFwdGVyLFxuICBoZWFkZXJzOiB7XG4gICAgJ1VzZXItQWdlbnQnOiBnZXRTY3JpcHRVc2VyQWdlbnQoKVxuICB9XG59KVxuXG5jb25zdCBuZXdBcGlTZXJ2ZXIgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBVUkxTLm5ld0FwaVNlcnZlcixcbiAgYWRhcHRlcixcbiAgaGVhZGVyczoge1xuICAgICdVc2VyLUFnZW50JzogZ2V0U2NyaXB0VXNlckFnZW50KClcbiAgfVxufSlcbm5ld0FwaVNlcnZlci5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgcmV0dXJuIHJlc1xufSwgKGVycjogQXhpb3NFcnJvcikgPT4ge1xuICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDMpIHtcbiAgICBvcGVuQXV0aFBhZ2UoKVxuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG59KVxuLy9cbi8vIGFwaVNlcnZlci5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4vLyAgIGNvbmZpZyA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coY29uZmlnKVxuLy8gICAgIHJldHVybiBjb25maWdcbi8vICAgfVxuLy8gKVxuXG5mdW5jdGlvbiBwYXJzZUVwaXNvZGUgKHRpdGxlOiBzdHJpbmcpIHtcbiAgbGV0IHJlID0gL+esrChcXGQrKembhi9nXG4gIGxldCByZXN1bHQgPSByZS5leGVjKHRpdGxlKVxuICBjb25zb2xlLmxvZygncGFyc2UgZXBpc29kZSByZXN1bHQnLCByZXN1bHQpXG5cbiAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocmVzdWx0WzFdLCAxMClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59XG5cbmNsYXNzIEF1dGggaW1wbGVtZW50cyBBdXRoUmVzcG9uc2Uge1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZ1xuICBleHBpcmVzX2luOiBudW1iZXJcbiAgdG9rZW5fdHlwZTogc3RyaW5nXG4gIHNjb3BlPzogc3RyaW5nXG4gIHVzZXJfaWQ6IG51bWJlclxuICByZWZyZXNoX3Rva2VuOiBzdHJpbmdcbiAgYXV0aF90aW1lOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gc2F2ZUF1dGggKGF1dGg6IEF1dGgpOiB2b2lkIHtcbiAgZ21TZXRWYWx1ZSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGgpKVxufVxuXG5mdW5jdGlvbiBpZkF1dGhFeHBpcmVzIChhdXRoOiBBdXRoKTogYm9vbGVhbiB7XG4gIC8qIGF1dGhfdGltZSAyZCAgZXhwaXJlcyBpbiA5ZCAqL1xuICAvKiAgICAgICAgICAgIDJkICsgN2QgLSAxZCA8IDZkID0+IGZhbHNlICovXG4gIC8qICAgICAgICAgICAgMmQgKyA3ZCAtIDFkIDwgOGQgPT4gdHJ1ZSAqL1xuICByZXR1cm4gKHBhcnNlSW50KGF1dGguYXV0aF90aW1lLCAxMCkgKyBhdXRoLmV4cGlyZXNfaW4gLSAyICogMjQgKiA2MCAqIDYwKSA8IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKVxufVxuXG5mdW5jdGlvbiBnZXRBdXRoICgpOiBQcm9taXNlPEF1dGggfCBib29sZWFuPiB7XG4gIGxldCBhdXRoID0gZ21HZXRWYWx1ZSgnYXV0aCcsIGZhbHNlKVxuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBKU09OLnBhcnNlKGF1dGgpXG4gICAgaWYgKGlmQXV0aEV4cGlyZXMoYXV0aCkpIHtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ3JlZnJlc2ggdG9rZW4nKVxuICAgICAgcmV0dXJuIHNlcnZlckFwaS5yZWZyZXNoVG9rZW4oKVxuICAgIH1cbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGF1dGgpXG59XG5cbmNsYXNzIENvbmZpZyB7XG4gIGF1dG9NYXJrV2F0Y2hlZD86IGJvb2xlYW5cbiAgY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1cz86IGJvb2xlYW5cbn1cblxuZnVuY3Rpb24gZ2V0Q29uZmlnICgpOiBDb25maWcge1xuICBsZXQgcmF3Q29uZmlnID0gZ21HZXRWYWx1ZSgnY29uZmlnJywgZmFsc2UpXG4gIGlmIChyYXdDb25maWcpIHtcbiAgICB0cnkge1xuICAgICAgcmF3Q29uZmlnID0gSlNPTi5wYXJzZShyYXdDb25maWcpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZ21TZXRWYWx1ZSgnY29uZmlnJywgJ3t9JylcbiAgICAgIHJhd0NvbmZpZyA9IHt9XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdDb25maWdcbn1cblxudHlwZSBFcHNNYXAgPSB7XG4gIHN1YmplY3RfaWQ6IG51bWJlclxuICBzb3VyY2U6IHN0cmluZ1xuICBzb3VyY2VfZXBfaWQ6IHN0cmluZ1xuICBiZ21fZXBfaWQ6IG51bWJlclxuICBlcGlzb2RlOiBudW1iZXJcbn1bXVxuXG5jbGFzcyBTZXJ2ZXJBcGkge1xuICByZWFkb25seSBodHRwOiBBeGlvc0luc3RhbmNlXG4gIHJlYWRvbmx5IG5ld0h0dHBTZXJ2ZXI6IEF4aW9zSW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5odHRwID0gYXBpU2VydmVyXG4gICAgdGhpcy5uZXdIdHRwU2VydmVyID0gbmV3QXBpU2VydmVyXG4gIH1cblxuICByZWZyZXNoVG9rZW4gKCk6IFByb21pc2U8QXV0aFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMubmV3SHR0cFNlcnZlci5wb3N0KFVSTFMucmVmcmVzaFRva2VuUGF0aClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBCYXNlUmVzcG9uc2U8QXV0aFJlc3BvbnNlPikgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmhhc093blByb3BlcnR5KCdlcnJvcicpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICByZWplY3QoZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNhdmVBdXRoKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgb3BlbkF1dGhQYWdlKClcbiAgICAgICAgICByZWplY3QoZmFsc2UpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlcG9ydF9taXNzaW5nX2VwaXNvZGUgKGJhbmd1bWlJRDogc3RyaW5nLCBlcGlzb2RlSUQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmdtRXBpc29kZUlEOiBzdHJpbmcsIHdlYnNpdGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3YwLjEvcmVwb3J0X21pc3NpbmdfZXBpc29kZScsXG4gICAgICB7XG4gICAgICAgIGJhbmd1bWlJRCxcbiAgICAgICAgZXBpc29kZUlELFxuICAgICAgICBiZ21FcGlzb2RlSUQsXG4gICAgICAgIHdlYnNpdGVcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXBvcnRfbWlzc2luZ19iYW5ndW1pIChiYW5ndW1pSUQ6IHN0cmluZywgc3ViamVjdElEOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzdHJpbmcsIHdlYnNpdGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm5ld0h0dHBTZXJ2ZXIucG9zdCgnL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL3N1Ym1pdC9zdWJqZWN0X2lkJyxcbiAgICAgIHtcbiAgICAgICAgYmFuZ3VtaV9pZDogYmFuZ3VtaUlELFxuICAgICAgICBzdWJqZWN0X2lkOiBzdWJqZWN0SUQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBocmVmOiBnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBzb3VyY2U6IHdlYnNpdGUsXG4gICAgICB9KVxuICB9XG5cbiAgYXN5bmMgZ2V0QmdtU3ViamVjdElEIChpbnN0YW5jZTogQWJzdHJhY3RXZWJzaXRlKTogUHJvbWlzZTx7XG4gICAgYmFuZ3VtaV9pZDogc3RyaW5nXG4gICAgc3ViamVjdF9pZDogbnVtYmVyXG4gIH0+IHtcbiAgICBsZXQgcmVzcG9uc2U6IEJhc2VSZXNwb25zZTx7XG4gICAgICBzb3VyY2U6IHN0cmluZyxcbiAgICAgIGJhbmd1bWlfaWQ6IHN0cmluZyxcbiAgICAgIHN1YmplY3RfaWQ6IG51bWJlcixcbiAgICB9PiA9IGF3YWl0IHRoaXMubmV3SHR0cFNlcnZlci5nZXQoJy9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9zdWJqZWN0X2lkJywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNvdXJjZTogaW5zdGFuY2UubmFtZSxcbiAgICAgICAgYmFuZ3VtaV9pZDogaW5zdGFuY2UuZ2V0QmFuZ3VtaUlEKClcbiAgICAgIH0sXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgYmFuZ3VtaV9pZDogcmVzcG9uc2UuZGF0YS5iYW5ndW1pX2lkLFxuICAgICAgc3ViamVjdF9pZDogcmVzcG9uc2UuZGF0YS5zdWJqZWN0X2lkLFxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEJnbUVwaXNvZGVJRCAoaW5zdGFuY2U6IEFic3RyYWN0V2Vic2l0ZSk6IFByb21pc2U8eyBiZ21fZXBfaWQ6IG51bWJlciB9PiB7XG4gICAgbGV0IHJlczogQmFzZVJlc3BvbnNlPHtcbiAgICAgIHN1YmplY3RfaWQ6IG51bWJlclxuICAgICAgc291cmNlOiBzdHJpbmdcbiAgICAgIHNvdXJjZV9lcF9pZDogc3RyaW5nXG4gICAgICBiZ21fZXBfaWQ6IG51bWJlclxuICAgICAgZXBpc29kZTogbnVtYmVyXG4gICAgfT4gPSBhd2FpdCB0aGlzLm5ld0h0dHBTZXJ2ZXIuZ2V0KGAvZXBfaWQvJHsgaW5zdGFuY2UubmFtZSB9LyR7IGluc3RhbmNlLmdldEVwaXNvZGVJRCgpIH1gKVxuICAgIHJldHVybiB7IGJnbV9lcF9pZDogcmVzLmRhdGEuYmdtX2VwX2lkIH1cbiAgfVxuXG59XG5cbmNvbnN0IHNlcnZlckFwaSA9IG5ldyBTZXJ2ZXJBcGkoKVxuXG5leHBvcnQge1xuICBCZ21BcGksXG4gIGF4aW9zLFxuICBhcGlTZXJ2ZXIsXG4gIHNlcnZlckFwaSxcbiAgcGFyc2VFcGlzb2RlLFxuICBzYXZlQXV0aCxcbiAgZ2V0QXV0aCxcbiAgZ2V0Q29uZmlnLFxuICBzb3J0RXBzLFxufVxuXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhNzQwNTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxUcmltMjFcXFxccHJvalxcXFxiZ20tdHYtYXV0by10cmFja2VyXFxcXHVzZXJzY3JpcHRcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlYTc0MDU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlYTc0MDU4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYTc0MDU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlYTc0MDU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJkaXNhYmxlXCIsXG4gICAgICBjbGFzczoge1xuICAgICAgICBpcWl5aTogdGhpcy53ZWJzaXRlID09PSBcImlxaXlpXCIsXG4gICAgICAgIGJpbGliaWxpOiB0aGlzLndlYnNpdGUgPT09IFwiYmlsaWJpbGlcIlxuICAgICAgfSxcbiAgICAgIGF0dHJzOiB7IGlkOiBcImJnbV90dl90cmFja2VyXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiYmdtX3R2X3RyYWNrZXJfYnRuIGJnbV90dl90cmFja2VyIGJnbV90dl90cmFja2VyX3JhZGl1c1wiLFxuICAgICAgICAgIGNsYXNzOiB7fSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl9idG5fb25fcGFnZVwiIH0sXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS50cmlnZ2VyIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiYmdtLnR2XCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNjb3JlKSArXG4gICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcGlzb2RlTWFya2VkID8gXCLinJNcIiA6IFwiXCIpXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmdtX3R2X3RyYWNrZXJfaW5mb1wiIH0sIFtcbiAgICAgICAgIV92bS5zdWJqZWN0SURcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm90X2ZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRtcFN1YmplY3RJRCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRtcFN1YmplY3RJRFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdWJqZWN0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLmnaHnm65JROaIluiAheWvueW6lOadoeebrumTvuaOpVwiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG1wU3ViamVjdElEIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnRtcFN1YmplY3RJRCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJub3Rmb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVzZXJTdWJtaXRTdWJqZWN0SUQgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgc3VibWl0IHN1YmplY3RcXG4gICAgICAgICAgaWRcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICDkvaDmraPlnKjnnIs6XFxuICAgICAgICBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl90aXRsZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYW5ndW1pTmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg56ysXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl9lcGlzb2RlXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVwaXNvZGVTb3J0KSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICDpm4ZcXG4gICAgICBcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl9saW5rXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLmVwaXNvZGVJRFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vYmdtLnR2L2VwL1wiICsgX3ZtLmVwaXNvZGVJRCxcbiAgICAgICAgICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5ZCQ5qe95pys6ZuGXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uc3ViamVjdElEXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9iZ20udHYvc3ViamVjdC9cIiArIF92bS5zdWJqZWN0SUQsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInN1YmplY3QvXCIgKyBfdm0uX3MoX3ZtLnN1YmplY3RJRCkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2JnbS50di9zdWJqZWN0X3NlYXJjaC9cIiArIF92bS50aXRsZSArIFwiP2NhdD0yXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcInNlYXJjaCBpbiBiZ20udHZcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5zdWJqZWN0SURcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZ21fdHZfdHJhY2tlcl9yYWRpdXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJnbV90dl90cmFja2VyX21hcmtfd2F0Y2hcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS53YXRjaEVwcyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5qCH6K6w5pys6ZuG5Li655yL6L+HXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnbV90dl90cmFja2VyX3JhZGl1c1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfbWFya193YXRjaGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2V0V2F0Y2hQcm9ncmVzcyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi55yL5Yiw5pys6ZuGXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiIH0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBocmVmOiBfdm0ucmVwb3J0VXJsLFxuICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcInBcIiwgW192bS5fdihcIuaKpeWRiumXrumimFwiKV0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX20oMCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0uc3ViamVjdElEXG4gICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdignXCJiYW5ndW1pX2lkXCIgOiBcIicgKyBfdm0uX3MoX3ZtLmJhbmd1bWlJRCkgKyAnXCIsJyldKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0uc3ViamVjdElEXG4gICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdignXCJ0aXRsZVwiIDogXCInICsgX3ZtLl9zKF92bS50aXRsZSkgKyAnXCIsJyldKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0uc3ViamVjdElEXG4gICAgICAgICAgPyBfYyhcInBcIiwgW192bS5fdignXCJ3ZWJzaXRlXCIgOiBcIicgKyBfdm0uX3MoX3ZtLndlYnNpdGUpICsgJ1wiLCcpXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLnN1YmplY3RJRCA/IF9jKFwicFwiLCBbX3ZtLl92KCdcInN1YmplY3RcIiA6IFwiXCIsJyldKSA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlnLmF1dG9NYXJrV2F0Y2hlZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb25maWcuYXV0b01hcmtXYXRjaGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJnbV90dl90cmFja2VyX2F1dG9fbWFya193YXRjaGVkXCIsIHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5jb25maWcuYXV0b01hcmtXYXRjaGVkKVxuICAgICAgICAgICAgICA/IF92bS5faShfdm0uY29uZmlnLmF1dG9NYXJrV2F0Y2hlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICA6IF92bS5jb25maWcuYXV0b01hcmtXYXRjaGVkXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jb25maWcuYXV0b01hcmtXYXRjaGVkLFxuICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY29uZmlnLCBcImF1dG9NYXJrV2F0Y2hlZFwiLCAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICBcImF1dG9NYXJrV2F0Y2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbmZpZywgXCJhdXRvTWFya1dhdGNoZWRcIiwgJCRjKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJiZ21fdHZfdHJhY2tlcl9hdXRvX21hcmtfd2F0Y2hlZFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaSreaUvui/m+W6puWkp+S6jjgwJeaXtuiHquWKqOagh+iusOS4uueci+i/h1wiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbmZpZy5jb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmZpZy5jb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBpZDogXCJiZ21fdHZfdHJhY2tlcl9jb2xsZWN0aW9uX3N0YXR1c193aGVuX3dhdGNoX3N0YXR1c1wiLFxuICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXMpXG4gICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jb25maWcuY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1cywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICA6IF92bS5jb25maWcuY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1c1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXMsXG4gICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNvbmZpZywgXCJjb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXCIsICQkYylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiYmdtX3R2X3RyYWNrZXJfY29sbGVjdGlvbl9zdGF0dXNfd2hlbl93YXRjaF9zdGF0dXNcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5qCH6K6w5pKt5pS+6L+b5bqm5pe25oqK5p2h55uu5qCH6K6w5Li65Zyo55yLXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfbm90aWZpY2F0aW9uXCIgfSB9LFxuICAgICAgICAgIF92bS5fbChfdm0ubWVzc2FnZXMsIGZ1bmN0aW9uKG1lc3NhZ2UsIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhtZXNzYWdlLnRpbWUuZ2V0SG91cnMoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobWVzc2FnZS50aW1lLmdldE1pbnV0ZXMoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiOlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MobWVzc2FnZS50aW1lLmdldFNlY29uZHMoKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MobWVzc2FnZS50ZXh0KSldKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9UcmltMjEvXFxuICAgICAgYmdtLXR2LWF1dG8tdHJhY2tlci9ibG9iL21hc3Rlci9kb2NzL3VzZXJfaW5mb19jb2xsZWN0aW9uLm1kXCIsXG4gICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcInBcIiwgW192bS5fdihcIuWFs+S6juS/oeaBr+aUtumbhlwiKV0pXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9ICQ7IiwibW9kdWxlLmV4cG9ydHMgPSBheGlvczsiXSwic291cmNlUm9vdCI6IiJ9