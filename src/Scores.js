const fs = require('fs')

class Scores {
  constructor (input) {
    try {
      this.highscores = JSON.parse(fs.readFileSync('src/highscores.json'))
    } catch (err) {
      this.highscores = JSON.stringify([])
      fs.appendFile('src/highscores.json', this.highscores, () => {
      })
    }
  }

  addToList (gamer, score) {
    let newHighScore = {
      name: gamer,
      score: score
    }

    this.highscores.push(newHighScore)

    let obj = JSON.stringify(this.highscores)

    fs.writeFile('src/highscores.json', obj, () => {
      console.log('Saved Highscore')
    })
  }
}

module.exports = Scores
