/**
 * The start point for the application.
 */

const fs = require('fs') 
const readline = require('readline')

let rl = readline.createInterface(process.stdin, process.stdout)

const Gamer = require('./src/Gamer')
const WordClass = require('./src/Word')
const wordList = JSON.parse(fs
  .readFileSync('./src/wordlist.json'))

let word = new WordClass(wordList[Math.floor(Math
  .random() * wordList.length)])

let gamer = new Gamer()

let menu = 'MENU\nEnter number\n[1] Play Game\n[2] Quit Game\n'


/**
 * The function for generate a word.
 */
function createWord () {
  word.createLetters()
}

/**
 * This is a function for creating the menu.
 */
function mainMenu () {
  console.clear()
  rl.question(menu, userInput => {
    if (userInput === '1') {
      console.clear()
      enterName()
      createWord()
    } else if (userInput === '2') {
      rl.close()
    } else {
      console.clear()
      mainMenu()
      console.log('Invalid choice')
    }
  })
}

/**
 * Creates the part for the gamer to enter his
 * or her name.
 */
function enterName () {
  console.clear()
  rl.question('Enter a three character name\n', name => {
    if (name.length > 3) {
      enterName()
      console.log('Too many characters!')
    } else if (name.length < 3) {
      enterName()
      console.log('Too few characters!')
    } else {
      console.clear()
      gamer.name = name
      guessLetter()
    }
  })
}

/**
 * The gamer can guess a letter.
 */
function guessLetter () {
  gamer.printGamer()
  console.log(word.chosenWord)
  word.printWord()
  rl.question('Guess a letter:', letter => {
    word.checkLetter(letter)
    console.clear()
    guessLetter()
  })
}

mainMenu()
