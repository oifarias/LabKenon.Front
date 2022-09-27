import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import SideBar from "../components/Menu/SideBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <SideBar />
        <Component {...pageProps} />
        <Footer />
      </>
    </ChakraProvider>
  );
}

export default MyApp;
