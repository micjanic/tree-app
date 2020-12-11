import React, { useState, useEffect } from 'react'
import Person from './Person'
import DrawLine from './DrawLine'

function Node({ current, treeData }) {
    const [childNodes, setChildNodes] = useState([])

    useEffect(() => {
        const mappedChildNodes = current.children.map((child) =>
            treeData.find((person) => person.id === child.id)
        )

        const newChildNodes = mappedChildNodes.map((person) => (
            <Node
                key={person.id}
                previous={current}
                current={person}
                treeData={treeData}
            />
        ))

        setChildNodes(newChildNodes)
    }, [current, treeData])

    const renderChildNodes = childNodes.length > 0 && (
        <div className="children">{childNodes}</div>
    )

    return (
        <div id={current.id} className="node">
            <Person personData={current} />
            {renderChildNodes}
            <DrawLine />
        </div>
    )
}

export default Node
