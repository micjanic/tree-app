import React, { useState, useEffect, useRef } from 'react'
import Person from './Person'

function Node({ current, treeData }) {
    const [childNodes, setChildNodes] = useState([])

    useEffect(() => {
        const mappedChildNodes = current.children.map((child) =>
            treeData.find((person) => person.id === child.id)
        )
        setChildNodes(mappedChildNodes)
    }, [current, treeData])

    const newChildNodes = childNodes.length > 0 && (
        <div className="children">
            {childNodes.map((person) => (
                <Node
                    key={person.id}
                    previous={current}
                    current={person}
                    treeData={treeData}
                />
            ))}
        </div>
    )

    return (
        <div id={current.id} className="node">
            <Person personData={current} />
            {newChildNodes}
        </div>
    )
}

export default Node
