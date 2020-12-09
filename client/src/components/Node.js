import React, { useState, useContext } from 'react'
import { Person } from './Person'

function Node({ current, treeData }) {
    const childNodes = current.children.map((child) =>
        treeData.find((person) => person.id === child.id)
    )

    if (!childNodes.length) {
        return <div className="end-node">{current.firstName}</div>
    }

    const renderChildren = childNodes.map((person) => (
        <div className="node">
            <Node current={person} treeData={treeData} />
        </div>
    ))

    return (
        <div className="node">
            <div className="person">{current.firstName}</div>
            <div className="children">{renderChildren}</div>
        </div>
    )
}

export default Node
