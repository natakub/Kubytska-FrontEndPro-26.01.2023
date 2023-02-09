function getName() {
  let h1 = document.querySelector("#h1");
  let name = prompt("What is your name?");
  name = name.trim();

  if (name.length > 0) {
    alert(`Hello, ${name}! How are you?`);
    h1.innerHTML = `Welcome, ${name}!`;
  } else {
    alert(`Please, enter your name`);
  }
}

getName();
