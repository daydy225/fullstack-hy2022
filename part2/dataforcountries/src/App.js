import { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./components/SearchResult";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [findCountries, setFindCountries] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  const handleFindCountries = (event) => setFindCountries(event.target.value);

  return (
    <div>
      find countries
      <input onChange={handleFindCountries} />
      <br />
      <SearchResult findCountries={findCountries} allCountries={allCountries} />
    </div>
  );
};

export default App;
