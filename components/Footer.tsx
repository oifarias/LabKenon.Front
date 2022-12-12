import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        bg="gray.50"
        color="black"
        _dark={{
          bg: "gray.900",
          color: "white",
        }}
        transition="all 0.5s ease-out"
      >
        <Text>Contato</Text>
        <Text>11 98350-5118</Text>
      </Flex>
    </Box>
  );
}
