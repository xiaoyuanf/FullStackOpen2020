import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'


const App = (props) => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterString, setFilterString ] = useState('') 
  const [ notification, setNotification ] = useState(null)

  useEffect(() => {
    //console.log('effect')
    personService
      .getAll()
      .then((data) => {
        //console.log(response.data)
        setPersons(data)
      })
  }, [])
  //console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return
    }

    const personObject = {
      id: persons.length+1,
      name: newName,
      number: newNumber
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }
  
  const notifyWith = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    const toDelete = persons.find(p => p.id === id)
    const ok = window.confirm(`Delete ${toDelete.name}`)
    if (ok) {
      personService
      .remove(id)
      .then(response => {
        setPersons(response.filter(p => p.id !== id))
        notifyWith(`Deleted ${toDelete.name}`)
      }).catch(() => {
        setPersons(persons.filter(p => p.id !==id))
        notifyWith(`${toDelete.name} had already been removed`, 'error')
      })
    }
  }

  const handleNewName = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const personsToShow = filterString.length === 0 ?
    persons : 
    persons.filter(p => p.name.toLowerCase().indexOf(filterString.toLowerCase()) >= 0 )


  const handleFilter = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification = {notification}/>
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
        <Persons persons={personsToShow} 
          deletePerson={deletePerson}/>
      </div>
    </div>
  )
}

export default App