function displayCurrentWeather(city) {
  const defaultCityWeatherUrl = getCurrentWeatherDataUrl(city);

  fetch(defaultCityWeatherUrl)
    .then((response) => response.json())
    .then((datesFromAPI) => {
      const { name, main, weather, wind, dt } = datesFromAPI;

      const currentDayOfTheWeek = getDayOfTheWeek(dt);
      const currentTime = getTime(dt);

      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);

      const windSpeed = Math.round(windToKmPerHour(wind.speed));

      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);

      populateDataInDOM(
        currentDayOfTheWeek,
        currentTime,
        temperature,
        realFeel,
        windSpeed,
        weatherDescription,
        weatherIcon,
        name
      );
    });

  function populateDataInDOM(
    currentDayOfTheWeek,
    currentTime,
    temperature,
    realFeel,
    windSpeed,
    weatherDescription,
    weatherIcon,
    name
  ) {
    let weatherContainer = document.querySelector(".current-weather");

    let cityElement = document.querySelector(".city");
    cityElement.innerText = name;

    let dayTimeContainerElement = document.querySelector(".day-time-container");
    dayTimeContainerElement.innerHTML = `<strong>${currentDayOfTheWeek}</strong>, ${currentTime}`;

    let temperatureElement = document.querySelector(".temperature");
    temperatureElement.innerText = `${temperature}°C`;

    let weatherIconElement = document.querySelector(".weather-icon");
    weatherIconElement.attributes["src"].value = weatherIcon;

    let realFeelElement = document.querySelector(".real-feel");
    realFeelElement.innerText = `${realFeel}°C`;

    let descriptionElement = document.querySelector(".weather-description");
    descriptionElement.innerText = `${weatherDescription}`;

    let windElement = document.querySelector(".wind");
    windElement.innerText = `${windSpeed} km/h`;
  }
}
