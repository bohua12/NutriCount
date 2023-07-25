import React from "react";
import App from "next/app";
import "../styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer, Box, Button, Link } from "@chakra-ui/react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ChakraProvider>
        <div>
          <Flex bg="gray.100" p={4}>
            <Box>
              <Link href="/" fontSize="xl" fontWeight="bold" color="teal.500">
                NutriCount
              </Link>
              <Link
                href="/normal-food"
                ml={4}
                mr={4}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              >
                Add your very own food!
              </Link>
              <Link
                href="/home-cooked"
                ml={4}
                mr={4}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              >
                Home Cooked
              </Link>
            </Box>
            <Spacer />
            <Box>
              <Link
                href="/about"
                mr={4}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              >
                About
              </Link>
              <Link
                href="/contact"
                mr={4}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              >
                Contact
              </Link>
              <Button colorScheme="teal" size="sm">
                Sign Up
              </Button>
            </Box>
          </Flex>
        </div>
          <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
