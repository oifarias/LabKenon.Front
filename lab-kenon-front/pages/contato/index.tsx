import { Container, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Title } from "../../components/Title";

const Index: NextPage = () => (
  <>
    <Container>
      <Title title="Contato" size="5vw" />
      <Flex direction="row" justifyContent="center">
        <Text color="text" fontSize="2xl" as="b" style={{ marginLeft: 10 }}>
          contato aqui
        </Text>
      </Flex>
    </Container>
  </>
);

export default Index;
