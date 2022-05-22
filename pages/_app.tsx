import { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  // max-width: 100%;
  margin: 0;
  padding: 0;
}

body{
  background-color:#fafafa;
  margin: 0;
  min-height:100vh;
  font-family: sans-serif;
}
`

const theme = {
  colors: {
    primary: '#fafafa',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
