const fs = require('fs')

class Scores {
  constructor () {
    try {
      this.highscores = JSON.parse(fs.readFileSync('src/highscores.json'))
    } catch (err) {
      this.highscores = JSON.stringify([])
      fs.appendFile('src/highscores.json', this.highscores, () => {
      })
    }
    this.sortList()
  }

  addToList (gamer, score) {
    let newHighScore = {
      name: gamer,
      score: score
    }

    this.highscores.push(newHighScore)

    let newScore = JSON.stringify(this.highscores)

    fs.writeFile('src/highscores.json', newScore, () => {
      console.log('Saved Highscore')
    })
  }

  sortList () {
    this.highscores.sort((a, b) => {
      return a.score - b.score
    })
  }

  printScores () {
    for (let i = 1; i < this.highscores.length; i++) {
      console.log(`${i}. ${this.highscores[i].name}.....${this.highscores[i].score} mistakes`)
    }
  }
}

module.exports = Scores
