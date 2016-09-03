const dotob = require('dot-object')
const processFiles = require('../utils/processFiles')
const showErrorAndQuit = require('../utils/showErrorAndQuit')

function showAction (files) {
  processFiles(files, (error, result) => {
    if (error) showErrorAndQuit(error)

    let json

    if (result.object) {
      json = result.json.pop()
    } else {
      json = result.json
    }

    console.log(
      Object.keys(
        dotob.dot(json)
      ).join('\n'))
  })
}

module.exports = showAction
