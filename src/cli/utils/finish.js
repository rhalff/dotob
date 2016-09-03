const showErrorAndQuit = require('./showErrorAndQuit')

function finish (options, file, json, modified) {
  return function (error) {
    if (error) showErrorAndQuit(error)

    if (options.verbose) {
      console.log(file + ': updated.')
      /*
       if (modified) {
       console.log(file + ': updated.')
       } else {
       console.log(file + ': no matches.')
       }
       */
    }
  }
}

module.exports = finish
