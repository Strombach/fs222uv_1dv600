/**
 * The start point for the application.
 */

const WordClass = require('./lib/Word.js')
let word = new WordClass('Hej')

function firstLetter () {
  word.createLetters()
  console.log(word)
}

firstLetter()
