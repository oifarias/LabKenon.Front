import { Flex, Heading, Image, Skeleton, Text, VStack } from "@chakra-ui/react";

export interface ICard {
  id?: number;
  title?: string;
  description?: string;
  tip?: string;
  img?: any;
  content?: any;
  loading?: boolean;
  setIdSelected?: any;
  idSelected?: any;
}

const Card = (props: ICard) => (
  <>
    {!props.loading ? (
      <Flex
        direction="column"
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
          props.setIdSelected(props.id);
        }}
        border={props.id === props.idSelected ? "4px" : ""}
        borderColor={props.id === props.idSelected ? "blue.500" : ""}
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
      <Skeleton height="250px" width="200px" borderRadius="8px" />
    )}
  </>
);

export default Card;
