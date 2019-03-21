const fs = require('fs')

class Scores {
  constructor (input) {
    this.highscores = []
  }

  getHighScores () {
    let list = JSON.parse(fs.readFileSync('src/highscores.json'))

    console.log(list)
  }

  sortList () {

  }

  addToList (gamer, score) {

  }
}

module.exports = Scores
