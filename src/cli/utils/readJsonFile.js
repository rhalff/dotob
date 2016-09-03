const fs = require('fs')

function readJsonFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (error, contents) => {
      if (error) reject(error)

      try {
        resolve(JSON.parse(contents))
      } catch (parseError) {
        reject(parseError)
      }
    })
  })
}

module.exports = readJsonFile
