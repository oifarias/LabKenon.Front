import { useColorMode, IconButton, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    // <IconButton
    //   icon={isDark ? <SunIcon /> : <MoonIcon />}
    //   aria-label="Toggle Theme"
    //   colorScheme="blue"
    //   onClick={toggleColorMode}
    // />
    <Button onClick={toggleColorMode}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
