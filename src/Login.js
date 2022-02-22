import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Context } from './Auth';
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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * Componente Login
 * @returns 
 */
const Login = () => {
  const [state, setState] = useContext(Context)

  // Datos de request API
  const baseUrl = 'https://reqres.in/api/users?page=2';
  let request = {
    token: "bCns2nqqkB1SCG6iH3kUMg",
    data: {
      name: "Keanu"
    }
  };


  /**
   * Manejador de envio de form. Login
   * @param {*} e 
   */
  const handleSubmit = async e => {
    e.preventDefault();
    // TODO: Enviar username and password a la API
    // const user = { rut, password };

    // Consumo de Servicio API REST
    const response = await axios.post(
      'https://app.fakejson.com/q',
      request,
    );

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