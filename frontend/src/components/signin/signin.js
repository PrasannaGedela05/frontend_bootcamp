// import React, { useState } from 'react';
// import { Input, FormControl, FormLabel, FormHelperText, Button, Box, Flex, Heading } from "@chakra-ui/react";
// import axios from 'axios';
// import { api } from "../actions/api";
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// export const SignIn = () => {
//     // State for form fields
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigate = useNavigate(); // Initialize useNavigate
// navigate('/signin')
//     // Sign-in function
//     const signin = async () => {
//         try {
//             const res = await axios.post(`${api}/signin`, { email, password });
//             if (res.data.message) {
//                 console.log(res?.data?.values);
//                 alert("Login successful");
//                 navigate('/dashboard'); // Navigate to dashboard or another route on successful login
//             } else {
//                 alert("User not found");
//                 navigate('/signup'); // Navigate to sign-up if user not found
//             }
//         } catch (e) {
//             console.error(e);
//             alert("An error occurred. Please try again.");
//         }
//     };

//     return (
//         <Flex 
//             align="center" 
//             justify="center" 
//             minHeight="100vh" 
//             backgroundColor="gray.50"
//         >
//             <Box 
//                 p={6} 
//                 borderWidth={1} 
//                 borderRadius="md" 
//                 boxShadow="lg" 
//                 bg="white"
//                 width={{ base: "90%", sm: "80%", md: "400px" }} // Responsive width
//             >
//                 <Heading as="h1" size="lg" mb={6} textAlign="center">
//                     Sign In
//                 </Heading>
//                 <FormControl mb={4} isRequired>
//                     <FormLabel>Email address</FormLabel>
//                     <Input 
//                         type='email' 
//                         placeholder='Enter your email' 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <FormHelperText>We'll never share your email.</FormHelperText>
//                 </FormControl>
//                 <FormControl mb={6} isRequired>
//                     <FormLabel>Password</FormLabel>
//                     <Input 
//                         type='password' 
//                         placeholder='Enter your password' 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <p>Forgot your password? <Link to="/updatep" style={{ color: '#3182ce', textDecoration: 'underline' }}>Update Password</Link></p>
//                 </FormControl>
//                 <Button 
//                     colorScheme="blue" 
//                     width="full" 
//                     bg="blue.500" 
//                     _hover={{ bg: 'blue.600' }}
//                     _focus={{ boxShadow: 'outline' }} 
//                     onClick={signin} // Corrected event handler
//                 >
//                     Sign In
//                 </Button>
//                 <Box mt={4} textAlign="center">
//                     <p>Don't have an account? <Link to="/signup" style={{ color: '#3182ce', textDecoration: 'underline' }}>Sign Up</Link></p>
//                 </Box>
//             </Box>
//         </Flex>
//     );
// };



import React, { useState } from 'react';
import { Input, FormControl, FormLabel, FormHelperText, Button, Box, Flex, Heading, Link } from "@chakra-ui/react";
import axios from 'axios';
import { api } from "../actions/api";
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    // Sign-in function
    const signin = async () => {
        try {
            const res = await axios.post(`${api}/signin`, { email, password }); // Correct template string
            if (res.data.message) {
                console.log(res?.data?.values);
                alert("Login successful");
                navigate('/dashboard'); // Navigate to dashboard or another route on successful login
            } else {
                alert("User not found");
                navigate('/signup'); // Navigate to sign-up if user not found
            }
        } catch (e) {
            console.error(e);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <Flex 
            align="center" 
            justify="center" 
            minHeight="100vh" 
            backgroundColor="gray.50"
        >
            <Box 
                p={6} 
                borderWidth={1} 
                borderRadius="md" 
                boxShadow="lg" 
                bg="white"
                width={{ base: "90%", sm: "80%", md: "400px" }} // Responsive width
            >
                <Heading as="h1" size="lg" mb={6} textAlign="center">
                    Sign In
                </Heading>
                <FormControl mb={4} isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        type='email' 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl mb={6} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input 
                        type='password' 
                        placeholder='Enter your password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormHelperText>
                        <Link color="blue.500" href="/updatep" textDecoration="underline">
                            Forgot your password? Update Password
                        </Link>
                    </FormHelperText>
                </FormControl>
                <Button 
                    colorScheme="blue" 
                    width="full" 
                    bg="blue.500" 
                    _hover={{ bg: 'blue.600' }}
                    _focus={{ boxShadow: 'outline' }} 
                    onClick={signin} // Correct event handler
                >
                    Sign In
                </Button>
                <Box mt={4} textAlign="center">
                    <FormHelperText>
                        <Link color="blue.500" href="/signup" textDecoration="underline">
                            Don't have an account? Sign Up
                        </Link>
                    </FormHelperText>
                </Box>
            </Box>
        </Flex>
    );
};

