import React from 'react'
import { NavState, SetNavState } from './NavContext'

export default function NavBar() {
    const navToggleState = NavState()
    const setToggleNav = SetNavState()

    return (
        <div className="navbar">
            <button
                className={`${navToggleState}`}
                onClick={setToggleNav}
            ></button>
        </div>
    )
}
