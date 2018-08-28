// ==UserScript==
// @name        Bgm.tv auto tracker
// @namespace   https://trim21.me/
// @version     0.9.0
// @author      Trim21 <trim21me@gmail.com>
// @source      https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker
// @license     MIT
// @match       https://www.bilibili.com/bangumi/play/*
// @match       http*://www.iqiyi.com/*
// @match       https://bangumi-auto-tracker.trim21.cn/oauth_callback*
// @match       https://bangumi-auto-tracker.trim21.cn/userscript/options*
// @require     https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @require     https://cdn.bootcss.com/axios/0.18.0/axios.min.js
// @require     https://cdn.jsdelivr.net/npm/axios-userscript-adapter@0.0.3/dist/axiosGmxhrAdapter.min.js
// @require     https://cdn.bootcss.com/vue/2.5.16/vue.min.js
// @require     https://cdn.bootcss.com/axios/0.18.0/axios.min.js
// @grant       GM_addStyle
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       unsafeWindow
// @connect     localhost
// @connect     api.bgm.tv
// @connect     bangumi-auto-tracker.trim21.cn
// @run-at      document-end
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

/***/ "33yf":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "CFBl":
/***/ (function(module, exports) {

module.exports = axiosGmxhrAdapter;

/***/ }),

/***/ "I1BE":
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

/***/ "SwRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cVDG");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "cVDG":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("wFZj");

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

/***/ "e6Wu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("i7/w");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "$"
var external_$_ = __webpack_require__("xeH2");
var external_$_default = /*#__PURE__*/__webpack_require__.n(external_$_);

// CONCATENATED MODULE: ./src/js/vars.js
/* eslint-disable no-undef, camelcase */
let gmUnsafeWindow = unsafeWindow
let gmSetValue = GM_setValue
let gmGetValue = GM_getValue
let gmOpenInTab = GM_openInTab
/* eslint-enable no-undef, camelcase */

/**
 * @namespace
 * @property {object} URLS
 * @property {string} apiServerURL access token
 * @property {string} callBackUrl
 * @property {number} apiBgmUrl
 * @property {number} authURL
 */
const URLS = {
  apiServerURL: 'https://bangumi-auto-tracker.trim21.cn',
  callBackUrl: 'https://bangumi-auto-tracker.trim21.cn/oauth_callback',
  apiBgmUrl: 'https://api.bgm.tv',
  authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2775b2797b4d958b&response_type=code&redirect_uri' +
    '=https://bangumi-auto-tracker.trim21.cn/oauth_callback',
}

if (window.TM_ENV === 'dev') {
  Object.assign(URLS, {
    apiServerURL: 'http://localhost:6001',
    callBackUrl: 'http://localhost:6001/oauth_callback',
    apiBgmUrl: 'https://api.bgm.tv',
    authURL: 'https://bgm.tv/oauth/authorize?client_id=bgm2955b3b3050e7bf2&response_type=code&redirect_uri' +
      '=http://localhost:6001/oauth_callback',
  })
}
const WEBSITE = {
  bilibili: 'bilibili',
  iqiyi: 'iqiyi',
}



// EXTERNAL MODULE: external "axiosGmxhrAdapter"
var external_axiosGmxhrAdapter_ = __webpack_require__("CFBl");
var external_axiosGmxhrAdapter_default = /*#__PURE__*/__webpack_require__.n(external_axiosGmxhrAdapter_);

// CONCATENATED MODULE: ./src/js/utils.js




external_axios_default.a.defaults.adapter = external_axiosGmxhrAdapter_default.a

