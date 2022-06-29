import * as React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import Github from "../public/assets/github.png";
import LinkedIn from "../public/assets/linkedin.png";
import Gmail from "../public/assets/gmail.png";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getUserData } from "../store/projects/actions";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((state: any) => state.projects || []);
  React.useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="#D5B9B2"
      p={{ base: "1rem", lg: "" }}
    >
      <Image
        src={userData?.avatar_url}
        alt="myname"
        h="15rem"
        w="15rem"
        borderRadius="50%"
        boxShadow="0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)"
        transition="transform 0.2s"
        border="3px solid white;"
      />

      <Text fontSize="2em" mt="1rem" fontWeight={700}>
        Hi there, I am {userData.name}
      </Text>

      <Text mt="1rem" fontWeight={200} bottom={0} transition=" all .5s ease-in">
        I am a Frontend Software Engineer with actual experience in building
        <br />
        scalable and responsive websites using Angular Js, React js and Next js
        since 2019.
      </Text>
      <Flex w="15%" justify="space-around" mt="0.5rem">
        <a
          href="https://github.com/HazelCindy"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={Github.src}
            alt="github icon"
            boxSize={10}
            _hover={{
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/hazel-orlendo-794465b0/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={LinkedIn.src}
            alt="linkedin icon"
            boxSize={10}
            _hover={{
              cursor: "pointer",
            }}
          />
        </a>
        <a href="mailto:akinyiagnes.97@gmail.com">
          <Image
            src={Gmail.src}
            alt="gmail icon"
            boxSize={10}
            bg="blue"
            _hover={{
              cursor: "pointer",
            }}
          />
        </a>
      </Flex>
      <a href="mailto:akinyiagnes.97@gmail.com">
        <Button
          bg="black"
          color="white"
          mt="1rem"
          h="2.5rem"
          _hover={{
            bg: "#1B5299",
          }}
        >
          Contact Me
        </Button>
      </a>
    </Flex>
  );
}
