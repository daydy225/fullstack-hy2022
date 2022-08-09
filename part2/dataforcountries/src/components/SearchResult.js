import Country from "./Country";
import CountryDetails from "./CountryDetails";

const SearchResult = ({ findCountries, allCountries, handleShowDetails }) => {
  let countries = [...allCountries];

  const re = new RegExp(findCountries, "i");

  const searchResult = countries
    .map((country) => country.name.common)
    .filter((name) => name.match(re));

  if (searchResult.length > 10) {
    return <span>Too many matches, specify another filter</span>;
  }

  if (searchResult.length === 1) {
    let findACountry = countries.find((country) =>
      country.name.common.match(re)
    );

    return (
      <CountryDetails
        name={findACountry.name.common}
        capital={findACountry.capital}
        area={findACountry.area}
        languages={findACountry.languages}
        countryflag={findACountry.flags.png}
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
