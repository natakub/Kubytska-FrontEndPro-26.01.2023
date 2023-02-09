// роки
const yearOfBirth = prompt(`Вкажи свій рік народження`);

let ageStr;

const age = new Date().getFullYear() - yearOfBirth;

if (yearOfBirth === null || !yearOfBirth.trim()) {
  alert(`Шкода, що Ви не захотіли ввести свій рік народження.`);
} else {
  ageStr = `${age} р.`;
}

// місто
let city = prompt(`В якому місті ти живеш`).toLowerCase();
city = city.charAt(0).toUpperCase() + city.substring(1).toLowerCase();

let cityStr;

if (city === null || !city.trim()) {
  alert(`Шкода, що Ви не захотіли ввести своє місто.`);
} else {
  switch (city) {
    case `Київ`:
      cityStr = `Ти живеш у столиці України.`;
      break;

    case `Вашингтон`:
      cityStr = `Ти живеш у столиці США.`;
      break;

    case `Лондон`:
      cityStr = `Ти живеш у столиці Англії.`;
      break;

    default:
      cityStr = `Ти живеш у місті ${city}.`;
  }
}

// спорт
const favoriteSport = prompt(`Який твій улюблений вид спорту`).toLowerCase();

let sportStr;

if (favoriteSport === null || !favoriteSport.trim()) {
  alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту.`);
} else {
  switch (favoriteSport) {
    case `плавання`:
      sportStr = `Круто! Хочеш стати як Майк Фелпс?`;
      break;

    case `футбол`:
      sportStr = `Круто! Хочеш стати як Ліонель Мессі?`;
      break;

    case `теніс`:
      sportStr = `Круто! Хочеш стати як Новак Джокович?`;
      break;

    default:
      sportStr = `Круто! ${favoriteSport} - захоплюючий вид спорту!`;
  }
}

alert(`${ageStr}\n${cityStr}\n${sportStr}`);
