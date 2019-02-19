/**
 * The start point for the application.
 */

const WordClass = require('./lib/Word.js')
let word = new WordClass('TEST')

function createWord () {
  word.createLetters()
  console.log(word.wordArr)
}

createWord()
