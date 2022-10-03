import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { memo } from "react";
import { Title } from "../../components/Title";
import mockType from "../../public/mockType.json";
import Card from "./componets/card";
const Index = () => (
  <Flex direction={"column"} gap="20px">
    <Title title="Orcamento" size="5vw" />
    <Flex justifyContent="center" alignItems="center">
      <Grid
        justifyContent={"space-around"}
        h="300px"
        w="500px"
        templateColumns="repeat(4, 2fr)"
        templateRows="repeat(2, 2fr)"
        gap={5}
      >
        {mockType.map((v, i) => {
          return (
            <GridItem rowSpan={4} w="100%" h="100%">
              <Card
                key={v.id + i}
                content={v.description}
                description={v.description}
                tip={v.description}
                title={v.name}
                img={v.icon}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  </Flex>
);

export default memo(Index);
