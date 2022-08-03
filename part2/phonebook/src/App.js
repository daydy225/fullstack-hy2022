import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const [newName, setNewName] = useState("");

  const handleAddPerson = (event) => {
    event.preventDefault();
    let newPerson = [...persons];
    let personName = newPerson.map((person) => person.name);
    if (!personName.includes(newName)) {
      newPerson = newPerson.concat({ name: newName });
      setPersons(newPerson);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
