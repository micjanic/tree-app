import React from 'react'

export default function Person({ currentPerson, personRef }) {
    const { id, firstName, lastName } = currentPerson
    return (
        <div id={id} className="person" ref={personRef}>
            <div className="first-name">
                {firstName} {lastName}
            </div>
        </div>
    )
}
