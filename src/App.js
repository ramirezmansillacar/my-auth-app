import './App.css';
import { useContext } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Benefits from './pages/Benefits';
import NotFoundPage from './pages/NotFoundPage';
import Login from './Login';
import { Context as AuthContext } from './Auth';
import { Routes, Route, Navigate } from "react-router-dom";

/**
 * Protege la ruta del elemento hijo en caso de no estar logueado el usuario
 * @param {children} e Elemento hijo al que va redirigir en caso de comprobarse la sesion 
 * @returns Redirect Login | Despliegue de NavBar con elem. hijo 
 */
const ProtectedRoute = ({ children }) => {
  const [isFinallyLogged] = useContext(AuthContext)

  if (!isFinallyLogged) {
    return <Navigate to="/login" location />
  }

  return (
    <NavBar>
      {children}
    </NavBar>
  )
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* Rutas Protegidas */}
        <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/benefits" element={<ProtectedRoute><Benefits /></ProtectedRoute>} />
        {/* Rutas Públicas */}
        <Route path="/login" element= {<Login />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;