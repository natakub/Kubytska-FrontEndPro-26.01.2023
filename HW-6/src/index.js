/*Напишіть скрипт, який переводить години в секунди і має робити насутпне:

* запитати у користувача кількість годин;
* порахувати, скільки секунд у цій кількості годин;
* записати обчислене значення у змінну;
* вивести цю змінну користувачеві через alert.*/

const hours = prompt(`Enter the number of hours`);

const secInOneHour = 60 * 60;
const seconds = hours * secInOneHour;

alert(seconds);
