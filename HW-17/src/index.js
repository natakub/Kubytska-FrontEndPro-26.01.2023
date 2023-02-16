// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr1 = [
  1,
  `coockie`,
  `monkey`,
  45,
  undefined,
  56,
  NaN,
  `helicopter`,
  28,
  938,
  null,
  -23,
  `function`,
];

const arr2 = [`skream`, 1463, 958, `4857`, undefined, `nitrogen`, 23, 1.5];

function calculateArithMean(array) {
  const arrayOfNumbers = array.filter(
    (element) => typeof element === `number` && !isNaN(element)
  );

  const sumOfNumbers = arrayOfNumbers.reduce((sum, current) => sum + current);

  return (sumOfNumbers / arrayOfNumbers.length).toFixed(3);
}

console.log(calculateArithMean(arr1));
console.log(calculateArithMean(arr2));

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
  if (typeof x === `number` && typeof y === `number`) {
    switch (znak) {
      case `+`:
        return x + y;

      case `-`:
        return x - y;

      case `*`:
        return x * y;

      case `/`:
        return x / y;

      case `%`:
        return x % y;

      case `^`:
        return x ** y;

      default:
        return `Invalid operator`;
    }
  } else {
    return `You can do mathematical operations  only with numbers`;
  }
}

console.log(doMath(45, `+`, 5));
console.log(doMath(45, `-`, 5));
console.log(doMath(20, `*`, 5));
console.log(doMath(27, `/`, 3));
console.log(doMath(45, `%`, 5));
console.log(doMath(3, `^`, 3));
console.log(doMath(null, `+`, 5));
console.log(doMath(`7`, `+`, `8`));
console.log(doMath(2, `**`, 2));

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function createArray() {
  const arrLength = +prompt(`Вкажіть скільки масивів буде в основному масиві:`);
  let arr = [];

  for (let i = 0; i < arrLength; i++) {
    let currentArray = prompt(
      `Впишіть кожен елемент через пробіл внутрішнього масиву`
    );

    if (currentArray !== null) {
      currentArray = currentArray.split(` `);
    }

    arr = [...arr, currentArray];
  }

  return arr;
}

const newArray = createArray();
console.log(newArray);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const reduceSymbols = (string, [a, b]) =>
  string.replace(new RegExp(a, `g`), ``).replace(new RegExp(b, `g`), ``);

console.log(reduceSymbols(`blood is thicker than water`, [`n`, `h`]));
console.log(reduceSymbols(`mamma mia`, [`m`, `i`]));
console.log(reduceSymbols(`hello world`, [`l`, `d`]));
