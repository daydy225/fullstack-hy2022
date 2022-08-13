import Country from './Country'

const Countrylist = ({ countries, setFilter }) => {
  console.log('Countries ', countries)
  console.log('Countries 0', countries[0])

  if (countries.length > 10) {
    return <div>Too many countries, specify some other fliter</div>
  }

  if (countries.length === 0) {
    return <div>No matches, specify some other fliter</div>
  }

  if (countries.length > 1) {
    return (
      <div>
        {countries.map(({ name }) => (
          <div key={name.common}>
            {name.common}
            <button onClick={() => setFilter(name.common)}>show</button>
          </div>
        ))}
      </div>
    )
  }

  return <Country country={countries[0]} />
}

export default Countrylist
