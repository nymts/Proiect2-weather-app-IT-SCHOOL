function GetForecastFor5Fays(city) {
  const defaultForecastURL = getForcastEndpoint(city);

  fetch(defaultForecastURL)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;

      let forecastGroupedByDay = {};
      let forecastContainer = document.querySelector(".weather-forecast");
      forecastContainer.innerHTML = "";

      list.forEach((element) => {
        let { dt } = element;
        let day = getDayOfTheWeek(dt);

        if (forecastGroupedByDay[day]) {
          forecastGroupedByDay[day].push(element);
        } else {
          forecastGroupedByDay[day] = [element];
        }
      });

      for (day in forecastGroupedByDay) {
        forecastContainer.innerHTML += `<h3 class="">${day}</h3>`;

        forecastGroupedByDay[day].forEach((element) => {
          let { main, weather, dt } = element;
          let weatherDescription = weather[0].description;
          let weatherIcon = getWeatherIcon(weather[0].icon);
          let temperature = Math.round(main.temp);
          let realFeel = Math.round(main.feels_like);
          let currentTime = getTime(dt);

          forecastContainer.innerHTML += `<div class="forecast-day-container">
          <div
            class="forecast d-flex justify-content-between align-items-center border rounded p-3 mb-5"
          >
            <div class="day-time-container">${currentTime}</div>
            <img
              class="weather-icon"
              src="${weatherIcon}"
              alt=""
            />
            <strong class="">${temperature}°C</strong>
            <div class="">${weatherDescription}</div>
            <div class="r-feel">Real feel: ${realFeel}°C</div>
          </div>
        </div>`;
        });
      }
    });
}
