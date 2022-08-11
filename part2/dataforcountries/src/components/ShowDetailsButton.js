const ShowDetailsButton = ({ text, handleShowDetails, countryName }) => (
  <button onClick={handleShowDetails} data-country-name={countryName}>
    {text}
  </button>
);

export default ShowDetailsButton;
