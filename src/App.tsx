import './App.css';
import {BrowserRouter as Router, Outlet, Route, Routes} from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Pots from './pages/Pots';
import RecurringBills from './pages/RecurringBills';
import NotFound from './pages/404';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';

function DashboardLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>

                {/* Protected Dashboard Layout */}
                <Route element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
                    <Route path="/" element={<Overview/>}/>
                    <Route path="transactions" element={<Transactions/>}/>
                    <Route path="budgets" element={<Budgets/>}/>
                    <Route path="pots" element={<Pots/>}/>
                    <Route path="recurring-bills" element={<RecurringBills/>}/>
                </Route>

                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;