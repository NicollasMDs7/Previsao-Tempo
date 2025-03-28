import './WeatherInformations5Days.css';

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);

  let dayliForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dayliForecast[date]) {
      dayliForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dayliForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <div className="weather-container">
      <h3>Previsão dos Próximos 5 Dias</h3>
      <div className="wheater-list">
        {next5DaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="forecast-description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)} °C min /{" "}
              {Math.round(forecast.main.temp_max)}°C min
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WeatherInformations5Days;
