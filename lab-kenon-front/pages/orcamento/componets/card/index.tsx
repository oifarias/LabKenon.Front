import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export interface ICard {
  title?: string;
  description?: string;
  tip?: string;
  img?: any;
  content?: any;
}

const Card = (props: ICard) => (
  <Flex
    direction="column"
    maxW="450px"
    maxH="500px"
    h="100%"
    borderRadius="8px"
    bg="gray.100"
    color="black"
    _dark={{
      bg: "gray.600",
      color: "white",
    }}
    cursor={"pointer"}
    onClick={() => {
      alert(props.title);
    }}
  >
    <VStack
      p="16px"
      spacing="16px"
      align="flex-start"
      maxW="450px"
      minW="200px"
      h="100%"
      w="100%"
      overflow="auto"
    >
      {props?.img && (
        <Flex justifyContent="center" justifyItems="center">
          <Image display="flex" src={props.img} alt={props.img} w="30%" />
        </Flex>
      )}
      <Heading fontSize={["md", "2xl", "2xl", "2xl"]}>{props.title}</Heading>
      <Text overflowY="auto">{props.content}</Text>
    </VStack>
  </Flex>
);

export default Card;
