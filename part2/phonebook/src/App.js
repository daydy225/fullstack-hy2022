import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();
    let newPerson = [...persons];
    let personName = newPerson.map((person) => person.name);
    let personNumber = newPerson.map((person) => person.number);
    if (!personName.includes(newName) && !personNumber.includes(newNumber)) {
      newPerson = newPerson.concat({ name: newName, number: newNumber });
      setPersons(newPerson);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);

  const handleNumberChange = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
