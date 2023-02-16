// Створити масив, довжину та елементи якого задає користувач.

const arrLength = +prompt(`Вкажіть скільки елементів буде у масиві:`);

let arr = [];

for (let i = 0; i < arrLength; i++) {
  let arrElem = prompt(`Впишіть вміст елементу масиву`);
  arr.push(arrElem);
}

// console.log(arr);

// Відсортувати масив за зростанням.

arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

// елегантніший і коротший спосіб

arr.sort((a, b) => a - b);

// console.log(arr);

// Видалити елементи з масиву з 2 по 4 (включно!).

arr.splice(1, 3);

// console.log(arr);
