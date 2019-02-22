/**
 * The start point for the application.
 */

const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const WordClass = require('./src/Word.js')

let word = new WordClass('TEST')

let menu = 'MENU\nEnter number\n[1] Play Game\n[2] Quit Game\n'

// function createWord () {
//   word.createLetters()
//   // console.log(word.wordArr)
// }

function mainMenu () {
  rl.question(menu, userInput => {
    if (userInput === '1') {
      console.log('Starting game...')
      rl.close()
    } else if (userInput === '2') {
      rl.close()
    } else {
      console.log('Invalid choice')
      mainMenu()
    }
  })
}

mainMenu()
// createWord()
