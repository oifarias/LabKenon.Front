import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { memo } from "react";
import { Container } from "../components/Container";
import { Title } from "../components/Title";

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

export default memo(Index);
