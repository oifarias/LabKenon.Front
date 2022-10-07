import { Container, Flex, Text } from "@chakra-ui/react";
import { Title } from "../../components/Title";

const Index = () => (
  <>
    <Container>
      <Title title="pagina do paulo" size="5vw" />
      <Flex direction="row" justifyContent="center">
        <Text color="text" fontSize="2xl" as="b" style={{ marginLeft: 10 }}>
          paulo page
        </Text>
      </Flex>
    </Container>
  </>
);

export default Index;
