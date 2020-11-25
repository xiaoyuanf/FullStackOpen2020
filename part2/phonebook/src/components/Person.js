import React from 'react'

const Person = ({person, deletePerson}) => {
    const label = "delete"
    return (
        <p>{person.name} {person.number}
        <button onClick = {deletePerson}>{label}</button>
        </p>
    )
}

export default Person