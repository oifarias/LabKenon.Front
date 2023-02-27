import { ReactElement, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { setTimeout } from "timers";
import glasses from "../../../../../public/lottie/sunglass-loading.json";
import types from "../../../../../public/focalTypes.json";
import typesIndice from "../../../../../public/mockIndice.json";
import typeTratamento from "../../../../../public/mockType.json";
import {
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: glasses,
};

const Resumo = () => {
  const [loading, setLoading] = useState(true);
  const [focal, setFocal] = useState<any>();
  const [list, setList] = useState<ListInfo[]>();

  useEffect(() => {
    GetResumo();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  }, []);

  const GetResumo = () => {
    const idfocal =
      localStorage.getItem("idfocal") === "0"
        ? 99999
        : localStorage.getItem("idfocal");
    console.log("idfocal", idfocal);

    const getFocal = types.filter((x) => x.id === Number(idfocal))[0];
    setFocal(getFocal);
    console.log("focal", getFocal);

    const idIndice =
      localStorage.getItem("idIndice") === "0"
        ? 99999
        : localStorage.getItem("idIndice");
    console.log("idIndice", idIndice);

    const getIndice = typesIndice.filter((x) => x.id === Number(idIndice))[0];
    console.log("getInfice", getIndice);

    const idTratamento =
      localStorage.getItem("typeId") === "0"
        ? 99999
        : localStorage.getItem("typeId");
    console.log("typeId", idTratamento);

    const getTratamento = typeTratamento.filter(
      (x) => x.id === Number(idTratamento)
    )[0];
    console.log("getTratamento", getTratamento);

    const getReceita =
      localStorage.getItem("receitaJson") === "0"
        ? 99999
        : localStorage.getItem("receitaJson");
    console.log("getReceita", getReceita);
    setLoading(false);

    const response = [
      {
        title: "Tipo de lente",
        value: getFocal.name,
      },
      {
        title: "Indice",
        value: getIndice.name,
      },
      {
        title: "Tratamento",
        value: getTratamento.name,
      }
    ];
    setList(response as ListInfo[]);

  };

  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }

  interface ListInfo{
    title:string,
    value:string
  }

  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={10}
          h={10}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };

  return loading ? (
    <Lottie options={defaultOptions} width={450} height={450} />
  ) : (
    <Flex
    marginTop={5}
      direction="column"
      h="100%"
      borderRadius="8px"
      bg="gray.100"
      color="black"
      _dark={{
        bg: "gray.600",
        color: "white",
      }}
    >
      <Stack
        spacing={4}
        divider={
          <StackDivider
            borderColor={useColorModeValue("gray.100", "gray.700")}
          />
        }
      >
        {list?.map((v, i) => {
          return (
            <Feature
            icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={v.title}
          />
          );
        })}
        {/* <Feature
          icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
          iconBg={useColorModeValue("yellow.100", "yellow.900")}
          text={"Business Planning"}
        />
        <Feature
          icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
          iconBg={useColorModeValue("green.100", "green.900")}
          text={"Financial Planning"}
        />
        <Feature
          icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
          iconBg={useColorModeValue("purple.100", "purple.900")}
          text={"Market Analysis"}
        /> */}
      </Stack>
    </Flex>
  );
};

export default Resumo;
