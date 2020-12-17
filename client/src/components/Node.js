import React, { useState, useEffect, useRef } from 'react'
import Person from './Person'
import DrawLines from './DrawLine'

function Node({ currentPerson, parentRef, treeData, windowWidth }) {
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
                parentRef={personRef}
                windowWidth={windowWidth}
                treeData={treeData}
            />
        ))

        setChildNodes(newChildNodes)
    }, [currentPerson, treeData, windowWidth])

    const renderChildNodes = childNodes.length > 0 && (
        <div className="children">{childNodes}</div>
    )

    return (
        <div className="node">
            <Person currentPerson={currentPerson} personRef={personRef} />
            {renderChildNodes}
            {parentRef && (
                <DrawLines
                    child={personRef.current}
                    parent={parentRef.current}
                    windowWidth={windowWidth}
                />
            )}
        </div>
    )
}

export default Node
