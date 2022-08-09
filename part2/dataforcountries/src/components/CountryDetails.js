const CountryDetails = ({ name, capipal, area, languages, countryflag }) => {
  console.log("countryName", name);
  console.log("capital", area);
  console.log("languages", languages);
  console.log("flags", countryflag);

  let languagesArr = [];
  for (const languagekey in languages) {
    languagesArr.push(languagekey);
  }

  return (
    <>
      <h2>{name}</h2>
      <div>
        capital {capipal}
        <br />
        area {area}
      </div>
      <h4>languages:</h4>
      <ul>
        {languagesArr.map((key) => (
          <li>{languages[key]}</li>
        ))}
      </ul>
      <img src={countryflag} width="150" alt={name} />
    </>
  );
};

export default CountryDetails;
