const assert = require('chai').assert
const Gamer = require('../../src/Gamer')
const Word = require('../../src/Word')

let sut = new Gamer('sut')

function runTest () {
  describe('Gamer', () => {
    describe('Initiate', () => {
      it('Name is a string and should be "sut"', () => {
        assert.typeOf(sut.name, 'string')
        assert.equal(sut.name, 'sut')
      })
      it('No input should throw exception', () => {
        assert.isTrue(shouldReturnTrueIfError())
      })
      it('Throws exception if input is not a string', () => {
        assert.isTrue(shouldReturnTrueIfInputIsNotAString())
      })
    })
    describe('Gaming, the word is "apple"', function () {
      it('Should increase correctGuesses by two when player guesses the letter "p"', () => {
        sut = new Gamer('sut')
        let word = new Word('apple')
        word.createLetters()
        let letter = 'p'
        word.checkLetter(letter, sut)
        assert.equal(sut.correctGuesses, 2)
      })
    })
  })
}

function shouldReturnTrueIfError () {
  try {
    sut = new Gamer()
  } catch (err) {
    return true
  }
  return false
}

function shouldReturnTrueIfInputIsNotAString () {
  try {
    sut = new Gamer(5)
  } catch (err) {
    return true
  }
  return false
}

module.exports = runTest
