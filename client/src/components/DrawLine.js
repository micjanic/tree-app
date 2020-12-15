import React, { useState, useEffect } from 'react'

export default function DrawLines({ parent, child }) {
    const [lines, setLines] = useState([])

    useEffect(() => {
        if (!parent || !child) {
            return <></>
        }

        //const parentCur = parent.current
        //const childCur = child.current

        const parentPos = parent && parent.current.getBoundingClientRect()
        const childPos = child && child.current.getBoundingClientRect()

        setLines([
            <line
                //key={`${}`}
                x1={parentPos.left + parentPos.width / 2}
                y1={parentPos.bottom}
                x2={childPos.left}
                y2={childPos.y}
                stroke="red"
            />,
        ])
    }, [parent, child])

    //const startTop = start.current.getBoundingClientRect().top

    return <svg className="tree-line">{lines}</svg>
}
