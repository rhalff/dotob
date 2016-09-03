const dotob = require('dot-object')
const path = require('path')
const processFiles = require('../utils/processFiles')
const output = require('../utils/output')
const must = require('../utils/must')
const readJsonFile = require('../utils/readJsonFile')
const showErrorAndQuit = require('../utils/showErrorAndQuit')

function transformAction (files, options) {
  must(options, 'recipe')

  readJsonFile(path.resolve(process.cwd(), options.recipe))
    .then((recipe) => {
      processFiles(files, (error, result) => {
        if (error) showErrorAndQuit(error)

        const {file, json, object} = result

        const target = []
        for (let i = 0; i < json.length; i++) {
          target.push(dotob.transform(recipe, json[i]))
        }

        output(options, file, target, object)
      })
    }).catch(showErrorAndQuit)
}

module.exports = transformAction
