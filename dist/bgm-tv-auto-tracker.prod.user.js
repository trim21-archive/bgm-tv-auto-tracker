// ==UserScript==
// @name        dev Bgm.tv auto tracker
// @namespace   https://trim21.me/
// @version     1.0.10
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @license     MIT
// @match       https://www.bilibili.com/bangumi/play/*
// @match       http*://www.iqiyi.com/*_*.html*
// @match       https://www.trim21.cn/bgm-tv-auto-tracker/api.v1/oauth_callback*
// @require     https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js
// @require     https://cdn.jsdelivr.net/npm/axios-userscript-adapter@0.0.3/dist/axiosGmxhrAdapter.min.js
// @require     https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js
// @require     file://C:\Users\Trim21\proj\bgm-tv-auto-tracker\dist\bgm-tv-auto-tracker.prod.user.js
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     127.0.0.1
// @connect     api.bgm.tv
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none}input[type=checkbox]{-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}.iqiyi #bgm_tv_tracker_btn_on_page{color:#797979;border-top-left-radius:5px;border-top-right-radius:5px;cursor:pointer;display:block;font-weight:700;font-family:PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;font-size:16px;font-stretch:100%;font-style:normal;font-variant-caps:normal;font-variant-east-asian:normal;-webkit-font-variant-ligatures:normal;font-variant-ligatures:normal;font-variant-numeric:normal;height:38px;line-height:38px;margin:0;white-space:nowrap;overflow-x:hidden;overflow-y:hidden;padding:0 10px}.iqiyi#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline}.iqiyi #bgm_tv_tracker_link a{color:#000}.iqiyi#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.iqiyi .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.iqiyi .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:250px;z-index:1000}.iqiyi .bgm_tv_tracker_info *{max-width:100%}.iqiyi .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px}@media screen and (max-width:1400px){.arc-toolbar .block{padding:0 12px;margin-left:-12px}.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px}#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important}}.bilibili#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px}.bilibili .bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker:hover{color:#00a1d6;border:1px solid #00a1d6}.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in}.bilibili .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.16);box-shadow:0 2px 4px rgba(0,0,0,.16);cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1000}.bilibili .bgm_tv_tracker_info *{max-width:100%}.bilibili .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%}.bilibili .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff}.bilibili .bgm_tv_tracker_info button:active{background:#fff}.bilibili .bgm_tv_tracker_info button:hover{border:2px solid #99bdf7}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
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
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=style&index=0&lang=less&");
content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = __webpack_require__(/*! ./externals */ "./src/js/externals.js");
const vars_1 = __webpack_require__(/*! ./vars */ "./src/js/vars.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
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
            let baseURL = 'https://github.com/' + 'Trim21/bgm-tv-auto-tracker/issues/new';
            let hrefWithoutHash = vars_1.gmUnsafeWindow.location.protocol +
                '//' +
                vars_1.gmUnsafeWindow.location.host +
                vars_1.gmUnsafeWindow.location.pathname;
            let body = `问题页面: [${this.bangumiName}](${hrefWithoutHash})` +
                '\n' +
                `Bangumi ID: ${this.bangumiID}` +
                '\n' +
                `episode: ${this.episode}` +
                '\n' +
                'bgm page: \n' +
                `Subject: https://bgm.tv/subject/${this.subjectID}` +
                '\n' +
                `episode: https://bgm.tv/ep/${this.episodeID}` +
                '\n' +
                '\n<!-- 描述你遇到的问题 -->\n';
            let params = {
                labels: 'bug',
                body
            };
            let query = externals_1.$.param(params);
            return baseURL + '?' + query;
        }
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
                    vm.notify('没找到这集...');
                }
            }, (error) => {
                vm.notify('233');
                vm.notify(JSON.stringify(error));
            });
        },
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
                    status: 'do'
                })
                    .then((response) => {
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
                    let eps = utils_1.sortEps(data.eps.filter((val) => Number.isInteger(Number(val.sort)) && parseInt(val.type, 10) === 0));
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
                        this.notify('error: ' +
                            error.response.data.error +
                            ',' +
                            '应该是因为你在bgm上的状态已经是看到本集');
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
                this.notify('番剧没找到 手动输入吧');
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
                console.debug('get player percent');
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
                console.error('can\'t get play time');
            });
        }, 30 * 1000);
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=template&id=3ea74058&":
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
              _vm._s(_vm.episodeMarked ? "✓" : "") +
              "\n  "
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
                [_vm._v("标记本集为看过\n      ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "bgm_tv_tracker_radius",
                  attrs: { id: "bgm_tv_tracker_mark_watched" },
                  on: { click: _vm.setWatchProgress }
                },
                [_vm._v("看到本集\n      ")]
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
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

/***/ "./src/js/App.vue":
/*!************************!*\
  !*** ./src/js/App.vue ***!
  \************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3ea74058& */ "./src/js/App.vue?vue&type=template&id=3ea74058&");
/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ "./src/js/App.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=less& */ "./src/js/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






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

/***/ "./src/js/App.vue?vue&type=script&lang=ts&":
/*!*************************************************!*\
  !*** ./src/js/App.vue?vue&type=script&lang=ts& ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader??ref--0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/App.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************!*\
  !*** ./src/js/App.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/style-loader/dist/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/App.vue?vue&type=template&id=3ea74058&":
/*!*******************************************************!*\
  !*** ./src/js/App.vue?vue&type=template&id=3ea74058& ***!
  \*******************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3ea74058& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/App.vue?vue&type=template&id=3ea74058&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3ea74058___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/externals.js":
/*!*****************************!*\
  !*** ./src/js/externals.js ***!
  \*****************************/
/*! exports provided: Vue, $, adapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "$", function() { return jquery__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-userscript-adapter */ "axios-userscript-adapter");
/* harmony import */ var axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return axios_userscript_adapter__WEBPACK_IMPORTED_MODULE_2___default.a; });
/*
* this js module is a wrapper that don't let ts-loader
* call `module.var` with `module.default.var` in compiled file
* But `axios.default` is `axios` itself, so no need to wrap axios.
* */







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vars */ "./src/js/vars.ts");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website */ "./src/js/website.ts");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_website__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "./src/js/App.vue");








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
    ].includes(_vars__WEBPACK_IMPORTED_MODULE_2__["gmUnsafeWindow"].__INITIAL_STATE__.mediaInfo.ssType)) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.media-tool-bar.clearfix').prepend('<div id=\'bgm_tv_tracker\'></div>')
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

/***/ "./src/js/utils.ts":
/*!*************************!*\
  !*** ./src/js/utils.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vars_1 = __webpack_require__(/*! ./vars */ "./src/js/vars.ts");
const axios_1 = __webpack_require__(/*! axios */ "axios");
exports.axios = axios_1.default;
const externals_1 = __webpack_require__(/*! ./externals */ "./src/js/externals.js");
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
    return (parseInt(auth.auth_time, 10) + auth.expires_in - 2 * 24 * 60 * 60)
        < Math.round(new Date().getTime() / 1000);
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

/***/ "./src/js/vars.ts":
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

/***/ "./src/js/website.ts":
/*!***************************!*\
  !*** ./src/js/website.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const externals_1 = __webpack_require__(/*! ./externals */ "./src/js/externals.js");
