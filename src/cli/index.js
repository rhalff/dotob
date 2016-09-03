'use strict'

const program = require('commander')
const moveAction = require('./actions/move')
const removeAction = require('./actions/remove')
const showAction = require('./actions/show')
const dotAction = require('./actions/dot')
const transformAction = require('./actions/transform')
const pkg = require('../../package.json')

program
  .version(pkg.version)
  .usage('[options] <pattern>')
  .option('-v, --verbose', 'Be verbose')

program
  .command('dot <files...>')
  .description('Convert object to dotted-key/value pair')
  .option('-i, --indent <n>', 'Indentation', parseInt)
  .action(dotAction)

program
  .command('remove <files...>')
  .description('Move property from one place to another')
  .option('-r, --remove <paths>', 'Remove property')
  .option('-i, --indent <n>', 'Indentation', parseInt)
  .option('-w, --write', 'write files in place')
  .action(removeAction)

program
  .command('show <files...>')
  .description('Show all dotted paths')
  .action(showAction)

program
  .command('transform <files...>')
  .description('Transform json using a recipe file')
  .option('-r, --recipe <file>', 'transform file to apply')
  .option('-i, --indent <n>', 'Indentation', parseInt)
  .option('-w, --write', 'write files in place')
  .action(transformAction)

program
  .command('move <files...>')
  .description('Move property from one place to another')
  .option('-f, --from <paths>', 'From path')
  .option('-t, --to <paths>', 'To path (number of replacements must match --to values)')
  .option('-i, --indent <n>', 'Indentation', parseInt)
  .option('-m, --merge', 'Merge into target')
  .option('-w, --write', 'write files in place')
  .action(moveAction)

program.parse(process.argv)
