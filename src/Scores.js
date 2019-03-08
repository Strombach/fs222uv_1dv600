const fs = require('fs')

class Scores {
  constructor (input) {
    this.highscores = []
  }

  getHighScores () {
    // let list = JSON.parse(fs.readFileSync('src/highscores.json'))
    let list = fs.readFileSync('src/highscores.json')

    return list
  }
} 

  module.exports = Scores
  