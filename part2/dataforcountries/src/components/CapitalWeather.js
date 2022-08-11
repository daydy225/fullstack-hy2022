const CapitalWeather = ({ weatherData }) => {
  console.log(weatherData.hasOwnProperty("main"));
  console.log(weatherData.hasOwnProperty("wind"));
  console.log(weatherData.hasOwnProperty("weather"));

  if (
    weatherData.hasOwnProperty("main") ||
    weatherData.hasOwnProperty("wind") ||
    weatherData.hasOwnProperty("weather")
  ) {
    let { main, weather, wind } = weatherData;

    let [icon] = weather.map((key) => key.icon);
    let [description] = weather.map((key) => key.description);
    return (
      <>
        <div>temperature {main.temp} Celcius</div>
        <img
          src={` http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div>wind {wind.speed} m/s</div>
      </>
    );
  }
};

export default CapitalWeather;
