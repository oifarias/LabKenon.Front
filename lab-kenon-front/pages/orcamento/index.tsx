import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import { Title } from "../../components/Title";
import mockType from "../../public/mockType.json";
import Card from "./componets/card";
const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Flex direction={"column"} gap="20px">
      <Title title="Orcamento" size="5vw" />
      <Flex justifyContent="center" alignItems="center">
        <Grid
          justifyContent={"space-around"}
          templateColumns="repeat(4, 2fr)"
          templateRows="repeat(2, 2fr)"
          gap={2}
        >
          {mockType.map((v, i) => {
            return (
              <GridItem
                rowSpan={4}
                w="100%"
                height="250px"
                width="200px"
                key={v.id + i}
              >
                <Card
                  content={v.description}
                  description={v.description}
                  tip={v.description}
                  title={v.name}
                  img={v.icon}
                  loading={loading}
                />
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Index;
