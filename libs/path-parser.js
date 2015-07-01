'use strict'

module.exports = function(url) {

  var parsed = url.match(/\/combine\/(\w+)(.+)/)

  if (!parsed) return false

  var targetsMeta = {
    type: parsed[1],
    files: parsed[2].split(',')
  }

  return validate(targetsMeta) ? targetsMeta : false
}

function validate(meta) {

  if (!meta.type.match(/^(js|css)$/)) {
    return false
  }

  // 文件路径需要匹配后缀名
  var fileReg = new RegExp(meta.type + '$')
  var i = 0
  while (meta.files[i]) {
    if (!meta.files[i++].match(fileReg)) return false
  }

  return true
}
