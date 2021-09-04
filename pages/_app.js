import Head from 'next/head';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import theme from '../styles/theme';
import '../styles/global.css';
import { InputValeuProvider } from '../context/InputValueContext';

const GlobalStyle = ({ children }) => (
  <>
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </Head>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <InputValeuProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </InputValeuProvider>
    </ChakraProvider>
  );
}

export default MyApp;
