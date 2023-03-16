const arr = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(arr) {
  const ul = document.createElement("ul");

  arr.forEach((element) => {
    const li = document.createElement("li");

    if (Array.isArray(element)) {
      li.append(generateList(element));
    } else {
      li.textContent = element;
    }

    ul.append(li);
  });

  return ul;
}

document.body.append(generateList(arr));
