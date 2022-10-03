import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import mockType from "../../../../../public/mockType.json";
import Card from "../../card";
const Index = () => {
  const [loading, setLoading] = useState(true);
  const [idSelected, setIdSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem("typeId", `${idSelected}`);
  }, [idSelected]);

  return (
    <>
      <SimpleGrid columns={[1, 2, 4]} gap={8}>
        {mockType.map((v, i) => {
          return (
            <Box w="100%" height="250px" width="200px" key={v.id + i}>
              <Card
                content={v.description}
                description={v.description}
                tip={v.description}
                title={v.name}
                img={v.icon}
                loading={loading}
                id={v.id}
                idSelected={idSelected}
                setIdSelected={setIdSelected}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Index;
