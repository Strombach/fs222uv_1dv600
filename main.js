/**
 * The start point for the application.
 */

const fs = require('fs') 
const readline = require('readline')

const WordClass = require('./src/Word.js')
const wordList = JSON.parse(fs
  .readFileSync('./src/wordlist.json'))

let word = new WordClass(wordList[Math.floor(Math
  .random() * wordList.length)])

let menu = 'MENU\nEnter number\n[1] Play Game\n[2] Quit Game\n'

function createWord () {
  word.createLetters()
  word.printWord()
}

function mainMenu () {
  let rl = readline.createInterface(process.stdin, process.stdout)
  console.clear()
  rl.question(menu, userInput => {
    if (userInput === '1') {
      console.clear()
      createWord()
      console.log(word)
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
