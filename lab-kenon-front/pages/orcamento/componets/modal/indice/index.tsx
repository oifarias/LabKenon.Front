import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import mockIndice from "../../../../../public/mockIndice.json";
import Card from "../../card";

const Indice = () => {
  const [loading, setLoading] = useState(true);
  const [idIndice, setIdIndice] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const hasType =
        localStorage.getItem("idIndice") === "0"
          ? 99999
          : localStorage.getItem("idIndice");
      hasType !== null && setIdIndice(Number(hasType));
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    idIndice !== 0 && localStorage.setItem("idIndice", `${idIndice}`);
  }, [idIndice]);

  return (
    <>
      <SimpleGrid columns={[2, 2, 3]} gap={[4,6,8]} paddingTop={10}>
        {mockIndice.map((v, i) => {
          return (
            <Box w="100%" height="250px" width="200px" key={v.id + i}>
              <Card
                content={v.description}
                description={v.description}
                tip={v.description}
                title={v.name}
                loading={loading}
                id={v.id}
                idSelected={idIndice}
                setIdSelected={setIdIndice}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Indice;
