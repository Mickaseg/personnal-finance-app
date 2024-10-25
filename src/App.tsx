import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/nav/Navbar'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Budgets from './pages/Budgets'
import Pots from './pages/Pots'
import RecurringBills from './pages/RecurringBills'
import NotFound from './pages/404'
import Login from './pages/Login'

const ProtectedRoute = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

function App() {

    return (
        <Router>
        <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protect all other routes with navbar */}
            {/*<Route element={<ProtectedRoute />}>*/}
                <Route path="/" element={<Overview />} />
                <Route path="transactions" element={<Transactions />} />
                <Route path="budgets" element={<Budgets />} />
                <Route path="pots" element={<Pots />} />
                <Route path="recurring-bills" element={<RecurringBills />} />
                <Route path="*" element={<NotFound />} />
            {/*</Route>*/}
        </Routes>
        </Router>
    )
}

export default App
