const dotob = require('dot-object')
const processFiles = require('../utils/processFiles')
const showErrorAndQuit = require('../utils/showErrorAndQuit')
const splim = require('../utils/splim')
const must = require('../utils/must')
const output = require('../utils/output')

function moveAction (files, program) {
  const options = program.opts()

  must(options, 'from')
  must(options, 'to')

  const merge = Boolean(options.merge)
  const from = splim(options.from)
  const to = splim(options.to)

  if (from.length !== to.length) {
    showErrorAndQuit(
      Error('--from and --to parameters are not of equal length')
    )
  }

  processFiles(files, (error, result) => {
    let i
    let j

    if (error) showErrorAndQuit(error)

    const {file, json, object} = result

    for (i = 0; i < from.length; i++) {
      for (j = 0; j < json.length; j++) {
        dotob.move(
          from[i],
          to[i],
          json[j],
          merge
        )
      }
    }

    output(options, file, json, object)
  })
}

module.exports = moveAction
