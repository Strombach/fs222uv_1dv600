const assert = require('chai').assert
const Word = require('../../src/Word')
const LetterClass = require('../../src/Letter')

let sut = new Word('apple')

function runTest () {
  describe('Word', () => {
    describe('Create letters, the word is "apple"', () => {
      it('The word array is equal to the word input', () => { 
        assert.isTrue(shouldReturnTrueIfWordArrayIsEqualToChosenWord()) 
      })
      it('Every letter in the word array should be an object', () => {
        assert.isTrue(shouldReturnTrueIfAllLettersAreObjects())
      })
    })
  })
}

function shouldReturnTrueIfWordArrayIsEqualToChosenWord () {
  sut.createLetters()
  let testArr = []  
  sut.wordArr.forEach(letter => {
    testArr.push(letter.letter)
  })
  
  if (testArr.join('') === sut.chosenWord) {
    return true
  } else {
    return false
  }
}

function shouldReturnTrueIfAllLettersAreObjects () {
  let numberOfObjects = 0
  sut.createLetters()
  sut.wordArr.forEach(obj => {
    if (typeof obj === 'object') {
      numberOfObjects++
    }
  })

  if (numberOfObjects === sut.wordArr.length) {
      return true
  } else {
    return false
  }
}

module.exports = runTest
