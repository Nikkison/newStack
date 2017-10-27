// ES2015：class構文
class Greeter {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return `Hello! ${this.name}!`;
  }
}

// ES ModuleのExport
module.exports = Greeter;