import React, { useState } from 'react';
import { Input, FormControl, FormLabel, FormHelperText, Button, Box, Flex, Heading, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const UpdatePass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <Flex 
            align="center" 
            justify="center" 
            minHeight="100vh" 
            backgroundColor="gray.50"
        >
            <Box 
                p={6} 
                m={6} 
                borderWidth={1} 
                borderColor="black" 
                borderRadius="md" 
                boxShadow="lg" 
                bg="white"
                width={{ base: "90%", sm: "80%", md: "400px" }} // Responsive width
            >
                <Heading as="h1" size="lg" mb={6} textAlign="center">
                    Sign Up
                </Heading>
                <FormControl mb={4} isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        type='email' 
                        placeholder='Enter your email' 
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Verification Code</FormLabel>
                    <Input 
                        type='text' 
                        placeholder='Enter verification code' 
                    />
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>New Password</FormLabel>
                    <InputGroup>
                        <Input 
                            type={showPassword ? 'text' : 'password'} 
                            placeholder='Enter new password' 
                        />
                        <InputRightElement>
                            <IconButton 
                                variant="link" 
                                aria-label={showPassword ? 'Hide password' : 'Show password'} 
                                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />} 
                                onClick={handleClickShowPassword} 
                            />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl mb={4} isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input 
                            type={showConfirmPassword ? 'text' : 'password'} 
                            placeholder='Confirm new password' 
                        />
                        <InputRightElement>
                            <IconButton 
                                variant="link" 
                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'} 
                                icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />} 
                                onClick={handleClickShowConfirmPassword} 
                            />
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Button 
                    colorScheme="green" 
                    width="full" 
                    bg="green.500" 
                    _hover={{ bg: 'green.600' }}
                    _focus={{ boxShadow: 'outline' }}
                >
                    Submit
                </Button>
            </Box>
        </Flex>
    );
};
