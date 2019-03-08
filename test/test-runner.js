const gamerTest = require('./src/gamerTest')
const assert = require('chai').assert

describe('Gamer', function () {
  it('Main should return hello', function () {
    assert.equal(gamerTest(), 'hello')
  })
})
