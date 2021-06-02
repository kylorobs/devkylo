import { AppProps } from "next/app"
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'theme/global';
import { theme } from 'theme/skin';

function MyApp({ Component, pageProps }: AppProps ) {
  return(
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
