import { Container, Flex, Text } from "@chakra-ui/react";
import { Title } from "../../components/Hero";

const Index = () => (
  <>
    <Container>
      <Title title="Nossa Historia" size="5vw" />
      <Flex direction="row" justifyContent="center">
        <Text color="text" fontSize="2xl" as="b" style={{ marginLeft: 10 }}>
          nossa historia
        </Text>
      </Flex>
    </Container>
  </>
);

export default Index;
