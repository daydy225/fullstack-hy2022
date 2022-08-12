const Persons = ({ name, number, id, handleDeleteNumber }) => (
  <p key={id}>
    {name} {number} <button onClick={handleDeleteNumber}>delete</button>
  </p>
)

export default Persons
