const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

// 1. Знайти суму та кількість позитивних елементів.

const positiveNumbArr = arr.filter((num) => num > -1);

const sumOfArr = positiveNumbArr.reduce((sum, current) => sum + current);

const lengthOfPositiveArr = positiveNumbArr.length;

// console.log(sumOfArr);
// console.log(lengthOfPositiveArr);

// 2. Знайти мінімальний елемент масиву та його порядковий номер.

const getSmallestNumb = arr.reduce((smallest, num) => Math.min(smallest, num));

const smallestIndex = arr.indexOf(getSmallestNumb);

// console.log(getSmallestNumb);
// console.log(smallestIndex);

// 3. Знайти максимальний елемент масиву та його порядковий номер.

let getBiggestNumb = arr.reduce((biggest, num) => Math.max(biggest, num));

const biggestIndex = arr.indexOf(getBiggestNumb);

// console.log(getBiggestNumb);
// console.log(biggestIndex);

// 4. Визначити кількість негативних елементів.

const negativeNumbArr = arr.filter((num) => num < 0);

const lengthOfNegativeArr = negativeNumbArr.length;

// console.log(lengthOfNegativeArr);

// 5. Знайти кількість непарних позитивних елементів.

const oddPositiveNumbArr = positiveNumbArr.filter((num) => num % 2 !== 0);

const lengthOfOddPositiveArr = oddPositiveNumbArr.length;

// console.log(lengthOfOddPositiveArr);

// 6. Знайти кількість парних позитивних елементів.

const evenPositiveNumbArr = positiveNumbArr.filter((num) => num % 2 === 0);

const lengthOfEvenPositiveArr = evenPositiveNumbArr.length;

// console.log(lengthOfEvenPositiveArr);

// 7. Знайти суму парних позитивних елементів.

const sumOfEvenPositiveArr = evenPositiveNumbArr.reduce(
  (sum, current) => sum + current
);

// console.log(sumOfEvenPositiveArr);

// 8. Знайти суму непарних позитивних елементів.

const sumOfOddPositiveArr = oddPositiveNumbArr.reduce(
  (sum, current) => sum + current
);

// console.log(sumOfOddPositiveArr);

// 9. Знайти добуток позитивних елементів.

let pro = 1;

for (let positiveNum of positiveNumbArr) {
  pro = pro * positiveNum;
}

// console.log(pro);

// або спосіб з доп. методу reduce

const proOfPositiveNum = positiveNumbArr.reduce(
  (pro, current) => pro * current
);

// console.log(proOfPositiveNum);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити.

getBiggestNumb = arr.reduce((biggest, num) => Math.max(biggest, num));

// обнулити - довжина збережена

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== getBiggestNumb) {
    arr[i] = 0;
  }
}

// console.log(arr);

// або з доп  методу splice

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== getBiggestNumb) {
    arr.splice(i, 1, 0);
  }
}

// console.log(arr);
