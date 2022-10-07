import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Button onClick={toggleColorMode}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
