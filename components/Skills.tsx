import { Box, Flex, Image, keyframes, Text } from "@chakra-ui/react";
import Angular from "../public/assets/Angular.png";
import ReactIcon from "../public/assets/React.png";
import Next from "../public/assets/Next.png";
import Chart from "../public/assets/Chart.png";
import Typescript from "../public/assets/Typescript.png";
import Java from "../public/assets/java.png";
import Javascript from "../public/assets/javascript.png";
import Elastic from "../public/assets/Elastic-beats.png";
import { motion } from "framer-motion";

export default function About() {
  const animationKeyframes = keyframes`
  0% { transform: scale(0.5) rotate(0); border-radius: 20%; }
  25% { transform: scale(0.5) rotate(90deg); border-radius: 20%; }
  50% { transform: scale(0.5) rotate(180deg); border-radius: 50%; }
  75% { transform: scale(0.5) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(0.5) rotate(360deg); border-radius: 20%; }
`;

  const animation = `${animationKeyframes} 2s ease-in-out 0.5s`;
  return (
    <Flex
      mt="1rem"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Text m="1rem 0" fontWeight={700} fontSize="4em">
        Skills
      </Text>

      <Text mt="3rem" fontWeight={200} bottom={0}>
        I am a curious and hard-working individual who is always looking to
        learn new
        <br />
        technologies and improve my skills.
      </Text>
      <Box as={motion.div} animation={animation}>
        <Flex w="100%" justify="space-evenly" mt="1.5rem">
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Javascript.src} alt="javascript icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Javascript
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Typescript.src} alt="typescript icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Typescript
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Java.src} alt="java icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Java
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={ReactIcon.src} alt="react icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              React
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Angular.src} alt="angular icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Angular
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Next.src} alt="next icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Next
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            _hover={{
              color: "#1B5299",
            }}
          >
            <Image src={Chart.src} alt="chart js icon" boxSize={20} />
            <Text mt="1rem" fontWeight={800} fontSize="1em">
              Chart
            </Text>
          </Flex>
        </Flex>
        <Box w="100%">
          <Image src={Elastic.src} alt="Elastic icon" />
        </Box>
      </Box>
    </Flex>
  );
}
