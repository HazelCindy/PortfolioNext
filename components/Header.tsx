import { Flex, Image, Text } from "@chakra-ui/react";
import Hazel from "../public/assets/hazel.jpg";

export default function Footer() {
  return (
    <Flex flexDir="column" justify="center" align="center" mt="5rem">
      <Image
        src={Hazel.src}
        alt="myname"
        h="15rem"
        w="15rem"
        borderRadius="50%"
        boxShadow="0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)"
        transition="transform 0.2s"
        border="3px solid white;"
      />

      <Text fontSize="2em" mt="1rem" fontWeight={700}>
        Hazel Orlendo
      </Text>

      <Text mt="1rem" fontWeight={200} bottom={0}>
        Frontend Software Engineer
      </Text>
    </Flex>
  );
}
