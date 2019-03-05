class Gamer {
  constructor (input) {
    this.name = input
    this.mistakeCounter = 0
    this.correctGuesses = 0
    this.guessedLetters = []
  }

  printGamer () {
    console.log(`Your name is: ${this.name}`)
    console.log(`You got ${10 - this.mistakeCounter} attemps left.`)
  }
}

module.exports = Gamer
