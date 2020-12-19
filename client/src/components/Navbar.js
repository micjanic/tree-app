import React from 'react'
import { NavState, SetNavState } from './NavContext'

export default function NavBar() {
    const navToggleState = NavState()
    const setNavToggleState = SetNavState()

    const navOpenClass = navToggleState ? ' nav-open' : ''
    return (
        <div className={`navbar${navOpenClass}`}>
            <button
                className="navbar-toggle-btn"
                onClick={setNavToggleState}
            ></button>
        </div>
    )
}
