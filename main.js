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

let word = null

let gamer = null

let menu = 'The HangMan\nEnter number\n[1] Play Game\n[2] Quit Game\n'

/**
 * The function for generate a word.
 */
function createWord () {
  word = new WordClass(wordList[Math.floor(Math.random() * wordList.length)])
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
      quitGame()
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
  rl.question('Enter a three character name or a "Q" to quit the game\n',
    name => {
      if (name.length > 3) {
        enterName()
        console.log('Too many characters!')
      } else if (name === 'Q') {
        quitGame('name')
      } else if (name.length < 3) {
        enterName()
        console.log('Too few characters!')
      } else {
        console.clear()
        gamer = new Gamer('gmr')
        gamer.name = name
        guessLetter()
      }
    })
}

/**
 * The gamer can guess a letter.
 */
function guessLetter () {
  console.log(gamer.guessedLetters)
  gamer.printGamer()
  word.printWord()

  rl.question('Guess a letter or enter "Q" to quit the game:\n', letter => {
    if (letter.length === 1 && !gamer.guessedLetters.includes(letter)) {
      if (letter === 'Q') {
        quitGame('guess')
        return
      }
      gamer.guessedLetters.push(letter)
      word.checkLetter(letter, gamer)
      console.clear()
      if (!word.wordSplit.includes(letter)) {
        gamer.mistakeCounter++
      }
    } else if (letter.length < 1) {
      console.clear()
      console.log('Need to enter a letter')
    } else if (letter.length > 1) {
      console.clear()
      console.log('Only single letters')
    }

    if (gamer.correctGuesses === word.chosenWord.length) {
      gamer.printGamer()
      word.printWord()
      winGame()
    } else if (gamer.mistakeCounter === 10) {
      loseGame()
    } else {
      console.clear()
      guessLetter()
    }
  })
}

function winGame () {
  mainMenu()
  console.log(`
YOU GUESSED THE WORD ${gamer.name}!!
The word was ${word.chosenWord}
Want to play again?
Enter a Number`)
}

function loseGame () {
  mainMenu()
  console.log(`
Sorry ${gamer.name}, you did not guess the word.
The word was ${word.chosenWord}
Want to play again?
Enter a Number`)
}

function quitGame (prevState) {
  rl.question(`Are you sure you want to quit? (y/n): `, answer => {
    if (answer === 'y') {
      rl.close()
    } else if (answer === 'n') {
      if (prevState === 'guess') {
        console.clear()
        guessLetter()
      } else if (prevState === 'name') {
        enterName()
      } else {
        mainMenu()
      }
    }
  })
}

mainMenu()
