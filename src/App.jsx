import './App.css';
import Home from './pages/Home';
// import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import { useAuth } from './components/useAuth';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  // const location = useLocation()
  
  const handleClick = () => {
    login()
    // const nextPath = location.state ? location.state.pathname : '/'
    // navigate(nextPath)
    navigate("/home")
    // return <Navigate to="/home" />
  }

  return (
    <button onClick={handleClick}>Login</button>
  )
}

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/login" location />
  }

  return children;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;