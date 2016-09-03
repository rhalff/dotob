const glob = require('glob')
const processFile = require('./processFile')

function processFiles (files, callback) {
  if (files.length === 1) {
    const pattern = files[0]
    const g = glob(pattern)

    g.on('match', (file) => {
      processFile(file, callback)
    })
  } else {
    files.forEach((file) => {
      processFile(file, callback)
    })
  }
}

module.exports = processFiles
