import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Title } from "../../../../components/Title";
import Type from "./Type";

const Modal = () => {
  const GetCurrentStepComponent = (step: number) => {
    switch (step) {
      case 0:
        return <Type />;
      case 1:
        return <div> 2</div>;
      case 2:
        return <div>3</div>;
      default:
        break;
    }
  };
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const steps = [
    { id: 1, label: "Tipo de Lente" },
    { id: 2, label: "Indice" },
    { id: 3, label: "Receita" },
    { id: 4, label: "Resumo" },
  ];
  console.log(activeStep);
  return (
    <Flex alignItems="center" direction="column" justifyContent="center">
      <Title title="Orcamento" size="5vw" />
      <Flex>
        <Steps
          activeStep={activeStep}
          orientation="horizontal"
          responsive={false}
        >
          {steps.map(({ label }) => (
            <Step label={label} key={label} />
          ))}
        </Steps>
      </Flex>
      <Box margin={10} borderRadius={5} p={4}>
        {GetCurrentStepComponent(activeStep)}
      </Box>
      <Flex gridGap={10}>
        <Button
          {...{ nextStep, prevStep }}
          size="md"
          onClick={() => prevStep()}
        >
          <ArrowBackIcon />
        </Button>
        <Button
          {...{ nextStep, prevStep }}
          size="md"
          onClick={() => nextStep()}
        >
          <ArrowForwardIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
export default Modal;
