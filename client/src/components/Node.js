import React, { useRef } from 'react'
import Person from './Person'

function Node({ current, treeData }) {
    console.log(current)

    const childNodes = current.children.map((child) =>
        treeData.find((person) => person.id === child.id)
    )

    const mapPersonFromTreeData = childNodes.map((person) => (
        <Node
            key={person.id}
            previous={current}
            current={person}
            treeData={treeData}
        />
    ))

    const renderChildren = mapPersonFromTreeData.length > 0 && (
        <div className="children">{mapPersonFromTreeData}</div>
    )

    return (
        <div id={current.id} className="node">
            <Person personData={current} />
            {renderChildren}
        </div>
    )
}

export default Node
