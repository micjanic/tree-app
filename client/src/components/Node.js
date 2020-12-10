import React, { useState, useContext } from 'react'
import Person from './Person'

function Node({ current, treeData }) {
    const childNodes = current.children.map((child) =>
        treeData.find((person) => person.id === child.id)
    )

    const renderChildren = childNodes.map((person) => (
        <Node current={person} treeData={treeData} />
    ))

    return (
        <div className="node">
            <Person personData={current} />
            <div className="children">{renderChildren}</div>
        </div>
    )
}

export default Node
