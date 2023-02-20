// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const arr = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  const index = array.indexOf(item);
  const result = array.splice(index, 1);

  // return result;
  // return - не потрібний
}

removeElement(arr, 5);

console.log(arr);
