import React, { useContext } from 'react';
import {
  MenuItem,
} from '@chakra-ui/react';
import { Context } from './Auth';

/**
 * Componente de cierre de sesion, renderiza button, cambia el valor local isLogged a FALSO,
 * setea el estado de la variable global de autenticacion (validada por Router) 
 */
const Logout = () => {
  const [state, setState] = useContext(Context)

  const handleClick = () => {
    localStorage.setItem('isLogged', false)
    setState(false)
  };
  
  return (<MenuItem onClick={handleClick}>Desconectar</MenuItem>)
}

export default Logout;