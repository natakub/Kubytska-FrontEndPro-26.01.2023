/*
Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

* отримати від користувача через три prompt три числа
* показати через alert середнє арифметичне цих чисел
*/

const a = prompt(`Enter first number`);
const b = prompt(`Enter second number`);
const c = prompt(`Enter third number`);

alert((+a + +b + +c) / 3);
