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

export { $, tm_addStyle, tm_xmlHttpRequest, tm_setValue, tm_getValue, tm_openInTab, tm_unsafeWindow }
