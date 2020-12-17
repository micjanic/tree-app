import React from 'react'

export default function Person({ currentPerson, personRef }) {
    console.log(currentPerson)
    const { id, firstName, lastName } = currentPerson
    const gender = currentPerson.gender.toLowerCase()

    return (
        <div id={id} className={`person ${gender}`} ref={personRef}>
            <div className="first-name">
                {firstName} {lastName}
            </div>
        </div>
    )
}
