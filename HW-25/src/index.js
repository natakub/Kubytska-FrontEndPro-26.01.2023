class Supermath {
  check(obj) {
    const confirmMessage = confirm(
      `Do you want to do a mathematical operation with ${obj.znak} and numbers ${obj.X} and ${obj.Y}?`
    );
    if (confirmMessage === true) {
      return this.calculate(obj.X, obj.Y, obj.znak);
    } else {
      return this.input();
    }
  }

  calculate(x, y, znak) {
    switch (znak) {
      case `+`:
        return x + y;

      case `-`:
        return x - y;

      case `/`:
        return x / y;

      case `*`:
        return x * y;

      case `%`:
        return x % y;

      default:
        console.log(`Invalid operator`);
        return this.input();
    }
  }

  input() {
    const x = +prompt(`Enter x:`);
    const y = +prompt(`Enter y:`);
    const znak = prompt(`Enter a mathematical operator (+, -, /, *, or %):`);

    const operators = ["+", "-", "/", "*", "%"];

    if (operators.includes(znak)) {
      return this.calculate(x, y, znak);
    } else {
      console.log(`Invalid operator`);
    }
  }
}

const supermath = new Supermath();
const obj = { X: 12, Y: 3, znak: "/" };

const result = supermath.check(obj);
console.log(result);
