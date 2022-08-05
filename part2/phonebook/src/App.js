import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchField, setSearchField] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();
    let newPerson = [...persons];
    let personName = newPerson.map((person) => person.name);
    let personNumber = newPerson.map((person) => person.number);

    if (!personName.includes(newName) && !personNumber.includes(newNumber)) {
      newPerson = newPerson.concat({
        name: newName,
        number: newNumber,
        id: newPerson.length + 1,
      });
      setPersons(newPerson);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleSearchField = (event) => setSearchField(event.target.value);

  const re = new RegExp(searchField, "i");

  let filterList =
    searchField === ""
      ? persons
      : persons.filter((person) => person.name.match(re));
  console.log(filterList);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={searchField} onChange={handleSearchField} />
      </div>
      <form onSubmit={handleAddPerson}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterList.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
