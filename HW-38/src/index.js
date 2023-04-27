// get current date and time

const dateElement = document.querySelector("#today-forecast-date");
const currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function formatDate(date) {
  let day = date.getDate();

  let weekDayIndex = date.getDay();
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = weekDays[weekDayIndex];

  let monthIndex = date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[monthIndex];

  let hours = date.getHours();
  hours = hours < 10 ? "0" + hours : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let timeZone = new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1];

  return `<li>${weekDay}, ${month} ${day}</li><li>${hours}:${minutes} (${timeZone})</li>`;
}

// API

const searchCityButton = document.querySelector("#search-city-btn");
const weatherBox = document.querySelector(".weather-data-box");
const error404 = document.querySelector(".not-found");

searchCityButton.addEventListener("click", getWeatherData);

function getWeatherData(event) {
  event.preventDefault();

  const APIKey = "7e4bf6342193e8b37be70cb6df43ad60";
  const cityNameInput = document.querySelector("#inputCityName");
  const cityName = cityNameInput.value;

  if (!cityName) {
    return;
  }

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`
    )
    .then((response) => {
      const emoji = document.querySelector("#weather-emoji");
      const city = document.querySelector("#city");
      const temperature = document.querySelector("#temperature");
      const description = document.querySelector("#description");
      const direction = document.querySelector("#direction");
      const wind = document.querySelector("#wind");
      const humidity = document.querySelector("#humidity");
      const pressure = document.querySelector("#pressure");

      switch (response.data.weather[0].main) {
        case "Clear":
          emoji.src = "img/clear.png";
          break;

        case "Rain":
          emoji.src = "img/rain.png";
          break;

        case "Snow":
          emoji.src = "img/snow.png";
          break;

        case "Clouds":
          emoji.src = "img/cloud.png";
          break;

        case "Mist":
          emoji.src = "img/mist.png";
          break;

        default:
          emoji.src = "";
      }

      city.innerHTML = `${response.data.name}`;
      temperature.innerHTML = `${Math.round(response.data.main.temp)}°C`;
      description.innerHTML = `${response.data.weather[0].main}`;
      wind.innerHTML = `${response.data.wind.speed} km/h`;
      direction.innerHTML = `${response.data.wind.deg}°`;
      humidity.innerHTML = `${response.data.main.humidity}%`;
      pressure.innerHTML = `${response.data.main.pressure} hPa`;
    })
    .catch((error) => {
      weatherBox.style.display = "none";
      error404.style.display = "block";
    });
}
