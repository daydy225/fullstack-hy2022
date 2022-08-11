import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [findCountries, setFindCountries] = useState("");
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  useEffect(() => {
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;
    const re = new RegExp(findCountries, "i");
    // let cityName = "";
    if (findCountries.length >= 3) {
      let [cityName] = allCountries
        .filter((country) => country.name.common.match(re))
        .flatMap((country) => country.capital);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
        )
        .then((response) => {
          setCityWeather(response.data);
        });
    }
  }, [allCountries, findCountries]);

  const handleFindCountries = (event) => setFindCountries(event.target.value);

  const handleShowDetails = (event) =>
    setFindCountries(event.target.dataset.countryName);

  return (
    <div>
      find countries
      <input value={findCountries} onChange={handleFindCountries} />
      <br />
      <SearchResult
        findCountries={findCountries}
        allCountries={allCountries}
        handleShowDetails={handleShowDetails}
        weatherData={cityWeather}
      />
    </div>
  );
};

export default App;
