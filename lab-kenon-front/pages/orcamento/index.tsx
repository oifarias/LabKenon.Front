import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import Modal from "./componets/modal";
const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    // <Flex direction={"column"}>
      <Modal />
    // </Flex>
  );
};

export default Index;
