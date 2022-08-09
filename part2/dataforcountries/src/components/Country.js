const ShowDetailsButton = ({ text, handleShowDetails, countryName }) => (
  <button onClick={handleShowDetails} data-country-name={countryName}>
    {text}
  </button>
);

const Country = ({ countryName, handleShowDetails }) => {
  return (
    <>
      <span>{countryName}</span>
      <ShowDetailsButton
        text="show"
        handleShowDetails={handleShowDetails}
        countryName={countryName}
      />
      <br />
    </>
  );
};

export default Country;
