import React, { useState, useLayoutEffect } from 'react'

export default function DrawLines({ parent, child, treeData }) {
    const [lines, setLines] = useState([])

    useLayoutEffect(() => {
        //const parentCur = parent.current
        //const childCur = child.current

        if (!parent || !child) {
            return
        }

        const parentPos = parent && parent.getBoundingClientRect()
        const childPos = child && child.getBoundingClientRect()

        setLines([
            <line
                key={`${parentPos.left + childPos.left}`}
                x1={parentPos.left + parentPos.width / 2}
                y1={parentPos.bottom}
                x2={parentPos.left + parentPos.width / 2}
                y2={parentPos.bottom + (childPos.top - parentPos.bottom) / 2}
            />,
            <line
                key={`${parentPos.left + childPos.right}`}
                x1={parentPos.left + parentPos.width / 2}
                y1={parentPos.bottom + (childPos.top - parentPos.bottom) / 2}
                x2={childPos.left + childPos.width / 2}
                y2={parentPos.bottom + (childPos.top - parentPos.bottom) / 2}
            />,
            <line
                key={`${parentPos.top + childPos.bottom}`}
                x1={childPos.left + childPos.width / 2}
                y1={parentPos.bottom + (childPos.top - parentPos.bottom) / 2}
                x2={childPos.left + childPos.width / 2}
                y2={childPos.top}
            />,
        ])
    }, [parent, child, treeData])

    //const startTop = start.current.getBoundingClientRect().top

    return <svg className="tree-line">{lines}</svg>
}
