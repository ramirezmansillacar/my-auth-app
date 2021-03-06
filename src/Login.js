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
  const baseUrl = 'http://vivetusbeneficios.custhelp.com/cc/API/';
  // const baseUrl = 'http://vivetusbeneficios.custhelp.com/cc/';

  let cookies = "location=development%7EYKVsn2SNfp90k_6feJlymUSZQplOmUaZQplemVCZVJmfBxMHEy0XNRkVNTs1Iy0zLTkZIZ8Hnwc%21; Path=/; Expires=Wed, 21 Sep 2022 18:26:23 GMT;"
  ;

  const axiosConfig = {
    headers: {
      'content-Type': 'application/json',
      "Accept": "/",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      // "Cookie": cookies
    },
    credentials: "same-origin"
  };

  document.cookie = cookies;

  axios.defaults.withCredentials = false;

  // const apiInstance = axios.create({
  //   baseURL: baseUrl,
  //   withCredentials: false,
  //   headers: {
  //     // 'Access-Control-Allow-Headers': cookies,
  //     'Access-Control-Allow-Origin': true,
  //     'Content-Type': 'application/json',
  //     'Connection': 'keep-alive',
  //     Cookie: cookies,
  //     'Sec-Fetch-Mode': 'cors'
  //   }
  // })
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

    const serviceUrl = 'AuthenticationServices/login';
    // const serviceUrl = 'Auth/login';

    // TODO: Enviar username and password a la API
    // const user = { rut, password };

    // Consumo de Servicio API REST
    // const response = apiInstance.post(
    //   'AutorizationServices/login',
    //   // 'Auth/doLogin',
    //   data,
    //   ).then((response) => {
    //   console.log(response)
    // })
    // .catch((error) => {
    //   console.error('Error', error)
    // })
    const response = axios.post(baseUrl+serviceUrl, data, axiosConfig)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.error(':(');
      });
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
      title: 'Sesi??n iniciada correctamente.',
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
              <Heading fontSize={'4xl'}>??Bienvenido!</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Inicia sesi??n con tu correo electr??nico corporativo
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
                  <FormLabel>Contrase??a</FormLabel>
                  <Input type="password" placeholder="*********" _placeholder={{ color: 'gray.400' }} onChange={(e) => setPassword(e.target.value)} value={password} />
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Link color={'gray.400'} to="/forgot">??Olvidaste tu contrase??a?</Link>
                  </Stack>
                  <Button type='submit' /*onClick={handleClick}*/
                  bg={'#008441'}
                  color={'white'}
                  _hover={{
                    bg: '#37ae71',
                  }}>
                    Iniciar sesi??n
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