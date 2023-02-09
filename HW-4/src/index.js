function roundNumber(num) {
  return Math.round(num * 100) / 100;
}

function makeMathOperations() {
  const num1 = prompt(`Enter the first operand`);
  const num2 = prompt(`Enter the second operand`);

  const add = Number(num1) + Number(num2);
  const sub = num1 - num2;
  const mult = num1 * num2;
  const div = num1 / num2;

  if (num1.length > 0 && num2.length > 0) {
    const addStr = `${num1} + ${num2} = ${roundNumber(add)}`;
    const subStr = `${num1} - ${num2} = ${roundNumber(sub)}`;
    const multStr = `${num1} * ${num2} = ${roundNumber(mult)}`;
    const divStr = `${num1} / ${num2} = ${roundNumber(div)}`;

    alert(`${addStr}\n${subStr}\n${multStr}\n${divStr}`);
  } else {
    alert(`Please, enter both operands to see the result`);
  }
}

makeMathOperations();
