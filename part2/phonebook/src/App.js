import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = (props) => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterString, setFilterString ] = useState('') 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return
    }

    const personObject = {
      id: persons.length,
      name: newName,
      number: newNumber
    }


    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = (filterString === "") 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterString.toLowerCase()))


  const handleFilter = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterString={filterString}
        handleFilter={handleFilter}
        />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}/>

      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person =>
          <Person key={person.id} person={person} />
          )}
      </div>
    </div>
  )
}

export default App