import Country from "./Country";
import CountryDetails from "./CountryDetails";

const SearchResult = ({ findCountries, allCountries }) => {
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
    console.log("FindAcountry", findACountry);
    return (
      <CountryDetails
        name={findACountry.name.common}
        capipal={findACountry.capipal}
        area={findACountry.area}
        languages={findACountry.languages}
        countryflag={findACountry.flags.png}
      />
    );
  }

  return searchResult.map((country) => (
    <Country key={country} countryName={country} />
  ));
};

export default SearchResult;

// "Too many matches, specify another filter"
