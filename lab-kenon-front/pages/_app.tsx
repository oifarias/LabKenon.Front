import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ChakraProvider theme={theme}>
        <>
          <SideBar />
          <Component {...pageProps} />
          <Footer />
        </>
      </ChakraProvider>
    </Container>
  );
}

export default MyApp;