const vars_1 = __webpack_require__(/*! ./vars */ "./src/js/vars.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/js/utils.ts");
class Bilibili {
    constructor() {
        this.name = vars_1.WEBSITE.bilibili;
        this.window = vars_1.gmUnsafeWindow;
    }
    getTitle() {
        return this.window.__INITIAL_STATE__.mediaInfo.title;
    }
    getBangumiID() {
        return this.window.__INITIAL_STATE__.mediaInfo.id.toString();
    }
    getEpisodeID() {
        return this.window.__INITIAL_STATE__.epInfo.ep_id;
    }
    init() {
        const status = this.window.__INITIAL_STATE__;
        const episode = this.window.__INITIAL_STATE__.epList.filter(val => !val.title.includes('.')).findIndex(val => {
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
            if (bangumiID !== cls.getBangumiID()) {
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
            bangumiID = cls.getBangumiID();
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "axios-userscript-adapter":
/*!************************************!*\
  !*** external "axiosGmxhrAdapter" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axiosGmxhrAdapter;

/***/ }),

/***/ "jquery":
/*!********************!*\
  !*** external "$" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC52dWU/ZjNjMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlPzcxZjkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlPzU2YzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC52dWU/Yjk0MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9BcHAudnVlP2U0YWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FwcC52dWU/ZTNkYiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQXBwLnZ1ZT9jYWQ0Iiwid2VicGFjazovLy8uL3NyYy9qcy9leHRlcm5hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdmFycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2Vic2l0ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zR214aHJBZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiJFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQUE7UUFD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SUFBb0I7WUFDcEMsT0FBTztnQkFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7Z0JBQ25DLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSTthQUN0RDtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVrQixzQkFBSzs7Ozs7Ozs7Ozs7O0FDOU94Qix1Qjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQjs7Ozs7Ozs7Ozs7QUNBQSxxQiIsImZpbGUiOiJiZ20tdHYtYXV0by10cmFja2VyLnByb2QudXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNiZ21fdHZfdHJhY2tlci5kaXNhYmxlIC5iZ21fdHZfdHJhY2tlcl9pbmZve2Rpc3BsYXk6bm9uZX1pbnB1dFt0eXBlPWNoZWNrYm94XXstd2Via2l0LWFwcGVhcmFuY2U6YXV0bzstbW96LWFwcGVhcmFuY2U6YXV0bzthcHBlYXJhbmNlOmF1dG99LmlxaXlpICNiZ21fdHZfdHJhY2tlcl9idG5fb25fcGFnZXtjb2xvcjojNzk3OTc5O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmJsb2NrO2ZvbnQtd2VpZ2h0OjcwMDtmb250LWZhbWlseTpQaW5nRmFuZ1NDLVJlZ3VsYXIsSGVsdmV0aWNhLEFyaWFsLE1pY3Jvc29mdCBZYWhlaSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtc3RyZXRjaDoxMDAlO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtZWFzdC1hc2lhbjpub3JtYWw7LXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7aGVpZ2h0OjM4cHg7bGluZS1oZWlnaHQ6MzhweDttYXJnaW46MDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTpoaWRkZW47cGFkZGluZzowIDEwcHh9LmlxaXlpI2JnbV90dl90cmFja2Vye21hcmdpbi1sZWZ0OjE1cHg7cGFkZGluZy1sZWZ0OjE2cHg7cG9zaXRpb246cmVsYXRpdmU7Zm9udC1zaXplOjE1cHg7ZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZX0uaXFpeWkgI2JnbV90dl90cmFja2VyX2xpbmsgYXtjb2xvcjojMDAwfS5pcWl5aSNiZ21fdHZfdHJhY2tlciAuYmdtX3R2X3RyYWNrZXJfaW5mb3tvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTAwJX0uaXFpeWkgLmJnbV90dl90cmFja2VyX2J0bi5iZ21fdHZfdHJhY2tlcnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTRweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoxOHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMHB4IWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4xcyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4xcyBlYXNlLWlufS5pcWl5aSAuYmdtX3R2X3RyYWNrZXJfaW5mb3twYWRkaW5nOjhweDttYXJnaW4tdG9wOjVweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjZTVlOWVmO2N1cnNvcjpkZWZhdWx0O2hlaWdodDphdXRvO2xlZnQ6LTFweDtsaW5lLWhlaWdodDpub3JtYWw7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpsZWZ0O3RvcDo3MHB4O3doaXRlLXNwYWNlOm5vcm1hbDt3aWR0aDoyNTBweDt6LWluZGV4OjEwMDB9LmlxaXlpIC5iZ21fdHZfdHJhY2tlcl9pbmZvICp7bWF4LXdpZHRoOjEwMCV9LmlxaXlpIC5iZ21fdHZfdHJhY2tlcl9pbmZvIGJ1dHRvbntwYWRkaW5nOjRweCA2cHg7bGluZS1oZWlnaHQ6MTRweDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW46NHB4fSNiYW5ndW1pX2RldGFpbCAuYmFuZ3VtaS1pbmZvLmNsZWFyZml4IC5pbmZvLXJpZ2h0IC5pbmZvLXRpdGxlLmNsZWFyZml4IGEgaDJ7d2lkdGg6MzgwcHh9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNDAwcHgpey5hcmMtdG9vbGJhciAuYmxvY2t7cGFkZGluZzowIDEycHg7bWFyZ2luLWxlZnQ6LTEycHh9LnZpZGVvLXRvb2xiYXItbW9kdWxlIC5idG4taXRlbXtwYWRkaW5nOjAgMCAwIDYwcHghaW1wb3J0YW50O21hcmdpbi1sZWZ0Oi0xMnB4fSNiYW5ndW1pX2RldGFpbCAuYmFuZ3VtaS1pbmZvLmNsZWFyZml4IC5pbmZvLXJpZ2h0IC5pbmZvLXRpdGxlLmNsZWFyZml4IGEgaDJ7d2lkdGg6MjAwcHghaW1wb3J0YW50fX0uYmlsaWJpbGkjYmdtX3R2X3RyYWNrZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7ZmxvYXQ6bGVmdDttYXJnaW4tcmlnaHQ6MjBweH0uYmlsaWJpbGkgLmJnbV90dl90cmFja2VyX3JhZGl1c3tib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNlNWU5ZWZ9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9idG4uYmdtX3R2X3RyYWNrZXI6aG92ZXJ7Y29sb3I6IzAwYTFkNjtib3JkZXI6MXB4IHNvbGlkICMwMGExZDZ9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9idG4uYmdtX3R2X3RyYWNrZXJ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2NvbG9yOiM2ZDc1N2E7ZmxvYXQ6bGVmdDtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTRweDtoZWlnaHQ6MjhweDtsaW5lLWhlaWdodDoyOHB4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMHB4IWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb246YWxsIC4xcyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4xcyBlYXNlLWlufS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mb3twYWRkaW5nOjhweDttYXJnaW4tdG9wOjVweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czowIDAgNHB4IDRweDtib3JkZXI6MXB4IHNvbGlkICNlNWU5ZWY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDRweCByZ2JhKDAsMCwwLC4xNik7Ym94LXNoYWRvdzowIDJweCA0cHggcmdiYSgwLDAsMCwuMTYpO2N1cnNvcjpkZWZhdWx0O2hlaWdodDphdXRvO2xlZnQ6LTFweDtsaW5lLWhlaWdodDpub3JtYWw7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpsZWZ0O3RvcDo3MHB4O3doaXRlLXNwYWNlOm5vcm1hbDt3aWR0aDozMDBweDt6LWluZGV4OjEwMDB9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9pbmZvICp7bWF4LXdpZHRoOjEwMCV9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9pbmZve29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvO3RvcDoxMDAlfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mbyBidXR0b257cGFkZGluZzo0cHggNnB4O2xpbmUtaGVpZ2h0OjE0cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjRweDtib3JkZXI6MnB4IHNvbGlkICNmZmZ9LmJpbGliaWxpIC5iZ21fdHZfdHJhY2tlcl9pbmZvIGJ1dHRvbjphY3RpdmV7YmFja2dyb3VuZDojZmZmfS5iaWxpYmlsaSAuYmdtX3R2X3RyYWNrZXJfaW5mbyBidXR0b246aG92ZXJ7Ym9yZGVyOjJweCBzb2xpZCAjOTliZGY3fVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW2ldKTtcblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIik7XG5jb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucykge1xuICB2YXIgc3R5bGVzID0gW107XG4gIHZhciBuZXdTdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNzcyA9IGl0ZW1bMV07XG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXTtcbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXTtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9O1xuXG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHBhcnRzOiBbcGFydF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgdmFyIGogPSAwO1xuXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKys7XG5cbiAgICAgIGZvciAoOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICByZWZzOiAxLFxuICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMob3B0aW9ucy5hdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zLmF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hdHRyaWJ1dGVzID0gdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLmF0dHJpYnV0ZXMgOiB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV07XG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuICAgICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICAgIGRvbVN0eWxlLnJlZnMtLTtcbiAgICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICB2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgYWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbWF5UmVtb3ZlLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9kb21TdHlsZSA9IG1heVJlbW92ZVtfaV07XG5cbiAgICAgIGlmIChfZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9kb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9kb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW19kb21TdHlsZS5pZF07XG4gICAgICB9XG4gICAgfVxuICB9O1xufTsiLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBWdWUsICQgfSBmcm9tICcuL2V4dGVybmFscydcblxuaW1wb3J0IHtcbiAgZ21HZXRWYWx1ZSxcbiAgZ21PcGVuSW5UYWIsXG4gIGdtU2V0VmFsdWUsXG4gIGdtVW5zYWZlV2luZG93LFxuICBVUkxTXG59IGZyb20gJy4vdmFycydcbmltcG9ydCB7IGdldENvbmZpZywgc2VydmVyQXBpLCBzb3J0RXBzIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IFN1YmplY3RSZXNwb25zZSB9IGZyb20gJy4uL2xpYi9yZXNwb25zZXMnXG5cbmxldCBjb2xsZWN0aW9uID0gZ21HZXRWYWx1ZSgnY29sbGVjdGlvbicsIGZhbHNlKVxuXG5pZiAoIWNvbGxlY3Rpb24pIHtcbiAgY29sbGVjdGlvbiA9IHt9XG59IGVsc2Uge1xuICBjb2xsZWN0aW9uID0gSlNPTi5wYXJzZShjb2xsZWN0aW9uKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgZGF0YSAoKSB7XG4gICAgbGV0IHdlYnNpdGUgPSB0aGlzLiR3ZWJzaXRlLm5hbWVcbiAgICBsZXQgY29uZmlnID0gZ2V0Q29uZmlnKClcblxuICAgIHJldHVybiB7XG4gICAgICBlcGlzb2RlTm90TWF0Y2g6IGZhbHNlLFxuICAgICAgdG1wRXBpc29kZUlEOiBudWxsLFxuXG4gICAgICB0bXBTdWJqZWN0SUQ6IG51bGwsXG4gICAgICBtZXNzYWdlczogW10sXG4gICAgICBiYW5ndW1pSUQ6IG51bGwsXG4gICAgICBiYW5ndW1pTmFtZTogbnVsbCxcbiAgICAgIC8vIGlzIGVwaXNvZGUgc3RhcnRzIHdpdGggMSxcbiAgICAgIC8vIGxpa2UgaHR0cHM6Ly93d3cuYmlsaWJpbGkuY29tL2Jhbmd1bWkvcGxheS9lcDIwMDE2N1xuICAgICAgZXBpc29kZVN0YXJ0V2l0aDogbnVsbCxcbiAgICAgIC8vIGVwaXNvZGUgaWQgaW4gYmdtLnR2XG4gICAgICBlcGlzb2RlSUQ6IG51bGwsXG4gICAgICBlcGlzb2RlOiBudWxsLFxuICAgICAgZXBpc29kZVNvcnQ6IG51bGwsXG4gICAgICB0aXRsZTogbnVsbCxcbiAgICAgIHN1YmplY3RJRDogbnVsbCxcbiAgICAgIHNjb3JlOiAnJyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBhdXRvTWFya1dhdGNoZWQ6IGNvbmZpZy5hdXRvTWFya1dhdGNoZWQsXG4gICAgICAgIGNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXM6IGNvbmZpZy5jb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXG4gICAgICB9LFxuICAgICAgd2F0Y2hQZXJjZW50OiAwLFxuICAgICAgZXBpc29kZU1hcmtlZDogZmFsc2UsXG4gICAgICB3ZWJzaXRlXG4gICAgICAvLyAkd2Vic2l0ZTogbnVsbCxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcmVwb3J0VXJsICgpIHtcbiAgICAgIGxldCBiYXNlVVJMID1cbiAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS8nICsgJ1RyaW0yMS9iZ20tdHYtYXV0by10cmFja2VyL2lzc3Vlcy9uZXcnXG4gICAgICBsZXQgaHJlZldpdGhvdXRIYXNoID1cbiAgICAgICAgZ21VbnNhZmVXaW5kb3cubG9jYXRpb24ucHJvdG9jb2wgK1xuICAgICAgICAnLy8nICtcbiAgICAgICAgZ21VbnNhZmVXaW5kb3cubG9jYXRpb24uaG9zdCArXG4gICAgICAgIGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICBsZXQgYm9keSA9XG4gICAgICAgIGDpl67popjpobXpnaI6IFskeyB0aGlzLmJhbmd1bWlOYW1lIH1dKCR7IGhyZWZXaXRob3V0SGFzaCB9KWAgK1xuICAgICAgICAnXFxuJyArXG4gICAgICAgIGBCYW5ndW1pIElEOiAkeyB0aGlzLmJhbmd1bWlJRCB9YCArXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgYGVwaXNvZGU6ICR7IHRoaXMuZXBpc29kZSB9YCArXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgJ2JnbSBwYWdlOiBcXG4nICtcbiAgICAgICAgYFN1YmplY3Q6IGh0dHBzOi8vYmdtLnR2L3N1YmplY3QvJHsgdGhpcy5zdWJqZWN0SUQgfWAgK1xuICAgICAgICAnXFxuJyArXG4gICAgICAgIGBlcGlzb2RlOiBodHRwczovL2JnbS50di9lcC8keyB0aGlzLmVwaXNvZGVJRCB9YCArXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgJ1xcbjwhLS0g5o+P6L+w5L2g6YGH5Yiw55qE6Zeu6aKYIC0tPlxcbidcblxuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgbGFiZWxzOiAnYnVnJyxcbiAgICAgICAgYm9keVxuICAgICAgfVxuXG4gICAgICBsZXQgcXVlcnkgPSAkLnBhcmFtKHBhcmFtcylcblxuICAgICAgcmV0dXJuIGJhc2VVUkwgKyAnPycgKyBxdWVyeVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIGhhbmRsZXIgKHZhbCkge1xuICAgICAgICAvLyB0aGlzLm5vdGlmeShKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpKVxuICAgICAgICBnbVNldFZhbHVlKCdjb25maWcnLCBKU09OLnN0cmluZ2lmeSh2YWwpKVxuICAgICAgfSxcbiAgICAgIGRlZXA6IHRydWVcbiAgICB9LFxuICAgIHN1YmplY3RJRCAodmFsKSB7XG4gICAgICB0aGlzLmVwaXNvZGVNYXJrZWQgPSBmYWxzZVxuICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLiRiZ21BcGkuZ2V0U3ViamVjdCh2YWwpLnRoZW4oKHJlc3BvbnNlOiBTdWJqZWN0UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB2bS5zY29yZSA9ICcgJyArIHJlc3BvbnNlLmRhdGEucmF0aW5nLnNjb3JlXG4gICAgICAgICAgdm0uYmFuZ3VtaU5hbWUgPSByZXNwb25zZS5kYXRhLm5hbWVfY24gfHwgcmVzcG9uc2UuZGF0YS5uYW1lXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBiYW5ndW1pSUQgKCkge1xuICAgICAgdGhpcy5lcGlzb2RlTWFya2VkID0gZmFsc2VcbiAgICB9LFxuICAgIGVwaXNvZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuZXBpc29kZU1hcmtlZCA9IGZhbHNlXG4gICAgICBpZiAoIXRoaXMuc3ViamVjdElEKSByZXR1cm5cbiAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgLy8gc2VydmVyQXBpLmdldEJnbUVwaXNvZGVJRCh0aGlzLiR3ZWJzaXRlKS50aGVuKFxuICAgICAgLy8gICBkYXRhID0+IHtcbiAgICAgIC8vICAgICB0aGlzLmVwaXNvZGVJRCA9IGRhdGEuYmdtX2VwX2lkXG4gICAgICAvLyAgICAgdGhpcy5lcGlzb2RlTm90TWF0Y2ggPSBmYWxzZVxuICAgICAgLy9cbiAgICAgIC8vICAgICB2bS4kYmdtQXBpLmdldEVwcyh0aGlzLnN1YmplY3RJRCkudGhlbihcbiAgICAgIC8vICAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIC8vICAgICAgICAgbGV0IGVwcyA9IGRhdGEuZXBzLmZpbHRlcigodmFsOiB7IGlkOiBudW1iZXIgfSkgPT4gdmFsLmlkID09PSBwYXJzZUludCh2bS5lcGlzb2RlSUQsIDEwKSlcbiAgICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAgIC8vICAgICAgICAgICB0aGlzLmVwaXNvZGVTb3J0ID0gZXBzWzBdLnNvcnRcbiAgICAgIC8vICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gICAgICAgICAgIHZtLm5vdGlmeSgn5rKh5om+5Yiw6L+Z6ZuGLi4uJylcbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgICAgIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAvLyAgICAgICAgIHZtLm5vdGlmeSgnMjMzJylcbiAgICAgIC8vICAgICAgICAgdm0ubm90aWZ5KEpTT04uc3RyaW5naWZ5KGVycm9yKSlcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICApXG4gICAgICAvL1xuICAgICAgLy8gICB9LFxuICAgICAgLy8gICAoKSA9PiB7XG4gICAgICB0aGlzLmVwaXNvZGVOb3RNYXRjaCA9IHRydWVcblxuICAgICAgdGhpcy51cGRhdGVFcGlzb2RlKClcblxuICAgICAgLy8gfVxuICAgICAgLy8gKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZUVwaXNvZGUgKCkge1xuICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgdGhpcy4kYmdtQXBpLmdldEVwcyh0aGlzLnN1YmplY3RJRCkudGhlbihcbiAgICAgICAgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBlcGlzb2RlID0gdm0uZXBpc29kZVxuICAgICAgICAgIGxldCBlcHMgPSBkYXRhLmVwcy5maWx0ZXIoXG4gICAgICAgICAgICAodmFsOiB7IHNvcnQ6IHN0cmluZzsgdHlwZTogc3RyaW5nIH0pID0+XG4gICAgICAgICAgICAgIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHZhbC5zb3J0KSkgJiYgcGFyc2VJbnQodmFsLnR5cGUsIDEwKSA9PT0gMFxuICAgICAgICAgIClcblxuICAgICAgICAgIGVwcyA9IHNvcnRFcHMoZXBzKVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmVwaXNvZGVJRCA9IGVwc1tlcGlzb2RlIC0gMV0uaWRcblxuICAgICAgICAgICAgaWYgKHRoaXMuZXBpc29kZVN0YXJ0V2l0aCkge1xuICAgICAgICAgICAgICB0aGlzLmVwaXNvZGVTb3J0ID1cbiAgICAgICAgICAgICAgICBwYXJzZUludCh0aGlzLmVwaXNvZGUpICsgcGFyc2VJbnQodGhpcy5lcGlzb2RlU3RhcnRXaXRoKSAtIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZXBpc29kZVNvcnQgPSB0aGlzLmVwaXNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2bS5ub3RpZnkoJ+ayoeaJvuWIsOi/membhi4uLicpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHZtLm5vdGlmeSgnMjMzJylcbiAgICAgICAgICB2bS5ub3RpZnkoSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSxcbiAgICB1c2VyU3VibWl0U3ViamVjdElEICgpIHtcbiAgICAgIGlmICh0aGlzLnRtcFN1YmplY3RJRCkge1xuICAgICAgICBpZiAodGhpcy50bXBTdWJqZWN0SUQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgY29uc3QgbXlVUkwgPSBuZXcgVVJMKHRoaXMudG1wU3ViamVjdElEKVxuICAgICAgICAgIGNvbnN0IHAgPSBteVVSTC5wYXRobmFtZVxuICAgICAgICAgIGNvbnN0IHBMaXN0ID0gcC5zcGxpdCgnLycpXG4gICAgICAgICAgdGhpcy50bXBTdWJqZWN0SUQgPSBwTGlzdFtwTGlzdC5sZW5ndGggLSAxXVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ViamVjdElEID0gdGhpcy50bXBTdWJqZWN0SURcbiAgICAgICAgc2VydmVyQXBpLnJlcG9ydF9taXNzaW5nX2Jhbmd1bWkoXG4gICAgICAgICAgdGhpcy5iYW5ndW1pSUQsXG4gICAgICAgICAgdGhpcy5zdWJqZWN0SUQsXG4gICAgICAgICAgdGhpcy50aXRsZSxcbiAgICAgICAgICB0aGlzLndlYnNpdGVcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2VyU3VibWl0RXBpc29kZUlEICgpIHtcbiAgICAvLyAgIGlmICh0aGlzLnRtcEVwaXNvZGVJRCkge1xuICAgIC8vICAgICBpZiAodGhpcy50bXBFcGlzb2RlSUQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgLy8gICAgICAgY29uc3QgbXlVUkwgPSBuZXcgVVJMKHRoaXMudG1wRXBpc29kZUlEKVxuICAgIC8vICAgICAgIGNvbnN0IHAgPSBteVVSTC5wYXRobmFtZVxuICAgIC8vICAgICAgIGNvbnN0IHBMaXN0ID0gcC5zcGxpdCgnLycpXG4gICAgLy8gICAgICAgdGhpcy50bXBFcGlzb2RlSUQgPSBwTGlzdFtwTGlzdC5sZW5ndGggLSAxXVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuZXBpc29kZUlEID0gdGhpcy50bXBFcGlzb2RlSURcbiAgICAvLyAgICAgc2VydmVyQXBpLnJlcG9ydF9taXNzaW5nX2VwaXNvZGUoXG4gICAgLy8gICAgICAgdGhpcy5iYW5ndW1pSUQudG9TdHJpbmcoKSxcbiAgICAvLyAgICAgICB0aGlzLiR3ZWJzaXRlLmVwaXNvZGVJRC50b1N0cmluZygpLFxuICAgIC8vICAgICAgIHRoaXMuZXBpc29kZUlELFxuICAgIC8vICAgICAgIHRoaXMud2Vic2l0ZVxuICAgIC8vICAgICApXG4gICAgLy8gICB9XG4gICAgLy8gfSxcblxuICAgIG5vdGlmeSAobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKVxuICAgICAgdGhpcy5tZXNzYWdlcy51bnNoaWZ0KHtcbiAgICAgICAgdGltZTogbm93LFxuICAgICAgICB0ZXh0OiBtZXNzYWdlXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlcylcbiAgICB9LFxuXG4gICAgY29sbGVjdFN1YmplY3QgKHN1YmplY3RJRDogYW55KSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXMpIHJldHVyblxuICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgaWYgKCFjb2xsZWN0aW9uW3N1YmplY3RJRF0pIHtcbiAgICAgICAgdGhpcy4kYmdtQXBpXG4gICAgICAgICAgLnNldFN1YmplY3RDb2xsZWN0aW9uU3RhdHVzKHtcbiAgICAgICAgICAgIHN1YmplY3RJRCxcbiAgICAgICAgICAgIHN0YXR1czogJ2RvJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICB2bS5ub3RpZnkoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKVxuICAgICAgICAgICAgICAgIHZtLm5vdGlmeShyZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLm5vdGlmeSgnYWRkIHRoaXMgYmFuZ3VtaSB0byB5b3VyIGNvbGxlY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25bc3ViamVjdElEXSA9IHRydWVcbiAgICAgICAgICAgICAgICBnbVNldFZhbHVlKCdjb2xsZWN0aW9uJywgSlNPTi5zdHJpbmdpZnkoY29sbGVjdGlvbikpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4gdm0ubm90aWZ5KGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsKVxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJpZ2dlciAoKSB7XG4gICAgICAkKCcuYmdtX3R2X3RyYWNrZXJfaW5mbycpLnRvZ2dsZSgnZmFzdCcpXG4gICAgfSxcblxuICAgIGFzeW5jIHdhdGNoRXBzICgpIHtcbiAgICAgIHRoaXMuY29sbGVjdFN1YmplY3QodGhpcy5zdWJqZWN0SUQpXG4gICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHZtLiRiZ21BcGkuZ2V0RXBzKHRoaXMuc3ViamVjdElEKVxuICAgICAgICBsZXQgZXBpc29kZSA9IHZtLmVwaXNvZGVcbiAgICAgICAgbGV0IGVwcyA9IHNvcnRFcHMoXG4gICAgICAgICAgZGF0YS5lcHMuZmlsdGVyKFxuICAgICAgICAgICAgKHZhbDogeyBzb3J0OiBzdHJpbmc7IHR5cGU6IHN0cmluZyB9KSA9PlxuICAgICAgICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKE51bWJlcih2YWwuc29ydCkpICYmIHBhcnNlSW50KHZhbC50eXBlLCAxMCkgPT09IDBcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgbGV0IGVwID0gZXBzW2VwaXNvZGUgLSAxXS5pZFxuICAgICAgICBhd2FpdCB2bS4kYmdtQXBpLnNldEVwaXNvZGVXYXRjaGVkKGVwKVxuICAgICAgICB0aGlzLmVwaXNvZGVNYXJrZWQgPSB0cnVlXG4gICAgICAgIHZtLm5vdGlmeSgnbWFyayB5b3VyIHN0YXR1cyBzdWNjZXNzZnVsbHknKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgdm0ubm90aWZ5KCfmjojmnYPlt7Lov4fmnJ8g6K+36YeN5paw5o6I5p2DJylcbiAgICAgICAgICBnbU9wZW5JblRhYihVUkxTLmF1dGhVUkwsIHsgYWN0aXZlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgdm0ubm90aWZ5KGVycm9yLnRvU3RyaW5nKCkpXG4gICAgICAgIHZtLm5vdGlmeShKU09OLnN0cmluZ2lmeShlcnJvcikpXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBzZXRXYXRjaFByb2dyZXNzICgpIHtcbiAgICAgIGxldCBlcGlzb2RlID0gdGhpcy5lcGlzb2RlXG4gICAgICB0aGlzLmNvbGxlY3RTdWJqZWN0KHRoaXMuc3ViamVjdElEKVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy4kYmdtQXBpLnNldFN1YmplY3RQcm9ncmVzcyh0aGlzLnN1YmplY3RJRCwgZXBpc29kZSlcbiAgICAgICAgdGhpcy5ub3RpZnkoJ21hcmsgc3RhdHVzIHN1Y2Nlc3NmdWwnKVxuICAgICAgICB0aGlzLmVwaXNvZGVNYXJrZWQgPSB0cnVlXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YS5jb2RlID09PSA0MDApIHtcbiAgICAgICAgICB0aGlzLm5vdGlmeShcbiAgICAgICAgICAgICdlcnJvcjogJyArXG4gICAgICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yICtcbiAgICAgICAgICAgICcsJyArXG4gICAgICAgICAgICAn5bqU6K+l5piv5Zug5Li65L2g5ZyoYmdt5LiK55qE54q25oCB5bey57uP5piv55yL5Yiw5pys6ZuGJ1xuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vdGlmeSgnZXJyb3I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvci5yZXNwb25zZSkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIC8vIHNlcnZlckFwaS5nZXRCZ21FcGlzb2RlSUQodGhpcy4kd2Vic2l0ZSkudGhlbihcbiAgICAvLyAgIChyZXM6IGFueSkgPT4ge30sXG4gICAgLy8gICAoZXJyOiBhbnkpID0+IHtcbiAgICAvLyAgICAgdGhpcy5ub3RpZnkoJ+S4jeiDveeyvuehruWumuS9jei/meaYr+WTquS4gOmbhiwg5Y+q6IO95qC55o2u6ZuG5pWw5p2l54yc5LqGLCDlj6/og73njJznmoTkuI3lpKrlr7kuJylcbiAgICB0aGlzLmVwaXNvZGVOb3RNYXRjaCA9IHRydWVcbiAgICAvLyB9XG4gICAgLy8gKVxuXG4gICAgLy8gZXBpc29kZS1pdGVtXG4gICAgdGhpcy4kd2Vic2l0ZS5pbml0KCkudGhlbihcbiAgICAgIChkYXRhOiBJbml0UmVzdWx0KSA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgZXBpc29kZUlELCAvLyB0b2RvXG4gICAgICAgICAgZXBpc29kZUluZGV4LFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGJhbmd1bWlJRCxcbiAgICAgICAgICBlcGlzb2RlU3RhcnRXaXRoXG4gICAgICAgIH0gPSBkYXRhXG4gICAgICAgIHRoaXMuZXBpc29kZSA9IGVwaXNvZGVJbmRleFxuICAgICAgICB0aGlzLmVwaXNvZGVJRCA9IGVwaXNvZGVJRFxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5iYW5ndW1pSUQgPSBiYW5ndW1pSURcbiAgICAgICAgdGhpcy5lcGlzb2RlU3RhcnRXaXRoID0gZXBpc29kZVN0YXJ0V2l0aFxuXG4gICAgICAgIHNlcnZlckFwaS5nZXRCZ21TdWJqZWN0SUQodGhpcy4kd2Vic2l0ZSkudGhlbihcbiAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWJqZWN0SUQgPSByZXMuc3ViamVjdF9pZFxuICAgICAgICAgICAgdGhpcy51cGRhdGVFcGlzb2RlKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9LFxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgdGhpcy5ub3RpZnkoJ+eVquWJp+ayoeaJvuWIsCDmiYvliqjovpPlhaXlkKcnKVxuICAgICAgICB9XG4gICAgICAgIGxldCB7IGVwaXNvZGUsIHRpdGxlLCBiYW5ndW1pSUQsIGVwaXNvZGVTdGFydFdpdGggfSA9IGVycm9yXG4gICAgICAgIHRoaXMuZXBpc29kZVN0YXJ0V2l0aCA9IGVwaXNvZGVTdGFydFdpdGhcbiAgICAgICAgdGhpcy5lcGlzb2RlID0gcGFyc2VJbnQoZXBpc29kZSwgMTApXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmJhbmd1bWlJRCA9IGJhbmd1bWlJRFxuICAgICAgfVxuICAgIClcblxuICAgIGxldCB2bSA9IHRoaXNcbiAgICB0aGlzLiR3ZWJzaXRlLmRldGVjdEVwaXNvZGVDaGFuZ2UoXG4gICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnN1YmplY3RJRCkge1xuICAgICAgICAgIHZtLnN1YmplY3RJRCA9IGRhdGEuc3ViamVjdElEXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZXBpc29kZSkge1xuICAgICAgICAgIHZtLmVwaXNvZGUgPSBkYXRhLmVwaXNvZGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YS5iYW5ndW1pSUQpIHtcbiAgICAgICAgICB2bS5iYW5ndW1pSUQgPSBkYXRhLmJhbmd1bWlJRFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgdm0uZXBpc29kZSA9IGVycm9yLmVwaXNvZGVcbiAgICAgICAgaWYgKGVycm9yLmJhbmd1bWlJRCAhPT0gdm0uYmFuZ3VtaUlEKSB7XG4gICAgICAgICAgdm0uc3ViamVjdElEID0gdW5kZWZpbmVkXG4gICAgICAgICAgdm0uYmFuZ3VtaUlEID0gZXJyb3IuYmFuZ3VtaUlEXG4gICAgICAgICAgdm0udGl0bGUgPSBlcnJvci50aXRsZVxuICAgICAgICAgIHZtLmVwaXNvZGVTdGFydFdpdGggPSBlcnJvci5lcGlzb2RlU3RhcnRXaXRoXG4gICAgICAgICAgdm0uZXBpc29kZSA9IGVycm9yLmVwaXNvZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuJHdlYnNpdGVcbiAgICAgICAgLmdldFBsYXllckluZm8oKVxuICAgICAgICAudGhlbigoaW5mbzogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IHsgcGVyY2VudCwgZHVyYXRpb24gfSA9IGluZm9cbiAgICAgICAgICBjb25zb2xlLmRlYnVnKCdnZXQgcGxheWVyIHBlcmNlbnQnKVxuICAgICAgICAgIHRoaXMud2F0Y2hQZXJjZW50ID0gcGVyY2VudFxuICAgICAgICAgIGlmIChwZXJjZW50ID4gMC44ICYmIGR1cmF0aW9uID4gMTIwKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHRoaXMuY29uZmlnLmF1dG9NYXJrV2F0Y2hlZCAmJlxuICAgICAgICAgICAgICB0aGlzLnN1YmplY3RJRCAmJlxuICAgICAgICAgICAgICAhdGhpcy5lcGlzb2RlTWFya2VkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5lcGlzb2RlTWFya2VkID0gdHJ1ZVxuICAgICAgICAgICAgICB0aGlzLndhdGNoRXBzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignY2FuXFwndCBnZXQgcGxheSB0aW1lJylcbiAgICAgICAgfSlcbiAgICB9LCAzMCAqIDEwMDApXG4gIH1cbn0pXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZGlzYWJsZVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgaXFpeWk6IHRoaXMud2Vic2l0ZSA9PT0gXCJpcWl5aVwiLFxuICAgICAgICBiaWxpYmlsaTogdGhpcy53ZWJzaXRlID09PSBcImJpbGliaWxpXCJcbiAgICAgIH0sXG4gICAgICBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlclwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJnbV90dl90cmFja2VyX2J0biBiZ21fdHZfdHJhY2tlciBiZ21fdHZfdHJhY2tlcl9yYWRpdXNcIixcbiAgICAgICAgICBjbGFzczoge30sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfYnRuX29uX3BhZ2VcIiB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udHJpZ2dlciB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcImJnbS50dlwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zY29yZSkgK1xuICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uZXBpc29kZU1hcmtlZCA/IFwi4pyTXCIgOiBcIlwiKSArXG4gICAgICAgICAgICAgIFwiXFxuICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJnbV90dl90cmFja2VyX2luZm9cIiB9LCBbXG4gICAgICAgICFfdm0uc3ViamVjdElEXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vdF9mb3VuZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50bXBTdWJqZWN0SUQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0bXBTdWJqZWN0SURcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3ViamVjdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi5p2h55uuSUTmiJbogIXlr7nlupTmnaHnm67pk77mjqVcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRtcFN1YmplY3RJRCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS50bXBTdWJqZWN0SUQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm90Zm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51c2VyU3VibWl0U3ViamVjdElEIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIHN1Ym1pdCBzdWJqZWN0XFxuICAgICAgICAgIGlkXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg5L2g5q2j5Zyo55yLOlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfdGl0bGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFuZ3VtaU5hbWUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIOesrFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfZXBpc29kZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcGlzb2RlU29ydCkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAg6ZuGXFxuICAgICAgXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfbGlua1wiIH0gfSwgW1xuICAgICAgICAgIF92bS5lcGlzb2RlSURcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL2JnbS50di9lcC9cIiArIF92bS5lcGlzb2RlSUQsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuWQkOanveacrOmbhlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnN1YmplY3RJRFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vYmdtLnR2L3N1YmplY3QvXCIgKyBfdm0uc3ViamVjdElELFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJzdWJqZWN0L1wiICsgX3ZtLl9zKF92bS5zdWJqZWN0SUQpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9iZ20udHYvc3ViamVjdF9zZWFyY2gvXCIgKyBfdm0udGl0bGUgKyBcIj9jYXQ9MlwiLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJzZWFyY2ggaW4gYmdtLnR2XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uc3ViamVjdElEXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmdtX3R2X3RyYWNrZXJfcmFkaXVzXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl9tYXJrX3dhdGNoXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ud2F0Y2hFcHMgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuagh+iusOacrOmbhuS4uueci+i/h1xcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZ21fdHZfdHJhY2tlcl9yYWRpdXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImJnbV90dl90cmFja2VyX21hcmtfd2F0Y2hlZFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNldFdhdGNoUHJvZ3Jlc3MgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIueci+WIsOacrOmbhlxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjogX3ZtLnJlcG9ydFVybCxcbiAgICAgICAgICAgICAgcmVsOiBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIixcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoXCLmiqXlkYrpl67pophcIildKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5zdWJqZWN0SURcbiAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KCdcImJhbmd1bWlfaWRcIiA6IFwiJyArIF92bS5fcyhfdm0uYmFuZ3VtaUlEKSArICdcIiwnKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5zdWJqZWN0SURcbiAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KCdcInRpdGxlXCIgOiBcIicgKyBfdm0uX3MoX3ZtLnRpdGxlKSArICdcIiwnKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgIV92bS5zdWJqZWN0SURcbiAgICAgICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KCdcIndlYnNpdGVcIiA6IFwiJyArIF92bS5fcyhfdm0ud2Vic2l0ZSkgKyAnXCIsJyldKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICFfdm0uc3ViamVjdElEID8gX2MoXCJwXCIsIFtfdm0uX3YoJ1wic3ViamVjdFwiIDogXCJcIiwnKV0pIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb25maWcuYXV0b01hcmtXYXRjaGVkLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNvbmZpZy5hdXRvTWFya1dhdGNoZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYmdtX3R2X3RyYWNrZXJfYXV0b19tYXJrX3dhdGNoZWRcIiwgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmNvbmZpZy5hdXRvTWFya1dhdGNoZWQpXG4gICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jb25maWcuYXV0b01hcmtXYXRjaGVkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgIDogX3ZtLmNvbmZpZy5hdXRvTWFya1dhdGNoZWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNvbmZpZy5hdXRvTWFya1dhdGNoZWQsXG4gICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5jb25maWcsIFwiYXV0b01hcmtXYXRjaGVkXCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXV0b01hcmtXYXRjaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY29uZmlnLCBcImF1dG9NYXJrV2F0Y2hlZFwiLCAkJGMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImJnbV90dl90cmFja2VyX2F1dG9fbWFya193YXRjaGVkXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5pKt5pS+6L+b5bqm5aSn5LqOODAl5pe26Ieq5Yqo5qCH6K6w5Li655yL6L+HXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29uZmlnLmNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImJnbV90dl90cmFja2VyX2NvbGxlY3Rpb25fc3RhdHVzX3doZW5fd2F0Y2hfc3RhdHVzXCIsXG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5jb25maWcuY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1cylcbiAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmNvbmZpZy5jb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgIDogX3ZtLmNvbmZpZy5jb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jb25maWcuY29sbGVjdGlvblN1YmplY3RXaGVuTWFya1N0YXR1cyxcbiAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICBcImNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5jb25maWcsXG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY29uZmlnLCBcImNvbGxlY3Rpb25TdWJqZWN0V2hlbk1hcmtTdGF0dXNcIiwgJCRjKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJiZ21fdHZfdHJhY2tlcl9jb2xsZWN0aW9uX3N0YXR1c193aGVuX3dhdGNoX3N0YXR1c1wiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLmoIforrDmkq3mlL7ov5vluqbml7bmiormnaHnm67moIforrDkuLrlnKjnnItcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBhdHRyczogeyBpZDogXCJiZ21fdHZfdHJhY2tlcl9ub3RpZmljYXRpb25cIiB9IH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5tZXNzYWdlcywgZnVuY3Rpb24obWVzc2FnZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG1lc3NhZ2UudGltZS5nZXRIb3VycygpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhtZXNzYWdlLnRpbWUuZ2V0TWludXRlcygpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCI6XFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhtZXNzYWdlLnRpbWUuZ2V0U2Vjb25kcygpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhtZXNzYWdlLnRleHQpKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYTc0MDU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcVHJpbTIxXFxcXHByb2pcXFxcYmdtLXR2LWF1dG8tdHJhY2tlclxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZWE3NDA1OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZWE3NDA1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZWE3NDA1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWE3NDA1OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZWE3NDA1OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWE3NDA1OCZcIiIsIi8qXG4qIHRoaXMganMgbW9kdWxlIGlzIGEgd3JhcHBlciB0aGF0IGRvbid0IGxldCB0cy1sb2FkZXJcbiogY2FsbCBgbW9kdWxlLnZhcmAgd2l0aCBgbW9kdWxlLmRlZmF1bHQudmFyYCBpbiBjb21waWxlZCBmaWxlXG4qIEJ1dCBgYXhpb3MuZGVmYXVsdGAgaXMgYGF4aW9zYCBpdHNlbGYsIHNvIG5vIG5lZWQgdG8gd3JhcCBheGlvcy5cbiogKi9cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnYXhpb3MtdXNlcnNjcmlwdC1hZGFwdGVyJ1xuXG5leHBvcnQgeyBWdWUsICQsIGFkYXB0ZXIgfVxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmltcG9ydCB7IGdtT3BlbkluVGFiLCBnbVVuc2FmZVdpbmRvdywgVVJMUywgV0VCU0lURSB9IGZyb20gJy4vdmFycydcbmltcG9ydCB7IEJnbUFwaSwgZ2V0QXV0aCwgc2F2ZUF1dGggfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgQmlsaWJpbGksIElxaXlpIH0gZnJvbSAnLi93ZWJzaXRlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnXG5cbmlmIChnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoVVJMUy5jYWxsQmFja1VybCkpIHtcbiAgaWYgKGdtVW5zYWZlV2luZG93LmRhdGEpIHtcbiAgICBzYXZlQXV0aChnbVVuc2FmZVdpbmRvdy5kYXRhKVxuICAgIGNvbnN0IGNoaWxkID0gZ21VbnNhZmVXaW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGNoaWxkLmlubmVyVGV4dCA9ICfmiJDlip/mjojmnYMg6K+35YWz6Zet572R6aG1IOaOiOadg+WQjuS4jeimgeW/mOiusOWIt+aWsOW3sue7j+aJk+W8gOeahOinhumikee9kemhtSdcbiAgICBnbVVuc2FmZVdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG59XG5sZXQgd2Vic2l0ZVxuXG4vLyBpbmplY3QgQmlsaWJpbGlcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHdlYnNpdGVOYW1lXG4gKiBAcmV0dXJucyB7QWJzdHJhY3RXZWJzaXRlfVxuICovXG5mdW5jdGlvbiBnZXRXZWJzaXRlQ2xhc3MgKHdlYnNpdGVOYW1lKSB7XG4gIGlmICh3ZWJzaXRlTmFtZSA9PT0gV0VCU0lURS5pcWl5aSkgcmV0dXJuIG5ldyBJcWl5aSgpXG4gIGlmICh3ZWJzaXRlTmFtZSA9PT0gV0VCU0lURS5iaWxpYmlsaSkgcmV0dXJuIG5ldyBCaWxpYmlsaSgpXG59XG5cbmlmIChnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vd3d3LmJpbGliaWxpLmNvbS9iYW5ndW1pL3BsYXkvJykpIHtcbiAgd2Vic2l0ZSA9IFdFQlNJVEUuYmlsaWJpbGlcbn1cblxuLy8gaW5qZWN0IGlxaXlpXG5pZiAoZ21VbnNhZmVXaW5kb3cubG9jYXRpb24uaG9zdG5hbWUgPT09ICd3d3cuaXFpeWkuY29tJykge1xuICB3ZWJzaXRlID0gV0VCU0lURS5pcWl5aVxufVxuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgaWYgKHdlYnNpdGUgPT09IFdFQlNJVEUuYmlsaWJpbGkpIHtcbiAgICBpZiAoW1xuICAgICAgMSwgLy8g5Yqo5ryrXG4gICAgICAyLCAvLyDnlLXlvbFcbiAgICAgIDQsIC8vIOWbveWIm1xuICAgICAgNSwgLy8g55S16KeG5YmnXG4gICAgXS5pbmNsdWRlcyhnbVVuc2FmZVdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5tZWRpYUluZm8uc3NUeXBlKSkge1xuICAgICAgJCgnLm1lZGlhLXRvb2wtYmFyLmNsZWFyZml4JykucHJlcGVuZCgnPGRpdiBpZD1cXCdiZ21fdHZfdHJhY2tlclxcJz48L2Rpdj4nKVxuICAgIH1cbiAgfVxuXG4gIC8vIGluamVjdCBpcWl5aVxuICBpZiAod2Vic2l0ZSA9PT0gV0VCU0lURS5pcWl5aSkge1xuICAgIGlmIChnbVVuc2FmZVdpbmRvdy5RLlBhZ2VJbmZvLnBsYXlQYWdlSW5mby5jYXRlZ29yeU5hbWUgPT09ICfliqjmvKsnKSB7XG4gICAgICAkKCdkaXYucXktcGxheWVyLXRpdGxlICcpLmFwcGVuZCgnPGRpdiBpZD1cXCdiZ21fdHZfdHJhY2tlclxcJz48L2Rpdj4nKVxuICAgIH1cbiAgfVxuXG4gIGlmICgkKCcjYmdtX3R2X3RyYWNrZXInKS5sZW5ndGgpIHtcbiAgICBnZXRBdXRoKCkudGhlbihcbiAgICAgIGF1dGggPT4ge1xuICAgICAgICBpZiAoYXV0aCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXV0aCwgJ2FjY2Vzc190b2tlbicpKSB7XG4gICAgICAgICAgVnVlLnByb3RvdHlwZS4kYmdtQXBpID0gbmV3IEJnbUFwaSh7IGFjY2Vzc1Rva2VuOiBhdXRoLmFjY2Vzc190b2tlbiB9KVxuICAgICAgICAgIGlmICh3ZWJzaXRlKSB7XG4gICAgICAgICAgICBWdWUucHJvdG90eXBlLiR3ZWJzaXRlID0gZ2V0V2Vic2l0ZUNsYXNzKHdlYnNpdGUpXG4gICAgICAgICAgICBnbVVuc2FmZVdpbmRvdy5iZ21fdHZfdHJhY2tlciA9IG5ldyBWdWUoe1xuICAgICAgICAgICAgICBlbDogJyNiZ21fdHZfdHJhY2tlcicsXG4gICAgICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnbU9wZW5JblRhYihVUkxTLmF1dGhVUkwsIHsgYWN0aXZlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFdyYXBwZXIgKCkge1xuICBpZiAod2Vic2l0ZSA9PT0gV0VCU0lURS5iaWxpYmlsaSkge1xuICAgIGluaXQoKVxuICB9IGVsc2UgaWYgKHdlYnNpdGUgPT09IFdFQlNJVEUuaXFpeWkpIHtcbiAgICBzZXRUaW1lb3V0KGluaXQsIDEwMDAgKiAxMClcbiAgfVxufVxuXG4kKGdtVW5zYWZlV2luZG93KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIGluaXRXcmFwcGVyKClcbn0pXG4iLCJpbXBvcnQge1xuICBnbUdldFZhbHVlLFxuICBnbUluZm8sXG4gIGdtT3BlbkluVGFiLFxuICBnbVNldFZhbHVlLFxuICBnbVVuc2FmZVdpbmRvdyxcbiAgVVJMU1xufSBmcm9tICcuL3ZhcnMnXG5pbXBvcnQgYXhpb3MsIHtcbiAgQXhpb3NBZGFwdGVyLFxuICBBeGlvc0Vycm9yLFxuICBBeGlvc0luc3RhbmNlLFxuICBBeGlvc1Jlc3BvbnNlLFxufSBmcm9tICdheGlvcydcbmltcG9ydCB7IGFkYXB0ZXIgfSBmcm9tICcuL2V4dGVybmFscydcbmltcG9ydCB7IEF1dGhSZXNwb25zZSwgQmFzZVJlc3BvbnNlLCBTdWJqZWN0UmVzcG9uc2UgfSBmcm9tICcuLi9saWIvcmVzcG9uc2VzJ1xuaW1wb3J0IHsgQWJzdHJhY3RXZWJzaXRlIH0gZnJvbSAnLi93ZWJzaXRlJ1xuXG5heGlvcy5kZWZhdWx0cy5hZGFwdGVyID0gYWRhcHRlclxuXG5mdW5jdGlvbiBvcGVuQXV0aFBhZ2UgKCkge1xuICBnbU9wZW5JblRhYihVUkxTLmF1dGhVUkwsIHsgYWN0aXZlOiB0cnVlIH0pXG59XG5cbmZ1bmN0aW9uIGdldFNjcmlwdFVzZXJBZ2VudCAoKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdtVW5zYWZlV2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgK1xuICAgIGAgRXh0ZW5zaW9uLyR7IGdtSW5mby52ZXJzaW9uIH0gYCArXG4gICAgYEJnbS10di1hdXRvLXRyYWNrZXIvJHsgZ21JbmZvLnNjcmlwdC52ZXJzaW9uIH1gXG59XG5cbmZ1bmN0aW9uIHNvcnRFcHMgKGVwczogeyBzb3J0OiBudW1iZXIsIGlkOiBudW1iZXIgfVtdKSB7XG4gIGVwcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXBzKSlcbiAgcmV0dXJuIGVwcy5zb3J0KFxuICAgIGZ1bmN0aW9uIChhOiB7IHNvcnQ6IG51bWJlciB9LCBiOiB7IHNvcnQ6IG51bWJlciB9KSB7XG4gICAgICBjb25zdCB4ID0gYS5zb3J0XG4gICAgICBjb25zdCB5ID0gYi5zb3J0XG4gICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKVxuICAgIH1cbiAgKVxufVxuXG5pbnRlcmZhY2UgU3ViamVjdEVwc1Jlc3BvbnNlIHtcbiAgZGF0YTogYW55XG59XG5cbmNsYXNzIEJnbUFwaSB7XG4gIHJlYWRvbmx5IGFjY2Vzc190b2tlbjogc3RyaW5nXG4gIHJlYWRvbmx5IGh0dHA6IEF4aW9zSW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvciAoeyBhY2Nlc3NUb2tlbiwgc2VydmVyUm9vdCA9ICdodHRwczovL2FwaS5iZ20udHYnIH06IHtcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nOyBzZXJ2ZXJSb290Pzogc3RyaW5nO1xuICB9KSB7XG4gICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NUb2tlblxuICAgIHRoaXMuaHR0cCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBzZXJ2ZXJSb290LFxuICAgICAgYWRhcHRlcixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdGhpcy5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICdVc2VyLUFnZW50JzogZ2V0U2NyaXB0VXNlckFnZW50KCksXG4gICAgICB9LFxuICAgIH0pXG4gIH1cblxuICBzZXRTdWJqZWN0UHJvZ3Jlc3MgKHN1YmplY3RJRDogc3RyaW5nLCBlcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAvc3ViamVjdC8keyBzdWJqZWN0SUQgfS91cGRhdGUvd2F0Y2hlZF9lcHNgLFxuICAgICAgICBgd2F0Y2hlZF9lcHM9JHsgZXAgfWAsXG4gICAgICAgIHsgaGVhZGVyczogeyAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsIH0gfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHsgc3RhdHVzOiByZXNwb25zZS5kYXRhLmNvZGUsIHJlc3BvbnNlIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgICApXG4gICAgfSlcbiAgfVxuXG4gIHNldEVwaXNvZGVXYXRjaGVkIChlcDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAvZXAvJHsgZXAgfS9zdGF0dXMvd2F0Y2hlZGApXG4gIH1cblxuICBnZXRFcHMgKHN1YmplY3RJRDogc3RyaW5nKSB7XG4gICAgbGV0IGlucyA9IHRoaXNcbiAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBub0RhdGEgPSBmYWxzZVxuICAgICAgICBsZXQgZXBzID0gZ21HZXRWYWx1ZShgZXBzXyR7IHN1YmplY3RJRCB9YCwgZmFsc2UpXG4gICAgICAgIC8vIG5vIGRhdGFcbiAgICAgICAgaWYgKCFlcHMpIG5vRGF0YSA9IHRydWVcbiAgICAgICAgaWYgKGVwcykge1xuICAgICAgICAgIGVwcyA9IEpTT04ucGFyc2UoZXBzKVxuICAgICAgICAgIC8vIG91dCBvZiB0aW1lXG4gICAgICAgICAgaWYgKE51bWJlcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApIC0gZXBzLnRpbWUgPiA2MCAqIDYwICogMikge1xuICAgICAgICAgICAgbm9EYXRhID0gdHJ1ZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcHMuZXBzID0gc29ydEVwcyhlcHMuZXBzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbm9EYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShlcHMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zLmdldFN1YmplY3RFcHMoc3ViamVjdElEKS50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlOiBTdWJqZWN0RXBzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGVwcyA9IHNvcnRFcHMocmVzcG9uc2UuZGF0YS5lcHMpXG4gICAgICAgICAgICAgIGdtU2V0VmFsdWUoYGVwc18keyBzdWJqZWN0SUQgfWAsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlcHMsXG4gICAgICAgICAgICAgICAgdGltZTogTnVtYmVyKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMClcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIHJlc29sdmUoeyBlcHMgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIGdldFN1YmplY3RFcHMgKHN1YmplY3RJRDogc3RyaW5nKSB7XG4gICAgbGV0IGlucyA9IHRoaXNcbiAgICBjb25zb2xlLmxvZygnZmV0Y2ggYXBpIHJlc3VsdCcpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlucy5odHRwLmdldChgL3N1YmplY3QvJHsgc3ViamVjdElEIH0vZXBgKS50aGVuKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA+PSAzMDApIHtcbiAgICAgICAgICAgIHJlamVjdCh7IHN0YXR1czogcmVzcG9uc2UuZGF0YS5jb2RlLCByZXNwb25zZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdWJqZWN0IChzdWJqZWN0SUQ6IHN0cmluZyk6IFByb21pc2U8U3ViamVjdFJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQoYC9zdWJqZWN0LyR7IHN1YmplY3RJRCB9YCkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPj0gMzAwKSB7XG4gICAgICAgICAgICByZWplY3QoeyBzdGF0dXM6IHJlc3BvbnNlLmRhdGEuY29kZSwgcmVzcG9uc2UgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHJlamVjdChlcnJvcilcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgc2V0U3ViamVjdENvbGxlY3Rpb25TdGF0dXMgKHsgc3ViamVjdElELCBzdGF0dXMgfToge1xuICAgIHN1YmplY3RJRDogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0KGAvY29sbGVjdGlvbi8keyBzdWJqZWN0SUQgfS91cGRhdGVgLFxuICAgICAgICBgc3RhdHVzPSR7IHN0YXR1cyB9YCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH1cbiAgICAgICAgfSkudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPj0gMzAwKSB7XG4gICAgICAgICAgICByZWplY3QoeyByZXNwb25zZSB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gcmVqZWN0KGVycm9yKVxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxubGV0IGFwaVNlcnZlciA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IFVSTFMuYXBpU2VydmVyVVJMLFxuICBhZGFwdGVyLFxuICBoZWFkZXJzOiB7XG4gICAgJ1VzZXItQWdlbnQnOiBnZXRTY3JpcHRVc2VyQWdlbnQoKVxuICB9XG59KVxuXG5jb25zdCBuZXdBcGlTZXJ2ZXIgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBVUkxTLm5ld0FwaVNlcnZlcixcbiAgYWRhcHRlcixcbiAgaGVhZGVyczoge1xuICAgICdVc2VyLUFnZW50JzogZ2V0U2NyaXB0VXNlckFnZW50KClcbiAgfVxufSlcbm5ld0FwaVNlcnZlci5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgcmV0dXJuIHJlc1xufSwgKGVycjogQXhpb3NFcnJvcikgPT4ge1xuICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDMpIHtcbiAgICBvcGVuQXV0aFBhZ2UoKVxuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG59KVxuLy9cbi8vIGFwaVNlcnZlci5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4vLyAgIGNvbmZpZyA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coY29uZmlnKVxuLy8gICAgIHJldHVybiBjb25maWdcbi8vICAgfVxuLy8gKVxuXG5mdW5jdGlvbiBwYXJzZUVwaXNvZGUgKHRpdGxlOiBzdHJpbmcpIHtcbiAgbGV0IHJlID0gL+esrChcXGQrKembhi9nXG4gIGxldCByZXN1bHQgPSByZS5leGVjKHRpdGxlKVxuICBjb25zb2xlLmxvZygncGFyc2UgZXBpc29kZSByZXN1bHQnLCByZXN1bHQpXG5cbiAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQocmVzdWx0WzFdLCAxMClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59XG5cbmNsYXNzIEF1dGggaW1wbGVtZW50cyBBdXRoUmVzcG9uc2Uge1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZ1xuICBleHBpcmVzX2luOiBudW1iZXJcbiAgdG9rZW5fdHlwZTogc3RyaW5nXG4gIHNjb3BlPzogc3RyaW5nXG4gIHVzZXJfaWQ6IG51bWJlclxuICByZWZyZXNoX3Rva2VuOiBzdHJpbmdcbiAgYXV0aF90aW1lOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gc2F2ZUF1dGggKGF1dGg6IEF1dGgpOiB2b2lkIHtcbiAgZ21TZXRWYWx1ZSgnYXV0aCcsIEpTT04uc3RyaW5naWZ5KGF1dGgpKVxufVxuXG5mdW5jdGlvbiBpZkF1dGhFeHBpcmVzIChhdXRoOiBBdXRoKTogYm9vbGVhbiB7XG4gIC8qIGF1dGhfdGltZSAyZCAgZXhwaXJlcyBpbiA5ZCAqL1xuICAvKiAgICAgICAgICAgIDJkICsgN2QgLSAxZCA8IDZkID0+IGZhbHNlICovXG4gIC8qICAgICAgICAgICAgMmQgKyA3ZCAtIDFkIDwgOGQgPT4gdHJ1ZSAqL1xuICByZXR1cm4gKHBhcnNlSW50KGF1dGguYXV0aF90aW1lLCAxMCkgKyBhdXRoLmV4cGlyZXNfaW4gLSAyICogMjQgKiA2MCAqIDYwKVxuICAgIDwgTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApXG59XG5cbmZ1bmN0aW9uIGdldEF1dGggKCk6IFByb21pc2U8QXV0aCB8IGJvb2xlYW4+IHtcbiAgbGV0IGF1dGggPSBnbUdldFZhbHVlKCdhdXRoJywgZmFsc2UpXG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IEpTT04ucGFyc2UoYXV0aClcbiAgICBpZiAoaWZBdXRoRXhwaXJlcyhhdXRoKSkge1xuICAgICAgY29uc29sZS5kZWJ1ZygncmVmcmVzaCB0b2tlbicpXG4gICAgICByZXR1cm4gc2VydmVyQXBpLnJlZnJlc2hUb2tlbigpXG4gICAgfVxuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXV0aClcbn1cblxuY2xhc3MgQ29uZmlnIHtcbiAgYXV0b01hcmtXYXRjaGVkPzogYm9vbGVhblxuICBjb2xsZWN0aW9uU3ViamVjdFdoZW5NYXJrU3RhdHVzPzogYm9vbGVhblxufVxuXG5mdW5jdGlvbiBnZXRDb25maWcgKCk6IENvbmZpZyB7XG4gIGxldCByYXdDb25maWcgPSBnbUdldFZhbHVlKCdjb25maWcnLCBmYWxzZSlcbiAgaWYgKHJhd0NvbmZpZykge1xuICAgIHRyeSB7XG4gICAgICByYXdDb25maWcgPSBKU09OLnBhcnNlKHJhd0NvbmZpZylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBnbVNldFZhbHVlKCdjb25maWcnLCAne30nKVxuICAgICAgcmF3Q29uZmlnID0ge31cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd0NvbmZpZ1xufVxuXG50eXBlIEVwc01hcCA9IHtcbiAgc3ViamVjdF9pZDogbnVtYmVyXG4gIHNvdXJjZTogc3RyaW5nXG4gIHNvdXJjZV9lcF9pZDogc3RyaW5nXG4gIGJnbV9lcF9pZDogbnVtYmVyXG4gIGVwaXNvZGU6IG51bWJlclxufVtdXG5cbmNsYXNzIFNlcnZlckFwaSB7XG4gIHJlYWRvbmx5IGh0dHA6IEF4aW9zSW5zdGFuY2VcbiAgcmVhZG9ubHkgbmV3SHR0cFNlcnZlcjogQXhpb3NJbnN0YW5jZVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmh0dHAgPSBhcGlTZXJ2ZXJcbiAgICB0aGlzLm5ld0h0dHBTZXJ2ZXIgPSBuZXdBcGlTZXJ2ZXJcbiAgfVxuXG4gIHJlZnJlc2hUb2tlbiAoKTogUHJvbWlzZTxBdXRoUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5uZXdIdHRwU2VydmVyLnBvc3QoVVJMUy5yZWZyZXNoVG9rZW5QYXRoKVxuICAgICAgICAudGhlbigocmVzcG9uc2U6IEJhc2VSZXNwb25zZTxBdXRoUmVzcG9uc2U+KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuaGFzT3duUHJvcGVydHkoJ2Vycm9yJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgc2F2ZUF1dGgocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBvcGVuQXV0aFBhZ2UoKVxuICAgICAgICAgIHJlamVjdChmYWxzZSlcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVwb3J0X21pc3NpbmdfZXBpc29kZSAoYmFuZ3VtaUlEOiBzdHJpbmcsIGVwaXNvZGVJRDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZ21FcGlzb2RlSUQ6IHN0cmluZywgd2Vic2l0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLnBvc3QoJy9hcGkvdjAuMS9yZXBvcnRfbWlzc2luZ19lcGlzb2RlJyxcbiAgICAgIHtcbiAgICAgICAgYmFuZ3VtaUlELFxuICAgICAgICBlcGlzb2RlSUQsXG4gICAgICAgIGJnbUVwaXNvZGVJRCxcbiAgICAgICAgd2Vic2l0ZVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJlcG9ydF9taXNzaW5nX2Jhbmd1bWkgKGJhbmd1bWlJRDogc3RyaW5nLCBzdWJqZWN0SUQ6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHN0cmluZywgd2Vic2l0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubmV3SHR0cFNlcnZlci5wb3N0KCcvYmdtLXR2LWF1dG8tdHJhY2tlci9hcGkudjEvc3VibWl0L3N1YmplY3RfaWQnLFxuICAgICAge1xuICAgICAgICBiYW5ndW1pX2lkOiBiYW5ndW1pSUQsXG4gICAgICAgIHN1YmplY3RfaWQ6IHN1YmplY3RJRCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGhyZWY6IGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIHNvdXJjZTogd2Vic2l0ZSxcbiAgICAgIH0pXG4gIH1cblxuICBhc3luYyBnZXRCZ21TdWJqZWN0SUQgKGluc3RhbmNlOiBBYnN0cmFjdFdlYnNpdGUpOiBQcm9taXNlPHtcbiAgICBiYW5ndW1pX2lkOiBzdHJpbmdcbiAgICBzdWJqZWN0X2lkOiBudW1iZXJcbiAgfT4ge1xuICAgIGxldCByZXNwb25zZTogQmFzZVJlc3BvbnNlPHtcbiAgICAgIHNvdXJjZTogc3RyaW5nLFxuICAgICAgYmFuZ3VtaV9pZDogc3RyaW5nLFxuICAgICAgc3ViamVjdF9pZDogbnVtYmVyLFxuICAgIH0+ID0gYXdhaXQgdGhpcy5uZXdIdHRwU2VydmVyLmdldCgnL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL3N1YmplY3RfaWQnLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgc291cmNlOiBpbnN0YW5jZS5uYW1lLFxuICAgICAgICBiYW5ndW1pX2lkOiBpbnN0YW5jZS5nZXRCYW5ndW1pSUQoKVxuICAgICAgfSxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICB9KVxuICAgIHJldHVybiB7XG4gICAgICBiYW5ndW1pX2lkOiByZXNwb25zZS5kYXRhLmJhbmd1bWlfaWQsXG4gICAgICBzdWJqZWN0X2lkOiByZXNwb25zZS5kYXRhLnN1YmplY3RfaWQsXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QmdtRXBpc29kZUlEIChpbnN0YW5jZTogQWJzdHJhY3RXZWJzaXRlKTogUHJvbWlzZTx7IGJnbV9lcF9pZDogbnVtYmVyIH0+IHtcbiAgICBsZXQgcmVzOiBCYXNlUmVzcG9uc2U8e1xuICAgICAgc3ViamVjdF9pZDogbnVtYmVyXG4gICAgICBzb3VyY2U6IHN0cmluZ1xuICAgICAgc291cmNlX2VwX2lkOiBzdHJpbmdcbiAgICAgIGJnbV9lcF9pZDogbnVtYmVyXG4gICAgICBlcGlzb2RlOiBudW1iZXJcbiAgICB9PiA9IGF3YWl0IHRoaXMubmV3SHR0cFNlcnZlci5nZXQoYC9lcF9pZC8keyBpbnN0YW5jZS5uYW1lIH0vJHsgaW5zdGFuY2UuZ2V0RXBpc29kZUlEKCkgfWApXG4gICAgcmV0dXJuIHsgYmdtX2VwX2lkOiByZXMuZGF0YS5iZ21fZXBfaWQgfVxuICB9XG5cbn1cblxuY29uc3Qgc2VydmVyQXBpID0gbmV3IFNlcnZlckFwaSgpXG5cbmV4cG9ydCB7XG4gIEJnbUFwaSxcbiAgYXhpb3MsXG4gIGFwaVNlcnZlcixcbiAgc2VydmVyQXBpLFxuICBwYXJzZUVwaXNvZGUsXG4gIHNhdmVBdXRoLFxuICBnZXRBdXRoLFxuICBnZXRDb25maWcsXG4gIHNvcnRFcHMsXG59XG5cbiIsImRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgVE1fRU5WPzogc3RyaW5nO1xuICB9XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmLCBjYW1lbGNhc2UgKi9cbmxldCBnbVVuc2FmZVdpbmRvdyA9IHVuc2FmZVdpbmRvd1xubGV0IGdtU2V0VmFsdWUgPSBHTV9zZXRWYWx1ZVxubGV0IGdtR2V0VmFsdWUgPSBHTV9nZXRWYWx1ZVxubGV0IGdtT3BlbkluVGFiID0gR01fb3BlbkluVGFiXG5sZXQgZ21JbmZvID0gR01faW5mb1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiwgY2FtZWxjYXNlICovXG5cbmNvbnN0IFVSTFMgPSB7XG4gIGFwaVNlcnZlclVSTDogJ2h0dHBzOi8vYmFuZ3VtaS1hdXRvLXRyYWNrZXIudHJpbTIxLmNuJyxcbiAgYXBpQmdtVXJsOiAnaHR0cHM6Ly9hcGkuYmdtLnR2JyxcbiAgcmVmcmVzaFRva2VuUGF0aDogJy9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9yZWZyZXNoJyxcbiAgbmV3QXBpU2VydmVyOiAnaHR0cHM6Ly93d3cudHJpbTIxLmNuJyxcbiAgYXV0aFVSTDogJ2h0dHBzOi8vd3d3LnRyaW0yMS5jbi9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9hdXRoJyxcbiAgY2FsbEJhY2tVcmw6ICdodHRwczovL3d3dy50cmltMjEuY24vYmdtLXR2LWF1dG8tdHJhY2tlci9hcGkudjEvb2F1dGhfY2FsbGJhY2snLFxuXG59XG5cbmlmICh3aW5kb3cuVE1fRU5WID09PSAnZGV2Jykge1xuICAvLyBVUkxTLm5ld0FwaVNlcnZlciA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAvJ1xuICAvLyBVUkxTLmF1dGhVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL2F1dGgnXG4gIC8vIFVSTFMuY2FsbEJhY2tVcmwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwL2JnbS10di1hdXRvLXRyYWNrZXIvYXBpLnYxL29hdXRoX2NhbGxiYWNrJ1xufVxuXG5jb25zdCBXRUJTSVRFID0ge1xuICBiaWxpYmlsaTogJ2JpbGliaWxpJyxcbiAgaXFpeWk6ICdpcWl5aScsXG59XG5cbmV4cG9ydCB7XG4gIFdFQlNJVEUsXG4gIGdtU2V0VmFsdWUsXG4gIGdtR2V0VmFsdWUsXG4gIGdtT3BlbkluVGFiLFxuICBnbVVuc2FmZVdpbmRvdyxcbiAgVVJMUyxcbiAgZ21JbmZvXG59XG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9leHRlcm5hbHMnXG5pbXBvcnQgeyBnbVVuc2FmZVdpbmRvdywgV0VCU0lURSB9IGZyb20gJy4vdmFycydcbmltcG9ydCB7IGFwaVNlcnZlciwgcGFyc2VFcGlzb2RlIH0gZnJvbSAnLi91dGlscydcbmltcG9ydCB7IFF1ZXJ5U3ViamVjdElEUmVzcG9uc2UgfSBmcm9tICcuLi9saWIvcmVzcG9uc2VzJ1xuaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuXG5pbnRlcmZhY2UgQWJzdHJhY3RXZWJzaXRlIHtcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG5cbiAgZ2V0QmFuZ3VtaUlEICgpOiBzdHJpbmdcblxuICBnZXRFcGlzb2RlSUQgKCk6IHN0cmluZ1xuXG4gIGdldFRpdGxlICgpOiBzdHJpbmdcblxuICBkZXRlY3RFcGlzb2RlQ2hhbmdlIChjYjogRnVuY3Rpb24sIG5vdGZvdW5kOiBGdW5jdGlvbik6IHZvaWRcblxuICBnZXRQbGF5ZXJJbmZvICgpOiBQcm9taXNlPGFueT5cblxuICBpbml0ICgpOiBQcm9taXNlPEluaXRSZXN1bHQ+XG59XG5cbmNsYXNzIEJpbGliaWxpIGltcGxlbWVudHMgQWJzdHJhY3RXZWJzaXRlIHtcbiAgbmFtZSA9IFdFQlNJVEUuYmlsaWJpbGlcbiAgd2luZG93OiBCaWxpV2luZG93XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMud2luZG93ID0gPEJpbGlXaW5kb3c+Z21VbnNhZmVXaW5kb3dcbiAgfVxuXG4gIGdldFRpdGxlICgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5tZWRpYUluZm8udGl0bGVcbiAgfVxuXG4gIGdldEJhbmd1bWlJRCAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLmlkLnRvU3RyaW5nKClcbiAgfVxuXG4gIGdldEVwaXNvZGVJRCAoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmVwX2lkXG4gIH1cblxuICBpbml0ICgpOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfX1xuICAgIGNvbnN0IGVwaXNvZGUgPSB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5lcExpc3QuZmlsdGVyKFxuICAgICAgdmFsID0+ICF2YWwudGl0bGUuaW5jbHVkZXMoJy4nKVxuICAgICkuZmluZEluZGV4KHZhbCA9PiB7XG4gICAgICByZXR1cm4gdmFsLmluZGV4ID09PSB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5lcEluZm8uaW5kZXhcbiAgICB9KSArIDFcblxuICAgIGNvbnN0IGJhbmd1bWlJRCA9IHRoaXMuZ2V0QmFuZ3VtaUlEKClcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgIGNvbnN0IGVwaXNvZGVTdGFydFdpdGggPSBwYXJzZUludChzdGF0dXMuZXBMaXN0WzBdLmluZGV4KVxuXG4gICAgLy8gYXBpU2VydmVyLnBvc3QoJy9iZ20tdHYtYXV0by10cmFja2VyL2FwaS52MS9jb2xsZWN0X2VwaXNvZGVfaW5mbycsIHtcbiAgICAvLyAgIG1lZGlhSW5mbzogdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18ubWVkaWFJbmZvLFxuICAgIC8vICAgZXBJbmZvOiB0aGlzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5lcEluZm8sXG4gICAgLy8gICBlcExpc3Q6IHRoaXMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwTGlzdCxcbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGVwaXNvZGVJRDogdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmVwX2lkLFxuICAgICAgICAgIGVwaXNvZGVJbmRleDogZXBpc29kZS50b1N0cmluZygpLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGVwaXNvZGVTdGFydFdpdGgsXG4gICAgICAgICAgYmFuZ3VtaUlEXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIClcbiAgICAvL1xuICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICBhcGlTZXJ2ZXIuZ2V0KCcvYXBpL3YwLjIvcXVlcnlTdWJqZWN0SUQnLCB7XG4gICAgLy8gICAgIHBhcmFtczogeyBiYW5ndW1pSUQsIHdlYnNpdGU6ICdCaWxpYmlsaScgfVxuICAgIC8vICAgfSkudGhlbigocmVzcG9uc2U6IFF1ZXJ5U3ViamVjdElEUmVzcG9uc2UpID0+IHtcbiAgICAvLyAgICAgICByZXNvbHZlKHtcbiAgICAvLyAgICAgICAgIHN1YmplY3RJRDogcmVzcG9uc2UuZGF0YS5zdWJqZWN0X2lkLFxuICAgIC8vICAgICAgICAgZXBpc29kZTogZXBpc29kZS50b1N0cmluZygpLFxuICAgIC8vICAgICAgICAgdGl0bGUsXG4gICAgLy8gICAgICAgICBlcGlzb2RlU3RhcnRXaXRoLFxuICAgIC8vICAgICAgICAgYmFuZ3VtaUlEXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgKGVycm9yOiBBeGlvc0Vycm9yKSA9PiB7XG4gICAgLy8gICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXG4gICAgLy8gICAgICAgcmVqZWN0KHtcbiAgICAvLyAgICAgICAgIGVwaXNvZGU6IGVwaXNvZGUudG9TdHJpbmcoKSxcbiAgICAvLyAgICAgICAgIHRpdGxlLFxuICAgIC8vICAgICAgICAgZXBpc29kZVN0YXJ0V2l0aCxcbiAgICAvLyAgICAgICAgIGJhbmd1bWlJRCxcbiAgICAvLyAgICAgICAgIGVycm9yXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vICAgKVxuICAgIC8vIH0pXG4gIH1cblxuICBkZXRlY3RFcGlzb2RlQ2hhbmdlIChjYjogRXBpc29kZUNoYW5nZUNhbGxiYWNrLCBub3Rmb3VuZDogRXBpc29kZUNoYW5nZUNhbGxiYWNrKSB7XG4gICAgbGV0IGNscyA9IHRoaXNcbiAgICBsZXQgYmFuZ3VtaUlEID0gdGhpcy5nZXRCYW5ndW1pSUQoKVxuICAgIGxldCBJTk5FUl9FUElTT0RFID0gdGhpcy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4XG5cbiAgICBmdW5jdGlvbiBvbkVwaXNvZGVDaGFuZ2UgKHsgc2Vhc29uID0gZmFsc2UsIGVwaXNvZGUgPSBmYWxzZSB9KSB7XG4gICAgICBpZiAoc2Vhc29uKSB7XG4gICAgICAgIGNscy5pbml0KCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNiKGRhdGEpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbm90Zm91bmRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKGVwaXNvZGUpIHtcbiAgICAgICAgbGV0IGVwID0gY2xzLndpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXy5lcExpc3RcbiAgICAgICAgICAuZmlsdGVyKHZhbCA9PiAhdmFsLmluZGV4LmluY2x1ZGVzKCcuJykpXG4gICAgICAgICAgLmZpbmRJbmRleCh2YWwgPT4gdmFsLmluZGV4ID09PSBjbHMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mby5pbmRleCkgKyAxXG4gICAgICAgIGlmIChlcCkge1xuICAgICAgICAgIGNiKHtcbiAgICAgICAgICAgIGVwaXNvZGU6IGVwXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYih7XG4gICAgICAgICAgICBlcGlzb2RlOiBjbHMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mby5pbmRleFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZXRlY3RIcmVmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5kZWJ1ZygnY2hlY2sgaHJlZicsIGJhbmd1bWlJRCwgSU5ORVJfRVBJU09ERSlcbiAgICAgIGlmIChiYW5ndW1pSUQgIT09IGNscy5nZXRCYW5ndW1pSUQoKSkge1xuICAgICAgICBvbkVwaXNvZGVDaGFuZ2Uoe1xuICAgICAgICAgIHNlYXNvbjogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChJTk5FUl9FUElTT0RFICE9PSBjbHMud2luZG93Ll9fSU5JVElBTF9TVEFURV9fLmVwSW5mby5pbmRleCkge1xuICAgICAgICBvbkVwaXNvZGVDaGFuZ2Uoe1xuICAgICAgICAgIGVwaXNvZGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgSU5ORVJfRVBJU09ERSA9IGNscy53aW5kb3cuX19JTklUSUFMX1NUQVRFX18uZXBJbmZvLmluZGV4XG4gICAgICBiYW5ndW1pSUQgPSBjbHMuZ2V0QmFuZ3VtaUlEKClcbiAgICB9XG5cbiAgICBzZXRJbnRlcnZhbChkZXRlY3RIcmVmQ2hhbmdlLCAxMCAqIDEwMDApXG4gICAgc2V0VGltZW91dChkZXRlY3RIcmVmQ2hhbmdlLCA1MDAwKVxuICB9XG5cbiAgZ2V0UGxheWVySW5mbyAoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShcbiAgICAgIHtcbiAgICAgICAgY3VycmVudDogdGhpcy53aW5kb3cucGxheWVyLmdldEN1cnJlbnRUaW1lKCksXG4gICAgICAgIGR1cmF0aW9uOiB0aGlzLndpbmRvdy5wbGF5ZXIuZ2V0RHVyYXRpb24oKSxcbiAgICAgICAgcGVyY2VudDogdGhpcy53aW5kb3cucGxheWVyLmdldEN1cnJlbnRUaW1lKCkgLyB0aGlzLndpbmRvdy5wbGF5ZXIuZ2V0RHVyYXRpb24oKSxcbiAgICAgIH1cbiAgICApXG4gIH1cblxufVxuXG5jbGFzcyBJcWl5aSBpbXBsZW1lbnRzIEFic3RyYWN0V2Vic2l0ZSB7XG4gIG5hbWUgPSBXRUJTSVRFLmlxaXlpXG4gIHdpbmRvdzogSXFpeWlXaW5kb3dcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy53aW5kb3cgPSA8SXFpeWlXaW5kb3c+Z21VbnNhZmVXaW5kb3dcbiAgfVxuXG4gIGdldEJhbmd1bWlJRCAoKTogc3RyaW5nIHtcbiAgICBsZXQgY29sbGVjdGlvbkxpbmtFbCA9ICQoJyNibG9jay1DID4gZGl2LnF5LXBsYXllci1kZXRhaWwgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYucXktcGxheWVyLXRpdGxlID4gaDEgPiBhJylcbiAgICBsZXQgY29sbGVjdGlvbkxpbmsgPSBjb2xsZWN0aW9uTGlua0VsLmF0dHIoJ2hyZWYnKVxuICAgIGxldCBmaWxlbmFtZSA9IGNvbGxlY3Rpb25MaW5rLnNwbGl0KCcvJylcbiAgICByZXR1cm4gZmlsZW5hbWVbZmlsZW5hbWUubGVuZ3RoIC0gMV0uc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignLicpXG4gIH1cblxuICBnZXRFcGlzb2RlSUQgKCkge1xuICAgIHJldHVybiBnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnXycpWzFdLnNwbGl0KCcuJylbMF1cbiAgfVxuXG4gIGdldFRpdGxlICgpIHtcbiAgICByZXR1cm4gZ21VbnNhZmVXaW5kb3cuZG9jdW1lbnQudGl0bGVcbiAgfVxuXG4gIGluaXQgKCk6IFByb21pc2U8SW5pdFJlc3VsdD4ge1xuICAgIGxldCB0aXRsZSA9IHRoaXMuZ2V0VGl0bGUoKVxuICAgIGxldCBiYW5ndW1pSUQgPSB0aGlzLmdldEJhbmd1bWlJRCgpXG4gICAgbGV0IGVwaXNvZGUgPSBwYXJzZUVwaXNvZGUodGl0bGUpXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBiYW5ndW1pSUQsXG4gICAgICAgIGVwaXNvZGVJRDogdGhpcy5nZXRFcGlzb2RlSUQoKSxcbiAgICAgICAgZXBpc29kZUluZGV4OiBlcGlzb2RlLnRvU3RyaW5nKCksXG4gICAgICAgIGVwaXNvZGVTdGFydFdpdGg6IDFcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRldGVjdEVwaXNvZGVDaGFuZ2UgKGNiOiBFcGlzb2RlQ2hhbmdlQ2FsbGJhY2ssIG5vdGZvdW5kOiBFcGlzb2RlQ2hhbmdlQ2FsbGJhY2spIHtcbiAgICBmdW5jdGlvbiBvbkVwaXNvZGVDaGFuZ2UgKCkge1xuICAgICAgY29uc29sZS5sb2coJ2hyZWYgY2hhbmdlJylcbiAgICAgIGxldCB0aXRsZSA9IGdtVW5zYWZlV2luZG93LmRvY3VtZW50LnRpdGxlXG4gICAgICBsZXQgZXBpc29kZSA9IHBhcnNlRXBpc29kZSh0aXRsZSlcbiAgICAgIGlmIChlcGlzb2RlKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICBlcGlzb2RlOiBlcGlzb2RlLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vdGZvdW5kKHtcbiAgICAgICAgICBlcGlzb2RlOiBlcGlzb2RlLnRvU3RyaW5nKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaHJlZiA9IGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICBjb25zdCBkZXRlY3RIcmVmQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGhyZWYgIT09IGdtVW5zYWZlV2luZG93LmxvY2F0aW9uLmhyZWYpIHtcbiAgICAgICAgb25FcGlzb2RlQ2hhbmdlKClcbiAgICAgIH1cbiAgICAgIGhyZWYgPSBnbVVuc2FmZVdpbmRvdy5sb2NhdGlvbi5ocmVmXG4gICAgfVxuXG4gICAgc2V0SW50ZXJ2YWwoZGV0ZWN0SHJlZkNoYW5nZSwgMTAgKiAxMDAwKVxuICAgIHNldFRpbWVvdXQoZGV0ZWN0SHJlZkNoYW5nZSwgNTAwMClcbiAgfVxuXG4gIGdldFBsYXllckluZm8gKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy53aW5kb3cucGxheWVyLmdldFBsYXlJbmZvKHJlc29sdmUpXG4gICAgfSkudGhlbihmdW5jdGlvbiAoaW5mbzogaVFpeWlWaWRlb0luZm8pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IGluZm8uY3VycmVudFRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBpbmZvLnRvdGFsRHVyYXRpb24gLyAxMDAwLFxuICAgICAgICBwZXJjZW50OiBpbmZvLmN1cnJlbnRUaW1lIC8gaW5mby50b3RhbER1cmF0aW9uICogMTAwMCxcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCB7IEJpbGliaWxpLCBJcWl5aSwgQWJzdHJhY3RXZWJzaXRlIH1cbiIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IiwibW9kdWxlLmV4cG9ydHMgPSBheGlvc0dteGhyQWRhcHRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9ICQ7IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7Il0sInNvdXJjZVJvb3QiOiIifQ==