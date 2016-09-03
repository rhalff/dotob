const fs = require('fs')
const finish = require('./finish')

function output (options, file, json, isObject) {
  if (isObject) {
    json = json.pop()
  }
  if (options.write) {
    fs.writeFile(file, JSON.stringify(json, null, options.indent || 2), finish(
      options, file, json
    ))
  } else {
    console.log(json)

    finish(options, file, json)()
  }
}

module.exports = output
