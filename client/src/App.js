//import logo from './logo.svg'
import './App.css'
import TreeGraph from './components/TreeGraph'
import Navbar from './components/Navbar'

import { NavProvider, NavState } from './components/NavContext'

function App() {
    const navToggleState = NavState()

    return (
        <div className={`App ${navToggleState}`}>
            <NavProvider>
                <TreeGraph />
                <Navbar />
            </NavProvider>
        </div>
    )
}

export default App
