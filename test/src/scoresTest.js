const Scores = require('../../src/Scores')
const assert = require('chai').assert

let highScores = new Scores()

function runTest () {
  
  describe('HighScores', () => {
    it('The function finds the high-score list', () => {
      assert.isArray(highScores.getHighScores())
    })
  })
}

module.exports = runTest
