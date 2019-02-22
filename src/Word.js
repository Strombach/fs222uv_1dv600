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
    let correct = false
    for (let i = 0; i < this.wordArr.length; i++) {
      if (this.wordArr[i].letter === letter) {
        this.wordArr[i].shown = letter
        console.log(this.wordArr[i].shown)
        this.printWord()
        gamer.correctGuesses++
        correct = true
      }
    }
    if (correct === false) {
      console.log('Wrong!')
    }
  }
}

module.exports = Word
