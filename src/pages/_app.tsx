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
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          href="/mini-logo.png"
          rel="icon"
          type="image/png"
          sizes="144x144"
        />
        <link rel="apple-touch-icon" href="/favicon.png"></link>

        <meta name="theme-color" content="#d7b56d" />
      </Head>
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
