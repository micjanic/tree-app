import React, { useState, useContext, createContext } from 'react'

const NavContext = createContext()

export default function NavProvider({ children }) {
    const [navState, setNavState] = useState(false)
    const toggleNav = () => {
        setNavState((prevNavState) => !prevNavState)
    }

    return (
        <NavContext.Provider value={navState}>{children}</NavContext.Provider>
    )
}
