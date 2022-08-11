import CapitalWeather from "./CapitalWeather";

const CountryDetails = ({
  name,
  capital,
  area,
  languages,
  countryflag,
  weatherData,
}) => {
  let languagesArr = [];
  for (const languagekey in languages) {
    languagesArr.push(languagekey);
  }

  return (
    <>
      <h2>{name}</h2>
      <div>
        capital {capital}
        <br />
        area {area}
      </div>
      <h4>languages:</h4>
      <ul>
        {languagesArr.map((key) => (
          <li key={key}>{languages[key]}</li>
        ))}
      </ul>
      <img src={countryflag} width="160" alt={name} />
      <h3>Weather in {capital}</h3>
      <CapitalWeather weatherData={weatherData} />
    </>
  );
};

export default CountryDetails;
