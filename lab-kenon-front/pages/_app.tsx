import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import theme from "../theme";

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
