import React, { Fragment } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Heading,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react';
import { Link as RLink, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../components/useAuth';

export default function Login(props) {
  // const { login } = useAuth()
  // const navigate = useNavigate()

  // const handleClick = () => {
  //   login()
  //   navigate('/home')
  //   // return <Navigate to="/home" />
  // }

  return(
    <Fragment>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Inicia sesión en el Portal</Heading>  
          <Text fontSize={'lg'} color={'gray.600'}>
            Para acceder a tus <Link color={'blue.400'}>Beneficios</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>RUT</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Recordarme</Checkbox>
                <Link color={'blue.400'}>Olvidaste la clae?</Link>
              </Stack>
              {/* <Link onClick={handleClick}>Invoices</Link> */}
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Fragment>
  )
}