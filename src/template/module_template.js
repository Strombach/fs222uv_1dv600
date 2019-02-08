class ModuleTemplate {
  constructor (input) {
    this.testInput = input
  }

  printTest () {
    console.log(this.testInput)
  }
}

module.exports = ModuleTemplate
