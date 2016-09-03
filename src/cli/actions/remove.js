const dotob = require('dot-object')
const processFiles = require('../utils/processFiles')
const splim = require('../utils/splim')
const output = require('../utils/output')
const must = require('../utils/must')
const showErrorAndQuit = require('../utils/showErrorAndQuit')

function removeAction (files, program) {
  const options = program.opts()

  must(options, 'remove')

  processFiles(files, (error, result) => {
    if (error) showErrorAndQuit(error)

    let j
    const {json, file, object} = result

    splim(options.remove)
      .forEach((path) => {
        for (j = 0; j < json.length; j++) {
          dotob.remove(path, json[j])
        }
      })

    output(options, file, json, object)
  })
}

module.exports = removeAction
