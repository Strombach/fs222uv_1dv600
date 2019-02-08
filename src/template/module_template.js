class ModuleTemplate {
  constructor (input) {
    this.testInput = input
  }

  printTest (testText) {
    console.log(this.testInput)
  }
}

module.exports = ModuleTemplate
