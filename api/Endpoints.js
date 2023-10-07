const API_KEY = "93c7c8c4987ea0afaf961733ff08e0f0";
var language = "ro";

function getCurrentWeatherDataUrl(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}

function getForcastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&lang=${language}&units=metric`;
}
