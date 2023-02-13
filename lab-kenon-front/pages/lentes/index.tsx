import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import Modal from "../orcamento/componets/modal";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("teste");
  }, []);


  return (
    <Flex direction={"column"} gap="20px" padding="40px">
      <Modal />
    </Flex>
  );
};

export default Index;
