import React, { Fragment, useContext } from 'react';
import {
  MenuItem,
} from '@chakra-ui/react';
import { Context } from './Auth';

const Logout = () => {
  const [state, setState] = useContext(Context)
  const handleClick = () => {
    setState(false)
  }
  
  return (<MenuItem onClick={handleClick}>Desconectar</MenuItem>)
}

export default Logout 