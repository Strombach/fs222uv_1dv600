const LetterClass = require('./Letter')

class Word {
  constructor (input) {
    this.chosenWord = input
    this.wordSplit = this.chosenWord.split('')
    this.wordArr = []
  }

  /**
   * The function that creates a new letter
   * object for each letter in the word.
   */
  createLetters () {
    for (let i = 0; i < this.chosenWord.length; i++) {
      let letter = this.wordSplit[i]
      let letterObj = new LetterClass(letter)
      this.wordArr.push(letterObj)
    }
  }

  /**
   * Prints the "shown" value of each letter object in the word
   * array as an array with a space between.
   */
  printWord () {
    let printArr = []
    for (let i = 0; i < this.wordArr.length; i++) {
      printArr.push(this.wordArr[i].shown)
    }
    console.log(printArr.join(' '))
  }

  /**
   * The function that checks if the guessed letter appears in the word
   * and if it does the gamers correctGuesses increases by one.
   * @param {Object} letter The letter that the gamer guesses.
   * @param {Object} gamer The gamer that plays the game.
   */
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
