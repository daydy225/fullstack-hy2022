import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './service/phonebookService'
import Notification from './components/Notification'
import { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [sucessMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    phonebookService.getAllNumbers().then(allNumbers => setPersons(allNumbers))
  }, [])

  const handleAddPerson = event => {
    event.preventDefault()
    let newPerson = [...persons]
    let personName = newPerson.map(person => person.name)
    let personNumber = newPerson.map(person => person.number)

    if (!personName.includes(newName) && !personNumber.includes(newNumber)) {
      if (newName !== '') {
        addNewNumber(newPerson)
      } else {
        alert(`All fields are required`)
      }
    } else {
      if (newName === '')
        return alert(`name should be added first to phonebook`)

      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old with a new one ?`
        )
      ) {
        updateNumber()
      }
    }
  }

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)
  const handleFilterText = event => setFilterText(event.target.value)

  const addNewNumber = newPerson => {
    let newPersonObj = {
      name: newName,
      number: newNumber,
      id: newPerson.length + 1,
    }
    phonebookService
      .addNewNumber(newPersonObj)
      .then(numberAdded => {
        setPersons(newPerson.concat(numberAdded))
        setSuccessMessage(`Added ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      .catch(error => alert(`error message: ${error.message}`))

    setNewName('')
    setNewNumber('')
  }

  const updateNumber = () => {
    let personsNumbers = [...persons]

    const personNumToChange = personsNumbers.find(
      person => person.name === newName
    )
    const { id } = personNumToChange
    const changedNumber = { ...personNumToChange, number: newNumber }
    phonebookService
      .updateNumber(id, changedNumber)
      .then(updatedNumber => {
        const indexOfNum = personsNumbers.indexOf(personNumToChange)
        personsNumbers.splice(indexOfNum, 1, updatedNumber)
        setPersons(personsNumbers)
        setSuccessMessage(`Updated ${newName}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      })
      .catch(error => alert(`error message: ${error.message}`))
  }
  const deleteNumberOf = id => {
    let numberToDelete = persons.find(num => num.id === id)
    let { name } = numberToDelete
    if (window.confirm(`Delete ${name} ?`)) {
      phonebookService
        .deleteNumber(id)
        .catch(error => alert(`error message: ${error.message}`))

      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const re = new RegExp(filterText, 'i')

  let filterList =
    filterText === ''
      ? persons
      : persons.filter(person => person.name.match(re))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={sucessMessage} />
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
      {filterList.map(person => (
        <Persons
          key={person.id}
          name={person.name}
          number={person.number}
          handleDeleteNumber={() => deleteNumberOf(person.id)}
        />
      ))}
    </div>
  )
}

export default App
