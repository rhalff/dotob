function showErrorAndQuit (error) {
  console.error(error.toString())

  process.exit(1)
}

module.exports = showErrorAndQuit
