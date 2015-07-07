'use strict'

const fs = require('fs')
const path = require('path')
const combiner = require('files-combiner')
const pathParser = require('./libs/path-parser')

module.exports = function(root, opt) {

  if (typeof opt !== 'object') opt = {}

  function blank(x) { return x }
  const preParser  = typeof opt.prePathParser  === 'function' ? opt.prePathParser : blank
  const parser     = typeof opt.pathParser     === 'function' ? opt.pathParser : pathParser
  const postParser = typeof opt.postPathParser === 'function' ? opt.postPathParser : blank

  return function*(next) {

    const targetsMeta = postParser(parser(preParser(this.request.url)))

    if (!targetsMeta) {
      yield next
    } else {

      const fileList = targetsMeta.files.map(function(filepath) {
        return path.join(root, filepath)
      })

      this.type = targetsMeta.type
      this.body = combiner(fileList)
    }
  }
}
