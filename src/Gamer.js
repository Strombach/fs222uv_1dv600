class Gamer {
    constructor (input) {
      this.name = input
      this.mistakeCounter = 0
    }
  
    printTest () {
      console.log(this.name)
    }
  }
  
  module.exports = Gamer
  