import { Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";

const Receita = () => {
  return (
    <>
      <Flex
        display="flex"
        direction="column"
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Text as="b" w="400px">
          Preencha as informações da receita do cliente, para seguir com o
          orçamento.
        </Text>
        <Flex
          display="flex"
          justifyContent={"center"}
          justifyItems={"center"}
          marginTop="10px"
        >
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
              padding={"20px"}
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
              padding={"20px"}
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
      </Flex>
    </>
  );
};

export default Receita;
