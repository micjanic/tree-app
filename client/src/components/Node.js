import React, { useState, useContext } from 'react'
import { Person } from './Person'

function Node({ current, treeData }) {
    const childNodes = current.children.map((child) =>
        treeData.find((person) => person.id === child.id)
    )

    console.log(childNodes)

    return <div></div>
}

export default Node
