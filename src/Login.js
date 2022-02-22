import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Context } from './Auth'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Heading,
    Text,
    Button,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';
import Logo from './components/Logo'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import jwt_decode from "jwt-decode";

/**
 * Componente Login
 * @returns 
 */
const Login = () => {
  const [state, setState] = useContext(Context)

  // Datos de request API
  const baseUrl = 'https://vivetusbeneficios.custhelp.com/cc/API';

  let cookies = "location=development~YKVsn2SNfp90k_6feJlymUqZTJlAmUSZWJlamVqZXJmfBxMHEy0XNRkVNTs1Iy0zLTkZIZ8Hnwc!; cp_session=fUeq7oh91aPcLa1o05wkLGxOqOBgRx4SwqWEqb8c8vNpJnjSU6ObKMuZDWVRwaNy0Cx~M__weLdElKY7b4Vy9JavVGUdFkhWnyrgG0hhN2Pg~n4A5VPsvkbv~Cr0Ys017kaMjvkkfeAVCZgD6CzfeDbtyb41iXoeHqSGUQqvjW48RUfpiaPgjYbEzsJRxVGf_Y2vTOe5rEtyCYQ6fC5naGQsABDDzSHYBWkAbYuUqCben_ZLqj7Tp3Jm2_0zcZevKvyNLuwGbdzI7qXdr_L5aDVhNmH41CmzGJTI_SZq4lPOAKbGi4SATMXd65CpPN9G0WdNveUISdDdaCB3oSi7qqV8JCvvvElnma31PACP~y5WlFQ9Z1qKhJ8bdRubHmJuHR5_bkqFyq78uZwGbJhVIVPdL4Bn71hgQ0DuHjb~e_IRWCzV~oLr_4pg!!"
  ;

  const apiInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
      // 'Access-Control-Allow-Headers': cookies,
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
      'Connection': 'keep-alive',
    }
  })


  const data = {
    login : "19933998-2",
    password : "VIVE19660"
  }

  /**
   * Manejador de envio de form. Login
   * @param {*} e 
   */
  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: Enviar username and password a la API
    // const user = { rut, password };

    // Consumo de Servicio API REST
    const response = apiInstance.post(
      'AutorizationServices/login',
      // 'Auth/doLogin',
      data,
    ).then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error', error)
    })


    // Almacenamiento en variable local de la autenticacion correcta, booleano
    if (response.data) { // TODO: validar con respuesta de Autenticacion
      localStorage.setItem('isLogged', true)
      localStorage.setItem('name', response.data.name)
      login()
    }
  };

  
  const toast = useToast();
  const navigate = useNavigate();
  /**
   * Actualiza variable global (para el Router) y despliega mensaje de exito, redirecciona al Home
   */
  const login = async () => {
    setState(true)
    toast({
      title: 'Sesión iniciada correctamente.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate('/home')
  };


  // Estados de valores del formulario
  const [rut, setRut] = useState(() => {
    // Obteniendo desde variable local del navegador
    const saved = localStorage.getItem("rut");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("rut", JSON.stringify(rut));
  // }, [rut]);

  return(
    <Fragment>
      <div className="LoginPage" >
        <form onSubmit={handleSubmit}>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Logo width={'144'} />
              <Heading fontSize={'4xl'}>¡Bienvenido!</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Inicia sesión con tu correo electrónico corporativo
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={3}>
                <FormControl id="rut">
                  <FormLabel>RUT</FormLabel>
                  <Input placeholder="12345678-0" _placeholder={{ color: 'gray.400' }} type="number" onChange={(e) => setRut(e.target.value)} value={rut} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contraseña</FormLabel>
                  <Input type="password" placeholder="*********" _placeholder={{ color: 'gray.400' }} onChange={(e) => setPassword(e.target.value)} value={password} />
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Link color={'gray.400'} to="/forgot">¿Olvidaste tu contraseña?</Link>
                  </Stack>
                  <Button type='submit' /*onClick={handleClick}*/
                  bg={'#008441'}
                  color={'white'}
                  _hover={{
                    bg: '#37ae71',
                  }}>
                    Iniciar sesión
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        </form>
      </div>
    </Fragment>
  )
}

export default Login