/* Створити скрипт який повинен виконувати наступне:

* питаємо у користувача, що він хоче зробити (add, sub, mult, div);
* питаємо у користувача перше число;
* запитуємо у користувача друге число;
* виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
*/

function calculate() {
  const operation = prompt(
    `Enter the operation. Available operations: add, sub, mult, div`
  )
    .toLowerCase()
    .trim();

  const num1 = prompt(`Enter the first operand`).trim();
  const num2 = prompt(`Enter the second operand`).trim();

  if (operation.length > 0 && num1.length > 0 && num2.length > 0) {
    switch (operation) {
      case `add`:
        const add = Number(num1) + Number(num2);
        alert(`${num1} + ${num2} = ${add}`);
        break;

      case `sub`:
        const sub = num1 - num2;
        alert(`${num1} - ${num2} = ${sub}`);
        break;

      case `mult`:
        const mult = num1 * num2;
        alert(`${num1} * ${num2} = ${mult}`);
        break;

      case `div`:
        const div = num1 / num2;
        alert(`${num1} / ${num2} = ${div}`);
        break;

      default:
        alert(
          `Undefined operation. Please, enter one of the following: add, sub, mult, div, and both operands afterwards!`
        );
    }
  } else {
    alert(
      `Undefined operation. Please, enter one of the following: add, sub, mult, div, and both operands afterwards!`
    );
  }
}

calculate();
