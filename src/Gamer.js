class Gamer {
  constructor (input) {
    if (!input) {
      throw new Error('No input sent to gamer constructor')
    }
    this.name = input
    this.mistakeCounter = 0
    this.correctGuesses = 0
    this.guessedLetters = []
  }

  /**
 * The function that prints the name and
 * the number of attempts left for the gamer.
 */
  printGamer () {
    console.log(`Your name is: ${this.name}`)
    console.log(`You got ${10 - this.mistakeCounter} attemps left.`)
  }
}

module.exports = Gamer
