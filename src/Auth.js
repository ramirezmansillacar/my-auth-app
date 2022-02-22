import React, { useState } from "react";

export const Context = React.createContext()
const LoginState = false

const Auth = ({ children }) => {
  // Obteniendo el estado desde la variable local del navegador
  const [isLogged, setState] = useState(() => {
    const localStoredStatus = localStorage.getItem("isLogged");
    const initialValue = JSON.parse(localStoredStatus);
    return initialValue || LoginState;
  });

  return ( // Devuelve el contexto
    <Context.Provider value={[isLogged, setState]}>{ children }</Context.Provider>
  )
}

export default Auth