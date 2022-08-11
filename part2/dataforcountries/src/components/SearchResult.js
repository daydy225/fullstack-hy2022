import Country from "./Country";
import CountryDetails from "./CountryDetails";

const SearchResult = ({
  findCountries,
  allCountries,
  handleShowDetails,
  weatherData,
}) => {
  let countries = [...allCountries];

  const re = new RegExp(findCountries, "i");

  const searchResult = countries
    .map((country) => country.name.common)
    .filter((name) => name.match(re));

  if (searchResult.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (searchResult.length === 1) {
    let findACountry = countries.find((country) =>
      country.name.common.match(re)
    );

    return (
      <CountryDetails
        name={findACountry.name.common}
        capital={findACountry.capital[0]}
        area={findACountry.area}
        languages={findACountry.languages}
        countryflag={findACountry.flags.png}
        weatherData={weatherData}
      />
    );
  }

  return searchResult.map((country) => (
    <Country
      key={country}
      countryName={country}
      findCountries={findCountries}
      handleShowDetails={handleShowDetails}
    />
  ));
};

export default SearchResult;

// "Too many matches, specify another filter"
