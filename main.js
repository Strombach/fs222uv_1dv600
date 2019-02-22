/**
 * The start point for the application.
 */

const WordClass = require('./src/Word.js')
let word = new WordClass('TEST')

function createWord () {
  word.createLetters()
  console.log(word.wordArr)
}

createWord()
