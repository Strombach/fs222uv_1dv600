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
  }

  addToList (gamer, score) {
    let newHighScore = {
      name: gamer,
      score: score
    }

    this.highscores.push(newHighScore)
    this.sortList()

    let newScore = JSON.stringify(this.highscores.slice(0, 11))

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
    for (let i = 0; i < 10; i++) {
      if (this.highscores[i]) {
        console.log(`${i + 1}. ${this.highscores[i].name}.....${this.highscores[i].score} mistakes`)
      } else {
        return
      }
    }
  }
}

module.exports = Scores
