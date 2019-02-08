/**
 * The start point for the application.
 */

const JsTemplate = require('./template/module_template')
let testModule = new JsTemplate('This could be a word!')

function firstTest () {
  testModule.printTest('Test')
}

firstTest()
