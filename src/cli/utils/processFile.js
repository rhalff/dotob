const readJsonFile = require('./readJsonFile')

function processFile (file, callback) {
  readJsonFile(file)
    .then((json) => {
      let result
      let object

      if (Array.isArray(json)) {
        object = false
        result = json
      } else {
        object = true
        result = [json]
      }

      callback(null, {
        file: file,
        json: result,
        object: object
      })
    }).catch(callback)
}

module.exports = processFile
