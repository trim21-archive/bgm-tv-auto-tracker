/*
 * grunt-userscript-meta
 * https://github.com/Zod-/grunt-userscript-meta
 *
 * Copyright (c) 2015 Julian Hangstörfer
 * Licensed under the MIT license.
 */

'use strict'

module.exports = function (grunt) {
  grunt.registerMultiTask('userscript-meta',
    'Generate the userscript metadata-block with package.json',
    function () {
      var opts = this.options({
        pkg: grunt.config.get('pkg')
      })
      if (!opts.pkg) {
        grunt.config.requires('pkg')
      }
      var pkg = opts.pkg
      var metaData = []
      var src = ''
      var maxKeyLength = 0
      pkg.userscript = pkg.userscript || {}

      function push (k, v) {
        if (!v) {
          return
        }
        if (Array.isArray(v)) {
          v.forEach(function (vv) {
            push(k, vv)
          })
        } else {
          var obj = {}
          maxKeyLength = Math.max(maxKeyLength, k.length)
          obj[k] = v
          metaData.push(obj)
          grunt.verbose.writeln('Adding ' + k + ': ' + v)
        }
      }

      function localization (meta, v) {
        for (var name in v) {
          if (v.hasOwnProperty(name)) {
            push(meta + ':' + name, v[name])
          }
        }
      }

      push('name', pkg.userscript.name)

      push('namespace', pkg.userscript.namespace)

      push('description', pkg.description)
      localization('description', pkg.userscript.description)

      push('version', pkg.version)

      function author (meta, person) {
        if (Array.isArray(person)) {
          person.forEach(function (p) {
            author(meta, p)
          })
        } else if (typeof person === 'string') {
          var name = person.match(/([^<]*)<[^>]*>[^\(]*\([^\)]*\)/)[1]
          push(meta, name.trim())
        } else if (typeof person === 'object') {
          push(meta, person.name)
        }
      }

      author('author', pkg.userscript.author || pkg.author)
      author('contributor', pkg.contributors)

      push('source', pkg.homepage)

      function license (lic) {
        if (Array.isArray(lic)) {
          lic.forEach(license)
        } else if (typeof lic === 'string') {
          push('license', lic)
        } else if (typeof lic === 'object') {
          push('license', lic.type)
        }
      }

      license(pkg.license)
      license(pkg.licenses)

      function resource (res) {
        if (Array.isArray(res)) {
          res.forEach(resource)
        } else if (typeof res === 'object') {
          push('resource', res.name + ' ' + res.url)
        }
      }

      resource(pkg.userscript.resource)

      function greasyfork (req) {
        if (Array.isArray(req)) {
          req.forEach(greasyfork)
          return
        }
        if (typeof req !== 'object') {
          return
        }
        var url = 'https://greasyfork.org/scripts/'
        url += req.id
        url += '/code/code.js'
        if (req.version) {
          url += '?version=' + req.version
        }
        push('require', url)
      }

      function require (req) {
        if (typeof req !== 'object') {
          return
        }
        for (var provider in req) {
          if (req.hasOwnProperty(provider)) {
            switch (provider) {
              case 'greasyfork':
                greasyfork(req[provider])
                break
            }
          }
        }
      }

      require(pkg.userscript.require)

      for (var other in pkg.userscript.other) {
        if (pkg.userscript.other.hasOwnProperty(other) && other !== 'name') {
          push(other, pkg.userscript.other[other])
        }
      }

      function repeat (str, n) {
        var ret = ''
        for (var i = 0; i < n; i++) {
          ret += str
        }
        return ret
      }

      src += '// ==UserScript==\n'
      metaData.forEach(function (meta) {
        for (var metaKey in meta) {
          if (meta.hasOwnProperty(metaKey)) {
            src +=
              '// @' +
              (metaKey + repeat(' ', maxKeyLength - metaKey.length)) +
              '  ' + meta[metaKey] +
              '\n'
          }
        }
      })
      src += '// ==/UserScript==\n'

      this.files.forEach(function (f) {
        grunt.file.write(f.dest, src)
      })
    })
}