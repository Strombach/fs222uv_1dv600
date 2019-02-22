/**
 * The start point for the application.
 */

const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

const WordClass = require('./src/Word.js')

let word = new WordClass('TESTING')

let menu = 'MENU\nEnter number\n[1] Play Game\n[2] Quit Game\n'

function createWord () {
  word.createLetters()
  word.printWord()
}

function mainMenu () {
  console.clear()
  rl.question(menu, userInput => {
    if (userInput === '1') {
      console.clear()
      createWord()
      rl.close()
    } else if (userInput === '2') {
      rl.close()
    } else {
      console.clear()
      console.log('Invalid choice')
      mainMenu()
    }
  })
}

mainMenu()
