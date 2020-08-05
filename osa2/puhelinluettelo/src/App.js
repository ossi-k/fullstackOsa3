import React, { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1231244'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })}, [])

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {

    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const duplicate = persons.find(person => personObject.name === person.name)

    if (persons.includes(duplicate)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }



  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div>number: <input value={newNumber}
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <a>
        {persons.map(person =>
          <a key={person.name}>
            {person.name}, {" "}
            {person.number}
            <br/>
          </a>
        )}
      </a>
    </div>
  )

}

export default App