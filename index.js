'use strict'

var fs = require('fs')
var path = require('path')
var combiner = require('files-combiner')
var urlParser = require('./libs/path-parser')

module.exports = function(root) {

  return function*(next) {

    // TODO: support custom urlParser
    var targetsMeta = urlParser(this.request.url)

    if (!targetsMeta) {
      yield next
    } else {

      var fileList = targetsMeta.files.map(function(filepath) {
        return path.join(root, filepath)
      })

      this.type = targetsMeta.type
      this.body = combiner(fileList)
    }
  }
}
