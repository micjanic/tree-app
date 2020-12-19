import React, { useState, useContext, createContext } from 'react'

const NavContext = createContext()
const NavUpdateContext = createContext()

export function NavState() {
    return useContext(NavContext)
}

export function SetNavState() {
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
