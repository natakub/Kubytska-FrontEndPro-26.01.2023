/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь:
* Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
* Ступінь передається як другий аргумент у функцію pow (num, degree).
 */

function pow(num, degree) {
  return degree === 1 ? num : num * pow(num, degree - 1);
}

console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));
console.log(pow(5, 1));
