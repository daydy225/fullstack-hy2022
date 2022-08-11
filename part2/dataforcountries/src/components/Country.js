import ShowDetailsButton from "./ShowDetailsButton";

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
