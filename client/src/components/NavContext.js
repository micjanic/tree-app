import React, { useState, useContext, createContext } from 'react'

const NavContext = createContext()
const NavUpdateContext = createContext()

export function navState() {
    return useContext(NavContext)
}

export function setNavState() {
    return useContext(NavUpdateContext)
}

export function NavProvider({ children }) {
    const [navState, setNavState] = useState(false)

    const toggleNav = () => {
        setNavState((prevNavState) => !prevNavState)
    }

    return (
        <NavContext.Provider value={navState}>
            <NavUpdateContext.Provider value={toggleNav}>
                {children}
            </NavUpdateContext.Provider>
        </NavContext.Provider>
    )
}
