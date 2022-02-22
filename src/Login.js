import React, { Fragment, useContext } from 'react';
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

const Login = () => {
  const [state, setState] = useContext(Context)

  // const { login } = Auth()
  const navigate = useNavigate()

  const toast = useToast()

  const handleClick = async () => {
    // login()
    setState(true)
    toast({
      title: 'Sesión iniciada correctamente.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    navigate('/home')
    // return <Navigate to="/home" />
  }

  return(
    <Fragment>

  <div className="LoginPage" >
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
            <FormControl id="email">
              <FormLabel>RUT</FormLabel>
              <Input placeholder="12345678-0" _placeholder={{ color: 'gray.400' }} type="email"  />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="********" _placeholder={{ color: 'gray.400' }}/>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link color={'blue.400'} to="/forgot">¿Olvidaste tu contraseña?</Link>
              </Stack>
              <Button onClick={handleClick}
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
    </div>
    </Fragment>
  )
}

export default Login