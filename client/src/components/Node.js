import React, { useState, useContext } from 'react'
import { Person } from './Person'

function Node({ treeData }) {
    console.log(treeData)
    return (
        <>
            {treeData.map((person) => (
                <div>{person.firstName}</div>
            ))}
        </>
    )
}

export default Node
