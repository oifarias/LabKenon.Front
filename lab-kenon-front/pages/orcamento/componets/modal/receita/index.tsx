import { Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export interface IReceita {
  longeODEsferico: string;
  longeODCilindrico: string;
  longeODEixo: string;
  // longe olho esquerdo
  longeOEEsferico: string;
  longeOECilindrico: string;
  longeOEEixo: string;
  // perto olho direito
  pertoODEsferico: string;
  pertoODCilindrico: string;
  pertoODEixo: string;
  // perto olho esquerdo
  pertoOEEsferico: string;
  pertoOECilindrico: string;
  pertoOEEixo: string;
}

const Receita = () => {
  const init = {
    // longe olho direito
    longeODEsferico: "",
    longeODCilindrico: "",
    longeODEixo: "",
    // longe olho esquerdo
    longeOEEsferico: "",
    longeOECilindrico: "",
    longeOEEixo: "",
    // perto olho direito
    pertoODEsferico: "",
    pertoODCilindrico: "",
    pertoODEixo: "",
    // perto olho esquerdo
    pertoOEEsferico: "",
    pertoOECilindrico: "",
    pertoOEEixo: "",
  };
  const [receitaJson, setReceitaJson] = useState(init as IReceita);

  // useEffect(() => {
  //   const hasReceita =
  //     localStorage.getItem("receitaJson") !== undefined &&
  //     JSON.parse(localStorage.getItem("receitaJson") || "{}");
  //   hasReceita !== "{}" && setReceitaJson(hasReceita as IReceita);
  // }, []);

  useEffect(() => {
    localStorage.setItem("receitaJson", JSON.stringify(receitaJson));
  }, [receitaJson]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setReceitaJson((receitaJson) => ({
      ...receitaJson,
      [id]: value,
    }));
    console.log(receitaJson);
  };

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
              padding={"10px"}
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
              padding={"10px"}
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
              padding={"10px"}
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
              padding={"10px"}
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
              <Input
                value={receitaJson.longeODEsferico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeODEsferico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.longeODCilindrico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeODCilindrico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.longeODEixo}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeODEixo"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
              padding={"10px"}
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
              <Input
                value={receitaJson.longeOEEsferico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeOEEsferico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.longeOECilindrico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeOECilindrico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.longeOEEixo}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="longeOEEixo"
              />
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
              padding={"10px"}
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
              <Input
                value={receitaJson.pertoODEsferico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoODEsferico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.pertoODCilindrico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoODCilindrico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.pertoODEixo}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoODEixo"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
              padding={"10px"}
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
              <Input
                value={receitaJson.pertoOEEsferico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoOEEsferico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.pertoOECilindrico}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoOECilindrico"
              />
            </GridItem>
            <GridItem
              border={"1px"}
              borderRadius="4px"
              borderColor={"blackAlpha.900"}
              display="flex"
              justifyContent="center"
              justifyItems="center"
            >
              <Input
                value={receitaJson.pertoOEEixo}
                onChange={handleChange}
                variant="filled"
                type="number"
                id="pertoOEEixo"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default Receita;
