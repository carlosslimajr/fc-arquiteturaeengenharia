import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

import GlobalStyles from 'styles/global'
import { theme } from 'themes/primary'
import Video from 'components/Video'
import useMediaQuery from 'hooks/useMediaQuery'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const mobile = useMediaQuery('(max-width: 991px)')
  const { pathname } = useRouter()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>FC Arquitetura e Engenharia</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />

        {!mobile && pathname === '/' && <Video />}

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
