// import ShowDetailsButton from "./ShowDetailsButton";
import Weather from './Weather'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Country = ({ country }) => {
  console.log('country', country)
  const [weather, setWeather] = useState(null)
  const languages = Object.values(country.languages)
  const capital = country.capital[0]

  useEffect(() => {
    const key = process.env.REACT_APP_WEATHER_API_KEY
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&units=metric`
    axios.get(url).then(({ data }) => {
      setWeather(data)
    })
  }, [capital])

  return (
    <div>
      <h2>{country.name.common}</h2>
      <div>capital {capital} </div>
      <div>area {country.area} </div>

      <h4>languages:</h4>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width={150}
      />

      <Weather weather={weather} city={capital} />
    </div>
  )
}

export default Country
