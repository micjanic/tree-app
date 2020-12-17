import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Person from './Person'
import DrawLines from './DrawLine'

function Node({ currentPerson, treeData, parent }) {
    const [childNodes, setChildNodes] = useState([])
    const personRef = useRef()

    useEffect(() => {
        const mappedChildNodes = currentPerson.children.map((child) =>
            treeData.find((person) => person.id === child.id)
        )

        const newChildNodes = mappedChildNodes.map((person, i) => (
            <Node
                key={person.id}
                currentPerson={person}
                treeData={treeData}
                parent={personRef}
            />
        ))

        setChildNodes(newChildNodes)
    }, [currentPerson, treeData])

    const renderChildNodes = childNodes.length > 0 && (
        <div className="children">{childNodes}</div>
    )

    return (
        <div className="node">
            <Person currentPerson={currentPerson} personRef={personRef} />
            {renderChildNodes}
            {parent && (
                <DrawLines
                    child={personRef.current}
                    parent={parent.current}
                    treeData={treeData}
                />
            )}
        </div>
    )
}

export default Node
