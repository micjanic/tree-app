import React, { useState, useEffect } from 'react'

export default function DrawLines({ parent, child, windowWidth, totalNumber }) {
    const [lines, setLines] = useState([])

    useEffect(() => {
        if (!parent || !child) {
            return
        }

        const parentPos = parent && parent.getBoundingClientRect()
        const childPos = child && child.getBoundingClientRect()

        const parentMiddle = parentPos.left + parentPos.width / 2
        const childMiddle = childPos.left + childPos.width / 2
        const middlePos = (childPos.top - parentPos.bottom) / 2

        setLines([
            <path
                key={`${parentPos.left + childPos.left}`}
                //prettier-ignore
                d={`M${parentMiddle},${parentPos.bottom}
                    L${parentMiddle},${parentPos.bottom + middlePos}
                    L${childMiddle},${parentPos.bottom + middlePos}
                    ${childMiddle},${childPos.top}`}
            />,
        ])
    }, [parent, child, windowWidth, totalNumber])

    return <svg className="tree-line">{lines}</svg>
}
