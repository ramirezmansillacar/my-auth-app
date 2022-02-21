import { createContext, useContext, useState, setState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => {
    // isAuthenticated = setState(true)
    setIsAuthenticated(true)
    console.log('logged')
  }

  const logout = () => {
    setIsAuthenticated(false)
  }
  return {
    isAuthenticated, 
    login, 
    logout
  }
}



export const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}