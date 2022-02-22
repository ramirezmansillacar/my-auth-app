import './App.css';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import NotFoundPage from './pages/NotFoundPage';
import Login from './Login';
import { Context } from './Auth';
import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [LoginState] = useContext(Context)
  if (!LoginState) {
    return <Navigate to="/login" location />
  }
  return (
    <>
      <NavBar LoginState={LoginState}>
        {children}
      </NavBar>
    </>
  );
}

const App = () => {
  const [LoginState] = useContext(Context)
  return (
      <div className="App">
        
        <h1>{LoginState.toString()}</h1>
        <Routes>
          <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/benefits" element={<ProtectedRoute><Benefits /></ProtectedRoute>} />
          <Route path="/login" element= {<Login />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
  );
}

export default App;