import React, { useState, useEffect, useRef } from 'react'
import Person from './Person'
import DrawLines from './DrawLine'

function Node({ current, treeData, parentRef }) {
    const [childNodes, setChildNodes] = useState([])
    const personRef = useRef()

    useEffect(() => {
        const mappedChildNodes = current.children.map((child) =>
            treeData.find((person) => person.id === child.id)
        )

        const newChildNodes = mappedChildNodes.map((person, i) => (
            <Node
                key={person.id}
                current={person}
                treeData={treeData}
                parent={personRef}
            />
        ))

        setChildNodes(newChildNodes)
    }, [current, treeData])

    const renderChildNodes = childNodes.length > 0 && (
        <div className="children">{childNodes}</div>
    )

    return (
        <div className="node">
            <DrawLines>
                <Person personData={current} personRef={personRef} />
                {renderChildNodes}
            </DrawLines>
        </div>
    )
}

export default Node
