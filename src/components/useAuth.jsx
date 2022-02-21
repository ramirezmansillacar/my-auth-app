import { createContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => {
    // isAuthenticated = setState(true)
    setIsAuthenticated(isAuthenticated => !isAuthenticated)
    console.log('logged')
    console.log(isAuthenticated)
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