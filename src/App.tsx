import React from 'react';
import './assets/vendor/fontawesome-free/css/all.css';
import './assets/css/sb-admin-2.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
// import NavigationBar from './components/Navbar';
import UserManagement from './pages/UserManagement';
import { AuthProvider, useAuth } from './providers/auth.providers';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <div className='app'>
            {/* <NavigationBar /> */}
                <Router>
                    <Routes>
                        <Route path="/login" element={ localStorage.getItem('user') ? <Navigate to="/" /> : <Login />} />
                        <Route path="/register" element={ localStorage.getItem('user') ? <Navigate to="/" /> : <Register />} />
                        <Route
                            path="/"
                            element={
                                <RequireAuth>
                                    <Home />
                                </RequireAuth>
                            }
                        />

                        <Route
                            path="/dashboard"
                            element={
                                <RequireAuth>
                                    <Dashboard />
                                </RequireAuth>
                            }
                        />

                        <Route
                            path="/users"
                            element={
                                <RequireAuth>
                                    <UserManagement />
                                </RequireAuth>
                            }
                        />
                    </Routes>

                </Router>
            </div>
        </AuthProvider>
    );
};

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { user } = useAuth();
    return Object.keys(user).length !== 0 ? children : <Navigate to="/login" />;
};


export default App;
