function addInputFocusEffect1(inputId) {
  const myInput = document.querySelector(`#${inputId}`);

  if (myInput) {
    const myDiv = document.createElement("div");
    myDiv.textContent = "This text appears when the input is focused";
    myDiv.style.color = "red";
    myDiv.style.paddingLeft = "20px";
    myDiv.style.display = "none";

    myInput.after(myDiv);

    myInput.addEventListener("focus", () => {
      myDiv.style.display = "inline";
    });

    myInput.addEventListener("blur", () => {
      myDiv.style.display = "none";
    });
  }
}

/* Особисто мені більше подобається варіант зі створенням CSS класів й додавання/видаляння їх з доп. властивості Element.classList. Код наче здається чистішим. Я застилізувала інпути в HTML файлі для наглядності */

function addInputFocusEffect2(inputId) {
  const myInput = document.querySelector(`#${inputId}`);

  if (myInput) {
    const myDiv = document.createElement("div");
    myDiv.textContent = "This text appears when the input is focused";
    myDiv.classList.add("my-div");

    myInput.after(myDiv);

    myInput.addEventListener("focus", () => {
      myDiv.classList.add("is-visible");
    });

    myInput.addEventListener("blur", () => {
      myDiv.classList.remove("is-visible");
    });
  }
}

addInputFocusEffect1("myInput1");
addInputFocusEffect2("myInput2");
