import { Flex, Heading, Image, Skeleton, Text, VStack } from "@chakra-ui/react";

export interface ICard {
  title?: string;
  description?: string;
  tip?: string;
  img?: any;
  content?: any;
  loading?: boolean;
}

const Card = (props: ICard) => (
  <>
    {!props.loading ? (
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
          p="20px"
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

          <Flex justifyItems="center" justifyContent="center">
            <Heading fontSize={["md", "1xl", "1xl", "1xl"]} display="flex">
              {props.title}
            </Heading>
          </Flex>
          <Text overflowY="auto">{props.content}</Text>
        </VStack>
      </Flex>
    ) : (
      <Skeleton height="200px" width="200px" />
    )}
  </>
);

export default Card;
