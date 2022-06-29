import { Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <Flex flexDir="column" justify="center" align="center">
      <Text>© {dayjs().get("year")} Hazel Akinyi. All rights reserved.</Text>
    </Flex>
  );
}
