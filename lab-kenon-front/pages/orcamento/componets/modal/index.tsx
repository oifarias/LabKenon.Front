import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex,useMediaQuery  } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useEffect } from "react";
import { Title } from "../../../../components/Title";
import Conclusao from "./conclusao";
import Indice from "./indice";
import Receita from "./receita";
import Resumo from "./resumo";
import TypeGlasess from "./tipo-lente";

const Modal = () => {
  useEffect(() => {
    const currentStep =
      localStorage.getItem("currentStep") === "0"
        ? 99999
        : localStorage.getItem("currentStep");
    currentStep !== null && setStep(Number(currentStep));
  }, []);

  const GetCurrentStepComponent = (step: number) => {
    switch (step) {
      case 0:
        return <TypeGlasess />;
      case 1:
        return <Indice />;
      case 2:
        return <Receita />;
      case 3:
        return <Resumo />;
        case 4:
        return <Conclusao/>;
      default:
        break;
    }
  };

  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  useEffect(() => {
    activeStep !== 0 && localStorage.setItem("currentStep", `${activeStep}`);
  }, [activeStep]);

  const steps = [
    { label: "Material" },
    { label: "Indice" },
    { label: "Receita" },
    { label: "Resumo" },
  ];
  
  const [width] = useMediaQuery('(min-width: 500px)')

  function getLabel(label: string) {
    const result = width ? label: "";
    return result;
  }

  return (
    <>
      <Flex alignItems="center" direction="column" justifyContent="">
        <Title title="Orcamento" size="8vw" />
        <Flex>
          <Steps
            activeStep={activeStep}
            orientation="horizontal"
            responsive={false}
          >
            {steps.map(({ label }) => (
              <Step label={getLabel(label)} key={label} />
            ))}
          </Steps>
        </Flex>
        {GetCurrentStepComponent(activeStep)}
        <Flex gridGap={10} paddingTop={5} paddingBottom={5}>
          <Button
            size="md"
            onClick={() => prevStep()}
          >
            <ArrowBackIcon />
          </Button>
          <Button
            size="md"
            onClick={() => nextStep()}
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default Modal;