function sortEps (eps) {
  eps = JSON.parse(JSON.stringify(eps))
  return eps.sort(function (a, b) {
    let key = 'sort'
    var x = a[key]
    var y = b[key]
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

class utils_BgmApi {
  constructor ({ accessToken, serverRoot = 'https://api.bgm.tv' }) {
    this.access_token = accessToken
    this.http = external_axios_default.a.create({
      baseURL: serverRoot,
      headers: { Authorization: 'Bearer ' + this.access_token },
      adapter: external_axiosGmxhrAdapter_default.a
    })
  }

  setSubjectProgress (subjectID, ep) {
    return new Promise((resolve, reject) => {
      this.http.post(`/subject/${subjectID}/update/watched_eps`,
        `watched_eps=${ep}`,
        { headers: { 'content-type': 'application/x-www-form-urlencoded', } })
        .then(
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

  setEpisodeWatched (ep) {
    return this.http.post(`/ep/${ep}/status/watched`)
  }

  getEps (subjectID) {
    let ins = this
    return new Promise(
      (resolve, reject) => {
        let noData = false
        let eps = gmGetValue(`eps_${subjectID}`, false)
        // no data
        if (!eps) noData = true
        if (eps) {
          eps = JSON.parse(eps)
          // out of time
          if (Number(new Date().getTime() / 1000) - eps.time > 60 * 60 * 2) {
            noData = true
          } else {
            eps.eps = sortEps(eps.eps)
          }
        }

        if (!noData) {
          resolve(eps)
        } else {
          ins.getSubjectEps(subjectID).then(
            (response) => {
              let eps = sortEps(response.data.eps)
              gmSetValue(`eps_${subjectID}`, JSON.stringify({
                eps,
                time: Number(new Date().getTime() / 1000)
              }))
              resolve({ eps })
            },
            (error) => {
              reject(error)
            }
          )
        }
      }
    )
  }

  getSubjectEps (subjectID) {
    let ins = this
    console.log('fetch api result')
    return new Promise((resolve, reject) => {
      ins.http.get(`/subject/${subjectID}/ep`).then(
        response => {
          console.log(response)
          if (response.data.code >= 300) {
            reject({ status: response.data.code, response })
          } else {
            resolve(response)
          }
        },
        error => {
          console.log(error)
          reject(error)
        }
      )
    })
  }

  getSubject (subjectID) {
    return new Promise((resolve, reject) => {
      this.http.get(`/subject/${subjectID}`).then(
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

  setSubjectCollectionStatus ({ subjectID, status }) {
    return new Promise((resolve, reject) => {
      this.http.post(`/collection/${subjectID}/update`, `status=${status}`,
        { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).then(
        response => {
          if (response.data.code >= 300) {
            reject({ response })
          } else {
            resolve(response)
          }
        },
        error => reject(error)
      )
    })
  }
}

let apiServer = external_axios_default.a.create({
  baseURL: URLS.apiServerURL,
  headers: { 'bgm-tv-auto-tracker': "0.9.0" },
})

function parseEpisode (title) {
  let re = /第(\d+)集/g
  let result = re.exec(title)
  console.log(result)

  if (result) {
    return parseInt(result[1], 10)
  } else {
    return 0
  }
}

/**
 * A number, or a string containing a number.
 * @typedef {object} Auth
 * @property {string} access_token access token
 * @property {number} expires_in expires duration
 * @property {string} token_type
 * @property {null}   scope
 * @property {number} user_id
 * @property {string} refresh_token
 * @property {number} auth_time
 */

/**
 *
 * @param {Auth} auth
 */
function saveAuth (auth) {
  auth.auth_time = parseInt(new Date().getTime() / 1000, 10)
  gmSetValue('auth', JSON.stringify(auth))
}

/**
 * @param {Auth} auth
 * @return {boolean}
 */
function ifAuthExpires (auth) {
  /* auth_time 2d  expires in 9d */
  /*            2d + 7d - 1d < 6d => false */
  /*            2d + 7d - 1d < 8d => true */
  return (auth.auth_time + auth.expires_in - 2 * 24 * 60 * 60) < Math.round(new Date().getTime() / 1000)
}

// * @returns {(Auth|false)}
/**
 *
 * @return {Promise.< Auth|false >}
 */
function getAuth () {
  /**
   * @type {Auth}
   */
  let auth = gmGetValue('auth', false)
  if (auth) {
    auth = JSON.parse(auth)
    if (ifAuthExpires(auth)) {
      // if (true) {
      console.log('refresh token')
      return apiServer.post('/api/v0.1/refresh_token', auth)
        .then(response => {
          if (response.data.hasOwnProperty('error')) {
            // alert('续期token失败,请手动重新授权')
            console.log(response.data)
          }
          saveAuth(response.data)
          return response.data
        })
    }
  }
  return Promise.resolve(auth)
  // return auth
}



// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("33yf");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// CONCATENATED MODULE: ./src/js/website.js





class website_bilibili {
  /**
   * Init Website Data.
   *
   * @method
   * @returns {Promise}
   */
  static init () {
    const status = gmUnsafeWindow.__INITIAL_STATE__
    const episode = gmUnsafeWindow.__INITIAL_STATE__.epList
      .findIndex(val => {
        console.log(val)
        console.log(gmUnsafeWindow.__INITIAL_STATE__.epInfo.index)
        return val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      }) + 1
    console.log(episode)
    const bangumiID = status.mediaInfo.season_id
    let title = status.mediaInfo.title
    let episodeStartWith = parseInt(status.epList[0].index)

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'bilibili' }
      }).then(
        response => resolve({
          subjectID: response.data.subject_id,
          episode,
          title,
          episodeStartWith,
          bangumiID
        }),
        error => reject({
          episode,
          title,
          episodeStartWith,
          bangumiID,
          error
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    let cls = this
    const status = gmUnsafeWindow.__INITIAL_STATE__
    let bangumiID = status.mediaInfo.season_id
    let INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index

    function onEpisodeChange ({ season = false, episode = false }) {
      if (season) {
        cls.init().then(
          data => {
            cb(data)
          },
          notfound
        )
      }
      if (episode) {
        let ep = gmUnsafeWindow.__INITIAL_STATE__.epList
          .findIndex(val => val.index === gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) + 1
        if (ep) {
          cb({
            episode: ep
          })
        } else {
          cb({
            episode: gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
          })
        }
      }
    }

    const detectHrefChange = function () {
      console.log('check href', bangumiID, INNER_EPISODE)
      if (bangumiID !== gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id) {
        onEpisodeChange({
          season: true
        })
      } else if (INNER_EPISODE !== gmUnsafeWindow.__INITIAL_STATE__.epInfo.index) {
        onEpisodeChange({
          episode: true
        })
      }

      INNER_EPISODE = gmUnsafeWindow.__INITIAL_STATE__.epInfo.index
      bangumiID = gmUnsafeWindow.__INITIAL_STATE__.mediaInfo.season_id
    }

    setInterval(detectHrefChange, 10 * 1000)
    setTimeout(detectHrefChange, 5000)
  }

  static getPlayerInfo () {
    return Promise.resolve(
      {
        current: gmUnsafeWindow.player.getCurrentTime(),
        duration: gmUnsafeWindow.player.getDuration(),
        percent: gmUnsafeWindow.player.getCurrentTime() / gmUnsafeWindow.player.getDuration(),
      }
    )
  }
}

class website_iQiyi {
  static init () {
    // console.log(bangumiName)
    let collectionLinkEl = external_$_default()('#datainfo-navlist > a:nth-child(3)')
    let bangumiName = collectionLinkEl.html()
    let title = gmUnsafeWindow.document.title
    let collectionLink = collectionLinkEl.attr('href')
    let filename = path_browserify_default.a.basename(collectionLink)
    let bangumiID = filename.split('.').slice(0, -1).join('.')
    let episode = parseEpisode(title)

    return new Promise((resolve, reject) => {
      apiServer.get('/api/v0.2/querySubjectID', {
        params: { bangumiID, website: 'iqiyi' }
      }).then(
        response => {
          console.log(response)
          let subjectID = response.data.subject_id
          resolve({
            subjectID, episode, title, bangumiName, bangumiID, episodeStartWith: 1,
          })
        },
        () => reject({
          episode,
          title,
          episodeStartWith: 1,
          bangumiID,
          bangumiName
        })
      )
    })
  }

  static detectEpisodeChange (cb, notfound) {
    function onEpisodeChange () {
      console.log('href change')
      let title = gmUnsafeWindow.document.title
      let episode = parseEpisode(title)
      if (episode) {
        cb({ episode })
      } else {
        notfound()
      }
    }

    gmUnsafeWindow.addEventListener('hashchange', function () {
      setTimeout(onEpisodeChange, 500)
    }, false)
  }

  static getPlayerInfo () {
    return new Promise((resolve) => {
      gmUnsafeWindow._player.getPlayInfo(resolve)
    }).then(info => {
      return {
        current: info.currentTime,
        duration: info.totalDuration / 1000,
        percent: info.currentTime / info.totalDuration * 1000,
      }
      // return info.currentTime / info.totalDuration * 1000
    })
  }
}



// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=template&id=61af3bf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"disable",class:{
        iqiyi: this.website === 'iqiyi',
        bilibili: this.website === 'bilibili',
     },attrs:{"id":"bgm_tv_tracker"}},[_c('div',{staticClass:"bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius",class:{},attrs:{"id":"bgm_tv_tracker_btn_on_page"},on:{"click":_vm.trigger}},[_vm._v("\n    bgm.tv"+_vm._s(_vm.score)+" "+_vm._s(_vm.episodeMarked?'✓':'')+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"bgm_tv_tracker_info"},[(!_vm.subjectID)?_c('div',{staticClass:"not_found"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tmpSubjectID),expression:"tmpSubjectID"}],staticClass:"subject",attrs:{"type":"text","placeholder":"条目ID或者对应条目链接"},domProps:{"value":(_vm.tmpSubjectID)},on:{"input":function($event){if($event.target.composing){ return; }_vm.tmpSubjectID=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"notfound",on:{"click":_vm.userSubmitSubjectID}},[_vm._v("submit subject id")])])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('p',[_vm._v("你正在看:\n        "),_c('span',{attrs:{"id":"bgm_tv_tracker_title"}},[_vm._v(_vm._s(_vm.bangumiName))])]),_vm._v(" "),_c('p',[_vm._v("第 "),_c('span',{attrs:{"id":"bgm_tv_tracker_episode"}},[_vm._v(_vm._s(_vm.episode + (_vm.episodeStartWith?_vm.episodeStartWith:1) -1))]),_vm._v(" 集")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_link"}},[(_vm.episodeID)?_c('a',{attrs:{"href":("https://bgm.tv/ep/" + _vm.episodeID),"target":"_blank","rel":"noopener noreferrer"}},[_vm._v("吐槽本集")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.subjectID)?_c('a',{attrs:{"href":("https://bgm.tv/subject/" + _vm.subjectID),"target":"_blank","rel":"noopener noreferrer"}},[_vm._v("subject/"+_vm._s(_vm.subjectID))]):_c('a',{attrs:{"href":("https://bgm.tv/subject_search/" + _vm.title + "?cat=2"),"target":"_blank","rel":"noopener noreferrer"}},[_vm._v("search in bgm.tv")])]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.subjectID)?_c('div',[_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watch"},on:{"click":_vm.watchEps}},[_vm._v("标记本集为看过\n      ")]),_vm._v(" "),_c('button',{staticClass:"bgm_tv_tracker_radius",attrs:{"id":"bgm_tv_tracker_mark_watched"},on:{"click":_vm.setWatchProgress}},[_vm._v("看到本集\n      ")])]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticStyle:{"color":"red"},attrs:{"href":_vm.reportUrl,"target":"_blank","rel":"noopener noreferrer"}},[_c('p',[_vm._v("报告问题")])]),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"bangumi_id\" : \""+_vm._s(_vm.bangumiID)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"title\" : \""+_vm._s(_vm.title)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"website\" : \""+_vm._s(_vm.website)+"\",")]):_vm._e(),_vm._v(" "),(!_vm.subjectID)?_c('p',[_vm._v("\"subject\" : \"\",")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.config.autoMarkWatched),expression:"config.autoMarkWatched"}],attrs:{"type":"checkbox","id":"bgm_tv_tracker_auto_mark_watched"},domProps:{"checked":Array.isArray(_vm.config.autoMarkWatched)?_vm._i(_vm.config.autoMarkWatched,null)>-1:(_vm.config.autoMarkWatched)},on:{"change":function($event){var $$a=_vm.config.autoMarkWatched,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.config, "autoMarkWatched", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.config, "autoMarkWatched", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.config, "autoMarkWatched", $$c)}}}}),_vm._v(" "),_c('label',{attrs:{"for":"bgm_tv_tracker_auto_mark_watched"}},[_vm._v("\n      播放进度大于80%时自动标记为看过\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.config.collectionSubjectWhenMarkStatus),expression:"config.collectionSubjectWhenMarkStatus"}],attrs:{"type":"checkbox","id":"bgm_tv_tracker_collection_status_when_watch_status"},domProps:{"checked":Array.isArray(_vm.config.collectionSubjectWhenMarkStatus)?_vm._i(_vm.config.collectionSubjectWhenMarkStatus,null)>-1:(_vm.config.collectionSubjectWhenMarkStatus)},on:{"change":function($event){var $$a=_vm.config.collectionSubjectWhenMarkStatus,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.config, "collectionSubjectWhenMarkStatus", $$c)}}}}),_vm._v(" "),_c('label',{attrs:{"for":"bgm_tv_tracker_collection_status_when_watch_status"}},[_vm._v("\n      标记播放进度时把条目标记为在看\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{attrs:{"id":"bgm_tv_tracker_notification"}},_vm._l((_vm.messages),function(message,index){return _c('div',{key:index},[_c('hr'),_vm._v(" "),_c('div',[_c('p',[_vm._v("\n          "+_vm._s(message.time.getHours())+":"+_vm._s(message.time.getMinutes())+":"+_vm._s(message.time.getSeconds())+"\n        ")]),_vm._v(" "),_c('pre',[_c('code',[_vm._v(_vm._s(message.text))])])])])}))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/js/App.vue?vue&type=template&id=61af3bf4&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/js/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/**
 * @type {Object}
 */
let collection = gmGetValue('collection', false)

if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  data () {
    let website = ''
    if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
      website = WEBSITE.bilibili
    }
    else if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
      website = WEBSITE.iqiyi
    }

    /**
     * @namespace
     * @property {object} config
     * @property {Boolean} collectionSubjectWhenMarkStatus
     * @property {Boolean} autoMarkWatched
     */
    let config = gmGetValue('config', false)
    if (config) {
      try {
        config = JSON.parse(config)
      } catch (e) {
        config = {}
        gmSetValue('config', '{}')
      }
    }

    return {
      tmpSubjectID: null,
      messages: [],
      bangumiID: null,
      bangumiName: null,
      // is episode starts with 1, like https://www.bilibili.com/bangumi/play/ep200167
      episodeStartWith: null,
      episodeID: null,
      episode: null,
      title: null,
      subjectID: null,
      score: '',
      config: {
        autoMarkWatched: config.autoMarkWatched,
        collectionSubjectWhenMarkStatus: config.collectionSubjectWhenMarkStatus,
      },
      watchPercent: 0,
      episodeMarked: false,
      website
    }
  },
  computed: {
    reportUrl () {
      let baseURL = 'https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues/new'
      let hrefWithoutHash = location.protocol + '//' + location.host + location.pathname
      let body =
        `问题页面: [${this.bangumiName}](${hrefWithoutHash})` + '\n' +
        `Bangumi ID: ${this.bangumiID}` + '\n' +
        `episode: ${this.episode}` + '\n' +
        'bgm page: \n' +
        `Subject: https://bgm.tv/subject/${this.subjectID}` + '\n' +
        `episode: https://bgm.tv/ep/${this.episodeID}` + '\n' +
        '\n<!-- 描述你遇到的问题 -->\n'

      let params = {
        labels: 'bug',
        body
      }

      let query = external_$_default.a.param(params)

      return baseURL + '?' + query
    },
  },
  watch: {
    config: {
      handler (val, oldVal) {
        // this.notify(JSON.stringify(val, null, 2))
        console.log(val)
        gmSetValue('config', JSON.stringify(val))
      },
      deep: true
    },
    subjectID (val) {
      this.episodeMarked = false
      let vm = this
      if (val)
        this.$bgmApi.getSubject(val).then(response => {
          vm.score = ' ' + response.data.rating.score
          vm.bangumiName = response.data.name_cn || response.data.name
        })
    },
    episode () {
      this.episodeMarked = false
      let vm = this
      this.collectSubject(this.subjectID)
      vm.$bgmApi.getEps(this.subjectID).then(
        data => {
          let episode = vm.episode
          let eps = data.eps.filter(val => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0))

          eps = eps.sort(function (a, b) {
            let key = 'sort'
            let x = a[key]
            let y = b[key]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
          })
          try {
            this.episodeID = eps[episode - 1].id
          } catch (e) {
            vm.notify('没找到这集...')
          }
        },
        error => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        }
      )

    }
  },
  methods: {
    userSubmitSubjectID () {
      if (this.tmpSubjectID) {
        if (this.tmpSubjectID.startsWith('http')) {
          const myURL = new URL(this.tmpSubjectID)
          const p = myURL.pathname
          const pList = p.split('/')
          this.tmpSubjectID = pList[pList.length - 1]
        }
        this.subjectID = this.tmpSubjectID
        apiServer.post('/api/v0.1/reportMissingBangumi',
          {
            bangumiID: this.bangumiID,
            subjectID: this.subjectID,
            title: this.title,
            href: gmUnsafeWindow.location.href,
            website: this.website
          })
      }
    },

    /**
     * Append a message to banner
     * @param {string} message.
     */
    notify (message) {
      let now = new Date()
      this.messages.unshift({
        time: now,
        text: message,
      })
      console.log(this.messages)
    },

    collectSubject (subjectID) {
      if (!this.config.collectionSubjectWhenMarkStatus) return
      let vm = this
      if (!collection[subjectID]) {
        this.$bgmApi.setSubjectCollectionStatus({ subjectID, status: 'do' }).then(
          response => {
            if (response.data.code === 401) {
              vm.notify(JSON.stringify(response))
              vm.notify(response.data.error)
            } else {
              vm.notify('add this bangumi to your collection')
              collection[subjectID] = true
              gmSetValue('collection', JSON.stringify(collection))
            }
          },
          error => vm.notify(error.response.data.error_description)
        )
      }
    },

    trigger () {
      external_$_default()('.bgm_tv_tracker_info').toggle('fast')
    },
    watchEps () {
      let vm = this
      this.collectSubject(this.subjectID)
      vm.$bgmApi.getEps(this.subjectID).then(
        data => {
          let episode = vm.episode
          let eps = data.eps.filter(val => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0))


          eps = eps.sort(function (a, b) {
            let key = 'sort'
            let x = a[key]
            let y = b[key]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
          })

          try {
            let ep = eps[episode - 1].id
            vm.$bgmApi.setEpisodeWatched(ep)
            this.episodeMarked = true
            vm.notify('mark your status successfully')
          } catch (e) {
            vm.notify(e.toString())
          }

        },
        error => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        })
      // .catch(reason => vm.notify(JSON.stringify(reason)))

    },
    setWatchProgress () {
      let episode = this.episode
      this.collectSubject(this.subjectID)
      this.$bgmApi.setSubjectProgress(this.subjectID, episode).then(
        () => {
          this.notify('mark status successful')
          this.episodeMarked = true
        },
        error => {
          if (error.response.data.code === 400) {
            this.notify('error: ' + error.response.data.error + ',' + '应该是因为你在bgm上的状态已经是看到本集')
          } else {
            this.notify('error: ' + JSON.stringify(error.response))
          }
        }
      )
    }
  },
  created () {
    // episode-item
    this.$website.init().then(data => {
      let { subjectID, episode, title, bangumiID, episodeStartWith } = data
      this.subjectID = subjectID
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
      this.episodeStartWith = episodeStartWith
    }, error => {
      console.log(error)
      if (error.error.response.status === 404) {
        this.notify('番剧没找到 手动输入吧')
      }
      let { episode, title, bangumiID, episodeStartWith } = error
      this.episodeStartWith = episodeStartWith
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
    })

    let vm = this
    this.$website.detectEpisodeChange(data => {
        if (data.subjectID)
          vm.subjectID = data.subjectID
        if (data.episode)
          vm.episode = data.episode
        if (data.bangumiID)
          vm.bangumiID = data.bangumiID
      },
      error => {
        console.log(error)
        vm.episode = error.episode
        if (error.bangumiID !== vm.bangumiID) {
          if (!error.subjectID) {
            this.subjectID = undefined
          }
          vm.bangumiID = error.bangumiID
        }
      })

    this.$bgmApi.http.interceptors.request.use(function (config) {
      //在发送请求之前做某事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('config: ' + JSON.stringify(config, null, 2))
      }
      return config
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return Promise.reject(error)
    })

    this.$bgmApi.http.interceptors.response.use(function (response) {
      //对响应数据做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return response
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('error: ' + JSON.stringify(error, null, 2))
      }
      return Promise.reject(error)
    })
    setInterval(() => {
      this.$website.getPlayerInfo().then(info => {
        let { percent, duration } = info
        console.log('get player percent')
        this.watchPercent = percent
        if (percent > 0.8 && (duration > 120)) {
          if (this.config.autoMarkWatched && this.subjectID && !this.episodeMarked) {
            this.episodeMarked = true
            this.watchEps()
          }
        }
      })
    }, 30 * 1000)
  }
});


// CONCATENATED MODULE: ./src/js/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var js_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/js/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("SwRH");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/js/App.vue






/* normalize component */

var component = normalizeComponent(
  js_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./src/js/index.js









if (gmUnsafeWindow.location.href.startsWith(URLS.callBackUrl)) {
  if (gmUnsafeWindow.data) {
    saveAuth(gmUnsafeWindow.data)
    // gmSetValue('auth', JSON.stringify(gmUnsafeWindow.data))
    let child = gmUnsafeWindow.document.createElement('h1')
    child.innerText = '成功授权 请关闭网页 授权后不要忘记刷新已经打开的视频网页'
    gmUnsafeWindow.document.body.appendChild(child)
  }
}
let js_website
// inject bilibili
if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
  js_website = 'bilibili'
  external_$_default()('#bangumi_detail > div > div.info-right > div.info-title.clearfix > div.func-module.clearfix')
    .prepend(`<div id='bgm_tv_app'></div>`)
}

// inject iqiyi
if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
  if (gmUnsafeWindow.Q.PageInfo.playPageInfo.categoryName === '动漫') {
    js_website = 'iqiyi'
    external_$_default()('#jujiPlayWrap > div:nth-child(2) > div > div > div.funcRight.funcRight1014')
      .prepend(`<div id='bgm_tv_app'></div>`)
  }
}

if (external_$_default()('#bgm_tv_app')) {
  getAuth().then(
    auth => {
      if (auth) {
        /* eslint-disable unused-def */
        /**
         * @type {BgmApi}
         */
        external_Vue_default.a.prototype.$bgmApi = new utils_BgmApi({ accessToken: auth.access_token })
        external_Vue_default.a.prototype.$http = external_axios_default.a
        /* eslint-enable unused-def */
        if (js_website) {
          if (js_website === 'bilibili') external_Vue_default.a.prototype.$website = website_bilibili
          if (js_website === 'iqiyi') external_Vue_default.a.prototype.$website = website_iQiyi
          // eslint-disable-next-line no-new
          new external_Vue_default.a({
            el: '#bgm_tv_app',
            render: h => h(App),
          })
        }
      } else {
        gmOpenInTab(URLS.authURL, { active: true })
      }
    })
}


/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "wFZj":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "\n#bgm_tv_tracker.disable .bgm_tv_tracker_info{display:none\n}\ninput[type=checkbox]{-webkit-appearance:checkbox;-moz-appearance:checkbox;appearance:checkbox\n}\n.iqiyi#bgm_tv_tracker{margin-left:15px;padding-left:16px;position:relative;font-size:15px;float:left;cursor:pointer;display:inline\n}\n.iqiyi #bgm_tv_tracker_link a{color:#000\n}\n.iqiyi#bgm_tv_tracker .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%\n}\n.iqiyi.episodeMarked #bgm_tv_tracker_btn_on_page{color:#fff;background-color:#00a3d7\n}\n.iqiyi .bgm_tv_tracker_btn.bgm_tv_tracker{float:left;cursor:pointer;font-size:14px;height:28px;line-height:18px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in\n}\n.iqiyi .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border:1px solid #e5e9ef;cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:250px;z-index:1\n}\n.iqiyi .bgm_tv_tracker_info *{max-width:100%\n}\n.iqiyi .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px\n}\n#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:380px\n}\n@media screen and (max-width:1400px){\n.arc-toolbar .block{padding:0 12px;margin-left:-12px\n}\n.video-toolbar-module .btn-item{padding:0 0 0 60px!important;margin-left:-12px\n}\n#bangumi_detail .bangumi-info.clearfix .info-right .info-title.clearfix a h2{width:200px!important\n}\n}\n.bilibili#bgm_tv_tracker{display:inline-block;position:relative;float:left;margin-right:20px\n}\n.bilibili .bgm_tv_tracker_radius{border-radius:4px;border:1px solid #e5e9ef\n}\n.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker:hover{color:#00a1d6;border:1px solid #00a1d6\n}\n.bilibili .bgm_tv_tracker_btn.bgm_tv_tracker{color:#6d757a;float:left;cursor:pointer;font-size:14px;height:28px;line-height:28px;text-align:center;width:100px!important;-webkit-transition:all .1s ease-in;transition:all .1s ease-in\n}\n.bilibili .bgm_tv_tracker_info{padding:8px;margin-top:5px;background:#fff;border-radius:0 0 4px 4px;border:1px solid #e5e9ef;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.16);box-shadow:0 2px 4px rgba(0,0,0,.16);cursor:default;height:auto;left:-1px;line-height:normal;opacity:0;pointer-events:none;position:absolute;text-align:left;top:70px;white-space:normal;width:300px;z-index:1\n}\n.bilibili .bgm_tv_tracker_info *{max-width:100%\n}\n.bilibili .bgm_tv_tracker_info{opacity:1;pointer-events:auto;top:100%\n}\n.bilibili .bgm_tv_tracker_info button{padding:4px 6px;line-height:14px;display:inline-block;margin:4px;border:2px solid #fff\n}\n.bilibili .bgm_tv_tracker_info button:active{background:#fff\n}\n.bilibili .bgm_tv_tracker_info button:hover{border:2px solid #99bdf7\n}", ""]);

// exports


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