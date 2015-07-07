'use strict'

module.exports = function(url) {

  const parsed = url.match(/\/combine\/(\w+)(.+)/)

  if (!parsed) return false

  const targetsMeta = {
    type: parsed[1],
    files: parsed[2].split(',')
  }

  return validate(targetsMeta) ? targetsMeta : false
}

function validate(meta) {

  if (!meta.type.match(/^(js|css)$/)) {
    return false
  }

  // filepath should end with filetype.
  const fileReg = new RegExp(meta.type + '$')
  let i = 0
  while (meta.files[i]) {
    if (!meta.files[i++].match(fileReg)) return false
  }

  return true
}
