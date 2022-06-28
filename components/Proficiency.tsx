import { Flex, Progress, Text, Box, Container } from "@chakra-ui/react";

export default function Proficiency() {
  return (
    <Flex
      mt="4rem"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      w="100%"
    >
      <Text m="2rem 0" fontWeight={700} fontSize="4em">
        Proficiency
      </Text>
      <Container w="100%">
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          Typescript
        </Text>
        <Box mt="1em" w="90%">
          <Progress value={80} colorScheme="pink" borderRadius="10px" />
        </Box>
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          Javascript
        </Text>
        <Box mt="1em" w="90%">
          <Progress value={80} colorScheme="pink" borderRadius="10px" />
        </Box>
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          Java
        </Text>
        <Box m="1em 0" w="90%">
          <Progress value={40} colorScheme="pink" borderRadius="10px" />
        </Box>
      </Container>
      <Text m="2rem 0" fontWeight={700} fontSize="2em">
        Frontend Frameworks
      </Text>
      <Container w="100%">
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          React
        </Text>
        <Box mt="1em" w="90%">
          <Progress value={80} colorScheme="pink" borderRadius="10px" />
        </Box>
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          Angular
        </Text>
        <Box mt="1em" w="90%">
          <Progress value={80} colorScheme="pink" borderRadius="10px" />
        </Box>
        <Text mt="2rem" fontWeight={800} fontSize="1em">
          Next
        </Text>
        <Box mt="1em" w="90%">
          <Progress value={40} colorScheme="pink" borderRadius="10px" />
        </Box>
      </Container>
    </Flex>
  );
}
