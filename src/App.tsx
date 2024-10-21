import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'


function App() {
    return (
        <>
            <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="budgets" element={<Budgets />} />
            </Routes>
            </Router>
        </>
    )
}

export default App
