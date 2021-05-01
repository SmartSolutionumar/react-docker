import React from 'react';
import { Center, Square, Circle } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"

const HelloWorld = () => {
  
  function sayHello() {
    alert(' I am running in docker!');
  }
  
  return (
  	<Center bg="dark" h="100px" color="white">
  	<Button onClick={sayHello} colorScheme="blue">Hello React click me!
  	</Button>
    
    </Center>
  );
};

export default HelloWorld;   