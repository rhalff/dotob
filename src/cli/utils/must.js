function must (options, option) {
  if (!options.hasOwnProperty(option) || options[option] === undefined) {
    console.log(`Option --${option} is required`)

    process.exit(1)
  }
}

module.exports = must
