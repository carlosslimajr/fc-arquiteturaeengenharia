import 'bootstrap/dist/css/bootstrap.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { theme } from 'themes/primary'
import Video from 'components/Video'
import { useRouter } from 'next/router'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {pathname === '/' && <Video />}
        {pathname === '/' && (
          <>
            <div className="background" />
            <div className="background2" />
          </>
        )}
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
