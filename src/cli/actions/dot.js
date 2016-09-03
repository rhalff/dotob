const dotob = require('dot-object')
const processFiles = require('../utils/processFiles')
const showErrorAndQuit = require('../utils/showErrorAndQuit')

function dotAction (files, program) {
  const options = program.opts()

  processFiles(files, (error, result) => {
    if (error) showErrorAndQuit(error)

    let json

    if (result.object) {
      json = result.json.pop()
    } else {
      json = result.json
    }

    console.log(
      JSON.stringify(
        dotob.dot(json),
        null,
        options.indent || 2
      )
    )
  })
}

module.exports = dotAction
