import React, { useState } from 'react';
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import { Button, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const { data } = await axios.post(
        '/api/user/login', 
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      // history.push('/chats'); // Ensure the route exists or update accordingly
      history.push('/');

    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Error Occurred!",
        description: error.response?.data?.message || error.message || "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing='5px' color='black'>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : 'password'}
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        color="white"
        isLoading={loading}
      >
        Login
      </Button>

      <Button
        variant='solid'
        colorScheme='red'
        width='100%'
        onClick={async () => {
          try {
            setLoading(true);
            const config = {
              headers: {
                "Content-type": "application/json"
              }
            };

            const { data } = await axios.post(
              '/api/user/login',
              { 
                email: 'guest@example.com', 
                password: '123456'
              },
              config
            );

            toast({
              title: "Login Successful",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });

            localStorage.setItem('userInfo', JSON.stringify(data));
            history.push('/');
          } catch (error) {
            toast({
              title: "Error Logging in as Guest",
              description: error.response?.data?.message || "Failed to login as guest",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
          } finally {
            setLoading(false);
          }
        }}
        isLoading={loading}
      >
        Login as Guest User
      </Button>
    </VStack>
  );
};

export default Login;
