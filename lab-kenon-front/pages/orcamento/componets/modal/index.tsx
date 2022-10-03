import { Flex } from "@chakra-ui/react";

export interface IModal {
  content?: any;
}

const Modal = (props: IModal) => (
  <Flex
    direction="column"
    maxW="450px"
    maxH="500px"
    h="100%"
    borderRadius="8px"
    bgColor="gray.100"
    cursor={"pointer"}
  >
    {props.content}
  </Flex>
);

export default Modal;
