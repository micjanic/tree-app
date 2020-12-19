//import logo from './logo.svg'
import './App.css'
import TreeGraph from './components/TreeGraph'
import Navbar from './components/Navbar'

import { NavProvider } from './components/NavContext'

function App() {
    return (
        <>
            <NavProvider>
                <div className="App">
                    <TreeGraph />
                    <Navbar />
                </div>
            </NavProvider>
        </>
    )
}

export default App
