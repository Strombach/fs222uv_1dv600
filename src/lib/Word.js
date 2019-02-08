const LetterClass = require('./Letter')

class Word {
  constructor (input) {
    this.chosenWord = input
    this.wordArr = []
    this.wordSplit = this.chosenWord.split('')
  }

  createLetters () {
    for (let i = 0; i < this.chosenWord.length; i++) {
      let letter = this.wordSplit[i]
      let letterObj = new LetterClass(letter)
      this.wordArr.push(letterObj)
    }
  }
}

module.exports = Word
