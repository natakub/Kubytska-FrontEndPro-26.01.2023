// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
const table = document.createElement("table");
table.classList.add("table");

for (let i = 0; i < 10; i++) {
  const row = document.createElement("tr");

  for (let j = 0; j < 10; j++) {
    const cellValue = i * 10 + j + 1;

    const cell = document.createElement("td");
    cell.textContent = cellValue;

    row.append(cell);
  }

  table.append(row);
}

document.body.append(table);
