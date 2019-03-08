const assert = require('chai').assert

function run(test) {
  describe('Run', function () {
    it('Should get Test as param', function () {
      assert.equal(test, 'Test')
    })
  })
}

function test (test) {
  describe('Test', function () {
    it('Should get Test as param', function () {
      assert.equal(test, 'Test1')
    })
  })
}

module.exports = {
  run,
  test
}
