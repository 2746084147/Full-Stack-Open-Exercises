import { useState, useEffect } from 'react'
import noteService from './services/notes'
import _ from 'lodash'

import Items from './components/items'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Notification from './components/notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])

  // Get data from the server
  useEffect(() => {
    noteService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // e points to the name input
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setNewName(e.target.value)
  }

  // e points to the number input
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const showAll = newFilter === '' ? true : false
  const handleFilterChange = e => {
    setNewFilter(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    const item = {
      name: newName,
      number: newNumber
    }
    // Comparing 2 objects is hard, but we can use lodash.
    // _.some() checks if the array has at least 1 element satisfies the function, return a boolean value.
    // _.isEqual() checks whether the 2 object is equal, return a boolean value.
    if(_.some(persons, element => _.isEqual(element, item))) {
      setNewName('')
      setNewNumber('')
      return alert(`${item.name} is already added to the phone book.`)
    } else if (_.some(persons, ele => ele.name === newName)) {
      if(window.confirm(`${item.name} is already added to the phone book, replace the old number with a new one?`)) {
        noteService
          .update(persons.find(ele => ele.name === newName).id, item)
          .then(response => {
            setPersons(persons.map(n => n.name === newName ? response.data : n))
            setNewName('')
            setNewNumber('')
            // When update successfully, show the message.
            setErrorMessage(`Changed ${newName}`)
            // After 5 seconds the message will disappear
            setTimeout(() => setErrorMessage(''), 5000)
          })
          .catch(error => {
            setErrorMessage(`Information of ${newName} has already been removed from server.`)
            setTimeout(() => setErrorMessage(''), 5000)
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      noteService
      .create(item)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
        // When update successfully, show the message.
        setErrorMessage(`Added ${newName}`)
        // After 5 seconds the message will disappear
        setTimeout(() => setErrorMessage(''), 5000)
      })
    }
  }

  const handleDelete = (element) => {
    if(window.confirm(`Delete ${element.name}?`)){
      noteService
        .remove(element.id)
        .then(response => {
          // console.log(response.data);
          setPersons(persons.filter(element => element.name !== response.data.name))
        })
        .catch(error => {
          setErrorMessage(`Information of ${newName} has already been removed from server.`)
          setTimeout(() => setErrorMessage(''), 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {errorMessage} />
      <Filter newFilter = {newFilter} handleFilterChange = {handleFilterChange}/>
      <h2>Add A New</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addItem = {addItem}/>
      <h2>Numbers</h2>
      <Items flag = {showAll} arr = {persons} filter = {newFilter} handleDelete = {handleDelete} /> 
    </div>
  )
}

export default App
