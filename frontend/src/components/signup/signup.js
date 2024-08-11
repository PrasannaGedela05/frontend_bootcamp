import React from 'react';
import { Input, FormControl, FormLabel, FormHelperText, Button, Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { api } from "../actions/api";
export const SignUp = () => {




    
    return (
        <Flex 
            align="center" 
            justify="center" 
            minHeight="100vh" 
            backgroundColor="gray.50"
        >
            <Box 
                p={6} 
                m={4} 
                borderWidth={1} 
                borderRadius="md" 
                boxShadow="lg" 
                bg="white"
                width={{ base: "90%", sm: "80%", md: "500px" }} // Responsive width
            >
                <Heading as="h1" size="lg" mb={6} textAlign="center">
                    Sign Up
                </Heading>
                <FormControl mb={4} isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='Enter your name' 
                    />
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        type='email' 
                        placeholder='Enter your email' 
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Register Number</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='Enter your register number' 
                    />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                        type='tel' 
                        placeholder='Enter your phone number' 
                    />
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Branch</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='Enter your branch' 
                    />
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Section</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='Enter your section' 
                    />
                </FormControl>
                <FormControl mb={6} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input 
                        type='password' 
                        placeholder='Enter your password' 
                    />
                </FormControl>
                <Button 
                    colorScheme="blue" 
                    width="full" 
                    bg="blue.500" 
                    _hover={{ bg: 'blue.600' }}
                    _focus={{ boxShadow: 'outline' }}
                >
                    Sign Up
                </Button>
                <Box mt={4} textAlign="center">
                    <p>Already have an account? <Link to="/signin" style={{ color: 'blue.500', textDecoration: 'underline' }}>Sign In</Link></p>
                </Box>
            </Box>
        </Flex>
    );
};



