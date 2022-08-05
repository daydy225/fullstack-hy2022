import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterText, setFilterText] = useState("");

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
  const handleFilterText = (event) => setFilterText(event.target.value);

  const re = new RegExp(filterText, "i");

  let filterList =
    filterText === ""
      ? persons
      : persons.filter((person) => person.name.match(re));
  console.log(filterList);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterText={handleFilterText} />
      <h3>add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        onSubmit={handleAddPerson}
      />
      <h3>Numbers</h3>
      {filterList.map((person) => (
        <Persons key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
