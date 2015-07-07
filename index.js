const fs = require('fs')
const path = require('path')
const combiner = require('files-combiner')
const urlParser = require('./libs/path-parser')

module.exports = function(root) {

  return function*(next) {

    // TODO: support custom urlParser
    const targetsMeta = urlParser(this.request.url)

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
