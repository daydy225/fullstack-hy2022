const CountryDetails = ({ name, capital, area, languages, countryflag }) => {
  let languagesArr = [];
  for (const languagekey in languages) {
    languagesArr.push(languagekey);
  }

  let capitals =
    capital.length > 1
      ? capital.map((city) => (
          <span key={city}>
            {city} {""}
          </span>
        ))
      : capital;

  return (
    <>
      <h2>{name}</h2>
      <div>
        capital {capitals}
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
    </>
  );
};

export default CountryDetails;
