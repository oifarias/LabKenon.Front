import { Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [idSelected, setIdSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    localStorage.setItem("typeId", `${idSelected}`);
  }, [idSelected]);

  return (
    <>
      <Flex
        display="flex"
        direction="column"
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Text as="b">
          Preencha as informações da receita do cliente, para seguir com o
          orçamento.
        </Text>

        <Grid
          w="400px"
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          justifyContent="center"
          borderRadius="4px"
        >
          <GridItem
            border={"1px"}
            colSpan={2}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          />
          <GridItem
            border={"1px"}
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> Esférico</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> Cilindrico</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> Eixo</Text>
          </GridItem>
          <GridItem
            rowSpan={2}
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> Para Longe</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> OD</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> OE</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            rowSpan={2}
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> Para Perto</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> OD</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Text as="b"> OE</Text>
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
          <GridItem
            border={"1px"}
            borderRadius="4px"
            borderColor={"blackAlpha.900"}
            display="flex"
            justifyContent="center"
            justifyItems="center"
          >
            <Input variant="filled" type="number" />
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default Index;
