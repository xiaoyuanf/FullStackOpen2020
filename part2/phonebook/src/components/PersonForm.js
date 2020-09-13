import React from 'react'

const PersonForm = (props) => {
    let {
        addPerson,
        handleNewName,
        handleNewNumber,
        newName,
        newNumber
      } = props;

    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNewName}/>
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm