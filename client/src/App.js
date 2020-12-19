//import logo from './logo.svg'
import './App.css'
import TreeGraph from './components/TreeGraph'
import Navbar from './components/Navbar'

import NavProvider from './components/NavContext'

function App() {
    return (
        <div className="App">
            <TreeGraph />
            <Navbar />
        </div>
    )
}

export default App
