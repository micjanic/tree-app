import React, { useState } from 'react'

export default function DrawLines({ children }) {
    const [paths, setPaths] = useState([])

    const buildLines = paths.length > 0 && <svg>{paths}</svg>
    console.log(children)
    return children
}
