const LetterClass = require('./Letter')

class Word {
  constructor (input) {
    this.chosenWord = input
    this.wordSplit = this.chosenWord.split('')
    this.wordArr = []
  }

  createLetters () {
    for (let i = 0; i < this.chosenWord.length; i++) {
      let letter = this.wordSplit[i]
      let letterObj = new LetterClass(letter)
      this.wordArr.push(letterObj)
    }
  }

  printWord () {
    let printArr = []
    for (let i = 0; i < this.wordArr.length; i++) {
      printArr.push(this.wordArr[i].shown)
    }
    console.log(printArr.join(' '))
  }

  checkLetter (letter, gamer) {
    for (let i = 0; i < this.wordArr.length; i++) {
      if (this.wordArr[i].letter === letter) {
        this.wordArr[i].shown = letter
        this.printWord()
        gamer.correctGuesses++
      }
    }
  }
}

module.exports = Word
