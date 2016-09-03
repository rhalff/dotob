function splim (path) {
  return path.split(',')
    .map(function (val) {
      return val.trim()
    })
}

module.exports = splim
