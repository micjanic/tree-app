import React from 'react'

export default function Person({ personData }) {
    const { firstName, lastName } = personData
    return (
        <div className="person">
            <div className="first-name">{firstName}</div>
        </div>
    )
}
