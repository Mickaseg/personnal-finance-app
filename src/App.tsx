import './App.css'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Transactions from './components/Transactions'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="transactions" element={<Transactions />} />
            </Routes>
            </Router>
        </>
    )
}

export default App
