const bucuresti = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

function updateWeather(currentCity) {
  localStorage.setItem("city", currentCity);

  city = currentCity;
  updateCity(currentCity);
  displayCurrentWeather(currentCity);
  GetForecastFor5Fays(currentCity);
}

function updateCity(city) {
  let cityNameElement = document.querySelector(".city-name");
  cityNameElement.innerText = city;
}

bucuresti.addEventListener("click", function () {
  updateWeather("București");
});

timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});

arad.addEventListener("click", function () {
  updateWeather("Arad");
});

sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
