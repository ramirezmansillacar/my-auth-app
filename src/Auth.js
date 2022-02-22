import React, { useState } from "react";

const LoginState = false

export const Context = React.createContext()

const Auth = ({ children }) => {
  const [state, setState] = useState(LoginState)

  return (
    <Context.Provider value={[state, setState]}>{ children }</Context.Provider>
  )
}

export default Auth