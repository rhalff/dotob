const test = require('ava')
const processFile = require('../../src/cli/utils/processFile')
const path = require('path')

test.cb('can process file with object', (t) => {
  t.plan(3)

  const file = path.resolve(__dirname, './fixture/ok.json')

  processFile(file, (error, result) => {
    if (error) t.fail(error)

    t.is(result.file, file)
    t.true(result.object)
    t.deepEqual(result.json, [{ok: true}])
    t.end()
  })
})

test.cb('can process file with an array of objects', (t) => {
  t.plan(3)

  const file = path.resolve(__dirname, './fixture/ok_array.json')

  processFile(file, (error, result) => {
    if (error) t.fail(error)

    t.is(result.file, file)
    t.false(result.object)
    t.deepEqual(result.json, [{one: 1}, {two: 2}])
    t.end()
  })
})
