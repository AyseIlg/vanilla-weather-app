function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${minutes}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let temperatureElement = document.querySelector("#temperatures");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}
let apiKey = "54ta40282dof71f561bc5ad10a73608a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
