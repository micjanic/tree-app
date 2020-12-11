import React from 'react'

export default function Person({ personData, personRef }) {
    const { firstName, lastName } = personData
    return (
        <div id={personData.id} className="person" ref={personRef}>
            <div className="first-name">
                {firstName} {lastName}
            </div>
        </div>
    )
}
