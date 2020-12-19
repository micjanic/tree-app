import React from 'react'
import { NavState, SetNavState } from './NavContext'

export default function NavBar() {
    const navToggleState = NavState()
    const setNavToggleState = SetNavState()

    return (
        <div className="navbar">
            <button
                className={`${navToggleState}`}
                onClick={setNavToggleState}
            ></button>
        </div>
    )
}
