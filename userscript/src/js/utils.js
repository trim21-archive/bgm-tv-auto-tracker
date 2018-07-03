(function () {
  'use strict'

  console.groupCollapsed('userscript starting (util) ...')

  my = my || {}
  my.util = {

    addCSS: function (css) {
      var head = document.getElementsByTagName('head')[0], style
      if (!head) return
      style = document.createElement('style')
      style.type = 'text/css'
      style.innerHTML = css
      head.appendChild(style)
    }
  }

  my.util.addCSS('/* @include ../css.min.css */')
  console.log('CSS injected into page now')

  console.groupEnd()
})()
