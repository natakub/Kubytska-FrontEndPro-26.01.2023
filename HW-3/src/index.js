// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

function getInfo() {
  const name = prompt(`What is your name?`).trim();
  const age = prompt(`How old are you?`).trim();
  const city = prompt(`What city do you live in?`).trim();

  const capitalizedName = capitalize(name);
  const capitalizedCity = capitalize(city);

  alert(
    `Hello ${capitalizedName}, now we know that you live in ${capitalizedCity}, and your age is ${age}`
  );
}

getInfo();

// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let number = 57984;
number = number.toString().split(``).join(` `);
alert(number);

//Маленький експеримент з for
let numbers = 57984;
numbers = numbers.toString();

let finalString = [];

for (let i = 0; i < numbers.length; i++) {
  finalString.push(numbers[i]);
}

finalString = finalString.join(` `);
alert(finalString);
