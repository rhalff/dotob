const glob = require('glob')
const processFile = require('../utils/processFile')

function defaultAction (files, options) {
  const g = glob(files)

  g.on('match', processFile(options))
}

module.exports = defaultAction
