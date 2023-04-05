/*
Реалізовуємо форму для реєстрації.

Поля:

Ім'я, Прізвище (Текстові поля)
Дата народження (Текстове поле)
Стать (radio)
Місто (select)
Адреса (textarea)
Мови, якими володіє (checkbox)
….
Кнопка “Зберегти”


За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач. 
*/

const data = [];
const formElement = document.querySelector("#myForm");
const inputsElement = document.querySelectorAll("input");
const firstNameElement = document.querySelector("#firstName");
const lastNameElement = document.querySelector("#lastName");
const birthDateElement = document.querySelector("#birthDate");
const cityElement = document.querySelector("#city");
const addressElement = document.querySelector("#address");

const isRequired = (value) => (value === "" ? false : true);

const InRange = (length, min, max) =>
  length >= min && length <= max ? true : false;

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("valid");
  formField.classList.add("invalid");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("invalid");
  formField.classList.add("valid");

  const error = formField.querySelector("small");
  error.textContent = "";
};

const checkFirstName = () => {
  const min = 3,
    max = 15;
  const firstName = firstNameElement.value.trim();

  if (!isRequired(firstName)) {
    showError(firstNameElement, "Username cannot be blank.");
    return false;
  } else if (!InRange(firstName.length, min, max)) {
    showError(
      firstNameElement,
      `Lenght must between ${min} and ${max} letters`
    );
    return false;
  } else {
    showSuccess(firstNameElement);
    return true;
  }
};

const checkLastName = () => {
  const min = 3,
    max = 15;
  const lastName = lastNameElement.value.trim();

  if (!isRequired(lastName)) {
    showError(lastNameElement, "Last name cannot be blank.");
    return false;
  } else if (!InRange(lastName.length, min, max)) {
    showError(lastNameElement, `Lenght must between ${min} and ${max} letters`);
    return false;
  } else {
    showSuccess(lastNameElement);
    return true;
  }
};

formElement.onsubmit = (event) => {
  event.preventDefault();

  let isFirstNameValid = checkFirstName(),
    isLastNameValid = checkLastName();

  let isFormValid = isFirstNameValid && isLastNameValid;

  if (isFormValid) {
    const firstName = firstNameElement.value.trim();
    data.push({ firstName });

    const lastName = lastNameElement.value.trim();
    data.push({ lastName });

    const birthDate = birthDateElement.value;
    data.push({ birthDate });

    const genderElement = document.querySelector(
      'input[name="gender"]:checked'
    );
    const gender = genderElement ? genderElement.value : "";
    data.push({ gender });

    const city = cityElement.value;
    data.push({ city });

    const address = addressElement.value.trim();
    data.push({ address });

    const languagesElement = document.querySelectorAll(
      'input[name="languages"]:checked'
    );
    if (languagesElement.length > 0) {
      const languagesArray = Array.from(languagesElement).map(
        (language) => language.value
      );
      const languages = languagesArray.join(", ");
      data.push({ languages });
    }

    alert(`First name: ${data[0].firstName};\n 
    Last name: ${data[1].lastName};\n
    Date of birth: ${data[2].birthDate};\n
    Gender: ${data[3].gender};\n
    City: ${data[4].city};\n
    Address: ${data[5].address};\n
    Languages: ${data[6].languages};\n`);
  } else {
    alert("Please, fill out the form completely");
  }
};
