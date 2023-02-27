import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import Card from "../../../components/Card";
import types from "../../../public/focalTypes.json"

const Primeiro = () => {
  const [loading, setLoading] = useState(true);
  const [monofocal, setMonofocal] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const hasType =
        localStorage.getItem("idfocal") === "0"
          ? 99999
          : localStorage.getItem("idfocal");
      hasType !== null && setMonofocal(Number(hasType));
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    monofocal !== 0 && localStorage.setItem("idfocal", `${monofocal}`);
  }, [monofocal]);


  return (
    <>
        <SimpleGrid columns={[2, 2, 2]} gap={[2,2,2]} paddingTop={10}>
        {types.map((v, i) => {
          return (
              <Card
                content={v.description}
                description={v.description}
                title={v.name}
                loading={loading}
                id={v.id}
                idSelected={monofocal}
                setIdSelected={setMonofocal}
                key={`${v.id}-${i}`}
              />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Primeiro;
