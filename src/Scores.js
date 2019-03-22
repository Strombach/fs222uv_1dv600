const fs = require('fs')

class Scores {
  constructor (input = 'src/highscores.json') {
    this.path = input
    try {
      this.highscores = JSON.parse(fs.readFileSync(input))
    } catch (err) {
      this.highscores = JSON.stringify([])
      fs.appendFile(input, this.highscores, () => {
      })
    }
  }

  addToList (gamer, score) {
    let newHighScore = {
      name: gamer,
      score: score
    }

    this.highscores.push(newHighScore)
    this.sortList()

    let newScore = JSON.stringify(this.highscores.slice(0, 11))

    fs.writeFile(this.path, newScore, () => {
      console.log('Saved Highscore')
    })
  }

  sortList () {
    this.highscores.sort((a, b) => {
      return a.score - b.score
    })
  }

  printScores () {
    if (this.highscores.length < 1) {
      console.log('No high-scores yet')
    } else {
      for (let i = 0; i < 10; i++) {
        if (this.highscores[i]) {
          console.log(`${i + 1}. ${this.highscores[i].name}.....${this.highscores[i].score} mistakes`)
        } else {
          return
        }
      }
    }
  }
}

module.exports = Scores
