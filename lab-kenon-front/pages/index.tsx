import { Text, Flex } from "@chakra-ui/react";
import { Title } from "../components/Hero";
import { Container } from "../components/Container";
import type { NextPage } from "next";
import SideBar from "../components/Menu/SideBar";

const Index: NextPage = () => (
  <>
    <Container>
      <Title title="LabKenon" size="5vw" />
      <Flex direction="row" justifyContent="center">
        <Text color="text" fontSize="2xl" as="b" style={{ marginLeft: 10 }}>
          Seu laboratorio 100% online
        </Text>
      </Flex>
    </Container>
  </>
);

export default Index;
