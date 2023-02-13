// Написати цикли, які зможуть:

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let i = 10;
let arr = [];

while (i < 21) {
  arr.push(i);
  i++;
}

arr = arr.join(`, `);
console.log(arr);

// 2.Вивести квадрати чисел від 10 до 20.

i = 10;
let arrSquare = [];

while (i < 21) {
  arrSquare.push(i ** 2);
  i++;
}
arrSquare = arrSquare.join(`, `);
console.log(arrSquare);

// 3. Вивести таблицю множення на 7.

let arrMult = [];

for (let i = 1; i <= 10; i++) {
  let resOfMult = 7 * i;
  arrMult.push(`7 * ${i} = ${resOfMult}`);
}
arrMult = arrMult.join(`\n`);
console.log(arrMult);

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 0; i <= 15; i++) {
  sum += i;
}

// console.log(sum);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let pro = 1;

for (i = 15; i <= 35; i++) {
  pro = pro * i;
}

// console.log(pro);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

sum = 0;
let arithMean;

for (let i = 0; i <= 500; i++) {
  arithMean = (sum += i) / 500;
}

// console.log(arithMean);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

sum = 0;
for (let i = 30; i < 81; i++) {
  if (i % 2 !== 0) continue;
  sum += i;
}

// console.log(sum);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let multOf3 = [];

for (let i = 100; i <= 200; i++) {
  if (i % 3 !== 0) continue;
  multOf3.push(i);
}

multOf3 = multOf3.join(`, `);
// console.log(multOf3);

// 9, 10, 11.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const number = +prompt(`Введіть натуральне число`);
let divArr = [];

for (i = 0; i <= number; i++) {
  if (number % i !== 0) continue;
  divArr.push(i);
}

// Визначити кількість його парних дільників.
let divEvenArr = [];
for (i = 0; i < divArr.length; i++) {
  if (divArr[i] % 2 !== 0) continue;
  divEvenArr.push(divArr[i]);
}

// Знайти суму його парних дільників.
sum = 0;
for (i = 0; i < divEvenArr.length; i++) {
  sum += divEvenArr[i];
}

divArr = divArr.join(`, `);
// console.log(divArr);

// console.log(divEvenArr.length);

// console.log(sum);

// 12.Надрукувати повну таблицю множення від 1 до 10.

let arrMultTable = [];
let arrMultTableStructured = [];
let result;
let mult;

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result = i * j;
    mult = `${i} * ${j} = ${result}`;
    arrMultTable.push(mult);
  }
}

for (i = 0; i < arrMultTable.length; i += 10) {
  arrMultTableStructured.push(arrMultTable.slice(i, i + 10));
}

// console.log(arrMultTableStructured);
