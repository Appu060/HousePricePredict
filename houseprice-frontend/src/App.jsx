import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from './utils/axiosConfig';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Set axios default header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const handleSetToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // optional, if storing user info
  };

  // Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={handleSetToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <div className="p-8">
                <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
