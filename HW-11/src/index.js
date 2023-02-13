// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let arr = [];

for (i = 20; i <= 30; i += 0.5) {
  arr.push(i);
}

arr = arr.join(" ");
console.log(arr);

// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let convertArr = [];

for (i = 10; i <= 100; i += 10) {
  let uah = i * 27;

  convertArr.push(uah);
}

convertArr = convertArr.join(", ");
console.log(convertArr);

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

const number = +prompt(`Завдання #3. Введіть число`);
let squareArr = [];

for (let i = 1; i <= 100; i++) {
  const squareNumber = i ** 2;

  if (squareNumber > number) break;

  const numb = Math.sqrt(squareNumber);

  squareArr.push(numb);
}

squareArr = squareArr.join(", ");
console.log(squareArr);

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let n = prompt(`Перевірка на просте число`);
let primeNum = [];

outer: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue outer;
  }

  primeNum.push(i);
}

// console.log(`${primeNum} - прості числа`);

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let num = +prompt(`enter`);
// let num = 27;
// let num = 81;
// let num = 13;
// let num = 25;

if (num % 3 === 0) {
  for (let i = 2; i <= num; i++) {
    if (Math.pow(3, i) === num) {
      console.log(`Можна отримати`);
      break;
    }
  }
} else {
  console.log(`Не можна отримати`);
}
