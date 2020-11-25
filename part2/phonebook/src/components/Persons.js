import React from 'react'

const Person = ({persons, deletePerson}) => {
    const label = "delete"
    return (
        persons.map(person =>
            <p key = {person.id}>
                {person.name} {person.number}
                <button onClick={() => deletePerson(person.id)}>{label}</button>
            </p>
        )
    )
}

export default Person