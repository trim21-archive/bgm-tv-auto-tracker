/*
* this js module is a wrapper that don't let ts-loader
* call `module.var` with `module.default.var` in compiled file
* But `axios.default` is `axios` itself, so no need to wrap axios.
* */
import Vue from 'vue'
import $ from 'jquery'
import adapter from 'axios-userscript-adapter'

export { Vue, $, adapter }
